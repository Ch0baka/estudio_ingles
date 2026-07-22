import { GraduationCap } from 'lucide-react';
import ColorThemeSelect from './ColorThemeSelect.jsx';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header({ accentTheme, isDark, onAccentThemeChange, onToggleTheme }) {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-white shadow-lg shadow-teal-900/15 dark:bg-teal-500 dark:text-slate-950">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300 sm:text-base">
            English Study Portal
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <ColorThemeSelect value={accentTheme} onChange={onAccentThemeChange} />
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
