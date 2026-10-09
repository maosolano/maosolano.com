export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

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

export const CV_PATH: Record<Lang, string> = {
  es: "/cv-mauricio-solano-ES.pdf",
  en: "/cv-mauricio-solano-EN.pdf",
};
export const EMAIL = "mauricio.solano@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/maosolano";

export const ui = {
  es: {
    "site.name": "Mao Solano",
    "site.title": "Mao Solano — Diseñador generalista, creativo tecnológico y maker",

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
      "Diseñador generalista, creativo tecnológico y maker. Uso palabras, sistemas y tecnología para convertir ideas en productos, experiencias y proyectos creativos.",
    "home.tagline": "Diseñador generalista, creativo tecnológico y maker",
    "home.personal":
      "Uso palabras, sistemas y tecnología para convertir ideas en productos, experiencias y proyectos creativos.",
    "home.recent": "Proyectos recientes",

    "projects.title": "Proyectos",
    "projects.description":
      "Proyectos de UX, contenido y sistemas de diseño: The Bike Memory Project, Matcha y VISTA.",
    "projects.visit": "Ver el sitio",
    "projects.imageAlt": "Captura de pantalla del proyecto",
    "projects.back": "Volver a Proyectos",

    "about.title": "Sobre mí",
    "about.description":
      "Diseñador generalista con experiencia en redacción para UX en banca, ecommerce y productos digitales.",
    "about.experience": "Experiencia",
    "about.strengths": "Fortalezas",
    "about.ai": "Experimentando con IA",
    "about.cv": "Descargar CV (PDF)",
    "about.recommendations": "Recomendaciones",
    "about.recommendations.translated": "Traducido del inglés. Ver el original",
    "about.recommendations.linkedin": "Ver las recomendaciones en LinkedIn",
    "about.recommendations.prev": "Anterior",
    "about.recommendations.next": "Siguiente",

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
    "site.title": "Mao Solano — Generalist designer, creative technologist, and maker",

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
      "Generalist designer, creative technologist, and maker. I use words, systems, and technology to turn ideas into products, experiences, and creative projects.",
    "home.tagline": "Generalist designer, creative technologist, and maker",
    "home.personal":
      "I use words, systems, and technology to turn ideas into products, experiences, and creative projects.",
    "home.recent": "Recent projects",

    "projects.title": "Projects",
    "projects.description":
      "Projects in UX, content, and design systems: The Bike Memory Project, Matcha, and VISTA.",
    "projects.visit": "Visit the site",
    "projects.imageAlt": "Project screenshot",
    "projects.back": "Back to Projects",

    "about.title": "About",
    "about.description":
      "Generalist designer with experience in UX writing across banking, ecommerce, and digital products.",
    "about.experience": "Experience",
    "about.strengths": "Strengths",
    "about.ai": "Experimenting with AI",
    "about.cv": "Download CV (PDF)",
    "about.recommendations": "Recommendations",
    "about.recommendations.translated": "Translated from Spanish. See the original",
    "about.recommendations.linkedin": "See the recommendations on LinkedIn",
    "about.recommendations.prev": "Previous",
    "about.recommendations.next": "Next",

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

/**
 * The profile, as paragraphs. Taken from the CV.
 * Its closing idea ("convertir ideas en productos, experiencias y proyectos
 * creativos") is carried by `home.personal`, so it is not repeated here.
 */
export const profile = {
  es: [
    "Soy un diseñador generalista con experiencia en redacción para UX en banca, ecommerce y productos digitales.",
    "He trabajado transformando procesos complejos en experiencias claras para millones de usuarios, colaborando con equipos de diseño, producto, investigación y desarrollo.",
  ],
  en: [
    "I'm a generalist designer with experience in UX writing across banking, ecommerce, and digital products.",
    "I've worked turning complex processes into clear experiences for millions of users, collaborating with design, product, research, and engineering teams.",
  ],
} as const;

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

export const aiPractice = {
  es: [
    "Claude para exploración y validación de conceptos",
    "Diseño asistido por IA",
    "Documentación de sistemas de diseño para implementación con IA",
    "Prototipado rápido",
    "Investigación y síntesis asistida por LLMs",
  ],
  en: [
    "Claude for concept exploration and validation",
    "AI-assisted design",
    "Design system documentation for AI implementation",
    "Rapid prototyping",
    "LLM-assisted research and synthesis",
  ],
} as const;

/**
 * LinkedIn recommendations. `lang` is the language they were written in;
 * that version is verbatim, the other is our translation and the page says so.
 * Each quote is a list of paragraphs; long ones are excerpts, cuts marked
 * with […] in both languages (the full text is on LinkedIn). Role and org are
 * the person's current ones on LinkedIn; `relation` is how we worked together.
 */
export const RECOMMENDATIONS_URL = `${LINKEDIN}/details/recommendations/`;

export const recommendations: {
  name: string;
  role: string;
  org: string | null;
  lang: Lang;
  relation: Record<Lang, string>;
  quote: Record<Lang, string[]>;
}[] = [
  {
    name: "Lucas Barrientos",
    role: "Design Manager",
    org: "Zalando",
    lang: "en",
    relation: {
      es: "Supervisó mi trabajo directamente",
      en: "Managed me directly",
    },
    quote: {
      en: [
        "Mao is a highly analytical person who puts a lot of thought and dedication to everything he does. […] During our time working together, Mao laid the foundations and developed the UX writing guidelines for the team. He also provided constant support to product designers of all levels of seniority.",
      ],
      es: [
        "Mao es una persona muy analítica que pone mucha reflexión y dedicación en todo lo que hace. […] Durante el tiempo que trabajamos juntos, Mao sentó las bases y desarrolló las guías de redacción para UX del equipo. También dio apoyo constante a diseñadores de producto de todos los niveles de experiencia.",
      ],
    },
  },
  {
    name: "Anabelle Handdoek",
    role: "Software Architect",
    org: "Publicis Groupe",
    lang: "en",
    relation: {
      es: "Trabajamos en el mismo equipo",
      en: "Worked on the same team",
    },
    quote: {
      en: [
        "When I worked for him at his start-up, he always aimed for and required high-quality products, while also fostering a friendly and inspiring work environment. […] He is a genuine polymath who is knowledgeable and a pleasure to work with. 🤟",
      ],
      es: [
        "Cuando trabajé para él en su startup, siempre buscó y exigió productos de alta calidad, y al mismo tiempo fomentó un ambiente de trabajo cordial e inspirador. […] Es un verdadero polímata, con muchísimo conocimiento, y es un placer trabajar con él. 🤟",
      ],
    },
  },
  {
    name: "Alex Martinez",
    role: "Design Engineer",
    org: null,
    lang: "en",
    relation: {
      es: "Tenía un cargo superior al mío, sin supervisarme directamente",
      en: "Was senior to me, without managing me directly",
    },
    quote: {
      en: [
        "Mao is very proactive and curious to learn new things. His attitude and energy make him a great addition to any team. I had the opportunity to work with him on a big project where he supported us in Content Creation and Visual Design. He also has a keen eye for design details and vast experience in the industry. I would definitely recommend Mao to work with.",
      ],
      es: [
        "Mao es muy proactivo y tiene curiosidad por aprender cosas nuevas. Su actitud y su energía lo convierten en un gran aporte para cualquier equipo. Tuve la oportunidad de trabajar con él en un proyecto grande en el que nos apoyó en creación de contenido y diseño visual. Además, tiene buen ojo para los detalles de diseño y una amplia experiencia en la industria. Sin duda recomendaría trabajar con Mao.",
      ],
    },
  },
  {
    name: "Silvina Sarrabayruse",
    role: "Sr. Manager, Brand Protection & Product Strategy",
    org: "Mercado Libre",
    lang: "es",
    relation: {
      es: "Tenía un cargo superior al mío, sin supervisarme directamente",
      en: "Was senior to me, without managing me directly",
    },
    quote: {
      es: [
        "Trabajar con Mao en el proyecto de branded content para la producción de videos educativos para nuestro Brand Protection Program ha sido de gran valor destacando en él sus habilidades en dirección creativa, desarrollo de contenido e implementación.",
      ],
      en: [
        "Working with Mao on the branded content project producing educational videos for our Brand Protection Program was very valuable, and it showcased his skills in creative direction, content development, and implementation.",
      ],
    },
  },
];

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

/** Project ids keep their locale folder ("es/vista"); the slug drops it. */
export function projectSlug(id: string): string {
  return id.replace(/^(es|en)\//, "");
}

/** Detail page of a project, one level under the Projects page. */
export function projectPath(lang: Lang, slug: string): string {
  return `${routes[lang].projects}/${slug}`;
}

/** Case studies that ship: drafts only show up in `astro dev`. */
export const showCase = (entry: { data: { draft: boolean } }) => import.meta.env.DEV || !entry.data.draft;

/** Standalone case-study page of a project, embedded on its detail page. */
export function casePath(lang: Lang, slug: string): string {
  return `${lang === "es" ? "" : `/${lang}`}/casos/${slug}/`;
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
