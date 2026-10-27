---
description: Estándares de arquitectura, diseño UI/UX, integridad pedagógica y bucle de verificación obligatorio.
trigger: always_on
---

# Invariantes y Reglas de Ingeniería

## 1. Metodología de Trabajo y Bucle de Verificación
- **Planificación previa:** Para cualquier cambio que afecte a más de un archivo o agregue nuevas unidades, propón primero un plan breve de ejecución y espera confirmación antes de modificar el código.
- **Cierre determinista (Auto-verificación):** Ninguna tarea de código o adición de contenido está terminada hasta haber ejecutado el script de validación (`npm run lint` / `npm test`) y la compilación (`npm run build`) en la terminal integrada, comprobando que retornan código de salida `0` (sin errores).
- **Lectura de errores:** Si la validación o compilación falla, lee la salida en consola, corrige la causa raíz y vuelve a ejecutar la prueba automáticamente antes de reportar el resultado al usuario.
- **Cambios atómicos:** Modifica únicamente los archivos estrictamente necesarios para cumplir el objetivo actual. No realices refactorizaciones cosméticas en archivos no solicitados.

## 2. Arquitectura, Calidad de Código e Integridad Pedagógica
- **Principio de simplicidad (Zero-Bloat):** Prioriza componentes funcionales limpios en React y utilidades de Tailwind CSS. **Prohibido** instalar nuevas librerías o dependencias en `package.json` sin justificación técnica y autorización explícita del usuario.
- **Integridad pedagógica:** Todo ejercicio añadido debe contener:
  1. Identificador único (`id`).
  2. Oración o enunciado claro (`sentence`).
  3. Mínimo 2 opciones de respuesta sin duplicados (`options`).
  4. Respuesta correcta que coincida exactamente con una de las opciones (`correctAnswer`).
  5. Explicación didáctica en español que enseñe el porqué del acierto (`explanation`).
- **Vocabulario enriquecido:** Cada término de vocabulario debe contar con `term`, `translation`, `spanishMeaning`, `meaning` y `example`.
- **Validación automatizada:** Mantén actualizado [scripts/validate-content.mjs](file:///Users/rolando/Codex_proyectos/estudio_ingles_Nicole/scripts/validate-content.mjs) si se incorporan nuevas colecciones o unidades.

## 3. Diseño de Interfaz (UI/UX)
- **Estética:** Todo desarrollo visual debe mantener la identidad visual moderna, cálida, limpia y accesible de la aplicación (Tailwind CSS, contrastes accesibles en modo oscuro y claro, paletas de acento armoniosas).
- **Jerarquía visual:** Prioriza la legibilidad del texto en inglés y español, el espaciado adecuado entre tarjetas de ejercicios y la retroalimentación inmediata (éxito/error con colores distintivos pero no agresivos).
- **Responsive & Mobile First:** La app debe funcionar sin desbordamientos tanto en pantallas de escritorio como en tablets y móviles.

## 4. Despliegue y Seguridad Local
- **Base Path de Vite:** La aplicación se despliega en subruta `/estudio_ingles/` para GitHub Pages. Cualquier enlace a assets estáticos o configuraciones de routing debe respetar `import.meta.env.BASE_URL` o `vite.config.js`.
- **Despliegues deterministas:** El comando `npm run deploy` debe ejecutarse únicamente tras verificar que `npm run build` y `npm run lint` pasaron limpiamente.
- **Aislamiento de rutas:** Opera exclusivamente dentro del directorio raíz del proyecto.
