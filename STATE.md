# Current Working State (Handoff)

## 1. Resumen Ejecutivo del Proyecto
- **Nombre:** English Study Portal (`estudio_ingles`)
- **Propósito:** Plataforma web interactiva para el estudio y ejercitación de inglés (enfocada en Nicole), estructurada pedagógicamente en unidades de gramática, comprensión lectora, comprensión auditiva, vocabulario y catálogo de verbos bilingües.
- **URL en Producción (GitHub Pages):** [https://ch0baka.github.io/estudio_ingles/](https://ch0baka.github.io/estudio_ingles/) — **Activa y verificada (HTTP 200)**.
- **Repositorio Remoto:** [https://github.com/Ch0baka/estudio_ingles.git](https://github.com/Ch0baka/estudio_ingles.git)
- **Directorio Local:** `/Users/rolando/Codex_proyectos/estudio_ingles_Nicole`
- **Estado de Sincronización:** **100% Sincronizado**. La rama local `main` coincide de forma idéntica con `origin/main` (commit `f0170e1`), y el bundle compilado en `origin/gh-pages` (`085a18e`) coincide con el build local actual (`index-DUiUKms3.js` y `index-nYlV3baQ.css`).
- **Arquitectura:** SPA *Zero-Bloat* construida con **React 18 + Vite 6 + Tailwind CSS**, sin dependencias pesadas de terceros, con soporte de persistencia local en `localStorage` (tema claro/oscuro y paleta de colores de acento).
- **Módulos y Contenido:**
  - **Unit 1 (Modal Verbs):** Teoría estructurada de modales (*must*, *mustn't*, *have to*, *don't have to*, *should*) y 10 ejercicios interactivos guiados con retroalimentación inmediata.
  - **Unit 2 (Pronouns, Habits & Goals):** Comprensión de pronombres en contexto, rutinas saludables, metas y 18 ejercicios interactivos guiados.
  - **Unit 3 (Past Simple: Was & Were):** 24 ejercicios interactivos guiados, teoría de pasado con singular/plural y formas afirmativas/negativas/interrogativas.
  - **Unit 3 Test Preparation:** 26 preguntas organizadas en 8 objetivos de aprendizaje clave, lectura comprensiva (*Reading passage* de Emma), escucha auditiva con audio nativo en formato WAV (*Listening transcript* de Lucas) y familias de palabras (*Word families*).
  - **Catálogo Bilingüe de Verbos:** 232 verbos (116 regulares + 116 irregulares) con buscador en tiempo real, conjugaciones (infinitivo, pasado simple, participio) y traducción al español.
  - **Estudio de Vocabulario:** 49 tarjetas de vocabulario con definiciones en inglés y español, traducción y oraciones de ejemplo.
- **Bucle de Verificación:** En verde (`npm run lint` / `npm run test` pasa al 100% con 0 errores; `npm run build` compila limpiamente en < 1 segundo).

---

## 2. Completado Recientemente (Hitos Cumplidos)

### A. Harness Operativo y Guardrails Cognitivos
- [x] Sincronización integral del repositorio local con el remoto en GitHub (`origin/main` y `origin/gh-pages`).
- [x] Creación de [STATE.md](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/STATE.md) como memoria operativa y estado de relevo (handoff) del proyecto.
- [x] Configuración de [GEMINI.md](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/GEMINI.md) como mapa maestro arquitectónico y operativo del proyecto.
- [x] Configuración de [.agents/rules/standards.md](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/.agents/rules/standards.md) (`trigger: always_on`) con principios de simplicidad, diseño sobrio, bucle de verificación determinista y seguridad local.

### B. Contenido y Módulos Pedagógicos
- [x] **Unit 1 — Verbos Modales:**
  - Tarjetas teóricas detalladas en [src/data/theory.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/theory.js) (*Must vs Have to vs Don't have to vs Should*).
  - 10 ejercicios organizados por nivel de dificultad con explicaciones pedagógicas inmediatas en [src/data/exercises.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/exercises.js).
- [x] **Unit 2 — Pronombres, Hábitos y Metas:**
  - Guías conceptuales en [src/data/unit2.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/unit2.js) y componente dedicado [src/components/UnitTwoTheory.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/UnitTwoTheory.jsx).
  - 18 ejercicios prácticos sobre referencia pronominal y hábitos saludables.
- [x] **Unit 3 — Pasado Simple con Was y Were:**
  - Esquema gramatical en [src/data/unit3.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/unit3.js).
  - 24 ejercicios interactivos con feedback en [src/data/unit3Exercises.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/unit3Exercises.js).

### C. Módulo de Preparación para Examen (Unit 3 Test Prep)
- [x] Integración de 26 preguntas divididas en 6 grupos temáticos que cubren 8 objetivos curriculares en [src/data/testPrep.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/testPrep.js) y [src/components/TestPreparation.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/TestPreparation.jsx):
  1. Fluidez y comprensión lectora (texto de Emma).
  2. Idea principal e inferencias.
  3. Vocabulario en contexto (*last weekend*, *borrow*, *tired*, *classmates*).
  4. Familias de palabras (*teach/teacher*, *write/writer*, *help/helpful/helper*).
  5. Fragmentos vs. oraciones completas (*fragments vs sentences*).
  6. Pasado simple afirmativo (regulares e irregulares).
  7. Revisión ortográfica y concordancia de sujeto.
  8. Comprensión auditiva (*Listening* con el relato de Lucas).
- [x] Reproductor de audio nativo integrado con soporte para el archivo de audio [src/assets/audio/unit3-test-listening.wav](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/assets/audio/unit3-test-listening.wav), control de transcripción y paneles con identidad visual diferenciada.

### D. Catálogo Bilingüe de Verbos (232 Verbos)
- [x] Base de datos de verbos en [src/data/verbs.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/verbs.js):
  - 116 verbos irregulares con infinitivo, pasado simple, participio pasado y traducción al español.
  - 116 verbos regulares con reglas de conjugación y traducción.
- [x] Interfaz interactiva en [src/components/Verbs.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/Verbs.jsx) con buscador en vivo por cualquier columna y selector de pestañas (Irregulares / Regulares).

### E. Vocabulario y Flashcards
- [x] 49 tarjetas bilingües integradas en [src/data/vocabulary.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/vocabulary.js), [src/data/unit3.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/unit3.js) y [src/data/testPrep.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/testPrep.js).
- [x] Componente [src/components/VocabularyCards.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/VocabularyCards.jsx) con selector interactivo de tarjetas y pronunciación contextual.

### F. Interfaz Web Moderna y Sistema de Temas
- [x] Selector de modo oscuro/claro persistido en `localStorage` con [src/components/ThemeToggle.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/ThemeToggle.jsx).
- [x] Selector de color de acento con 6 paletas dinámicas (*Teal, Blue, Violet, Rose, Amber, Emerald*) en [src/components/ColorThemeSelect.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/ColorThemeSelect.jsx).
- [x] Navegación por pestañas (*Home*, *Theory & Examples*, *Exercises*, *Verbos*) en [src/components/Tabs.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/Tabs.jsx) y selector de colecciones [src/components/StudyCollectionPicker.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/StudyCollectionPicker.jsx).

---

## 3. Estado de Sincronización y Despliegue en GitHub Pages

| Aspecto | Estado Local | Estado Remoto (`origin`) | Observaciones |
| :--- | :--- | :--- | :--- |
| **Rama `main` (Código fuente)** | `f0170e1` | `f0170e1` (`origin/main`) | **Completamente sincronizado** (0 commits de diferencia). |
| **Rama `gh-pages` (Despliegue)** | Bundle local idéntico | `085a18e` (`origin/gh-pages`) | Servido en `https://ch0baka.github.io/estudio_ingles/`. |
| **Hash del Bundle JS** | `index-DUiUKms3.js` | `index-DUiUKms3.js` | Idéntico tanto en `dist/` como en el CDN de GitHub Pages. |
| **Hash del Bundle CSS** | `index-nYlV3baQ.css` | `index-nYlV3baQ.css` | Idéntico tanto en `dist/` como en el CDN de GitHub Pages. |
| **Respuesta HTTP en Producción** | N/A | **HTTP/2 200 OK** | Verificado con `curl -sI https://ch0baka.github.io/estudio_ingles/`. |

---

## 4. Estado Actual de la Base de Código

| Componente / Archivo | Rol en el Proyecto | Estado |
| :--- | :--- | :--- |
| [src/App.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/App.jsx) | Orquestador central de vistas, estado de pestañas, tema y acento | Producción Estable |
| [src/main.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/main.jsx) | Punto de entrada ReactDOM y carga de estilos globales | Producción Estable |
| [src/components/Header.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/Header.jsx) | Encabezado principal con título, selector de temas y modo oscuro | Producción Estable |
| [src/components/Tabs.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/Tabs.jsx) | Barra de navegación superior por pestañas principales | Producción Estable |
| [src/components/StudyCollectionPicker.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/StudyCollectionPicker.jsx) | Selector de submódulos y unidades dentro de Teoría y Ejercicios | Producción Estable |
| [src/components/TheorySection.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/TheorySection.jsx) | Renderizador de secciones teóricas con notas y ejemplos resaltados | Producción Estable |
| [src/components/UnitTwoTheory.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/UnitTwoTheory.jsx) | Guía teórica especializada de Unit 2 (pronombres y rutinas) | Producción Estable |
| [src/components/ExerciseSection.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/ExerciseSection.jsx) | Agrupador de ejercicios con título y descripción contextual | Producción Estable |
| [src/components/ExerciseCard.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/ExerciseCard.jsx) | Tarjeta individual de ejercicio con feedback y explicación | Producción Estable |
| [src/components/GuidedExerciseSet.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/GuidedExerciseSet.jsx) | Set de ejercicios secuenciales guiados paso a paso | Producción Estable |
| [src/components/TestPreparation.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/TestPreparation.jsx) | Suite completa de examen: Reading, Listening (audio), Word Families y preguntas | Producción Estable |
| [src/components/Verbs.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/Verbs.jsx) | Tabla bilingüe de 232 verbos con búsqueda y filtros | Producción Estable |
| [src/components/VocabularyCards.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/VocabularyCards.jsx) | Flashcards de vocabulario bilingüe con ejemplos interactivos | Producción Estable |
| [src/components/ColorThemeSelect.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/ColorThemeSelect.jsx) | Menú desplegable para alternar la paleta de colores de la app | Producción Estable |
| [src/components/ThemeToggle.jsx](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/components/ThemeToggle.jsx) | Botón para alternar modo claro / oscuro | Producción Estable |
| [src/data/theory.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/theory.js) | Contenido teórico de verbos modales (Unit 1) | Producción Estable |
| [src/data/unit2.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/unit2.js) | Colecciones teóricas y guías de Unit 2 | Producción Estable |
| [src/data/unit3.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/unit3.js) | Contenido teórico y vocabulario de Unit 3 (Was / Were) | Producción Estable |
| [src/data/exercises.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/exercises.js) | Ejercicios de modales (Unit 1) y Unit 2 (10 + 18 ejercicios) | Producción Estable |
| [src/data/unit3Exercises.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/unit3Exercises.js) | 24 ejercicios interactivos de Unit 3 (Was / Were) | Producción Estable |
| [src/data/testPrep.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/testPrep.js) | 26 preguntas, reading de Emma, listening de Lucas y vocabulario de examen | Producción Estable |
| [src/data/verbs.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/verbs.js) | 232 verbos conjugados y traducidos (116 irregulares, 116 regulares) | Producción Estable |
| [src/data/vocabulary.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/src/data/vocabulary.js) | 20 términos base de vocabulario con definiciones bilingües | Producción Estable |
| [scripts/validate-content.mjs](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/scripts/validate-content.mjs) | Script de validación e integridad pedagógica de datos | Bucle Verde (0 errores) |
| [vite.config.js](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/vite.config.js) | Configuración de Vite con base path dinámico (`/estudio_ingles/`) | Producción Estable |

---

## 5. Bucle de Verificación y Comandos de Operación Rápida

- **Iniciar servidor de desarrollo:**
  ```bash
  npm run dev
  ```
  *(Abre en `http://localhost:5173/` o la URL indicada en terminal)*.

- **Validar integridad de contenido (Lint / Tests de datos pedagógicos):**
  ```bash
  npm run lint
  # o también:
  npm test
  ```
  *(Verifica duplicidad de IDs, validez de opciones, existencia de explicaciones, consistencia de vocabulario y conteos mínimos de ejercicios)*.

- **Compilar para producción:**
  ```bash
  npm run build
  ```
  *(Genera los bundles optimizados en `dist/` con base path `/estudio_ingles/`)*.

- **Previsualizar compilación localmente:**
  ```bash
  npm run preview
  ```

- **Desplegar a GitHub Pages:**
  ```bash
  npm run deploy
  ```
  *(Ejecuta `gh-pages -d dist`, publicando automáticamente en la rama `gh-pages`)*.

---

## 6. Próximos Pasos y Hoja de Ruta Sugerida
- [ ] **Unit 4 / Módulos Futuros:** Incorporar nuevas unidades curriculares conforme avancen las necesidades de estudio.
- [ ] **Persistencia de Progreso de Ejercicios:** Almacenar en `localStorage` qué ejercicios han sido respondidos correctamente para mostrar una barra de progreso general en cada módulo.
- [ ] **Modo Quiz / Autoevaluación con Temporizador:** Añadir una modalidad de examen cronometrado para practicar antes de evaluaciones formales.
