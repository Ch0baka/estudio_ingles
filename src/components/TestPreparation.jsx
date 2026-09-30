import { useState } from 'react';
import GuidedExerciseSet from './GuidedExerciseSet.jsx';
import VocabularyCards from './VocabularyCards.jsx';
import { readingPassage, listeningTranscript, prepGroups, prepVocabulary } from '../data/testPrep.js';
import { unitThreeVocabulary } from '../data/unit3.js';
import listeningAudio from '../assets/audio/unit3-test-listening.wav';

const panel = 'space-y-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900';
const button = 'min-h-11 rounded-lg border border-slate-300 px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-slate-600';
const writingChecks = ['Escribí al menos cinco oraciones sobre mi semana pasada.', 'Cada oración tiene sujeto y verbo y expresa una idea completa.', 'Usé was o were correctamente para decir cómo o dónde estaba.', 'Usé verbos regulares e irregulares en pasado para contar acciones.', 'Agregué expresiones de tiempo, mayúsculas y puntos.'];

function WritingPractice() {
  const [draft, setDraft] = useState(() => { try { return localStorage.getItem('unit3-test-writing') || ''; } catch { return ''; } });
  const [saveError, setSaveError] = useState(false);
  const [checks, setChecks] = useState([]);
  const update = (value) => {
    setDraft(value);
    setChecks([]);
    try { localStorage.setItem('unit3-test-writing', value); setSaveError(false); } catch { setSaveError(true); }
  };
  return <section className={panel}>
    <h3 className="text-xl font-bold">7 · Escribe sobre tu semana pasada</h3>
    <p>Escribe cinco o más oraciones verdaderas sobre lo que hiciste la semana pasada. Incluye dónde estabas o cómo te sentías, dos acciones con verbos regulares y dos con verbos irregulares. Puedes combinar acciones en una oración.</p>
    <p className="text-sm">Banco de ayuda: was/were · played · visited · studied · went · ate · wrote · last week · on Monday · last weekend.</p>
    <label className="block font-bold" htmlFor="week-writing">Mi semana pasada (en inglés)</label>
    <textarea id="week-writing" lang="en" rows={7} value={draft} onChange={(event) => update(event.target.value)} placeholder="Last week, I…" className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-950 focus:ring-2 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-950 dark:text-white" />
    <p role="status" className="text-sm">{saveError ? 'No se pudo guardar en este navegador. Copia tu texto antes de salir.' : 'Tu borrador se guarda solo en este navegador.'}</p>
    <h4 className="font-bold">Revisa tu propio texto</h4>
    <p>Esta actividad es de autoevaluación: no asigna una nota automática. Marca cada punto después de revisar tu escritura; puedes pedir a un adulto que la lea contigo.</p>
    {writingChecks.map((label, i) => <label className="flex items-start gap-3" key={label}><input type="checkbox" className="mt-1 h-5 w-5" checked={checks.includes(i)} onChange={() => setChecks((current) => current.includes(i) ? current.filter((n) => n !== i) : [...current, i])} />{label}</label>)}
    <p aria-live="polite">{checks.length} de {writingChecks.length} puntos revisados.</p>
    <details><summary className="cursor-pointer font-bold">Ver un modelo después de escribir</summary><p lang="en" className="mt-3 leading-8">Last week, I was happy. On Monday, I studied English. On Tuesday, I visited my grandmother. On Wednesday, I went to the park. Last weekend, I ate pasta with my family.</p><p>La semana pasada estaba feliz. El lunes estudié inglés. El martes visité a mi abuela. El miércoles fui al parque. El fin de semana pasado comí pasta con mi familia. Es un modelo: tu texto puede ser diferente.</p></details>
  </section>;
}

