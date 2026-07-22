import { CheckCircle2 } from 'lucide-react';

export default function StudyCollectionPicker({ collections, selectedId, onSelect }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {collections.map((collection) => {
        const isSelected = selectedId === collection.id;

        return (
          <button
            key={collection.id}
            type="button"
            onClick={() => onSelect(collection.id)}
            aria-pressed={isSelected}
            className={`min-h-28 rounded-lg border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 motion-safe:hover:-translate-y-0.5 ${
              isSelected
                ? 'border-teal-500 bg-teal-50 text-teal-950 shadow-soft dark:bg-teal-950/60 dark:text-teal-50'
                : 'border-white/70 bg-white/85 text-slate-800 shadow-sm hover:border-teal-200 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-teal-800'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                {collection.eyebrow && (
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">
                    {collection.eyebrow}
                  </p>
                )}
                <h3 className="mt-2 text-lg font-black leading-6 text-slate-950 dark:text-white">
                  {collection.title}
                </h3>
              </div>
              {isSelected && <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" />}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{collection.description}</p>
          </button>
        );
      })}
    </div>
  );
}
