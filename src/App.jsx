import { AlertTriangle, ArrowRight, BookOpenCheck, Brain, ClipboardCheck } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { colorThemes } from './components/ColorThemeSelect.jsx';
import GuidedExerciseSet from './components/GuidedExerciseSet.jsx';
import Header from './components/Header.jsx';
import StudyCollectionPicker from './components/StudyCollectionPicker.jsx';
import Tabs from './components/Tabs.jsx';
import TheorySection from './components/TheorySection.jsx';
import UnitTwoTheory from './components/UnitTwoTheory.jsx';
import VocabularyCards from './components/VocabularyCards.jsx';
import ExerciseSection from './components/ExerciseSection.jsx';
import { exerciseCollections, exerciseGroups, unitTwoExercises } from './data/exercises.js';
import { theorySections } from './data/theory.js';
import { theoryCollections } from './data/unit2.js';
import { vocabulary } from './data/vocabulary.js';
import heroStudy from './assets/hero-study.png';

const tabs = ['Home', 'Theory & Examples', 'Exercises'];

const summaryCards = [
  {
    title: 'Must',
    text: 'obligation / prohibition',
    accent: 'bg-teal-500',
  },
  {
    title: 'Have to',
    text: 'external necessity',
    accent: 'bg-sky-500',
  },
  {
    title: 'Don’t have to',
    text: 'no necessity',
    accent: 'bg-amber-500',
  },
  {
    title: 'Should',
    text: 'advice',
    accent: 'bg-rose-500',
  },
];

function Home({ onGoTo }) {
  return (
    <div className="space-y-8">
      <section className="grid items-center gap-8 rounded-lg border border-white/70 bg-white/80 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90 lg:grid-cols-[1fr_0.86fr] lg:p-8">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
            English Study Portal
          </h1>
          <p className="mt-3 text-balance text-xl font-semibold text-slate-700 dark:text-slate-200">
            Modal Verbs & Vocabulary
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Study the main modal verbs, compare tricky meanings, and practice one sentence at a time with instant feedback.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onGoTo('Exercises')}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-teal-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300 dark:focus:ring-offset-slate-950"
            >
              Practice
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onGoTo('Theory & Examples')}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-950/55 dark:text-slate-100 dark:hover:border-teal-700 dark:hover:bg-slate-900 dark:focus:ring-offset-slate-950"
            >
              Review theory
              <BookOpenCheck className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-lg dark:border-slate-700 dark:bg-slate-950">
          <img
            src={heroStudy}
            alt="Study desk with English modal verb cards"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="rounded-lg border border-teal-200 bg-teal-50/90 p-5 shadow-soft dark:border-teal-900 dark:bg-teal-950/40 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">
              New study · Unit 2
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Pronouns, habits & goals</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-700 dark:text-slate-300">
              Learn pronoun reference, can/could/should, natural habit collocations, and a focused strategy for main
              ideas and supporting details.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Reading & pronouns', 'Expanded vocabulary', 'New exercises'].map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-teal-900 dark:bg-slate-950/60 dark:text-teal-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => onGoTo('Theory & Examples', 'unit-2')}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300 dark:focus:ring-offset-slate-950"
          >
            Open Unit 2
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <article
            key={card.title}
            className="rounded-lg border border-white/70 bg-white/85 p-5 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/90"
          >
            <div className={`mb-5 h-2 w-14 rounded-full ${card.accent}`} />
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">{card.title}</h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
              {card.text}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-soft dark:border-amber-900/70 dark:bg-amber-950/35 sm:p-6">
        <div className="flex gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-300" />
          <div>
            <h2 className="text-lg font-black text-amber-950 dark:text-amber-100">Important reminder</h2>
            <p className="mt-2 leading-7 text-amber-950 dark:text-amber-100">
              Mustn’t does not mean don’t have to. Mustn’t means prohibition. Don’t have to means no necessity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Theory({ selectedCollection, onSelectCollection }) {
  return (
    <div id="theory" className="space-y-5">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-black text-slate-950 dark:text-white">Theory & Examples</h2>
      </div>
      <StudyCollectionPicker collections={theoryCollections} selectedId={selectedCollection} onSelect={onSelectCollection} />

      {selectedCollection === 'modal-verbs' && (
        <div className="grid gap-5">
          {theorySections.map((section) => (
            <TheorySection key={section.title} section={section} />
          ))}
        </div>
      )}

      {selectedCollection === 'unit-2' && <UnitTwoTheory />}

      {selectedCollection === 'vocabulary-studio' && <VocabularyCards words={vocabulary} />}
    </div>
  );
}

function Exercises({ selectedCollection, onSelectCollection }) {
  return (
    <div id="exercises" className="space-y-8">
      <div className="rounded-lg border border-white/70 bg-white/85 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90 sm:p-6">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-200">
          <Brain className="h-5 w-5" />
        </div>
        <h2 className="text-3xl font-black text-slate-950 dark:text-white">Exercises</h2>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          Read each sentence and choose the correct option. Then click Check to see your result.
        </p>
      </div>

      <StudyCollectionPicker
        collections={exerciseCollections}
        selectedId={selectedCollection}
        onSelect={onSelectCollection}
      />

      {selectedCollection === 'modal-practice' &&
        exerciseGroups.map((group) => <ExerciseSection key={group.title} group={group} />)}

      {selectedCollection === 'unit-2-practice' && <GuidedExerciseSet exercises={unitTwoExercises} />}

      <section className="rounded-lg border border-teal-200 bg-teal-50 p-5 text-teal-950 dark:border-teal-900 dark:bg-teal-950/35 dark:text-teal-100">
        <div className="flex gap-3">
          <ClipboardCheck className="mt-1 h-5 w-5 shrink-0" />
          <p className="leading-7">
            Each card checks only one answer, so you can practice at your own pace and review explanations immediately.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [activeTheoryCollection, setActiveTheoryCollection] = useState('modal-verbs');
  const [activeExerciseCollection, setActiveExerciseCollection] = useState('modal-practice');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [accentTheme, setAccentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('accentTheme');
    return colorThemes.some((theme) => theme.id === savedTheme) ? savedTheme : 'teal';
  });

  const navigateTo = (tab, collectionId) => {
    setActiveTab(tab);
    if (tab === 'Theory & Examples' && collectionId) {
      setActiveTheoryCollection(collectionId);
    }
    if (tab === 'Exercises' && collectionId) {
      setActiveExerciseCollection(collectionId);
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    document.documentElement.dataset.accent = accentTheme;
    localStorage.setItem('accentTheme', accentTheme);
  }, [accentTheme]);

  const currentView = useMemo(() => {
    if (activeTab === 'Theory & Examples') {
      return (
        <Theory selectedCollection={activeTheoryCollection} onSelectCollection={setActiveTheoryCollection} />
      );
    }
    if (activeTab === 'Exercises') {
      return (
        <Exercises selectedCollection={activeExerciseCollection} onSelectCollection={setActiveExerciseCollection} />
      );
    }
    return <Home onGoTo={navigateTo} />;
  }, [activeExerciseCollection, activeTab, activeTheoryCollection]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.22),_transparent_34%),linear-gradient(135deg,_#f6fcff_0%,_#eef8fb_46%,_#fff7ed_100%)] text-slate-950 transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.18),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#082f49_54%,_#1f2937_100%)] dark:text-white">
      <Header
        accentTheme={accentTheme}
        isDark={isDark}
        onAccentThemeChange={setAccentTheme}
        onToggleTheme={() => setIsDark((value) => !value)}
      />
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{currentView}</main>
    </div>
  );
}
