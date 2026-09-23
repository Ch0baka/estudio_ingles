import { unitThreeExercises } from '../src/data/unit3Exercises.js';
import { exerciseCollections, exerciseGroups, unitTwoExercises } from '../src/data/exercises.js';
import { theoryCollections } from '../src/data/unit2.js';
import { vocabulary } from '../src/data/vocabulary.js';

const errors = [];

const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

const allExercises = [
  ...exerciseGroups.flatMap((group) => group.exercises),
  ...unitTwoExercises,
  ...unitThreeExercises,
];

const exerciseIds = allExercises.map((exercise) => exercise.id);
const duplicateExerciseIds = exerciseIds.filter((id, index) => exerciseIds.indexOf(id) !== index);

assert(theoryCollections.length === 3, 'Expected exactly three theory collections.');
assert(
  ['modal-verbs', 'unit-2', 'vocabulary-studio'].every((id) => theoryCollections.some((collection) => collection.id === id)),
  'Missing one or more required theory collections.',
);

assert(exerciseCollections.length === 3, 'Expected exactly three exercise collections.');
assert(
  ['modal-practice', 'unit-2-practice', 'unit-3-practice'].every((id) =>
    exerciseCollections.some((collection) => collection.id === id),
  ),
  'Missing one or more required exercise collections.',
);

assert(duplicateExerciseIds.length === 0, `Duplicate exercise ids: ${duplicateExerciseIds.join(', ')}`);
assert(unitTwoExercises.length >= 18, 'Unit 2 must include at least 18 exercises.');

assert(unitThreeExercises.length === 24, 'Unit 3 must include 24 exercises.');

allExercises.forEach((exercise) => {
  assert(exercise.id, `Missing id for exercise: ${exercise.sentence}`);
  assert(Array.isArray(exercise.options) && exercise.options.length >= 2, `Exercise ${exercise.id} needs options.`);
  assert(
    exercise.options.includes(exercise.correctAnswer),
    `Correct answer for ${exercise.id} is not included in its options.`,
  );
  assert(new Set(exercise.options).size === exercise.options.length, `Duplicate options in ${exercise.id}.`);
  assert(exercise.explanation, `Exercise ${exercise.id} needs an explanation.`);
});

const normalizedTerms = vocabulary.map((word) => word.term.trim().toLowerCase());
const duplicateTerms = normalizedTerms.filter((term, index) => normalizedTerms.indexOf(term) !== index);

assert(duplicateTerms.length === 0, `Duplicate vocabulary terms: ${duplicateTerms.join(', ')}`);
vocabulary.forEach((word) => {
  assert(word.term, 'Vocabulary item missing term.');
  assert(word.translation || word.spanish, `Vocabulary item ${word.term} missing Spanish translation.`);
  assert(word.spanishMeaning, `Vocabulary item ${word.term} missing Spanish definition.`);
  assert(word.meaning, `Vocabulary item ${word.term} missing English definition.`);
  assert(word.example, `Vocabulary item ${word.term} missing example.`);
});

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log('Content validation passed.');
