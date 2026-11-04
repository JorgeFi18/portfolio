import type { IconName } from "@/content/profile";
import type { Locale } from "@/lib/locale";

export type { Locale };

const es = {
  meta: {
    title: "Jorge Figueroa · Líder técnico",
    description:
      "Portfolio de Jorge Figueroa, líder técnico. Arquitectura, Node.js, Go y adopción de IA en producto y equipos. Más de 10 años en productos web.",
    ogLocale: "es_LA",
    ogTagline: "Arquitectura, servidor, IA y equipos",
  },
  ui: {
    skip: "Saltar al contenido",
    navLabel: "Secciones",
    language: "Idioma",
    seeExperience: "Ver experiencia",
    contact: "Contacto",
    experienceAt: "Experiencia en",
    technologies: "Tecnologías",
    current: "Actual",
    copyEmail: "Copiar email",
    copied: "Copiado",
    themeToDark: "Activar modo oscuro",
    themeToLight: "Activar modo claro",
  },
  nav: [
    { href: "#experiencia", label: "Experiencia" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#skills", label: "Skills" },
    { href: "#contacto", label: "Contacto" },
  ],
  sections: {
    main: "contenido",
    hero: "inicio",
    experience: "experiencia",
    projects: "proyectos",
    skills: "skills",
    scope: "alcance",
    contact: "contacto",
  },
  profile: {
    role: "Líder técnico",
    summary:
      "Más de 10 años en productos web. Hoy el trabajo cruza arquitectura, Node.js, microservicios en Go e IA: en el producto y en la forma en que el equipo construye.",
    availability:
      "Abierto a roles de liderazgo técnico, arquitectura de sistemas y productos con IA.",
  },
  facts: [
    { label: "Trayectoria", value: "10+ años" },
    { label: "Alcance", value: "Arquitectura e IA" },
    { label: "Hoy", value: "Liderazgo técnico" },
  ],
  experience: {
    title: "Experiencia",
    intro: "De la interfaz al sistema completo: arquitectura, servidor y adopción de IA.",
  },
  jobs: [
    {
      period: "Ago 2025 — Actualidad",
      role: "Líder técnico",
      company: "Itti",
      current: true,
      highlights: [
        "Lidero un ecommerce headless en Next.js con multi-zone. La arquitectura va del diagrama a producción.",
        "El BFF está en Node.js y los microservicios en Go. Sobre lo que ya corre, diagnostico rendimiento y costos.",
        "Acompaño a un equipo multidisciplinario en calidad, seguridad, SEO y visibilidad en buscadores generativos.",
        "Investigo y divulgo para que el equipo automatice con MCP. Di talleres sobre MCP como herramientas de desarrollo (DevTools y Checkmarx), armé la revisión de PRs con IA y configuré templates con skills y rules. Trabajo con desarrollo guiado por especificaciones (constitution y guías) y Claude Code en el día a día.",
        "Integré modelos de Gemini, OpenAI y Anthropic para ampliar lo que el producto puede hacer.",
      ],
      stack: ["Next.js", "Node.js", "Go", "MCP", "Claude Code"],
    },
    {
      period: "Abr 2021 — Ago 2025",
      role: "Solutions architect",
      company: "Cliengo",
      trajectory: "Senior frontend, frontend architect y solutions architect",
      highlights: [
        "Definí la arquitectura de frontend e impulsé microfrontends con Module Federation, para que cada equipo desplegara a producción sin quedar trabado por el resto.",
        "Diseñé soluciones serverless e integré IA en el producto, para ampliar lo que podía hacer sin concentrarlo en un solo sistema.",
      ],
      stack: ["Module Federation", "Microfrontends", "Serverless", "IA"],
    },
    {
      period: "Oct 2020 — Abr 2021",
      role: "Fullstack developer",
      company: "TELUS International Digital Solutions",
      highlights: [
        "Contribuí a la página principal de telus.com con React y Node.js.",
        "Personalicé la experiencia con Contentful como CMS y con analítica, para decidir qué mostrar a cada segmento de clientes y mejorar la conversión.",
      ],
      stack: ["React", "Node.js", "Contentful", "Analítica"],
    },
    {
      period: "Jul 2019 — Sep 2020",
      role: "Frontend developer",
      company: "Master Development",
      highlights: [
        "Mantuve y hice crecer las aplicaciones existentes en Angular.",
        "Los productos nuevos se construyeron en Vue y TypeScript. En los proyectos desde cero participé en la planificación y en las definiciones iniciales.",
      ],
      stack: ["Angular", "Vue", "TypeScript"],
    },
    {
      period: "Oct 2016 — Jul 2019",
      role: "Frontend developer",
      company: "Viaro Networks",
      highlights: [
        "Desarrollé aplicaciones en AngularJS y React.",
        "El trabajo fue en modalidad outsourcing, con equipos distribuidos en distintas partes de Norteamérica.",
      ],
      stack: ["AngularJS", "React"],
    },
  ],
  projectsSection: {
    title: "Proyectos",
    intro:
      "La plataforma, la arquitectura de frontend, la IA en el equipo y un producto de alto tráfico.",
  },
  projects: [
    {
      title: "Ecommerce headless",
      icon: "commerce" as IconName,
      context: "Itti · 2025 — Actualidad",
      summary:
        "Storefront separado del backend. Next.js con multi-zone, BFF en Node.js y microservicios en Go. La arquitectura se define en el diagrama y se sostiene en producción, con diagnóstico de rendimiento y costos.",
      stack: ["Next.js", "Multi-zone", "Node.js", "Go"],
    },
    {
      title: "Microfrontends y serverless",
      icon: "layers" as IconName,
      context: "Cliengo · 2021 — 2025",
      summary:
        "La arquitectura de frontend pasó a microfrontends con Module Federation. Cada equipo pudo publicar sin esperar un despliegue único. Las soluciones serverless y la IA abrieron capacidades nuevas del producto sin volver a concentrar todo en un solo sistema.",
      stack: ["Module Federation", "Serverless", "IA"],
    },
    {
      title: "IA y experiencia de desarrollo",
      icon: "ai" as IconName,
      context: "Equipos y producto",
      summary:
        "Investigo y divulgo para que los equipos automaticen con MCP, y dejo templates y guías para construir aplicaciones agénticas. En el producto integré Gemini, OpenAI y Anthropic. Jev entra cuando hace falta una decisión tipada dentro de esos flujos.",
      stack: ["MCP", "Gemini", "OpenAI", "Anthropic", "Jev"],
    },
    {
      title: "Personalización en telus.com",
      icon: "chart" as IconName,
      context: "TELUS International · 2020 — 2021",
      summary:
        "La home combinaba React y Node.js con contenido de Contentful. La analítica indicaba qué mostrar a cada tipo de cliente. El criterio era la conversión: qué experiencia aumenta la chance de que la persona avance.",
      stack: ["React", "Node.js", "Contentful"],
      href: "https://www.telus.com",
      hrefLabel: "Ver telus.com",
    },
  ],
  skillsSection: {
    title: "Skills",
    intro:
      "Arquitectura, servidor, IA y la forma en que el equipo construye. El frontend es una parte de ese sistema.",
  },
  skillGroups: [
    {
      label: "Arquitectura",
      icon: "architecture" as IconName,
      items: ["Del diagrama a producción", "Rendimiento", "Costos", "Sistemas distribuidos"],
    },
    {
      label: "Servidor",
      icon: "server" as IconName,
      items: ["Node.js", "Express", "Microservicios en Go"],
    },
    {
      label: "IA",
      icon: "ai" as IconName,
      items: ["Gemini", "OpenAI", "Anthropic", "Claude Code", "Jev", "SDD"],
    },
    {
      label: "DX",
      icon: "dx" as IconName,
      items: ["MCP", "Claude Code", "Templates", "Guías para aplicaciones agénticas"],
    },
    {
      label: "Frontend",
      icon: "frontend" as IconName,
      items: ["React", "Next.js", "TypeScript", "Vue", "Angular"],
    },
    {
      label: "Datos y cloud",
      icon: "data" as IconName,
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "AWS Amplify",
        "Lambda",
        "S3",
        "Azure (bases de datos)",
      ],
    },
  ],
  scopeSection: {
    title: "Alcance",
    intro: "En un proceso de selección, esto es lo que puedo tomar desde el primer mes.",
  },
  scope: [
    {
      text: "Arquitectura del diagrama a producción, con diagnóstico de rendimiento y costos",
      icon: "architecture" as IconName,
    },
    { text: "Node.js, BFF y microservicios en Go", icon: "server" as IconName },
    {
      text: "IA en el equipo y en el producto: Gemini, OpenAI, Anthropic y Jev",
      icon: "agent" as IconName,
    },
    {
      text: "DX para equipos: talleres de MCP, templates con skills y rules, revisión de PRs con IA y SDD con constitution",
      icon: "dx" as IconName,
    },
  ],
  contact: {
    eyebrow: "Contacto",
    heading: "Si el rol cruza arquitectura, servidor e IA, conversemos.",
  },
  diagram: {
    aria: "Diagrama de arquitectura: Next.js con multi-zone conecta con un BFF en Node.js, que llama a microservicios en Go con sus datos y a modelos de IA conectados por MCP.",
    caption: "Del storefront a los agentes: así se ve el trabajo hoy.",
    nodes: [
      { label: "Next.js", detail: "multi-zone" },
      { label: "BFF Node.js", detail: "orquesta el storefront" },
      { label: "Go", detail: "microservicios" },
      { label: "LLMs", detail: "Gemini · OpenAI · Anthropic" },
      { label: "Datos", detail: "PostgreSQL · Redis" },
      { label: "MCP", detail: "agentes y herramientas" },
    ],
  },
  marqueeLabel: "Tecnologías",
};

