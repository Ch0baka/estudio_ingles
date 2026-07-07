import { Lightbulb, ListChecks, MessageCircle, PenLine } from 'lucide-react';

export default function TheorySection({ section }) {
  return (
    <article className="rounded-lg border border-white/70 bg-white/85 p-5 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/90 sm:p-6">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200">
          <PenLine className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white">{section.title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{section.explanation}</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/60">
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
            <ListChecks className="h-4 w-4 text-teal-600 dark:text-teal-300" />
            Grammar structure
          </div>
          <p className="text-sm font-semibold text-teal-800 dark:text-teal-200">{section.structure}</p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/60">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
            <MessageCircle className="h-4 w-4 text-teal-600 dark:text-teal-300" />
            Examples
          </div>
          <div className="space-y-3">
            {section.examples.map((example) => (
              <div key={example.english}>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{example.english}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{example.spanish}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-3 rounded-lg bg-teal-50 p-4 text-sm leading-6 text-teal-950 dark:bg-teal-950/45 dark:text-teal-100">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
        <p>{section.note}</p>
      </div>
    </article>
  );
}
