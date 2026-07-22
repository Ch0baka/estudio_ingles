import { Palette } from 'lucide-react';

export const colorThemes = [
  { id: 'teal', label: 'Teal', swatch: '#0d9488' },
  { id: 'violet', label: 'Violet', swatch: '#7c3aed' },
  { id: 'green', label: 'Green', swatch: '#16a34a' },
  { id: 'blue', label: 'Blue', swatch: '#2563eb' },
  { id: 'rose', label: 'Rose', swatch: '#e11d48' },
  { id: 'amber', label: 'Amber', swatch: '#d97706' },
];

export default function ColorThemeSelect({ value, onChange }) {
  const currentTheme = colorThemes.find((theme) => theme.id === value) || colorThemes[0];

  return (
    <label
      className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white/85 px-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-within:ring-offset-slate-950"
      title="Accent color"
    >
      <Palette className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span
        className="h-4 w-4 shrink-0 rounded-full border border-black/10 dark:border-white/20"
        style={{ backgroundColor: currentTheme.swatch }}
        aria-hidden="true"
      />
      <span className="sr-only">Select accent color</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Select accent color"
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
