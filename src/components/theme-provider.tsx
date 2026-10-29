'use client';
import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react';
type Theme = 'light' | 'dark';
const Context = createContext<{theme:Theme; toggle:()=>void}>({theme:'light',toggle:()=>{}});
export const useTheme = () => useContext(Context);

const getTheme = (): Theme => {
  try {
    const saved = localStorage.getItem('sunkova-academy-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch { return 'light'; }
};
function subscribeToTheme(notify: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const onStorage = (e: StorageEvent) => { if (!e.key || e.key === 'sunkova-academy-theme') notify(); };
  media.addEventListener('change', notify);
  window.addEventListener('storage', onStorage);
  window.addEventListener('sunkova-theme-change', notify);
  return () => {
    media.removeEventListener('change', notify);
    window.removeEventListener('storage', onStorage);
    window.removeEventListener('sunkova-theme-change', notify);
  };
}
export function ThemeProvider({children}:{children:ReactNode}) {
  const theme = useSyncExternalStore<Theme>(
  subscribeToTheme,
  getTheme,
  () => 'light'
);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('sunkova-academy-theme', next); } catch {}
    document.documentElement.dataset.theme = next;
    window.dispatchEvent(new Event('sunkova-theme-change'));
  }
  return <Context.Provider value={{theme,toggle}}>{children}</Context.Provider>;
}
