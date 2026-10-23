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

/** Menu order. Home is the name in the header, so it is not a menu item. */
export type NavKey = "projects" | "about" | "lab" | "contact";
export const navOrder: NavKey[] = ["projects", "about", "lab", "contact"];

export const CV_PATH: Record<Lang, string> = {
  es: "/cv-mauricio-solano-ES.pdf",
  en: "/cv-mauricio-solano-EN.pdf",
};
/** Attributes that open an external (http/https) or downloadable link in a new tab. */
export const linkAttrs = (href: string) =>
  /^https?:\/\//.test(href) || href.endsWith(".pdf")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export const EMAIL = "mauricio.solano@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/maosolano";

export const ui = {
  es: {
    "site.name": "Mao Solano",
    "site.title": "Mao Solano — UX Designer & AI Builder",

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
      "UX Designer & AI Builder. Diseño productos digitales que convierten problemas complejos en experiencias claras y útiles, de la comprensión del problema al prototipo funcional.",
    "home.heading": "UX Designer & AI Builder",
    "home.cta.projects": "Explorar proyectos",
    "home.cta.contact": "Hablemos",
    "home.featured": "Proyectos destacados",
    "home.aboutMore": "Conocer más",

    "projects.title": "Proyectos",
    "projects.description":
      "Proyectos de UX, contenido y sistemas de diseño: The Bike Memory Project, Matcha y VISTA.",
    "projects.visit": "Conocer detalles",
    "projects.explore": "Explorar prototipo",
    "projects.path": "Ruta de navegación",
    "projects.sections": "Secciones del proyecto",
    "projects.imageAlt": "Captura de pantalla del proyecto",
    "projects.back": "Volver a Proyectos",

    "about.title": "Sobre mí",
    "about.description":
      "Diseñador generalista entre UX, narrativa y tecnología. Experiencia en redacción para UX en banca y ecommerce, y hoy en construcción de prototipos con IA.",
    "about.experience": "Experiencia",
    "about.howIWork": "Cómo trabajo",
    "about.exploring": "Qué estoy explorando",
    "about.journey": "Mi recorrido",
    "about.recommendations.intro": "Recomendaciones de LinkedIn de quienes trabajaron conmigo.",
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
    "lab.update": "Actualización",

    "contact.title": "Contacto",
    "contact.description": "Escríbeme por correo o encuéntrame en LinkedIn.",
    "contact.email": "Correo",
    "contact.linkedin": "LinkedIn",

    "styleguide.title": "Styleguide",
    "styleguide.description": "Referencia interna del sistema de diseño.",
  },
  en: {
    "site.name": "Mao Solano",
    "site.title": "Mao Solano — UX Designer & AI Builder",

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
      "UX Designer & AI Builder. I design digital products that turn complex problems into clear, useful experiences, from understanding the problem to a working prototype.",
    "home.heading": "UX Designer & AI Builder",
    "home.cta.projects": "Explore projects",
    "home.cta.contact": "Let's talk",
    "home.featured": "Featured projects",
    "home.aboutMore": "Learn more",

    "projects.title": "Projects",
    "projects.description":
      "Projects in UX, content, and design systems: The Bike Memory Project, Matcha, and VISTA.",
    "projects.visit": "See details",
    "projects.explore": "Explore prototype",
    "projects.path": "Breadcrumb",
    "projects.sections": "Project sections",
    "projects.imageAlt": "Project screenshot",
    "projects.back": "Back to Projects",

    "about.title": "About",
    "about.description":
      "Generalist UX designer between UX, storytelling, and technology. UX writing experience in banking and ecommerce, now building prototypes with AI.",
    "about.experience": "Experience",
    "about.howIWork": "How I work",
    "about.exploring": "What I'm exploring",
    "about.journey": "My journey",
    "about.recommendations.intro": "LinkedIn recommendations from people I've worked with.",
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
    "lab.update": "Update",

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
 * The home intro, as paragraphs. The last one is the closing line and is set
 * in bold.
 */
export const intro = {
  es: [
    "Diseño productos digitales que convierten problemas complejos en experiencias claras y útiles.",
    "Combino mi experiencia en UX con IA generativa para explorar soluciones, construir prototipos funcionales y desarrollar sistemas de diseño que conectan el diseño con la implementación.",
    "De la comprensión del problema al prototipo funcional.",
  ],
  en: [
    "I design digital products that turn complex problems into clear, useful experiences.",
    "I combine my UX background with generative AI to explore solutions, build working prototypes, and develop design systems that connect design to implementation.",
    "From understanding the problem to a working prototype.",
  ],
} as const;

/** Turns **bold** marks in our own copy into <strong>, for `set:html`. */
export function bold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

/** The profile, as paragraphs. Taken from the CV. The home shows the first. */
export const profile = {
  es: [
    "Soy un **diseñador UX generalista** que trabaja en la intersección entre UX, narrativa y tecnología.",
    "Mi carrera pasa por el diseño visual, el diseño web, la transcreación y el diseño de producto digital, incluida la redacción para UX en banca y ecommerce.",
    "En Mercado Libre y Scotiabank aprendí a **convertir procesos complejos en experiencias más claras**, a colaborar con equipos multidisciplinarios y a establecer principios de diseño que ayudan a que los productos se mantengan consistentes.",
    "Hoy amplío esa experiencia con **IA generativa**. Uso herramientas como Claude y Claude Code para **explorar soluciones, construir prototipos funcionales y documentar las reglas y los sistemas** que conectan las decisiones de diseño con la implementación.",
    "Me interesa **reducir la distancia entre entender un problema, diseñar una solución y hacerla funcionar**. No se trata solo de construir más rápido, sino de usar la tecnología para explorar mejores alternativas y crear productos útiles con intención.",
  ],
  en: [
    "I'm a **generalist UX designer** working at the intersection of UX, storytelling, and technology.",
    "My career spans visual design, web design, transcreation, and digital product design, including UX Writing in banking and ecommerce.",
    "At Mercado Libre and Scotiabank, I learned to **turn complex processes into clearer experiences**, collaborate with multidisciplinary teams, and establish design principles that help products remain consistent.",
    "Today, I'm expanding that experience through **generative AI**. I use tools such as Claude and Claude Code to **explore solutions, build functional prototypes, and document the rules and systems** that connect design decisions to implementation.",
    "I'm interested in **reducing the distance between understanding a problem, designing a solution, and making it work**. Not simply building faster, but using technology to explore better alternatives and create useful products with intention.",
  ],
} as const;

/** The home's About section: two paragraphs of the profile and a shorter take on the AI one. */
export const profileShort = {
  es: [
    profile.es[0],
    profile.es[2],
    "Hoy amplío esa experiencia con **IA generativa**: uso Claude y Claude Code para **explorar soluciones, construir prototipos funcionales y documentar las reglas y los sistemas** que conectan el diseño con la implementación.",
  ],
  en: [
    profile.en[0],
    profile.en[2],
    "Today, I'm expanding that experience through **generative AI**: I use Claude and Claude Code to **explore solutions, build functional prototypes, and document the rules and systems** that connect design to implementation.",
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

/** About, block A. A short term and one line on what it means in practice. */
export const howIWork = {
  es: [
    { title: "Pensamiento de producto", text: "Entender el problema antes de definir la solución." },
    { title: "Diseño centrado en las personas", text: "Convertir procesos complejos en experiencias claras y comprensibles." },
    { title: "Pensamiento sistémico", text: "Crear reglas, componentes y documentación que ayuden a que los productos se mantengan consistentes." },
    { title: "Construcción asistida por IA", text: "Pasar de briefs y decisiones de diseño a prototipos funcionales con ayuda de la IA." },
    { title: "Experimentación", text: "Explorar alternativas, documentar lo que aprendo y mejorar a partir de la evidencia." },
  ],
  en: [
    { title: "Product thinking", text: "Understand the problem before defining the solution." },
    { title: "User-centered design", text: "Turn complex processes into clear, understandable experiences." },
    { title: "Systems thinking", text: "Create rules, components, and documentation that help products remain consistent." },
    { title: "AI-assisted building", text: "Move from briefs and design decisions to functional prototypes with the help of AI." },
    { title: "Experimentation", text: "Explore alternatives, document what I learn, and improve through evidence." },
  ],
} as const;

/** About, block B. Learning in progress, not claimed expertise. */
export const exploring = {
  es: {
    intro:
      "Esto es lo que estoy aprendiendo y practicando ahora. No lo presento como dominio, sino como la dirección en la que estoy creciendo, hacia el Design Engineering.",
    items: [
      "Desarrollo de producto asistido por IA",
      "Sistemas de diseño y design tokens",
      "Prototipado funcional con Claude Code",
      "Fundamentos de frontend, accesibilidad y validación de interfaces",
      "Flujos de diseño a código y componentes reutilizables",
    ],
  },
  en: {
    intro:
      "This is what I'm learning and practicing right now. I don't present it as mastery, but as the direction I'm growing in, toward Design Engineering.",
    items: [
      "AI-assisted product development",
      "Design systems and design tokens",
      "Functional prototyping with Claude Code",
      "Frontend fundamentals, accessibility, and interface validation",
      "Design-to-code workflows and reusable components",
    ],
  },
} as const;

/** About, block C. Stages in order; no dates here, the dated jobs are under Experience. */
export const journey = {
  es: [
    { stage: "Diseño visual", text: "Comunicar con forma, color y composición." },
    { stage: "Diseño web", text: "Llevar esas ideas a páginas y a la lógica de la navegación." },
    { stage: "Transcreación y contenido", text: "Adaptar ideas entre idiomas sin perder su intención." },
    { stage: "UX Writing", text: "Convertir procesos complejos en lenguaje claro, en banca y ecommerce." },
    { stage: "Diseño de producto y construcción con IA", text: "Conectar el problema, el diseño y un prototipo funcional." },
  ],
  en: [
    { stage: "Visual design", text: "Communicating with form, color, and composition." },
    { stage: "Web design", text: "Bringing those ideas to pages and to the logic of navigation." },
    { stage: "Transcreation and content", text: "Adapting ideas across languages without losing their intent." },
    { stage: "UX Writing", text: "Turning complex processes into clear language, in banking and ecommerce." },
    { stage: "Product design and AI-assisted building", text: "Connecting the problem, the design, and a functional prototype." },
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
  /** Shown on the About page; the rest are on LinkedIn. */
  featured: boolean;
  relation: Record<Lang, string>;
  quote: Record<Lang, string[]>;
}[] = [
  {
    name: "Lucas Barrientos",
    role: "Design Manager",
    org: "Zalando",
    lang: "en",
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
