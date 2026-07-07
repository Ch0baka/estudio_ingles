import { BookMarked, Dumbbell, Home } from 'lucide-react';

const icons = {
  Home,
  'Theory & Examples': BookMarked,
  Exercises: Dumbbell,
};

export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <nav className="sticky top-0 z-20 border-y border-white/50 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-3xl grid-cols-3 gap-2 rounded-lg bg-slate-100 p-1 dark:bg-slate-900">
        {tabs.map((tab) => {
          const Icon = icons[tab];
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onChange(tab)}
              aria-label={tab}
              className={`flex min-h-11 items-center justify-center gap-2 rounded-md px-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                isActive
                  ? 'bg-white text-teal-800 shadow-sm dark:bg-slate-800 dark:text-teal-200'
                  : 'text-slate-600 hover:bg-white/70 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span aria-hidden="true" className="hidden sm:inline">
                {tab}
              </span>
              <span aria-hidden="true" className="sm:hidden">
                {tab === 'Theory & Examples' ? 'Theory' : tab}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
