---
title: Un portafolio en dos horas
date: 2026-10-04
summary: Cómo pasé de un boceto a lápiz a un sitio publicado en una tarde, trabajando con Claude.
draft: false
translationKey: portfolio-in-two-hours
---

Llevaba semanas planeando este portafolio. El plan inicial tenía cinco días, cuatro audiencias y una sección hero. Un domingo por la tarde lo cambié por una sola regla: mantenerlo simple y publicarlo en dos horas.

## 1. Empezar con un boceto

Dos columnas en papel: mi nombre y el menú a la izquierda, los proyectos a la derecha. Ese dibujo fue todo el brief de diseño. Nada en el sitio terminado lo contradice.

![Boceto a mano del layout del portafolio](../../../assets/lab/sketch.png)

## 2. Usar la hoja de vida como contenido

Le di a Claude mi hoja de vida y el boceto, y le pedí un plan, una estructura de carpetas y un prompt para Claude Code.

Casi no escribí textos nuevos. El perfil, la experiencia y los tres proyectos salieron de lo que ya tenía escrito.

## 3. Responder cuatro preguntas

El idioma, una línea personal, mi correo y qué había en el dominio. Esas respuestas eran lo único que faltaba para pasar del plan a la ejecución.

## 4. Tomar pocas decisiones y parar

Para los elementos básicos del diseño tomé el camino corto: elegí una pareja de fuentes de Google Fonts y una paleta de 8 colores que había armado en [Coolors.com](https://coolors.co/).

Al pedirle a Claude que creara una guía de estilo a partir de esos elementos, salió una regla: el amarillo es para resaltar, nunca para texto, porque no se lee sobre un fondo crema.

A mitad de camino cambié de opinión y reemplacé las dos tipografías. Costó cerca de un minuto. Cada tamaño, color y espacio ya era un token, así que el cambio fueron dos líneas en un archivo y nada más se movió. Ese es todo el argumento para construir los tokens antes que las páginas.

## 5. Preparar los archivos

Tomé pantallazos de cada uno de los tres proyectos recientes en los que he trabajado con el objetivo de cumplir la meta de publicar en tiempo récord.

En una siguiente iteración, estaré trabajando el contenido de cada proyecto para mostrar el proceso que he llevado con cada uno.

## 6. Construir

La construcción siguió un orden fijo: tokens y layout, después las páginas en español, y luego una parada completa para que yo leyera el Home antes de que se escribiera nada más. El inglés, el style guide y esta entrada vinieron después.

Las correcciones fueron pequeñas y basadas en decisiones rápidas, apuntándole a cumplir con el resultado. Un espacio de más antes de una coma en la lista de experiencia. Un enlace de descarga apuntando al nombre de un archivo de hoja de vida que yo mismo había cambiado una hora antes.

## 7. Publicar

La demora real no fue la construcción. Al intentar publicar, Vercel reportó un despliegue terminado, en verde y exitoso, que no había construido absolutamente nada: tardó cero segundos y servía un 404. La conexión con GitHub se reportaba como ya conectada y no se había activado ni una vez.

Las dos cosas se veían perfectas desde el panel. La única verificación que detectó alguna de las dos fue abrir la URL en vivo y leer lo que respondía. El sitio quedó publicado a las 16:38, ocho minutos después del plazo.

## Lo que dejé por fuera

Casos de estudio, formulario de contacto, animaciones, modo oscuro, sombras, esquinas redondeadas, una imagen social decente y casi todo mi plan original.

## Lo que aprendí

- **Mejor hecho que perfecto**: durante toda mi vida como diseñador he tenido pensamientos autolimitantes por temor a que el resultado no sea perfecto. Parece medio obvio y medio tonto cuando lo escribo, pero la emoción ha sido real.
- ***Build fast, iterate faster***: este fue el mantra que me ayudó a superar el miedo a no tener un sitio "perfecto". Si quiero generar conversaciones con recruiters y conectar con oportunidades, me sirve más tener una versión funcional e ir iterando sobre la marcha.
- **Las restricciones ayudan**. Las restricciones que escribí en el brief trabajaron más que el brief mismo. *No inventes datos sobre mí.* *Párate y muéstrame el Home antes de seguir.* Esas dos frases son la razón por la que pasé la tarde construyendo en vez de revisando.
