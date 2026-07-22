import { BookOpenText, Goal, Lightbulb, ListChecks, MessageCircle, Table2 } from 'lucide-react';
import {
  collocationExamples,
  habitCollocations,
  modalReview,
  pronounRows,
  readingPractice,
  unitTwoObjectives,
} from '../data/unit2.js';

function InfoBlock({ icon: Icon, title, children }) {
  return (
    <section className="rounded-lg border border-white/70 bg-white/85 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-200">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-black text-slate-950 dark:text-white">{title}</h3>
      </div>
      {children}
    </section>
  );
}

export default function UnitTwoTheory() {
  return (
    <div className="space-y-5">
      <InfoBlock icon={Goal} title="Unit goals">
        <ul className="grid gap-3 sm:grid-cols-2">
          {unitTwoObjectives.map((objective) => (
            <li
              key={objective}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700 dark:border-slate-700 dark:bg-slate-950/55 dark:text-slate-300"
            >
              {objective}
            </li>
          ))}
        </ul>
      </InfoBlock>

      <InfoBlock icon={Table2} title="Pronouns">
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
          <table className="min-w-[680px] w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-700">
            <thead className="bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-200">
              <tr>
                <th className="px-4 py-3 font-black">Subject pronoun</th>
                <th className="px-4 py-3 font-black">Object pronoun</th>
                <th className="px-4 py-3 font-black">Possessive adjective</th>
                <th className="px-4 py-3 font-black">Possessive pronoun</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-950/45">
              {pronounRows.map((row) => (
                <tr key={row.subject}>
                  <td className="px-4 py-3 font-semibold text-slate-950 dark:text-white">{row.subject}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.object}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.possessiveAdjective}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.possessivePronoun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            'Subject pronouns perform the action.',
            'Object pronouns receive the action.',
            'Possessive adjectives appear before a noun.',
            'Possessive pronouns replace the noun.',
          ].map((rule) => (
            <p
              key={rule}
              className="rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700 dark:bg-slate-950/55 dark:text-slate-300"
            >
              {rule}
            </p>
          ))}
        </div>

        <div className="mt-4 flex gap-3 rounded-lg bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:bg-amber-950/35 dark:text-amber-100">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Standard English has no independent possessive pronoun “its”. Use “its” only before a noun: “The dog
            finished its food.”
          </p>
        </div>
      </InfoBlock>

      <InfoBlock icon={MessageCircle} title="Can, could and should">
        <div className="grid gap-4 md:grid-cols-3">
          {modalReview.map((modal) => (
            <article key={modal.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/55">
              <h4 className="text-lg font-black text-slate-950 dark:text-white">{modal.title}</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {modal.uses.map((use) => (
                  <li key={use}>{use}</li>
                ))}
              </ul>
              <div className="mt-4 space-y-2">
                {modal.examples.map((example) => (
                  <p key={example} className="text-sm font-semibold text-teal-800 dark:text-teal-200">
                    “{example}”
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </InfoBlock>

      <InfoBlock icon={ListChecks} title="Collocations">
        <p className="leading-7 text-slate-600 dark:text-slate-300">
          A collocation is a combination of words that is used naturally and frequently.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {habitCollocations.map((collocation) => (
            <span
              key={collocation}
              className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-bold text-teal-900 dark:border-teal-900 dark:bg-teal-950/55 dark:text-teal-100"
            >
              {collocation}
            </span>
          ))}
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {collocationExamples.map((example) => (
            <p key={example} className="rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-800 dark:bg-slate-950/55 dark:text-slate-200">
              “{example}”
            </p>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <p className="rounded-lg bg-emerald-50 p-4 text-sm leading-6 text-emerald-950 dark:bg-emerald-950/35 dark:text-emerald-100">
            <strong>go on a diet:</strong> comenzar o seguir una dieta.
          </p>
          <p className="rounded-lg bg-rose-50 p-4 text-sm leading-6 text-rose-950 dark:bg-rose-950/35 dark:text-rose-100">
            <strong>go off a diet:</strong> dejar de seguir una dieta.
          </p>
        </div>
      </InfoBlock>

      <InfoBlock icon={BookOpenText} title="Reading comprehension">
        <p className="rounded-lg bg-slate-50 p-4 leading-8 text-slate-700 dark:bg-slate-950/55 dark:text-slate-300">
          {readingPractice.text}
        </p>
        <div className="mt-4 rounded-lg bg-teal-50 p-4 text-sm leading-6 text-teal-950 dark:bg-teal-950/45 dark:text-teal-100">
          <strong>Main idea:</strong> {readingPractice.mainIdea}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {readingPractice.references.map((item) => (
            <div key={item.pronoun} className="rounded-lg border border-slate-200 bg-white p-4 text-sm dark:border-slate-700 dark:bg-slate-950/45">
              <p className="font-black text-slate-950 dark:text-white">{item.pronoun}</p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{item.reference}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-3 rounded-lg bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:bg-amber-950/35 dark:text-amber-100">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{readingPractice.strategy}</p>
        </div>
      </InfoBlock>
    </div>
  );
}
