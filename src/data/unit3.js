export const unitThreeCollections = [
  { id: 'unit-3-was', eyebrow: 'UNIT 3 · Parte 1', title: 'WAS', description: 'Habla del pasado con I, he, she e it.' },
  { id: 'unit-3-were', eyebrow: 'UNIT 3 · Parte 2', title: 'WERE', description: 'Habla del pasado con you, we y they.' },
];

export const unitThreeTheory = {
  'unit-3-was': [
    { title: 'WAS: era o estaba', explanation: 'Was es el pasado de am e is. Úsalo con I, he, she e it para hablar de cómo era alguien, cómo se sentía o dónde estaba. Según el contexto también se traduce como fui, fue, estuve o estuvo.', structure: 'I / he / she / it + was + descripción o lugar', examples: [{ english: 'I was tired yesterday.', spanish: 'Yo estaba cansada ayer.' }, { english: 'She was at school in the morning.', spanish: 'Ella estaba en el colegio por la mañana.' }], note: 'No uses was con todos los verbos: “I played” significa “Jugué”. “I was played” no expresa esa idea.' },
    { title: 'Negar y preguntar con WAS', explanation: 'Para negar, usa was not o wasn’t. Para preguntar, coloca was antes de la persona. No necesitas did.', structure: 'She wasn’t… / Was she…? / Yes, she was. / No, she wasn’t.', examples: [{ english: 'He wasn’t at home last night.', spanish: 'Él no estaba en casa anoche.' }, { english: 'Was the film interesting? Yes, it was.', spanish: '¿La película fue interesante? Sí.' }, { english: 'Where was Nicole yesterday?', spanish: '¿Dónde estaba Nicole ayer?' }], note: 'Where significa “dónde”. No es un verbo: puedes combinarlo con was para preguntar por un lugar.' },
  ],
  'unit-3-were': [
    { title: 'WERE: eras, éramos o estaban', explanation: 'Were es el pasado de are. Úsalo con you, we y they. You puede significar tú o ustedes: en ambos casos lleva were.', structure: 'You / we / they + were + descripción o lugar', examples: [{ english: 'You were happy yesterday.', spanish: 'Tú estabas feliz ayer.' }, { english: 'We were at the park last weekend.', spanish: 'Estuvimos en el parque el fin de semana pasado.' }, { english: 'They were classmates.', spanish: 'Eran compañeros de clase.' }], note: 'Recuerda las parejas: I/he/she/it → was; you/we/they → were.' },
    { title: 'Negar y preguntar con WERE', explanation: 'Para negar, usa were not o weren’t. Para preguntar, coloca were antes de la persona. Responde con el pronombre adecuado.', structure: 'They weren’t… / Were they…? / Yes, they were. / No, they weren’t.', examples: [{ english: 'We weren’t late.', spanish: 'No llegamos tarde.' }, { english: 'Were you at school? Yes, I was.', spanish: '¿Estabas en el colegio? Sí.' }, { english: 'Where were they last night?', spanish: '¿Dónde estaban anoche?' }], note: 'Were y where son palabras distintas: were es el pasado de to be; where pregunta “dónde”. En “Were you…?”, si respondes sobre ti, usa “I was”.' },
  ],
};

export const unitThreeVocabulary = [
  ['yesterday', 'ayer', 'El día anterior a hoy.', 'The day before today.', 'I was at home yesterday.'],
  ['last night', 'anoche', 'La noche anterior.', 'The previous night.', 'They were tired last night.'],
  ['last weekend', 'el fin de semana pasado', 'El sábado y domingo anteriores.', 'The previous weekend.', 'We were at the park last weekend.'],
  ['at home', 'en casa', 'Indica que alguien está en su casa.', 'In your home.', 'She was at home.'],
  ['at school', 'en el colegio', 'Indica que alguien está en el colegio.', 'In or at a school.', 'He was at school yesterday.'],
  ['tired', 'cansado/a', 'Con necesidad de descansar.', 'Needing rest.', 'I was tired last night.'],
  ['happy', 'feliz', 'Que siente alegría.', 'Feeling pleased.', 'You were happy yesterday.'],
  ['late', 'tarde / atrasado/a', 'Después de la hora esperada.', 'After the expected time.', 'We were late.'],
  ['classmate', 'compañero/a de clase', 'Persona que estudia en tu misma clase.', 'Someone in the same class.', 'They were my classmates.'],
  ['interesting', 'interesante', 'Que despierta tu curiosidad o atención.', 'Holding your attention.', 'The film was interesting.'],
  ['where', 'dónde', 'Palabra para preguntar por un lugar.', 'A word used to ask about a place.', 'Where were you yesterday?'],
].map(([term, translation, spanishMeaning, meaning, example]) => ({ term, translation, spanishMeaning, meaning, example }));
