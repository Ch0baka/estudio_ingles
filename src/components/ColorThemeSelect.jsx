import { Palette } from 'lucide-react';

export const colorThemes = [
  { id: 'teal', label: 'Turquesa', swatch: '#0d9488' },
  { id: 'violet', label: 'Violeta', swatch: '#7c3aed' },
  { id: 'green', label: 'Verde', swatch: '#16a34a' },
  { id: 'blue', label: 'Azul', swatch: '#2563eb' },
  { id: 'rose', label: 'Rosa', swatch: '#e11d48' },
  { id: 'amber', label: 'Ámbar', swatch: '#d97706' },
];

export default function ColorThemeSelect({ value, onChange }) {
  const currentTheme = colorThemes.find((theme) => theme.id === value) || colorThemes[0];

  return (
    <label
      className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white/85 px-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-within:ring-offset-slate-950"
      title="Color de acento"
    >
      <Palette className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span
        className="h-4 w-4 shrink-0 rounded-full border border-black/10 dark:border-white/20"
        style={{ backgroundColor: currentTheme.swatch }}
        aria-hidden="true"
      />
      <span className="sr-only">Seleccionar color de acento</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Seleccionar color de acento"
        className="h-full min-w-20 bg-transparent text-sm font-bold outline-none"
      >
        {colorThemes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.label}
          </option>
        ))}
      </select>
    </label>
  );
}
