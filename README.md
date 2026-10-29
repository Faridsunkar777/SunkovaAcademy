# Lesson step control refinement

Only replaces `src/components/learn/module/lesson-step.tsx`.

## Why
- Previous and Next are now matching lavender secondary pills in both light and dark mode.
- Solid black/off-white completion buttons in Watch, Learn, Check, Challenge, and Reflection remain unchanged.
- Smooth 600ms `scale` transitions and gentle hover backgrounds.
- No About or Learn-dashboard files are touched.

## Apply
```bash
cd ~/Work/SunkovaAcademy
unzip -o ~/Downloads/SunkovaAcademy-step-controls-fix.zip -d .
npx tsc --noEmit
npm run build
```

## About regression
The previously supplied `SunkovaAcademy-module-ui-polish.zip` only touched four files under `src/components/learn/module/`, not About routes/components. The screenshot showing the course cards is the `/learn/` dashboard, not the `/about/` route. Diagnose the actual About page separately without overwriting unrelated files.
