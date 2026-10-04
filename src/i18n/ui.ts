export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.lab": "Lab",
    "nav.open": "Abrir menú",
    "nav.close": "Cerrar menú",
    "lang.switch": "English",
    "lang.switch.label": "Cambiar a inglés",
    "projects.title": "Proyectos",
    "projects.subtitle": "Trabajo seleccionado",
    "projects.view": "Ver proyecto",
    "lab.title": "Lab",
    "lab.subtitle": "Experimentos y exploraciones",
    "about.title": "Sobre mí",
    "contact.title": "Contacto",
    "contact.cta": "Escríbeme",
    "footer.rights": "Todos los derechos reservados",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.lab": "Lab",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "lang.switch": "Español",
    "lang.switch.label": "Switch to Spanish",
    "projects.title": "Projects",
    "projects.subtitle": "Selected work",
    "projects.view": "View project",
    "lab.title": "Lab",
    "lab.subtitle": "Experiments and explorations",
    "about.title": "About",
    "contact.title": "Contact",
    "contact.cta": "Get in touch",
    "footer.rights": "All rights reserved",
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first in languages) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalePath(lang: Lang, path: string): string {
  const base = lang === defaultLang ? "" : `/${lang}`;
  return `${base}${path}`;
}
