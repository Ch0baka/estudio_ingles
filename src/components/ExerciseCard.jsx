import { Check, CircleAlert, CircleCheck, RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function ExerciseCard({ exercise, groupId, index }) {
  const [selected, setSelected] = useState('');
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const result = useMemo(() => {
    if (!checkedAnswer) return 'idle';
    return checkedAnswer === exercise.correctAnswer ? 'correct' : 'incorrect';
  }, [checkedAnswer, exercise.correctAnswer]);

  const feedbackStyles = {
    idle: 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-950/55 dark:text-slate-300',
    correct: 'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/45 dark:text-emerald-100',
    incorrect: 'border-rose-200 bg-rose-50 text-rose-950 dark:border-rose-900 dark:bg-rose-950/45 dark:text-rose-100',
  };

  const ResultIcon = result === 'correct' ? CircleCheck : result === 'incorrect' ? CircleAlert : RotateCcw;

  return (
    <article
      data-testid={`exercise-card-${groupId}-${index + 1}`}
      className="rounded-lg border border-white/70 bg-white/90 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90"
    >
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white dark:bg-teal-400 dark:text-slate-950">
          {index + 1}
        </span>
        <h3 className="pt-1 text-lg font-bold leading-7 text-slate-950 dark:text-white">{exercise.sentence}</h3>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        {exercise.options.map((option) => {
          const isSelected = selected === option;

          return (
            <button
              key={option}
              type="button"
              data-testid={`option-${groupId}-${index + 1}-${option}`}
              onClick={() => {
                setSelected(option);
                setCheckedAnswer(null);
              }}
              className={`min-h-12 rounded-lg border px-3 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                isSelected
                  ? 'border-teal-500 bg-teal-50 text-teal-950 shadow-sm dark:bg-teal-950/60 dark:text-teal-100'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50/60 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-300 dark:hover:border-teal-700'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          data-testid={`check-${groupId}-${index + 1}`}
          onClick={() => selected && setCheckedAnswer(selected)}
          disabled={!selected}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:shadow-none dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300 dark:focus:ring-offset-slate-950 dark:disabled:bg-slate-700 dark:disabled:text-slate-400"
        >
          <Check className="h-4 w-4" />
          Revisar
        </button>
      </div>

      <div className={`mt-4 rounded-lg border p-4 text-sm leading-6 ${feedbackStyles[result]}`}>
        <div className="mb-1 flex items-center gap-2 font-bold">
          <ResultIcon className="h-4 w-4" />
          {result === 'idle' && 'Elige una opción y revisa tu respuesta'}
          {result === 'correct' && 'Correcto'}
          {result === 'incorrect' && 'Incorrecto'}
        </div>
        {result !== 'idle' && <p>{exercise.explanation}</p>}
      </div>
    </article>
  );
}
