export const unitTwoObjectives = [
  'Identify the people or things that pronouns refer to in a text.',
  'Recognize a passage’s main idea and supporting details.',
  'Use can, could, and should accurately in context.',
  'Recognize and use common collocations about habits and goals.',
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
    uses: ['Present ability.', 'Informal request.'],
    examples: ['I can keep a food journal.', 'Can you help me set a goal?'],
  },
  {
    title: 'Could',
    uses: ['Past ability.', 'Possibility.', 'Polite request.'],
    examples: ['She could run farther last year.', 'Could you explain this habit?'],
  },
  {
    title: 'Should',
    uses: ['Advice or recommendation.'],
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
  mainIdea: 'Lucas and Ana use a simple, trackable routine to build healthier habits.',
  strategy:
    'First find the nearest noun that matches the pronoun in number and meaning. Then reread the complete sentence to confirm the reference.',
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
    title: 'Modal verbs & obligations',
    eyebrow: 'Previous study',
    description: 'Review advice, rules, obligation, prohibition, and absence of necessity.',
  },
  {
    id: 'unit-2',
    title: 'Pronouns, habits & goals',
    eyebrow: 'New study · Unit 2',
    description: 'Identify pronoun references, understand a short passage, use modal verbs, and build natural collocations.',
    objectives: unitTwoObjectives,
  },
  {
    id: 'vocabulary-studio',
    title: 'Vocabulary studio',
    eyebrow: 'Growing collection',
    description: 'One growing collection of useful words, collocations, reading terms, and habit expressions.',
  },
];
