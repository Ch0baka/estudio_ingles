export const unitTwoObjectives = [
  'Aprender a descubrir a quién o a qué se refiere un pronombre dentro de una lectura.',
  'Encontrar la idea principal de un texto y separar los detalles que la apoyan.',
  'Usar can, could y should en situaciones simples, como habilidad, petición y consejo.',
  'Reconocer combinaciones naturales de palabras sobre hábitos, metas y rutinas.',
];

export const pronounRows = [
  {
    subject: 'I',
    object: 'me',
    possessiveAdjective: 'my',
    possessivePronoun: 'mine',
  },
  {
    subject: 'you',
    object: 'you',
    possessiveAdjective: 'your',
    possessivePronoun: 'yours',
  },
  {
    subject: 'he',
    object: 'him',
    possessiveAdjective: 'his',
    possessivePronoun: 'his',
  },
  {
    subject: 'she',
    object: 'her',
    possessiveAdjective: 'her',
    possessivePronoun: 'hers',
  },
  {
    subject: 'it',
    object: 'it',
    possessiveAdjective: 'its',
    possessivePronoun: '-',
  },
  {
    subject: 'we',
    object: 'us',
    possessiveAdjective: 'our',
    possessivePronoun: 'ours',
  },
  {
    subject: 'they',
    object: 'them',
    possessiveAdjective: 'their',
    possessivePronoun: 'theirs',
  },
];

export const modalReview = [
  {
    title: 'Can',
    uses: ['Habilidad en el presente.', 'Petición informal o cercana.'],
    examples: ['I can keep a food journal.', 'Can you help me set a goal?'],
  },
  {
    title: 'Could',
    uses: ['Habilidad en el pasado.', 'Posibilidad.', 'Petición amable o más educada.'],
    examples: ['She could run farther last year.', 'Could you explain this habit?'],
  },
  {
    title: 'Should',
    uses: ['Consejo o recomendación.'],
    examples: ['You should cut down on sugar.', 'You shouldn’t spend so much time playing video games.'],
  },
];

export const habitCollocations = [
  'gain weight',
  'lose weight',
  'break a habit',
  'set a goal',
  'reach a goal',
  'achieve a goal',
  'be addicted to',
  'pay attention',
  'cut down on',
  'go on a diet',
  'go off a diet',
  'build a routine',
  'track progress',
  'make progress',
];

export const collocationExamples = [
  'You should cut down on sugar.',
  'You should cut down on the time you spend playing video games.',
  'I went off my diet last week.',
  'I will go on a new diet.',
];

export const readingPractice = {
  text: 'Lucas wants to build a healthier routine. He sets a simple goal: walk for twenty minutes after work. His sister Ana joins him twice a week because she wants to improve her habits too. They track their progress in a notebook. It helps them pay attention to small changes. After a month, the routine feels easier, and the progress is theirs.',
  mainIdea: 'Lucas y Ana usan una rutina simple y fácil de registrar para crear hábitos más saludables.',
  strategy:
    'Primero busca el sustantivo más cercano que coincida con el pronombre en número y significado. Luego vuelve a leer la oración completa para confirmar la referencia.',
  references: [
    { pronoun: 'He', reference: 'Lucas' },
    { pronoun: 'him', reference: 'Lucas' },
    { pronoun: 'she', reference: 'Ana' },
    { pronoun: 'They / them', reference: 'Lucas and Ana' },
    { pronoun: 'It', reference: 'the notebook' },
    { pronoun: 'theirs', reference: 'Lucas and Ana’s progress' },
  ],
};

export const theoryCollections = [
  {
    id: 'modal-verbs',
    title: 'Verbos modales y obligaciones',
    eyebrow: 'Estudio anterior',
    description: 'Repasa consejos, reglas, obligaciones, prohibiciones y cosas que no son necesarias.',
  },
  {
    id: 'unit-2',
    title: 'Pronombres, hábitos y metas',
    eyebrow: 'Nuevo estudio · Unit 2',
    description: 'Aprende referencias de pronombres, comprende una lectura breve y usa expresiones naturales sobre hábitos y metas.',
    objectives: unitTwoObjectives,
  },
  {
    id: 'vocabulary-studio',
    title: 'Estudio de vocabulario',
    eyebrow: 'Colección de vocabulario',
    description: 'Una colección para practicar palabras, expresiones, lectura, hábitos y metas.',
  },
];
