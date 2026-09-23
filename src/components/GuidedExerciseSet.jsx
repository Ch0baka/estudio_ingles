import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function GuidedExerciseSet({ exercises, title = 'Pronombres, combinaciones y lectura' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentExercise = exercises[currentIndex];
  const selectedAnswer = answers[currentExercise.id];
  const answeredCount = Object.keys(answers).length;
  const correctCount = useMemo(
    () => exercises.filter((exercise) => answers[exercise.id] === exercise.correctAnswer).length,
    [answers, exercises],
  );
  const isComplete = answeredCount === exercises.length;
  const result = selectedAnswer ? selectedAnswer === currentExercise.correctAnswer : null;

  const selectAnswer = (option) => {
    setAnswers((value) => ({ ...value, [currentExercise.id]: option }));
  };

  const reset = () => {
    setAnswers({});
    setCurrentIndex(0);
  };

  return (
    <section className="rounded-lg border border-white/70 bg-white/85 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">
            Pregunta {currentIndex + 1} de {exercises.length}
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
            {title}
          </h2>
        </div>
        <div className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
          {answeredCount}/{exercises.length} respondidas · {correctCount} correctas
        </div>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-teal-500 transition-all"
          style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
        />
      </div>

      <article className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950/55">
        <h3 className="text-xl font-black leading-8 text-slate-950 dark:text-white">{currentExercise.sentence}</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {currentExercise.options.map((option) => {
            const isSelected = selectedAnswer === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => selectAnswer(option)}
                aria-pressed={isSelected}
                className={`min-h-12 rounded-lg border px-4 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  isSelected
                    ? 'border-teal-500 bg-teal-50 text-teal-950 dark:bg-teal-950/65 dark:text-teal-50'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50/70 dark:border-slate-700 dark:bg-slate-950/45 dark:text-slate-300 dark:hover:border-teal-700'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <div
            className={`mt-5 rounded-lg border p-4 text-sm leading-6 ${
              result
                ? 'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/45 dark:text-emerald-100'
                : 'border-rose-200 bg-rose-50 text-rose-950 dark:border-rose-900 dark:bg-rose-950/45 dark:text-rose-100'
            }`}
          >
            <div className="mb-1 flex items-center gap-2 font-black">
              {result ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              {result ? 'Correcto' : 'Incorrecto'}
            </div>
            <p>{currentExercise.explanation}</p>
          </div>
        )}
      </article>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))}
          disabled={currentIndex === 0}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950/55 dark:text-slate-100 dark:hover:border-teal-700 dark:hover:bg-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Anterior
        </button>

        <button
          type="button"
          onClick={() => setCurrentIndex((value) => Math.min(exercises.length - 1, value + 1))}
          disabled={currentIndex === exercises.length - 1}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:shadow-none dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300 dark:disabled:bg-slate-700 dark:disabled:text-slate-400"
        >
          Siguiente
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {isComplete && (
        <div className="mt-6 rounded-lg border border-teal-200 bg-teal-50 p-5 text-teal-950 dark:border-teal-900 dark:bg-teal-950/45 dark:text-teal-100">
          <h3 className="text-lg font-black">Resultado final</h3>
          <p className="mt-2 leading-7">
            Respondiste {correctCount} de {exercises.length} correctamente. Revisa las tarjetas incorrectas y repite el
            set cuando quieras practicar otra vez.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
          >
            <RotateCcw className="h-4 w-4" />
            Repetir set
          </button>
        </div>
      )}
    </section>
  );
}
