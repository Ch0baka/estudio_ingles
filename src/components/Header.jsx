import { BookOpen, CalendarDays, GraduationCap } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header({ isDark, onToggleTheme }) {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-white shadow-lg shadow-teal-900/15 dark:bg-teal-500 dark:text-slate-950">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
            English Study Portal
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Modal verbs</span>
            <CalendarDays className="h-3.5 w-3.5" />
            <span>June 16th</span>
          </div>
        </div>
      </div>
      <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
    </header>
  );
}
