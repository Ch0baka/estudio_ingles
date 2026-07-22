import { Languages } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function VocabularyCards({ words, title = 'Vocabulary studio', description = 'One growing collection of useful words, collocations, reading terms, and habit expressions.' }) {
  const [query, setQuery] = useState('');

  const filteredWords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return words;

    return words.filter((word) =>
      [word.term, word.translation, word.spanish, word.meaning, word.example]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalizedQuery)),
    );
  }, [query, words]);

  return (
    <section className="rounded-lg border border-white/70 bg-white/85 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90 sm:p-6">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-200">
            <Languages className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
          </div>
        </div>
        <label className="w-full lg:max-w-sm">
          <span className="sr-only">Search vocabulary</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search terms, Spanish, definitions..."
            className="min-h-11 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredWords.map((word) => (
          <article
            key={word.term}
            className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-teal-200 dark:border-slate-700 dark:bg-slate-950/55 dark:hover:border-teal-800"
          >
            <h4 className="text-base font-bold capitalize text-slate-950 dark:text-white">{word.term}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{word.meaning}</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-teal-800 dark:text-teal-200">
              {word.translation || word.spanish}
            </p>
            {word.example && <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">“{word.example}”</p>}
          </article>
        ))}
      </div>
      {filteredWords.length === 0 && (
        <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-950/55 dark:text-slate-300">
          No vocabulary terms match that search.
        </p>
      )}
    </section>
  );
}
