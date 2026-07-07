import ExerciseCard from './ExerciseCard.jsx';

export default function ExerciseSection({ group }) {
  const groupId = group.title.toLowerCase().replace(/\s+/g, '-');

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-black text-slate-950 dark:text-white">{group.title}</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-teal-500" />
      </div>
      <div className="grid gap-4">
        {group.exercises.map((exercise, index) => (
          <ExerciseCard key={exercise.sentence} exercise={exercise} groupId={groupId} index={index} />
        ))}
      </div>
    </section>
  );
}
