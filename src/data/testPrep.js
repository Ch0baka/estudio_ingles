export const readingPassage = `Last week, Emma had a busy but happy week. On Monday, she was at school with her classmates. They studied English and learned new words. On Tuesday, Emma visited her grandmother after school. They cooked dinner together. On Wednesday, she played basketball at the park with her friends. They were tired after the game, but they were happy. On Thursday, Emma stayed at home and wrote a short story. Her story was about a friendly teacher. On Friday, she read her story to her class. Her classmates liked it because it was interesting. Last weekend, Emma went to the library with her brother. She borrowed a book and read it at home. She enjoyed her week because she spent time with people she loved and learned something new.`;
export const listeningTranscript = `Hi, I'm Lucas. Last week was fun. On Monday, I studied English at home. On Wednesday, I went to the park with my sister. We played football. We were tired after the game. On Friday, I visited my grandfather. We cooked pasta together. Last weekend, I was at the library. I read a book about animals. It was interesting. My favorite day was Friday because I spent time with my grandfather.`;

const questions = (prefix, rows) => rows.map(([sentence, options, correctAnswer, explanation], i) => ({ id: `test-prep-${prefix}-${i + 1}`, sentence, options, correctAnswer, explanation }));
export const prepGroups = [
  { id: 'reading', title: '1 y 2 · Fluidez y comprensión lectora', exercises: questions('reading', [
    ['What is the main idea of the passage?', ['Emma had a week of learning and time with people she loved.', 'Emma spent the whole week at the library.', 'Emma wanted to become a basketball player.'], 'Emma had a week of learning and time with people she loved.', 'La idea principal resume todo el texto: Emma aprendió y compartió con personas queridas. El parque y la biblioteca son detalles.'],
    ['Who cooked dinner with Emma on Tuesday?', ['Her brother', 'Her grandmother', 'Her teacher'], 'Her grandmother', 'El texto dice que visitó a su abuela el martes y cocinaron juntas.'],
    ['Why were Emma and her friends tired on Wednesday?', ['They wrote a story.', 'They studied all night.', 'They played basketball.'], 'They played basketball.', 'Estaban cansados después del partido de básquetbol. After the game conecta la actividad con cómo se sentían.'],
    ['What did Emma do before she read her story to her class?', ['She wrote it at home on Thursday.', 'She borrowed it from the library.', 'She cooked it with her grandmother.'], 'She wrote it at home on Thursday.', 'Primero escribió el cuento el jueves; después lo leyó a su clase el viernes.'],
    ['In “Her classmates liked it”, what does “it” refer to?', ['The library', 'Her story', 'The game'], 'Her story', 'It reemplaza her story, el cuento de Emma. Mira la oración anterior para encontrar la referencia.'],
  ]) },
  { id: 'vocabulary', title: '3 · Vocabulario en contexto', exercises: questions('vocabulary', [
    ['“Last weekend” indica…', ['El próximo fin de semana', 'El fin de semana pasado', 'Todos los fines de semana'], 'El fin de semana pasado', 'Last sitúa ese fin de semana en el pasado.'],
    ['After the game, they needed rest. They were ___.', ['tired', 'late', 'interesting'], 'tired', 'Tired significa cansados: necesitaban descansar después de jugar.'],
    ['People in your class are your ___.', ['libraries', 'stories', 'classmates'], 'classmates', 'Classmates son compañeros de clase.'],
    ['Emma ___ a book from the library and will return it.', ['bought', 'borrowed', 'cooked'], 'borrowed', 'Borrow significa pedir prestado y devolver después. Buy significa comprar.'],
  ]) },
  { id: 'families', title: '4 · Familias de palabras', exercises: questions('families', [
    ['Teach → teacher. ¿Qué significa teacher?', ['Una persona que enseña', 'Un lugar para estudiar', 'Una persona que cocina'], 'Una persona que enseña', 'Teach es enseñar y teacher es profesor/a. El sufijo -er forma aquí el nombre de quien realiza la acción.'],
    ['My sister is a good ___. She writes stories.', ['write', 'writer', 'writingly'], 'writer', 'Después de a good necesitamos un sustantivo que nombre a la persona: writer, escritora. Write es el verbo escribir.'],
    ['Elige la familia de palabras correcta.', ['happy, library, teach', 'play, tired, book', 'help, helpful, helper'], 'help, helpful, helper', 'Comparten una base y significado: help (ayudar), helpful (servicial) y helper (ayudante).'],
    ['Completa con un adjetivo: My classmate was very ___. She helped me.', ['help', 'helpful', 'helper'], 'helpful', 'Helpful describe cómo era la compañera: servicial. Helper nombra a una persona; help es ayudar o ayuda.'],
  ]) },
  { id: 'sentences', title: '5 · Fragmentos y oraciones completas', exercises: questions('sentences', [
    ['¿Cuál es una oración completa?', ['At the park last week.', 'My friends at school.', 'We were at the park last week.'], 'We were at the park last week.', 'Tiene sujeto (we), verbo (were) y una idea completa. Las otras opciones no tienen un verbo conjugado.'],
    ['“Played football yesterday.” ¿Qué falta para contar lo que hiciste?', ['Un sujeto, por ejemplo I', 'Solo un punto final', 'La palabra were antes de played'], 'Un sujeto, por ejemplo I', 'Como afirmación sobre el pasado necesita sujeto: “I played football yesterday.” Poner un punto no completa la idea.'],
    ['¿Cuál sigue siendo un fragmento?', ['I was tired.', 'Because I was tired.', 'I rested because I was tired.'], 'Because I was tired.', 'Because I was tired significa “Porque estaba cansada”. Aunque tiene sujeto y verbo, deja una idea pendiente: ¿qué ocurrió por esa razón?'],
    ['Completa el fragmento “My classmates at school”.', ['My classmates were at school.', 'My classmates school yesterday.', 'My classmates at school.'], 'My classmates were at school.', 'Were completa la oración con un verbo en pasado. My classmates equivale a they.'],
  ]) },
  { id: 'grammar', title: '6 · Pasado simple afirmativo', exercises: questions('grammar', [
    ['Yesterday, I ___ English at home.', ['study', 'studied', 'was study'], 'studied', 'Study termina en consonante + y: cambia y por ied. “Ayer estudié inglés en casa”.'],
    ['Last week, we ___ to the library.', ['goed', 'go', 'went'], 'went', 'Go es irregular: su pasado es went. “La semana pasada fuimos a la biblioteca”.'],
    ['She ___ a short story last Thursday.', ['wrote', 'written', 'write'], 'wrote', 'El pasado simple de write es wrote. Written es el participio, no el pasado simple.'],
    ['Completa en pasado: I ___ happy and my friends ___ tired.', ['were / was', 'was / were', 'am / are'], 'was / were', 'I lleva was; my friends equivale a they y lleva were.'],
    ['¿Cómo dices “Visité a mi abuela la semana pasada”?', ['I was visited my grandmother last week.', 'I visit my grandmother last week.', 'I visited my grandmother last week.'], 'I visited my grandmother last week.', 'Visit es regular: visited. No agregamos was antes de visited para expresar esta acción.'],
  ]) },
  { id: 'listening', title: '8 · Comprensión auditiva', exercises: questions('listening', [
    ['What is Lucas mainly talking about?', ['His plans for next year', 'His activities last week', 'His favorite animals'], 'His activities last week', 'Lucas cuenta lo que hizo la semana pasada. Los días ayudan a seguir el relato.'],
    ['Who went to the park with Lucas?', ['His sister', 'His grandfather', 'His teacher'], 'His sister', 'Dice “with my sister”: con su hermana.'],
    ['What did Lucas and his grandfather cook?', ['Rice', 'Soup', 'Pasta'], 'Pasta', 'Dice “We cooked pasta together”: cocinaron pasta juntos.'],
    ['Why was Friday his favorite day?', ['He played football.', 'He spent time with his grandfather.', 'He bought a book.'], 'He spent time with his grandfather.', 'Al final explica que el viernes fue su día favorito porque compartió con su abuelo.'],
  ]) },
];
export const prepVocabulary = [
  ['borrow', 'pedir prestado', 'Recibir algo para usarlo y devolverlo después.', 'To take something temporarily and return it.', 'I borrowed a book last week.'],
  ['library', 'biblioteca', 'Lugar donde puedes leer y pedir libros prestados.', 'A place to read or borrow books.', 'We were at the library.'],
  ['story', 'cuento / historia', 'Relato de hechos reales o imaginarios.', 'An account of real or imagined events.', 'She wrote a story.'],
  ['teach', 'enseñar', 'Ayudar a alguien a aprender.', 'To help someone learn.', 'She taught English last week.'],
  ['teacher', 'profesor/a', 'Persona que enseña; pertenece a la familia de teach.', 'A person who teaches.', 'My teacher was helpful.'],
  ['writer', 'escritor/a', 'Persona que escribe; pertenece a la familia de write.', 'A person who writes.', 'The writer visited our school.'],
  ['help', 'ayudar / ayuda', 'Dar apoyo a alguien.', 'To give assistance.', 'I helped my classmate.'],
  ['helpful', 'servicial / útil', 'Que ayuda; adjetivo de la familia de help.', 'Giving help or being useful.', 'My friend was helpful.'],
  ['helper', 'ayudante', 'Persona que ayuda; sustantivo de la familia de help.', 'A person who helps.', 'The helper was at school.'],
].map(([term, translation, spanishMeaning, meaning, example]) => ({ term, translation, spanishMeaning, meaning, example }));
