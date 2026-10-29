'use client';
import { useMemo, useSyncExternalStore } from 'react';
import type { Learner, Progress } from './progress';

// useSyncExternalStore provides the same initial snapshot for SSR and hydration.
// Storage values are strings so snapshot identity stays stable between changes.
const readString = (key: string, fallback: string) => {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
};
function subscribeTo(key: string, event: string, notify: () => void) {
  const onStorage = (e: StorageEvent) => { if (!e.key || e.key === key) notify(); };
  window.addEventListener('storage', onStorage);
  window.addEventListener(event, notify);
  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(event, notify);
  };
}
const subscribeProgress = (notify: () => void) => subscribeTo('sunkova-learn-progress', 'sunkova-progress-change', notify);
const subscribeLearner = (notify: () => void) => subscribeTo('sunkova-learn-user', 'sunkova-learner-change', notify);
const progressSnapshot = () => readString('sunkova-learn-progress', '{}');
const learnerSnapshot = () => readString('sunkova-learn-user', 'null');

export function useStoredProgress(): Progress {
  const raw = useSyncExternalStore(subscribeProgress, progressSnapshot, () => '{}');
  return useMemo(() => {
    try { return JSON.parse(raw) as Progress; } catch { return {}; }
  }, [raw]);
}
export function useStoredLearner(): Learner | null {
  const raw = useSyncExternalStore(subscribeLearner, learnerSnapshot, () => 'null');
  return useMemo(() => {
    try { return JSON.parse(raw) as Learner | null; } catch { return null; }
  }, [raw]);
}
const noSubscribe = () => () => {};
export function useBrowserReady(): boolean {
  return useSyncExternalStore(noSubscribe, () => true, () => false);
}
