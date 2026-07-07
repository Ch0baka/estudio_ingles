import { Languages } from 'lucide-react';

export default function VocabularyCards({ words }) {
  return (
    <section className="rounded-lg border border-white/70 bg-white/85 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-200">
          <Languages className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white">Vocabulary</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Key words for the quiz</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {words.map((word) => (
          <article
            key={word.term}
            className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-teal-200 dark:border-slate-700 dark:bg-slate-950/55 dark:hover:border-teal-800"
          >
            <h4 className="text-base font-bold capitalize text-slate-950 dark:text-white">{word.term}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{word.meaning}</p>
            <p className="mt-3 text-sm leading-6 text-teal-800 dark:text-teal-200">{word.spanish}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
