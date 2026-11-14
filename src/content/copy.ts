import type { IconName } from "@/content/profile";
import type { TalkId } from "@/content/talks";
import type { Locale } from "@/lib/locale";

export type { Locale };

const es = {
  meta: {
    title: "Jorge Figueroa · Liderazgo de ingeniería, arquitectura y speaker",
    description:
      "Portfolio de Jorge Figueroa. Liderazgo de ingeniería y equipos, arquitectura, backend en Node.js, Go, Python y .NET, adopción de IA y speaker en AWS Guatemala. Más de 10 años en productos web.",
    ogLocale: "es_LA",
    ogTagline: "Liderazgo de equipos, arquitectura, IA y comunidad",
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
    openPhoto: "Ampliar foto",
    closePhoto: "Cerrar",
    previousPhoto: "Foto anterior",
    nextPhoto: "Foto siguiente",
    photoCount: "Foto {current} de {total}",
    talkLanguage: "",
  },
  nav: [
    { href: "#experiencia", label: "Experiencia" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#comunidad", label: "Comunidad" },
    { href: "#skills", label: "Skills" },
    { href: "#contacto", label: "Contacto" },
  ],
  sections: {
    main: "contenido",
    hero: "inicio",
    experience: "experiencia",
    projects: "proyectos",
    community: "comunidad",
    skills: "skills",
    scope: "alcance",
    contact: "contacto",
  },
  profile: {
    role: "Liderazgo de ingeniería · Arquitectura · Speaker",
    location: "Ciudad de Guatemala, Guatemala",
    summary:
      "Más de 10 años en productos web, con backend en Node.js, Go, Python y .NET. Lidero equipos alineando objetivos con producto, diseño y operaciones, defino arquitectura e impulso IA — y comparto lo aprendido como speaker y divulgador.",
    availability:
      "Abierto a roles de Engineering Management, liderazgo técnico, arquitectura de sistemas y productos con IA.",
  },
  facts: [
    { label: "Trayectoria", value: "10+ años" },
    { label: "Liderazgo", value: "Equipos y arquitectura" },
    { label: "Comunidad", value: "Speaker · AWS Guatemala" },
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
        "El BFF está en Node.js y los microservicios en Go. Con Python armé procesos serverless y scripts. Sobre lo que ya corre, diagnostico rendimiento y costos.",
        "Acompaño a un equipo multidisciplinario en calidad, seguridad, SEO y visibilidad en buscadores generativos.",
        "Investigo y divulgo para que el equipo automatice con MCP. Di talleres sobre MCP como herramientas de desarrollo (DevTools y Checkmarx), armé la revisión de PRs con IA y configuré templates con skills y rules. Trabajo con desarrollo guiado por especificaciones (constitution y guías) y Claude Code en el día a día.",
        "Integré modelos de Gemini, OpenAI y Anthropic para ampliar lo que el producto puede hacer.",
      ],
      stack: ["Next.js", "Node.js", "Go", "Python", "MCP", "Claude Code"],
    },
    {
      period: "Abr 2021 — Ago 2025",
      role: "Solutions architect",
      company: "Cliengo",
      trajectory: "Senior frontend, frontend architect y solutions architect",
      highlights: [
        "Definí la arquitectura de frontend e impulsé microfrontends con Module Federation, para que cada equipo desplegara a producción sin quedar trabado por el resto.",
        "Diseñé soluciones serverless e integré IA en el producto, para ampliar lo que podía hacer sin concentrarlo en un solo sistema.",
        "En Python desarrollé procesos serverless, scripts y microservicios en Flask.",
      ],
      stack: ["Module Federation", "Microfrontends", "Serverless", "Python", "Flask", "IA"],
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
        "Desarrollé aplicaciones en AngularJS y React. También trabajé en APIs en .NET con ASP.NET Web API y Entity Framework.",
        "El trabajo fue en modalidad outsourcing, con equipos distribuidos en distintas partes de Norteamérica.",
      ],
      stack: ["AngularJS", "React", ".NET", "Entity Framework"],
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
        "Investigo y divulgo para que los equipos automaticen con MCP, y dejo templates y guías para construir aplicaciones agénticas. En el producto integré Gemini, OpenAI y Anthropic.",
      stack: ["MCP", "Gemini", "OpenAI", "Anthropic"],
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
  communitySection: {
    title: "Comunidad",
    intro:
      "Me gusta lo que hago y disfruto compartirlo. Soy speaker activo de la comunidad de AWS Guatemala y divulgo contenido de tecnología en TikTok: llevo al escenario y a las redes lo que aprendo construyendo.",
    speakerProfileLabel: "Perfil de speaker en Sessionize",
    speakerProfileHref: "https://sessionize.com/jorge-figueroa-gt/",
    tiktokLabel: "TikTok (@jorgefi_dev)",
    tiktokHref: "https://www.tiktok.com/@jorgefi_dev",
    eventLinkLabel: "awscommunityday.gt",
    eventHref: "https://awscommunityday.gt",
  },
  talks: [
    {
      id: "aws-2025" as TalkId,
      event: "AWS Community Day Guatemala",
      date: "18 oct 2025",
      dateTime: "2025-10-18",
      venue: "Universidad Rafael Landívar, Ciudad de Guatemala",
      title: "IaC: Crea y despliega una arquitectura serverless en AWS con SST",
      summary:
        "Infraestructura como código en TypeScript tipado con SST: funciones Lambda, APIs, bases de datos y almacenamiento con Live Lambda Development para probar y depurar en local en tiempo real, sin esperar despliegues completos en cada cambio.",
      topics: ["IaC", "SST", "TypeScript", "AWS Lambda", "Serverless"],
      bannerAlt:
        "Arte oficial de la charla: AWS Community Day Guatemala, «IaC: Crea y despliega una arquitectura serverless en AWS con SST», 18 de octubre de 2025, con Jorge Figueroa.",
      photoAlts: [
        "Jorge habla con micrófono frente al escenario de la Universidad Rafael Landívar.",
        "Vista del auditorio durante la presentación, con la pantalla «¡Soy Jorge Figueroa!» sobre el escenario.",
        "Selfie de Jorge con el reconocimiento de AWS Community Day y el público saludando detrás.",
        "Jorge recibe el reconocimiento de AWS Community Day Guatemala junto a un organizador.",
      ],
    },
    {
      id: "aws-2024" as TalkId,
      event: "AWS Community Day Guatemala",
      date: "19 oct 2024",
      dateTime: "2024-10-19",
      venue: "Universidad Rafael Landívar, Ciudad de Guatemala",
      title: "Crea un chatbot con AWS Bedrock y Claude",
      summary:
        "De la integración con Amazon Bedrock y Claude 3.5 con contexto propio hasta llevarlo a producción: comparación entre App Runner y Elastic Beanstalk, endpoints con API Gateway, frontend en Amplify y CI/CD con CodeBuild y CodeDeploy.",
      topics: ["Amazon Bedrock", "Claude 3.5", "App Runner", "API Gateway", "Amplify", "CI/CD"],
      bannerAlt:
        "Arte oficial de la charla: AWS Community Day Guatemala, «Crea un chatbot con AWS Bedrock y Claude», 19 de octubre de 2024, con Jorge Figueroa.",
      photoAlts: [
        "Jorge explica frente a un salón con asistentes sentados en sus escritorios.",
        "Jorge presenta junto a la pantalla con los pasos para desplegar la app en Amplify.",
        "Jorge con la camiseta de AWS Community Day, frente a la demo del chatbot en pantalla.",
      ],
    },
  ],
  skillsSection: {
    title: "Skills",
    intro:
      "Arquitectura, servidor, IA, liderazgo de equipos y la forma en que se construye el producto.",
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
      items: [
        "Node.js",
        "Express",
        "Go",
        "Python",
        "FastAPI",
        "Django",
        "Flask",
        ".NET",
        "ASP.NET Core",
        "Entity Framework",
        "Microservicios",
      ],
    },
    {
      label: "IA",
      icon: "ai" as IconName,
      items: ["Gemini", "OpenAI", "Anthropic", "Claude Code", "SDD"],
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
    {
      label: "Management y liderazgo",
      icon: "management" as IconName,
      items: [
        "Liderazgo de equipos",
        "Alineación de objetivos individuales",
        "Mentoría y desarrollo de carrera",
        "Coordinación con Producto, Diseño y Operaciones",
      ],
    },
  ],
  scopeSection: {
    title: "Alcance",
    intro: "En un proceso de selección, esto es lo que puedo tomar desde el primer mes.",
  },
  scope: [
    {
      text: "Liderazgo de equipos: alineación de objetivos individuales, mentoría y coordinación con Producto, Diseño y Operaciones",
      icon: "management" as IconName,
    },
    {
      text: "Arquitectura del diagrama a producción, con diagnóstico de rendimiento y costos",
      icon: "architecture" as IconName,
    },
    { text: "Backend en Node.js, Go, Python o .NET: BFF, APIs y microservicios", icon: "server" as IconName },
    {
      text: "IA en el equipo y en el producto: Gemini, OpenAI y Anthropic",
      icon: "agent" as IconName,
    },
    {
      text: "DX y divulgación: talleres de MCP, templates con skills y rules, revisión de PRs con IA y SDD con constitution",
      icon: "dx" as IconName,
    },
  ],
  contact: {
    eyebrow: "Contacto",
    heading: "Si el rol cruza liderazgo de equipos, arquitectura e IA, conversemos.",
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
    title: "Jorge Figueroa · Engineering leadership, architecture & speaker",
    description:
      "Portfolio of Jorge Figueroa. Engineering leadership and management, architecture, backend in Node.js, Go, Python, and .NET, AI adoption, and speaker at AWS Guatemala. More than 10 years in web products.",
    ogLocale: "en_US",
    ogTagline: "Team leadership, architecture, AI, and community",
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
    openPhoto: "Enlarge photo",
    closePhoto: "Close",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
    photoCount: "Photo {current} of {total}",
    talkLanguage: "Talk given in Spanish",
  },
  nav: [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#community", label: "Community" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  sections: {
    main: "content",
    hero: "top",
    experience: "experience",
    projects: "projects",
    community: "community",
    skills: "skills",
    scope: "scope",
    contact: "contact",
  },
  profile: {
    role: "Engineering leadership · Architecture · Speaker",
    location: "Guatemala City, Guatemala",
    summary:
      "More than 10 years in web products, with backend work in Node.js, Go, Python, and .NET. I lead teams aligning goals across product, design, and operations, define architecture, and drive AI adoption — sharing what I learn as a speaker and content creator.",
    availability:
      "Open to Engineering Management, technical leadership, systems architecture, and AI product roles.",
  },
  facts: [
    { label: "Track record", value: "10+ years" },
    { label: "Leadership", value: "Teams and architecture" },
    { label: "Community", value: "Speaker · AWS Guatemala" },
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
        "The BFF runs on Node.js and the microservices on Go. I built serverless processes and scripts in Python. On what is already live, I diagnose performance and cost.",
        "I work with a multidisciplinary team on quality, security, SEO, and visibility in generative search.",
        "I research and share how the team can automate with MCP. I ran workshops on MCP as development tools (DevTools and Checkmarx), set up AI-assisted PR review, and configured templates with skills and rules. I work with spec-driven development (constitution and guides) and Claude Code day to day.",
        "I integrated Gemini, OpenAI, and Anthropic models to extend what the product can do.",
      ],
      stack: ["Next.js", "Node.js", "Go", "Python", "MCP", "Claude Code"],
    },
    {
      period: "Apr 2021 — Aug 2025",
      role: "Solutions architect",
      company: "Cliengo",
      trajectory: "Senior frontend, frontend architect, and solutions architect",
      highlights: [
        "I defined the frontend architecture and drove microfrontends with Module Federation, so each team could ship to production without waiting on the rest.",
        "I designed serverless solutions and brought AI into the product, so it could do more without concentrating everything in one system.",
        "In Python I built serverless processes, scripts, and Flask microservices.",
      ],
      stack: ["Module Federation", "Microfrontends", "Serverless", "Python", "Flask", "AI"],
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
        "I built applications in AngularJS and React. I also worked on .NET APIs with ASP.NET Web API and Entity Framework.",
        "The work was outsourcing, with teams distributed across North America.",
      ],
      stack: ["AngularJS", "React", ".NET", "Entity Framework"],
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
        "I research and share how teams can automate with MCP, and I leave templates and guides for building agentic applications. In the product I integrated Gemini, OpenAI, and Anthropic.",
      stack: ["MCP", "Gemini", "OpenAI", "Anthropic"],
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
  communitySection: {
    title: "Community",
    intro:
      "I like what I do and I enjoy sharing it. I'm an active speaker in the AWS Guatemala community and share tech content on TikTok: bringing what I learn by building to the stage and online.",
    speakerProfileLabel: "Speaker profile on Sessionize",
    speakerProfileHref: "https://sessionize.com/jorge-figueroa-gt/",
    tiktokLabel: "TikTok (@jorgefi_dev)",
    tiktokHref: "https://www.tiktok.com/@jorgefi_dev",
    eventLinkLabel: "awscommunityday.gt",
    eventHref: "https://awscommunityday.gt",
  },
  talks: [
    {
      id: "aws-2025" as TalkId,
      event: "AWS Community Day Guatemala",
      date: "Oct 18, 2025",
      dateTime: "2025-10-18",
      venue: "Universidad Rafael Landívar, Guatemala City",
      title: "Modern IaC: Build and Deploy a Serverless Architecture on AWS with SST",
      summary:
        "Infrastructure as code in type-safe TypeScript with SST: wiring Lambda functions, APIs, databases, and storage with Live Lambda Development to test and debug locally in real time without waiting on full cloud redeployments.",
      topics: ["IaC", "SST", "TypeScript", "AWS Lambda", "Serverless"],
      bannerAlt:
        "Official talk artwork: AWS Community Day Guatemala, “IaC: Crea y despliega una arquitectura serverless en AWS con SST”, October 18, 2025, with Jorge Figueroa.",
      photoAlts: [
        "Jorge speaks into a microphone in front of the Universidad Rafael Landívar stage.",
        "View of the hall during the talk, with the “¡Soy Jorge Figueroa!” slide above the stage.",
        "Selfie of Jorge holding the AWS Community Day award, with the audience waving behind him.",
        "Jorge receives the AWS Community Day Guatemala award next to an organizer.",
      ],
    },
    {
      id: "aws-2024" as TalkId,
      event: "AWS Community Day Guatemala",
      date: "Oct 19, 2024",
      dateTime: "2024-10-19",
      venue: "Universidad Rafael Landívar, Guatemala City",
      title: "Build and Deploy Your Own Generative AI Chatbot with Amazon Bedrock and Claude 3.5",
      summary:
        "From integrating Amazon Bedrock and Claude 3.5 with custom domain context to taking it to production: comparing App Runner and Elastic Beanstalk, securing endpoints with API Gateway, frontend delivery on Amplify, and CI/CD with CodeBuild and CodeDeploy.",
      topics: ["Amazon Bedrock", "Claude 3.5", "App Runner", "API Gateway", "Amplify", "CI/CD"],
      bannerAlt:
        "Official talk artwork: AWS Community Day Guatemala, “Crea un chatbot con AWS Bedrock y Claude”, October 19, 2024, with Jorge Figueroa.",
      photoAlts: [
        "Jorge explains to a room of attendees seated at their desks.",
        "Jorge presents next to the screen showing the steps to deploy the app on Amplify.",
        "Jorge in an AWS Community Day T-shirt, in front of the chatbot demo on screen.",
      ],
    },
  ],
  skillsSection: {
    title: "Skills",
    intro:
      "Architecture, the server, AI, team leadership, and the way the product gets built.",
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
      items: [
        "Node.js",
        "Express",
        "Go",
        "Python",
        "FastAPI",
        "Django",
        "Flask",
        ".NET",
        "ASP.NET Core",
        "Entity Framework",
        "Microservices",
      ],
    },
    {
      label: "AI",
      icon: "ai" as IconName,
      items: ["Gemini", "OpenAI", "Anthropic", "Claude Code", "SDD"],
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
    {
      label: "Management and leadership",
      icon: "management" as IconName,
      items: [
        "Team leadership",
        "Individual goal alignment",
        "Mentoring and career growth",
        "Cross-functional coordination (Product, Design, Operations)",
      ],
    },
  ],
  scopeSection: {
    title: "Scope",
    intro: "In a hiring process, this is what I can take on from the first month.",
  },
  scope: [
    {
      text: "Team leadership: aligning individual goals, mentoring, and coordinating across Product, Design, and Operations",
      icon: "management" as IconName,
    },
    {
      text: "Architecture from diagram to production, with performance and cost diagnosis",
      icon: "architecture" as IconName,
    },
    { text: "Backend in Node.js, Go, Python, or .NET: BFF, APIs, and microservices", icon: "server" as IconName },
    {
      text: "AI in the team and in the product: Gemini, OpenAI, and Anthropic",
      icon: "agent" as IconName,
    },
    {
      text: "DX and enablement: MCP workshops, templates with skills and rules, AI-assisted PR review, and SDD with a constitution",
      icon: "dx" as IconName,
    },
  ],
  contact: {
    eyebrow: "Contact",
    heading: "If the role spans team leadership, architecture, and AI, let's talk.",
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
