import { CheckCircle2, Languages, RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function VocabularyCards({
  words,
  title = 'Estudio de vocabulario',
  description = 'Aquí puedes estudiar palabras y expresiones. Marca como aprendidas las que ya domines; bajarán al final para que te concentres en las que todavía necesitas practicar.',
}) {
  const [query, setQuery] = useState('');
  const [learnedTerms, setLearnedTerms] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('learnedVocabulary') || '[]');
    } catch {
      return [];
    }
  });

  const learnedSet = useMemo(() => new Set(learnedTerms), [learnedTerms]);

  const filteredWords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return words;

    return words.filter((word) =>
      [word.term, word.translation, word.spanishMeaning, word.spanish, word.meaning, word.example]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalizedQuery)),
    );
  }, [query, words]);

  const activeWords = filteredWords.filter((word) => !learnedSet.has(word.term));
  const learnedWords = filteredWords.filter((word) => learnedSet.has(word.term));

  const toggleLearned = (term) => {
    setLearnedTerms((currentTerms) => {
      const nextTerms = currentTerms.includes(term)
        ? currentTerms.filter((item) => item !== term)
        : [...currentTerms, term];

      localStorage.setItem('learnedVocabulary', JSON.stringify(nextTerms));
      return nextTerms;
    });
  };

  const renderWordCard = (word, isLearned = false) => (
    <article
      key={word.term}
      className={`rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-teal-200 dark:border-slate-700 dark:bg-slate-950/55 dark:hover:border-teal-800 ${
        isLearned ? 'opacity-55 grayscale-[0.25]' : 'hover:-translate-y-0.5'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <button
          type="button"
          onClick={() => toggleLearned(word.term)}
          className="min-h-11 text-left text-base font-bold capitalize text-slate-950 underline-offset-4 transition hover:text-teal-800 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white dark:hover:text-teal-200"
          aria-label={isLearned ? `Reactivar ${word.term}` : `Marcar ${word.term} como aprendida`}
        >
          {word.term} <span className="text-teal-700 dark:text-teal-300">— {word.translation || word.spanish}</span>
        </button>
        <button
          type="button"
          onClick={() => toggleLearned(word.term)}
          className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            isLearned
              ? 'border border-slate-300 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
              : 'bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-400 dark:text-slate-950'
          }`}
        >
          {isLearned ? <RotateCcw className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
          {isLearned ? 'Reactivar' : 'Aprendida'}
        </button>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{word.spanishMeaning}</p>
      {word.example && (
        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Ejemplo:</span> “{word.example}”
        </p>
      )}
    </article>
  );

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
          <span className="sr-only">Buscar vocabulario</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar en inglés, español o explicación..."
            className="min-h-11 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {activeWords.map((word) => renderWordCard(word))}
      </div>
      {filteredWords.length === 0 && (
        <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-950/55 dark:text-slate-300">
          No hay palabras que coincidan con esa búsqueda.
        </p>
      )}
      {learnedWords.length > 0 && (
        <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
          <h4 className="text-sm font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            Aprendidas
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Estas tarjetas quedan abajo y más suaves para que sigas mirando primero las palabras por aprender.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {learnedWords.map((word) => renderWordCard(word, true))}
          </div>
        </div>
      )}
    </section>
  );
}