const en = {
  meta: {
    title: "Jorge Figueroa · Technical lead",
    description:
      "Portfolio of Jorge Figueroa, technical lead. Architecture, Node.js, Go, and AI adoption in products and teams. More than 10 years in web products.",
    ogLocale: "en_US",
    ogTagline: "Architecture, servers, AI, and teams",
  },
  ui: {
    skip: "Skip to content",
    navLabel: "Sections",
    language: "Language",
    seeExperience: "See experience",
    contact: "Contact",
    experienceAt: "Experience at",
    technologies: "Technologies",
    current: "Current",
    copyEmail: "Copy email",
    copied: "Copied",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
  },
  nav: [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  sections: {
    main: "content",
    hero: "top",
    experience: "experience",
    projects: "projects",
    skills: "skills",
    scope: "scope",
    contact: "contact",
  },
  profile: {
    role: "Technical lead",
    summary:
      "More than 10 years in web products. The work now spans architecture, Node.js, Go microservices, and AI: in the product and in how the team builds.",
    availability:
      "Open to technical leadership, systems architecture, and AI product roles.",
  },
  facts: [
    { label: "Track record", value: "10+ years" },
    { label: "Scope", value: "Architecture and AI" },
    { label: "Today", value: "Technical leadership" },
  ],
  experience: {
    title: "Experience",
    intro: "From the interface to the whole system: architecture, the server, and AI adoption.",
  },
  jobs: [
    {
      period: "Aug 2025 — Present",
      role: "Technical lead",
      company: "Itti",
      current: true,
      highlights: [
        "I lead a headless ecommerce on Next.js with multi-zone. Architecture goes from the diagram to production.",
        "The BFF runs on Node.js and the microservices on Go. On what is already live, I diagnose performance and cost.",
        "I work with a multidisciplinary team on quality, security, SEO, and visibility in generative search.",
        "I research and share how the team can automate with MCP. I ran workshops on MCP as development tools (DevTools and Checkmarx), set up AI-assisted PR review, and configured templates with skills and rules. I work with spec-driven development (constitution and guides) and Claude Code day to day.",
        "I integrated Gemini, OpenAI, and Anthropic models to extend what the product can do.",
      ],
      stack: ["Next.js", "Node.js", "Go", "MCP", "Claude Code"],
    },
    {
      period: "Apr 2021 — Aug 2025",
      role: "Solutions architect",
      company: "Cliengo",
      trajectory: "Senior frontend, frontend architect, and solutions architect",
      highlights: [
        "I defined the frontend architecture and drove microfrontends with Module Federation, so each team could ship to production without waiting on the rest.",
        "I designed serverless solutions and brought AI into the product, so it could do more without concentrating everything in one system.",
      ],
      stack: ["Module Federation", "Microfrontends", "Serverless", "AI"],
    },
    {
      period: "Oct 2020 — Apr 2021",
      role: "Fullstack developer",
      company: "TELUS International Digital Solutions",
      highlights: [
        "I contributed to the telus.com homepage with React and Node.js.",
        "I personalized the experience with Contentful as the CMS and with analytics, to decide what each customer segment sees and improve conversion.",
      ],
      stack: ["React", "Node.js", "Contentful", "Analytics"],
    },
    {
      period: "Jul 2019 — Sep 2020",
      role: "Frontend developer",
      company: "Master Development",
      highlights: [
        "I maintained and grew the existing Angular applications.",
        "New products were built in Vue and TypeScript. On greenfield projects I joined the planning and the initial definitions.",
      ],
      stack: ["Angular", "Vue", "TypeScript"],
    },
    {
      period: "Oct 2016 — Jul 2019",
      role: "Frontend developer",
      company: "Viaro Networks",
      highlights: [
        "I built applications in AngularJS and React.",
        "The work was outsourcing, with teams distributed across North America.",
      ],
      stack: ["AngularJS", "React"],
    },
  ],
  projectsSection: {
    title: "Projects",
    intro: "The platform, the frontend architecture, AI inside the team, and a high-traffic product.",
  },
  projects: [
    {
      title: "Headless ecommerce",
      icon: "commerce" as IconName,
      context: "Itti · 2025 — Present",
      summary:
        "Storefront separated from the backend. Next.js with multi-zone, a Node.js BFF, and Go microservices. Architecture is defined in the diagram and held up in production, with performance and cost diagnosis.",
      stack: ["Next.js", "Multi-zone", "Node.js", "Go"],
    },
    {
      title: "Microfrontends and serverless",
      icon: "layers" as IconName,
      context: "Cliengo · 2021 — 2025",
      summary:
        "The frontend architecture moved to microfrontends with Module Federation. Each team could ship without waiting on a single deploy. Serverless solutions and AI opened new product capabilities without concentrating everything in one system.",
      stack: ["Module Federation", "Serverless", "AI"],
    },
    {
      title: "AI and developer experience",
      icon: "ai" as IconName,
      context: "Teams and product",
      summary:
        "I research and share how teams can automate with MCP, and I leave templates and guides for building agentic applications. In the product I integrated Gemini, OpenAI, and Anthropic. Jev comes in when a typed decision is needed inside those flows.",
      stack: ["MCP", "Gemini", "OpenAI", "Anthropic", "Jev"],
    },
    {
      title: "Personalization on telus.com",
      icon: "chart" as IconName,
      context: "TELUS International · 2020 — 2021",
      summary:
        "The homepage combined React and Node.js with Contentful. Analytics decided what each kind of customer should see. The criterion was conversion: which experience makes it more likely that the person moves forward.",
      stack: ["React", "Node.js", "Contentful"],
      href: "https://www.telus.com",
      hrefLabel: "See telus.com",
    },
  ],
  skillsSection: {
    title: "Skills",
    intro:
      "Architecture, the server, AI, and the way the team builds. Frontend is one part of that system.",
  },
  skillGroups: [
    {
      label: "Architecture",
      icon: "architecture" as IconName,
      items: ["From diagram to production", "Performance", "Cost", "Distributed systems"],
    },
    {
      label: "Server",
      icon: "server" as IconName,
      items: ["Node.js", "Express", "Go microservices"],
    },
    {
      label: "AI",
      icon: "ai" as IconName,
      items: ["Gemini", "OpenAI", "Anthropic", "Claude Code", "Jev", "SDD"],
    },
    {
      label: "DX",
      icon: "dx" as IconName,
      items: ["MCP", "Claude Code", "Templates", "Guides for agentic applications"],
    },
    {
      label: "Frontend",
      icon: "frontend" as IconName,
      items: ["React", "Next.js", "TypeScript", "Vue", "Angular"],
    },
    {
      label: "Data and cloud",
      icon: "data" as IconName,
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "AWS Amplify",
        "Lambda",
        "S3",
        "Azure (databases)",
      ],
    },
  ],
  scopeSection: {
    title: "Scope",
    intro: "In a hiring process, this is what I can take on from the first month.",
  },
  scope: [
    {
      text: "Architecture from diagram to production, with performance and cost diagnosis",
      icon: "architecture" as IconName,
    },
    { text: "Node.js, BFF, and Go microservices", icon: "server" as IconName },
    {
      text: "AI in the team and in the product: Gemini, OpenAI, Anthropic, and Jev",
      icon: "agent" as IconName,
    },
    {
      text: "DX for teams: MCP workshops, templates with skills and rules, AI-assisted PR review, and SDD with a constitution",
      icon: "dx" as IconName,
    },
  ],
  contact: {
    eyebrow: "Contact",
    heading: "If the role spans architecture, the server, and AI, let's talk.",
  },
  diagram: {
    aria: "Architecture diagram: Next.js with multi-zone connects to a Node.js BFF, which calls Go microservices and their data, and AI models connected through MCP.",
    caption: "From the storefront to the agents: this is what the work looks like today.",
    nodes: [
      { label: "Next.js", detail: "multi-zone" },
      { label: "BFF Node.js", detail: "orchestrates the storefront" },
      { label: "Go", detail: "microservices" },
      { label: "LLMs", detail: "Gemini · OpenAI · Anthropic" },
      { label: "Data", detail: "PostgreSQL · Redis" },
      { label: "MCP", detail: "agents and tools" },
    ],
  },
  marqueeLabel: "Technologies",
} satisfies typeof es;

export type Copy = typeof es;

export const dictionaries: Record<Locale, Copy> = { es, en };
