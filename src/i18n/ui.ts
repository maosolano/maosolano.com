export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const SITE_TITLE = "Mao Solano — UX Content Designer & Creative Strategist";

/** Short codes used by pages to declare which route they are. */
export type PageKey = "home" | "projects" | "about" | "lab" | "contact" | "styleguide";

/** The single source of truth for URLs. LangSwitch and hreflang read from here. */
export const routes: Record<Lang, Record<PageKey, string>> = {
  es: {
    home: "/",
    projects: "/proyectos",
    about: "/sobre-mi",
    lab: "/lab",
    contact: "/contacto",
    styleguide: "/styleguide",
  },
  en: {
    home: "/en",
    projects: "/en/projects",
    about: "/en/about",
    lab: "/en/lab",
    contact: "/en/contact",
    styleguide: "/styleguide",
  },
};

/** Menu order. Home is the name in the sidebar, so it is not a menu item. */
export type NavKey = "projects" | "about" | "lab" | "contact";
export const navOrder: NavKey[] = ["projects", "about", "lab", "contact"];

export const CV_PATH = "/cv-mauricio-solano.pdf";
export const EMAIL = "mauricio.solano@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/maosolano";

export const ui = {
  es: {
    "site.name": "Mao Solano",
    "site.title": SITE_TITLE,

    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.lab": "Lab",
    "nav.contact": "Contacto",
    "nav.label": "Menú principal",
    "nav.toggle": "Menú",
    "nav.skip": "Saltar al contenido",

    "lang.label": "Idioma",
    "lang.other": "EN",
    "lang.otherFull": "Ver esta página en inglés",

    "home.title": "Inicio",
    "home.description":
      "Diseñador de experiencia y estratega de contenidos. UX, sistemas de diseño e inteligencia artificial.",
    "home.profile":
      "Soy diseñador de experiencia y estratega de contenidos. He trabajado en banca, ecommerce y productos digitales, convirtiendo procesos complejos en experiencias claras para millones de personas. Hoy exploro cómo se cruzan el UX, los sistemas de diseño y la inteligencia artificial.",
    "home.personal":
      "Diseño con palabras, sistemas e IA: siempre aprendiendo, siempre iterando.",
    "home.recent": "Proyectos recientes",

    "projects.title": "Proyectos",
    "projects.description":
      "Proyectos de UX, contenido y sistemas de diseño: The Bike Memory Project, Matcha y VISTA.",
    "projects.visit": "Ver el sitio",
    "projects.imageAlt": "Captura de pantalla del proyecto",

    "about.title": "Sobre mí",
    "about.description":
      "Diseñador de experiencia y estratega de contenidos con trayectoria en banca, ecommerce y productos digitales.",
    "about.experience": "Experiencia",
    "about.strengths": "Fortalezas",
    "about.cv": "Descargar CV (PDF)",

    "lab.title": "Lab",
    "lab.description": "Notas y experimentos sobre diseño, contenido e inteligencia artificial.",
    "lab.empty": "Todavía no hay entradas publicadas.",
    "lab.back": "Volver al Lab",

    "contact.title": "Contacto",
    "contact.description": "Escríbeme por correo o encuéntrame en LinkedIn.",
    "contact.email": "Correo",
    "contact.linkedin": "LinkedIn",

    "styleguide.title": "Styleguide",
    "styleguide.description": "Referencia interna del sistema de diseño.",
  },
  en: {
    "site.name": "Mao Solano",
    "site.title": SITE_TITLE,

    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.lab": "Lab",
    "nav.contact": "Contact",
    "nav.label": "Main menu",
    "nav.toggle": "Menu",
    "nav.skip": "Skip to content",

    "lang.label": "Language",
    "lang.other": "ES",
    "lang.otherFull": "View this page in Spanish",

    "home.title": "Home",
    "home.description":
      "Experience designer and content strategist. UX, design systems, and artificial intelligence.",
    "home.profile":
      "I'm an experience designer and content strategist. I've worked in banking, ecommerce, and digital products, turning complex processes into clear experiences for millions of people. Today I explore the intersection of UX, design systems, and artificial intelligence.",
    "home.personal":
      "Designing with words, systems, and AI—always learning, always iterating.",
    "home.recent": "Recent projects",

    "projects.title": "Projects",
    "projects.description":
      "Projects in UX, content, and design systems: The Bike Memory Project, Matcha, and VISTA.",
    "projects.visit": "Visit the site",
    "projects.imageAlt": "Project screenshot",

    "about.title": "About",
    "about.description":
      "Experience designer and content strategist with a background in banking, ecommerce, and digital products.",
    "about.experience": "Experience",
    "about.strengths": "Strengths",
    "about.cv": "Download CV (PDF)",

    "lab.title": "Lab",
    "lab.description": "Notes and experiments on design, content, and artificial intelligence.",
    "lab.empty": "No entries published yet.",
    "lab.back": "Back to Lab",

    "contact.title": "Contact",
    "contact.description": "Reach me by email or find me on LinkedIn.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",

    "styleguide.title": "Styleguide",
    "styleguide.description": "Internal design system reference.",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

/** Role, org and dates. Company and product names stay unchanged. */
export const experience = {
  es: [
    { role: "Diseñador freelance (UX + IA)", org: null, dates: "julio 2026 – actualmente" },
    { role: "Traductor voluntario", org: "Oppia Foundation", dates: "junio 2025 – julio 2026" },
    { role: "UX Writer Senior", org: "Mercado Libre", dates: "octubre 2020 – abril 2025" },
    { role: "UX Writer", org: "Scotiabank Colpatria", dates: "febrero 2019 – septiembre 2020" },
    { role: "Freelance UI Designer", org: "Zemoga (hoy Monks)", dates: "febrero 2018 – enero 2019" },
  ],
  en: [
    { role: "Freelance Designer (UX + AI)", org: null, dates: "July 2026 – present" },
    { role: "Volunteer Translator", org: "Oppia Foundation", dates: "June 2025 – July 2026" },
    { role: "Senior UX Writer", org: "Mercado Libre", dates: "October 2020 – April 2025" },
    { role: "UX Writer", org: "Scotiabank Colpatria", dates: "February 2019 – September 2020" },
    { role: "Freelance UI Designer", org: "Zemoga (now Monks)", dates: "February 2018 – January 2019" },
  ],
} as const;

export const strengths = {
  es: [
    "UX Content Design",
    "Storytelling y narrativa para producto",
    "Diseño de experiencias",
    "Investigación y validación",
    "Colaboración con stakeholders",
    "IA aplicada al diseño y contenidos",
    "Sistemas de diseño y documentación",
  ],
  en: [
    "UX Content Design",
    "Storytelling and product narrative",
    "Experience design",
    "Research and validation",
    "Stakeholder collaboration",
    "AI applied to design and content",
    "Design systems and documentation",
  ],
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "en" ? "en" : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}

/** Locale-prefixed path for a known route. */
export function localePath(lang: Lang, key: PageKey): string {
  return routes[lang][key];
}

/** Date formatted in the page's language. */
export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === "es" ? "es-CO" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