export default function TestPreparation() {
  const [section, setSection] = useState('reading');
  const [audioError, setAudioError] = useState(false);
  const [rate, setRate] = useState('1');
  const group = prepGroups.find((item) => item.id === section);
  return <div className="space-y-5">
    <header className={panel}>
      <p className="font-bold text-teal-700 dark:text-teal-300">UNIT 3 · Preparación para la evaluación</p>
      <h2 className="text-2xl font-black">Practica los 8 Test Purposes</h2>
      <p>Trabaja por partes y sin apuro. Hay 26 preguntas con explicación y una actividad de escritura libre. El material usa UNIT 3 y amplía el pasado simple con los verbos de la app. Es una práctica creada para estos objetivos, no la prueba oficial del colegio.</p>
    </header>
    <nav aria-label="Objetivos de la evaluación" className="flex flex-wrap gap-2">
      {[...prepGroups.slice(0, 5), { id: 'writing', title: '7 · Mi semana pasada' }, prepGroups[5]].map((item) => <button type="button" key={item.id} aria-pressed={section === item.id} onClick={() => setSection(item.id)} className={`${button} ${section === item.id ? 'bg-teal-600 text-white' : 'bg-white dark:bg-slate-900'}`}>{item.title}</button>)}
    </nav>
    {section === 'reading' && <section className={panel}>
      <h3 className="text-xl font-bold">A happy week</h3>
      <p><strong>Fluidez:</strong> lee una vez en silencio y luego en voz alta. Agrupa las palabras por ideas y haz pausas en los puntos. Vuelve a leer buscando mayor claridad, no velocidad. Después responde sin traducir cada palabra.</p>
      <p lang="en" className="text-lg leading-9">{readingPassage}</p>
      <details><summary className="cursor-pointer font-bold">Guía para practicar las pausas</summary><p lang="en" className="mt-3 leading-8">Last week, / Emma had a busy but happy week. // On Monday, / she was at school / with her classmates. //</p><p>/ indica una pausa breve y // el final de una oración. Puedes grabarte con tu celular y escuchar si se entiende cada idea.</p></details>
      <p>Busca primero la idea que resume todo el texto; después vuelve a las frases que contienen los detalles de cada pregunta. El texto permanece disponible mientras respondes.</p>
    </section>}
    {section === 'vocabulary' && <VocabularyCards words={[...unitThreeVocabulary, ...prepVocabulary]} title="Palabras para la evaluación" />}
    {section === 'families' && <section className={panel}><h3 className="text-xl font-bold">Una raíz, palabras relacionadas</h3><p>Una familia reúne palabras con una base y un significado relacionados. A veces cambia su función: teach (enseñar, verbo) → teacher (profesor/a, sustantivo); write (escribir) → writer (escritor/a); help (ayudar) → helper (ayudante) → helpful (servicial, adjetivo). No basta con que dos palabras se parezcan.</p></section>}
    {section === 'sentences' && <section className={panel}><h3 className="text-xl font-bold">¿La idea está completa?</h3><p>En estas afirmaciones, una oración completa necesita un sujeto, un verbo conjugado y una idea que se entienda por sí sola: “I was at home.” Un fragmento deja algo pendiente: “At home” o “Because I was tired”. Añadir un punto no soluciona lo que falta. Existen otros tipos de oración, como órdenes (“Come here!”), cuyo sujeto se sobreentiende.</p></section>}
    {section === 'grammar' && <section className={panel}><h3 className="text-xl font-bold">Cuenta acciones terminadas</h3><p>Usa sujeto + verbo en pasado + complemento. Los regulares suelen terminar en -ed: visited, played; study cambia a studied. Los irregulares tienen formas propias: go → went, eat → ate, write → wrote. Para ser o estar: I/he/she/it + was y you/we/they + were. No agregues was a cada acción: “I visited my grandmother”.</p></section>}
    {section === 'writing' && <WritingPractice />}
    {section === 'listening' && <section className={panel}>
      <h3 className="text-xl font-bold">Escucha la semana de Lucas</h3>
      <p>Escucha primero para entender la idea general. Repite para identificar personas, días y actividades, y luego responde. La narración usa una voz sintetizada en inglés. Deja la transcripción cerrada hasta terminar.</p>
      <audio controls preload="metadata" aria-label="Relato en inglés: la semana de Lucas" src={listeningAudio} onError={() => setAudioError(true)} onLoadedMetadata={(event) => { event.currentTarget.playbackRate = Number(rate); }} ref={(element) => { if (element) element.playbackRate = Number(rate); }} className="w-full" />
      <label className="block">Velocidad <select value={rate} onChange={(event) => setRate(event.target.value)} className="ml-2 rounded border bg-white p-2 dark:bg-slate-950"><option value="0.8">Más lenta</option><option value="1">Normal</option></select></label>
      {audioError && <p role="alert">No se pudo cargar el audio. Recarga la página o pide a un adulto que lea la transcripción en voz alta sin mostrártela.</p>}
      <details><summary className="cursor-pointer font-bold">Ver transcripción y apoyo en español</summary><p lang="en" className="mt-3 leading-8">{listeningTranscript}</p><p className="mt-3">Lucas estudió inglés en casa el lunes, fue al parque con su hermana el miércoles y cocinaron pasta con su abuelo el viernes. El fin de semana estuvo en la biblioteca y leyó un libro sobre animales. Su día favorito fue el viernes porque compartió con su abuelo.</p></details>
    </section>}
    {group && <GuidedExerciseSet key={group.id} exercises={group.exercises} title={group.title} />}
  </div>;
}
