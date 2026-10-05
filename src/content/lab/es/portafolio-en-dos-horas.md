---
title: Un portafolio en dos horas
date: 2026-10-04
summary: Cómo pasé de un boceto a lápiz a un sitio publicado en una tarde, trabajando con Claude.
draft: false
translationKey: portfolio-in-two-hours
---

Llevaba semanas planeando este portafolio. El plan tenía cinco días, cuatro audiencias y una sección hero. Un domingo por la tarde lo cambié por una sola regla: mantenerlo simple y publicarlo en dos horas.

## Empezar con un boceto

Dos columnas en papel: mi nombre y el menú a la izquierda, los proyectos a la derecha. Ese dibujo fue todo el brief de diseño. Nada en el sitio terminado lo contradice.

![Boceto a mano del layout del portafolio](../../../assets/lab/sketch.png)

## Usar la hoja de vida como contenido

Le di a Claude mi hoja de vida y el boceto, y le pedí un plan, una estructura de carpetas y un prompt para Claude Code. Casi no escribí textos nuevos. El perfil, la experiencia y los tres proyectos salieron de lo que ya tenía escrito.

Escribir es la parte en la que soy más lento y la que menos estoy dispuesto a apurar. Sacarla de la ruta crítica es lo que hizo que dos horas fueran siquiera posibles.

## Responder cuatro preguntas

El idioma, una línea personal, mi correo y qué había en el dominio. Esas cuatro respuestas eran lo único que faltaba para pasar del plan a la construcción.

## Tomar pocas decisiones y parar

Una sans condensada para los títulos, una serifa para el cuerpo, ocho colores y un menú hamburguesa en móvil. De la paleta salió una regla: el amarillo es para resaltar, nunca para texto, porque no se lee sobre un fondo claro.

A mitad de camino cambié de opinión y reemplacé las dos tipografías. Costó cerca de un minuto. Cada tamaño, color y espacio ya era un token, así que el cambio fueron dos líneas en un archivo y nada más se movió. Ese es todo el argumento para construir los tokens antes que las páginas.

## Preparar los archivos

Esta fue la parte lenta. Tomar tres buenas capturas de pantalla llevó más tiempo que toda la planeación.

## Construir

La construcción siguió un orden fijo: tokens y layout, después las páginas en español, y luego una parada completa para que yo leyera el Home antes de que se escribiera nada más. El inglés, el styleguide y esta entrada vinieron después.

Las correcciones fueron pequeñas y aburridas, que es el buen resultado. Un espacio de más antes de una coma en la lista de experiencia. Un enlace de descarga apuntando al nombre de un archivo de hoja de vida que yo mismo había cambiado una hora antes.

## Y descubrir que nunca se publicó

La demora real no fue la construcción. Vercel reportó un despliegue terminado, en verde y exitoso, que no había construido absolutamente nada: tardó cero segundos y servía un 404. La conexión con GitHub se reportaba como ya conectada y no se había activado ni una vez.

Las dos cosas se veían perfectas desde el panel. La única verificación que detectó alguna de las dos fue abrir la URL en vivo y leer lo que respondía.

El sitio quedó publicado a las 16:38, ocho minutos después del plazo.

## Lo que dejé por fuera

Casos de estudio, formulario de contacto, animaciones, modo oscuro, sombras, esquinas redondeadas, una imagen social decente y casi todo mi plan original.

## Lo que aprendí

Preparar los archivos toma más tiempo que decidir cualquier cosa. Media hora de capturas contra un par de minutos por decisión de diseño.

Dejar cerrados la paleta y la escala tipográfica antes de construir significó que no quedó nada que discutir durante la construcción.

Las restricciones que escribí en el brief trabajaron más que el brief mismo. *No inventes datos sobre mí.* *Párate y muéstrame el Home antes de seguir.* Esas dos frases son la razón por la que pasé la tarde construyendo en vez de revisando.

Y la que me llevo: "Ready" no es lo mismo que funcionando. Un estado en verde es una afirmación, no una prueba.
