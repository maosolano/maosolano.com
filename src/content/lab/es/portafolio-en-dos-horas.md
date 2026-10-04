---
title: Un portafolio en dos horas
date: 2026-10-04
summary: Cómo construí este sitio en una tarde, del boceto en papel al deploy.
draft: true
translationKey: portfolio-in-two-hours
---

<!--
ESQUELETO. Las notas en viñetas vienen de process/log.md.
Escribe la prosa y borra las viñetas que no uses.
-->

## El boceto

![Boceto a mano del portafolio](../../../assets/lab/sketch.png)

- Dos columnas: nombre y menú fijos a la izquierda, contenido a la derecha.
- La idea de "dibujo a lápiz sobre papel" salió antes que cualquier token.
- Qué sobrevivió del papel a la pantalla y qué no.

## El brief

- Escribí el brief completo antes de pedir una sola línea de código.
- Stack cerrado de entrada: Astro, sin framework de UI, sin Tailwind.
- Español por defecto en la raíz, inglés bajo `/en`.
- Reglas de trabajo explícitas: no inventar datos sobre mí, no agregar páginas
  que no pedí, construir en un orden concreto y parar a mostrarme el Home.
- Le di la paleta y la escala tipográfica ya decididas, no se las pedí.

## Las decisiones

- **Tokens en dos capas.** Paleta cruda abajo, nombres semánticos arriba.
  Los componentes solo tocan la capa semántica.
- **Una sola tabla de rutas.** El cambio de idioma y las etiquetas `hreflang`
  leen del mismo sitio, así que no se desincronizan al agregar una página.
- **El copy vive en `ui.ts`,** no dentro de las páginas. Español e inglés
  quedan uno al lado del otro y nada se desfasa sin que se note.
- **El menú móvil es mejora progresiva.** Sin JS el menú se ve desplegado y el
  botón no aparece. El JS lo colapsa antes del primer pintado.
- **El amarillo nunca es color de texto.** No pasa contraste sobre el crema.
  Va como subrayado grueso y como fondo en hover.
- Cambié la tipografía a mitad de camino: Oswald para títulos, Quattrocento
  para el cuerpo. Ninguna de las dos tiene cursiva real.

## Lo que quedó fuera

- Modo oscuro.
- Animaciones más allá del menú.
- Formulario de contacto.
- Sombras, degradados, esquinas redondeadas.
- Un `og:image` propio.

## Lo que sigue

- Mejorar los textos alternativos de las imágenes de proyecto.
- Primera entrada real del Lab.
- Revisar la columna de texto de `/proyectos`: la descripción completa queda
  muy angosta en el 40%.
