import { useState } from 'react';
import { irregularVerbs, regularVerbs } from '../data/verbs.js';

const normalize = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default function Verbs() {
  const [kind, setKind] = useState('irregular');
  const [query, setQuery] = useState('');
  const verbs = kind === 'irregular' ? irregularVerbs : regularVerbs;
  const filtered = verbs.filter((verb) => Object.values(verb).some((value) => normalize(value).includes(normalize(query.trim()))));
  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-black">Verbos</h2>
      <p className="leading-7 text-slate-600 dark:text-slate-300">Aprende en grupos de cinco. Lee las tres formas y su significado, tapa la lista e intenta recordarlas.</p>
      <div className="flex flex-wrap gap-3" aria-label="Tipo de verbo">
        {[['irregular', 'Irregulares', irregularVerbs.length], ['regular', 'Regulares', regularVerbs.length]].map(([id, label, count]) => (
          <button key={id} type="button" aria-pressed={kind === id} onClick={() => { setKind(id); setQuery(''); }} className={`min-h-11 rounded-lg border px-5 py-3 font-bold focus:ring-2 focus:ring-teal-500 ${kind === id ? 'bg-teal-600 text-white border-teal-500' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700'}`}>{label} · {count}</button>
        ))}
      </div>
      <section className="rounded-lg border border-teal-200 bg-teal-50 p-5 leading-7 dark:border-teal-900 dark:bg-teal-950/40">
        <h3 className="font-bold">{kind === 'irregular' ? 'Cada verbo tiene su propia forma' : 'La terminación -ed es la clave'}</h3>
        <p>{kind === 'irregular' ? 'Los irregulares no siguen una única regla con -ed: go → went → gone. Algunos no cambian, como cut → cut → cut. Esta lista conserva las formas de tu imagen.' : 'El pasado y el participio son iguales: work → worked → worked. Si termina en e, agrega d (live → lived). Con consonante + y, cambia y por ied (study → studied); con vocal + y, agrega ed (play → played). Algunos duplican la consonante final: stop → stopped.'}</p>
        <p className="mt-3">El <strong>infinitivo</strong> nombra la acción. El <strong>pasado simple</strong> cuenta algo que ocurrió: “I played yesterday” (Jugué ayer). El <strong>participio</strong> se usa con auxiliares: “I have played” (He jugado).</p>
        {kind === 'irregular' ? <p className="mt-3">Ojo: read se escribe igual, pero en pasado y participio se pronuncia /red/. Be usa was con I, he, she, it y were con you, we, they. Lie aquí significa acostarse; “mentir” es regular: lied. Las barras separan formas alternativas.</p> : <p className="mt-3">Usamos la escritura estadounidense en practice → practiced y travel → traveled. En inglés británico también verás practise → practised y travel → travelled.</p>}
      </section>
      <label className="block font-semibold">Buscar un verbo en inglés o español
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Por ejemplo: comer, went o studied" className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 dark:border-slate-700 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500" />
      </label>
      <p role="status" className="text-sm text-slate-600 dark:text-slate-300">{filtered.length} de {verbs.length} verbos</p>
      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900" tabIndex={0} role="region" aria-label="Tabla de verbos; desliza para ver todas las columnas">
        <table className="w-full min-w-[580px] text-left text-sm">
          <caption className="p-4 text-left font-bold">Verbos {kind === 'irregular' ? 'irregulares' : 'regulares'} · Formas y traducción</caption>
          <thead className="bg-teal-50 dark:bg-teal-950/40"><tr>{['Infinitivo', 'Pasado simple', 'Participio pasado', 'Español'].map((label) => <th key={label} scope="col" className="px-4 py-3">{label}</th>)}</tr></thead>
          <tbody>{filtered.map((verb) => <tr key={verb.infinitive} className="border-t border-slate-200 even:bg-slate-50 dark:border-slate-800 dark:even:bg-slate-950/50"><th scope="row" lang="en" className="px-4 py-3 font-bold">{verb.infinitive}</th><td lang="en" className="px-4 py-3">{verb.past}</td><td lang="en" className="px-4 py-3">{verb.participle}</td><td className="px-4 py-3">{verb.translation}</td></tr>)}</tbody>
        </table>
        {!filtered.length && <p className="p-5">No hay coincidencias. Prueba con otra palabra.</p>}
      </div>
    </div>
  );
}
