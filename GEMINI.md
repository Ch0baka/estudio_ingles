# Project Context & Operational Guide

## 1. Descripción del Proyecto
- **Nombre:** English Study Portal (`estudio_ingles`)
- **Propósito:** Plataforma web interactiva para el estudio y práctica guiada de inglés, con módulos organizados pedagógicamente: Unit 1 (Modal Verbs), Unit 2 (Pronouns, Habits & Goals), Unit 3 (Past Simple: Was & Were), Unit 3 Test Preparation (Reading con audio nativo Listening y 8 objetivos curriculares), catálogo de 232 verbos bilingües y tarjetas de vocabulario.
- **Entorno de ejecución:** Aplicación cliente (SPA) desplegada en **GitHub Pages**: [https://ch0baka.github.io/estudio_ingles/](https://ch0baka.github.io/estudio_ingles/).
- **Repositorio Remoto:** `https://github.com/Ch0baka/estudio_ingles.git` (rama `main` para código fuente, rama `gh-pages` para despliegue).

## 2. Stack Tecnológico
- **Frontend:** React 18, Vite 6, Tailwind CSS 3, Lucide React (iconografía).
- **Audio & Assets:** Audio nativo en formato WAV (`src/assets/audio/unit3-test-listening.wav`) con reproductor HTML5 `audio`.
- **Persistencia:** `localStorage` para modo oscuro/claro (`theme`) y paleta de acentos (`accentTheme`).
- **Validación & Testing:** Script nativo de validación de datos pedagógicos en `scripts/validate-content.mjs` ejecutado vía `npm run lint` o `npm test`.
- **Despliegue:** `gh-pages` vía comando `npm run deploy`.

## 3. Comandos del Bucle de Verificación (Verification Loop)
El agente DEBE utilizar estos comandos para validar cualquier cambio antes de dar una tarea por completada:
- **Instalar dependencias:** `npm install`
- **Servidor de desarrollo:** `npm run dev`
- **Validación de contenido y reglas:** `npm run lint` (o `npm test`)
- **Compilación de producción:** `npm run build`
- **Despliegue a GitHub Pages:** `npm run deploy`

## 4. Estructura de Directorios Clave
```text
.
├── src/
│   ├── assets/        # Imágenes (hero-study.png) y audios (audio/unit3-test-listening.wav)
│   ├── components/    # Componentes de UI reutilizables (Header, Tabs, GuidedExerciseSet, TestPreparation, Verbs, etc.)
│   ├── data/          # Datos estáticos estructurados (theory.js, exercises.js, unit2.js, unit3.js, testPrep.js, verbs.js)
│   ├── App.jsx        # Componente principal con orquestación de vistas, temas y navegación
│   ├── main.jsx       # Entrada React DOM
│   └── index.css      # Estilos globales y utilidades Tailwind
├── scripts/
│   └── validate-content.mjs  # Validación de consistencia de ejercicios, opciones, explicaciones y vocabulario
├── dist/              # Salida de compilación estática para GitHub Pages
├── STATE.md           # Memoria de trabajo, estado de sincronización y handoff
├── GEMINI.md          # Mapa maestro operativo para agentes AI
└── package.json       # Configuración de dependencias y scripts de npm
```

## 5. Estado Actual y Memoria de Trabajo
- Para conocer el estado de la tarea en curso, decisiones recientes y próximos pasos, consultar siempre: `@STATE.md` (en la raíz).
- Para validar la integridad pedagógica de cualquier ejercicio o palabra añadida, ejecutar siempre: `npm run lint`.
