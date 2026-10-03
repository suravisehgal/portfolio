/**
 * Centralized Portfolio Data for Suravi Sehgal
 * Data-driven architecture: easily update or add new projects/skills/awards
 */

export const PERSONAL_INFO = {
  name: "Suravi Sehgal",
  headline: "AI & Data Science Undergraduate | AI/ML Developer | Software Developer",
  location: "Hyderabad, India",
  university: "ICFAItech, Hyderabad",
  degree: "B.Tech in Artificial Intelligence & Data Science (2025–2029)",
  email: "suravisehgal@gmail.com",
  github: "https://github.com/suravisehgal",
  linkedin: "https://www.linkedin.com/in/suravisehgal/",
  bio: "AI & Data Science undergraduate at ICFAItech, Hyderabad, and full-stack software engineer focused on architecting resilient, production-grade intelligent systems. An active participant in tech workshops, founder roundtables, and builder hackathons. I love exchanging ideas with fellow creators—if you're building something bold at the intersection of AI, software, or data and our technical interests match, let's connect and build together.",
  collaborationHeadline: "Building something ambitious in AI or software? Let's connect.",
  collaborationText: "I regularly attend tech workshops, developer masterclasses, and founder roundtables to exchange perspectives and tackle challenging technical problems. If our technical curiosities and builder mindsets align, I would love to connect, brainstorm, and collaborate on real-world systems.",
  status: "Open to AI/ML Engineering, GenAI & Full-Stack Opportunities",
  stats: {
    repos: 9,
    hackathonWins: 4,
    aiSystems: 5,
    certifications: 4
  }
};

export const PROJECTS_DATA = [
  {
    id: "safestep",
    name: "SafeStep",
    subtitle: "AI-Powered Women's Safety & Intelligent Safe Route Navigation Platform",
    category: ["all", "ai-ml", "genai", "full-stack", "hackathons"],
    categoryLabel: "AI / GenAI & Safety",
    featured: true,
    award: "🥇 1st Place — GDG on Campus IFHE 2026",
    image: "assets/images/safestep.jpg",
    githubUrl: "https://github.com/suravisehgal/Safestep",
    liveUrl: null,
    shortDesc: "Real-time intelligent safe routing engine powered by Gemini AI, Groq LLM inference, dynamic Leaflet maps, and Firebase emergency response network.",
    detailedDesc: "SafeStep is an AI-driven women's safety platform engineered to evaluate nighttime street safety and calculate optimal, threat-minimized pedestrian routes. Leveraging Google Gemini AI and Groq high-speed inference, the system analyzes hyper-local environmental data, lighting metrics, and route risk scores in real-time. Features include an interactive Leaflet mapping engine, one-tap emergency SOS beacon, active Guardian network dispatch, automated safety check-in countdown timers, and an AI-powered realistic simulated call generator to deter street harassment.",
    technologies: [
      "Gemini AI",
      "Groq SDK",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Leaflet",
      "Firebase",
      "Framer Motion"
    ],
    architecture: {
      client: "Next.js 16 App Router with React Leaflet geospatial rendering and Framer Motion micro-interactions",
      aiCore: "Gemini 1.5/2.0 API & Groq LLaMA 3.3 for real-time corridor risk grading and contextual threat analysis",
      backend: "Firebase Authentication & Realtime Database for instantaneous SOS sync and guardian dispatch",
      safetyFeatures: "Dynamic safe-path routing, Guardian ping, Emergency Timer, and Synthetic Phone Call simulator"
    }
  },
  {
    id: "mira",
    name: "MIRA — Workspace OS",
    subtitle: "Context-Aware AI Desktop Operating System & Multi-Agent Workspace",
    category: ["all", "genai", "ai-ml", "full-stack", "hackathons"],
    categoryLabel: "Agentic AI / Desktop OS",
    featured: true,
    award: "⚡ Hackathon Autonomous Agent Prototype",
    image: "assets/images/mira.jpg",
    githubUrl: "https://github.com/suravisehgal/mira-ai_iworkspace",
    liveUrl: "https://mira-aiiworkspace-main-1jby7gn1v-luv11.vercel.app/",
    shortDesc: "A context-aware desktop operating system that connects workspace applications, orchestrates multi-step AI agent workflows, and provides Human-in-the-Loop decision approval.",
    detailedDesc: "MIRA is an agentic desktop operating system built to streamline cognitive work. Built with a sleek macOS-inspired glassmorphic shell, MIRA coordinates AI sub-agents across everyday tools through an interactive 'Agent Studio'. It features an intelligent email triage pipeline with live backend mail connector, automated document semantic summarization, persistent context memory across sessions, dynamic calendar scheduling, and strict Human-in-the-Loop checkpoints so users retain full operational control over automated actions.",
    technologies: [
      "React 19",
      "Vite",
      "TypeScript",
      "Gemini API",
      "Node.js",
      "Framer Motion",
      "Glassmorphism",
      "REST APIs"
    ],
    architecture: {
      desktopShell: "Framer Motion window manager with draggable, minimizable, maximizable floating glassmorphic windows and dynamic dock",
      agentStudio: "Multi-step reasoning pipeline that visualizes agent task graphs, tool calls, and output states",
      integrations: "Node.js email backend connector, document parsing engine, and calendar event orchestrator",
      safetyLayer: "Human-in-the-Loop (HITL) approval gates preventing autonomous execution without explicit user authorization"
    }
  },
  {
    id: "sentinel",
    name: "Sentinel (Aegis Trade)",
    subtitle: "AI Decision Intelligence for Geopolitical Energy Supply Chain Resilience",
    category: ["all", "ai-ml", "data-analytics", "full-stack"],
    categoryLabel: "Decision AI / Geopolitics",
    featured: true,
    award: "AI Decision Intelligence Engine",
    image: "assets/images/sentinel.jpg",
    githubUrl: "https://github.com/suravisehgal/Aegis-stimulation-of-global-trade",
    liveUrl: null,
    shortDesc: "Deterministic decision reactor simulating geopolitical maritime trade shocks across 6 major global corridors with an interactive 3D Earth globe.",
    detailedDesc: "Sentinel is an AI decision intelligence system designed for import-dependent energy economies facing maritime supply disruptions. The platform models 6 critical global chokepoints (Strait of Hormuz, Red Sea, Suez, Malacca, Taiwan Strait, Panama Canal), 26 strategic trade nodes, and 17 primary shipping routes. Featuring a live 3D Earth visualization (Three.js/globe.gl) with animated tanker fleets and energy arcs, Sentinel computes an instant impact cascade (~4s trace), ranks rerouting procurement tenders, calculates Strategic Petroleum Reserve (SPR) drawdown schedules, and generates audit-ready executive briefs while clearly segregating live GDELT news ingestion from simulated vessel movements.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Three.js / globe.gl",
      "GDELT Live News",
      "LLM Briefing Engine",
      "Knowledge Graph",
      "Tailwind CSS"
    ],
    architecture: {
      visualization: "Three.js & globe.gl rendering 3D Earth, animated vessel positions, and dynamic corridor arcs",
      decisionReactor: "Deterministic parameter model backtested against Abqaiq 2019, Ukraine 2022, and Red Sea 2024",
      knowledgeGraph: "26 geopolitical nodes, 17 maritime routes, and sourced commodity facts (EIA, PPAC/MoPNG)",
      governance: "Auditable calculations with interactive judge-testable sliders; LLM only translates text and formats briefs"
    }
  },
  {
    id: "side-scan-sonar",
    name: "Aqualens — Side-Scan Sonar",
    subtitle: "Deep Learning Marine Debris & Underwater Acoustic Anomaly Detection",
    category: ["all", "ai-ml", "data-analytics", "hackathons"],
    categoryLabel: "Computer Vision / Marine AI",
    featured: true,
    award: "🥈 2nd Place — Smart India Hackathon 2025",
    image: "assets/images/sonar.jpg",
    githubUrl: "https://github.com/suravisehgal/Side_Scan_Sonar",
    liveUrl: null,
    shortDesc: "Acoustic vision pipeline performing noise filtering, contrast normalization, tiling, and neural classification to detect submerged hazards and plastic debris.",
    detailedDesc: "Aqualens is an intelligent marine conservation and hydrographic survey intelligence platform developed for the Smart India Hackathon (SIH 2025, 2nd Place). The system processes high-resolution side-scan sonar (SSS) acoustic waterfall imagery to uncover submerged debris, shipwrecks, and coral reef degradation. The preprocessing pipeline applies CLAHE contrast enhancement, speckle noise reduction, radiometric normalization, and spatial tiling before feeding segments into deep convolutional neural networks, delivering high-confidence bounding boxes, geo-referenced coordinates, and automated inspection logs.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Computer Vision",
      "Sonar Preprocessing",
      "Acoustic Analytics",
      "Geo-Telemetry",
      "Tailwind CSS"
    ],
    architecture: {
      pipeline: "Speckle noise filtering → CLAHE contrast enhancement → Radiometric normalization → 256x256 window tiling",
      classification: "Deep CNN classifier categorizing metal debris, underwater wrecks, discarded nets, and coral anomalies",
      dashboard: "Survey dashboard with telemetry navigation, depth tracking, confidence graphs, and exportable reports",
      impact: "Accelerates underwater ocean surveys by 12x compared to manual acoustic echogram review"
    }
  },
  {
    id: "stock-alerts",
    name: "StockAlerts Engine",
    subtitle: "Full-Stack Real-Time Financial Market Alert & Portfolio Tracker",
    category: ["all", "full-stack", "data-analytics"],
    categoryLabel: "Full-Stack / Fintech",
    featured: false,
    award: "Production-Verified Flutter + Express + Mongo Stack",
    image: "assets/images/stockalerts.jpg",
    githubUrl: "https://github.com/suravisehgal/stock_alerts",
    liveUrl: null,
    shortDesc: "Mobile-first financial tracker delivering sub-second market threshold alerts with a hardened Node.js/Express backend and MongoDB data persistence.",
    detailedDesc: "A production-tested, full-stack financial monitoring application. StockAlerts pairs a responsive cross-platform Flutter/Dart client with an Express.js microservice architecture. It provides authenticated user sessions via JWT, custom price-breakout trigger configurations, automated email/push notifications, real-time market synchronization, and robust error recovery including in-memory database fallbacks during network isolation.",
    technologies: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Security",
      "REST APIs"
    ],
    architecture: {
      mobileApp: "Cross-platform Flutter frontend with reactive state streams and custom chart visualizations",
      backend: "Node.js REST server with async authentication hooks and robust error-handling middleware",
      database: "MongoDB document store with automated memory-server fallback for offline resilience",
      alertDispatcher: "Threshold comparison engine polling ticker price feeds and triggering instant alerts"
    }
  },
  {
    id: "planagent",
    name: "PlanAgent Platform",
    subtitle: "AI Strategic Workflow Planner & Agent Automation Showcase",
    category: ["all", "genai", "full-stack"],
    categoryLabel: "GenAI / Web Engineering",
    featured: false,
    award: "Interactive Web Experience",
    image: "assets/images/planagent.jpg",
    githubUrl: "https://github.com/suravisehgal/PlanAgent-Landing-Page",
    liveUrl: null,
    shortDesc: "High-performance interactive showcase demonstrating AI-guided productivity workflows, dynamic task decomposition, and responsive web architecture.",
    detailedDesc: "PlanAgent is an interactive web platform showcasing AI-driven productivity systems for freelancers and high-output teams. Built with clean, vanilla web standards for zero-latency loading, the application features dynamic agent workflow step visualizers, interactive pricing calculators, FAQ accordions, testimonial carousels, and responsive waitlist integrations.",
    technologies: [
      "HTML5",
      "Vanilla CSS",
      "Modern JavaScript",
      "DOM Animations",
      "Responsive Layouts",
      "Micro-Interactions"
    ],
    architecture: {
      structure: "Semantic HTML5 architecture with modular CSS design system and zero external bloat",
      interactivity: "IntersectionObserver-driven scroll reveals, dynamic testimonial carousel, and waitlist handler",
      speed: "100/100 Lighthouse performance with sub-200ms instantaneous First Contentful Paint"
    }
  },
  {
    id: "skincare-ai",
    name: "GlowAI Skincare",
    subtitle: "Smart Skincare Regimen & Ingredient Compatibility Mobile App",
    category: ["all", "full-stack", "ai-ml"],
    categoryLabel: "Mobile / AI Health",
    featured: false,
    award: "Full-Stack Mobile Engineering",
    image: "assets/images/skincare.jpg",
    githubUrl: "https://github.com/suravisehgal/Skincare",
    liveUrl: null,
    shortDesc: "Cross-platform mobile application analyzing personal skin profiles and chemical ingredient conflicts using Flutter, Dart, and MongoDB.",
    detailedDesc: "GlowAI is a mobile application engineered to help users navigate skincare routines and avoid harmful active ingredient conflicts. Featuring a clean Flutter UI, the app cross-references active ingredients against skin sensitivity matrices stored in MongoDB, generating customized morning/evening routines and safety advisories.",
    technologies: [
      "Flutter",
      "Dart",
      "MongoDB",
      "Ingredient Parsing",
      "Mobile UX",
      "Cross-Platform"
    ],
    architecture: {
      uiLayer: "Flutter Material 3 mobile application with animated routine trackers and sensitivity badges",
      database: "MongoDB script-driven database containing chemical compatibility formulas and cosmetic profiles",
      algorithm: "Rule-based ingredient contradiction matrix detecting active ingredient conflicts (e.g. AHA/BHA + Retinol)"
    }
  },
  {
    id: "class-harmony",
    name: "Class Harmony Maker",
    subtitle: "Automated Academic Scheduling & Dynamic Teacher Substitution System",
    category: ["all", "full-stack", "data-analytics"],
    categoryLabel: "Algorithm / Scheduling",
    featured: false,
    award: "Automated Allocation Engine",
    image: "assets/images/classharmony.jpg",
    githubUrl: "https://github.com/suravisehgal/Class-Harmony-Maker",
    liveUrl: null,
    shortDesc: "Algorithmic school management platform that synchronizes multi-tier timetables, eliminates class clashes, and automates emergency substitute allocations.",
    detailedDesc: "Class Harmony Maker is an educational operations system tailored for schools spanning Nursery to Grade 12. The platform automates the complex combinatorial challenge of academic scheduling: preventing teacher timetable clashes, tracking daily faculty attendance, and instantly computing optimal substitute teacher assignments during unplanned absences based on department subject matches and availability heatmaps.",
    technologies: [
      "JavaScript",
      "CSS3",
      "Scheduling Algorithms",
      "Conflict Resolution",
      "Data Synchronization",
      "Full-Stack Web"
    ],
    architecture: {
      allocationEngine: "Constraint-satisfaction scheduling algorithm preventing overlapping teacher-room assignments",
      substitutionLogic: "Instant substitute teacher matching based on subject affinity, free periods, and workload balancing",
      reporting: "Comprehensive faculty workload dashboards and daily attendance tracking logs"
    }
  },
  {
    id: "vyra",
    name: "VYRA Product Experience",
    subtitle: "Interactive Digital Experience for Retronasal Aroma Hydration",
    category: ["all", "full-stack"],
    categoryLabel: "Creative Front-End",
    featured: false,
    award: "Interactive Experience",
    image: "assets/images/vyra.jpg",
    githubUrl: "https://github.com/suravisehgal/vyra_false.pods",
    liveUrl: null,
    shortDesc: "Sleek, futuristic single-page web application featuring Space Grotesk typography, ambient glowing lighting, and interactive aroma pod selectors.",
    detailedDesc: "VYRA is a high-converting web product experience engineered for a sensory hydration water bottle with interchangeable scent pods. Built with modern vanilla front-end techniques, the site incorporates ambient atmospheric lighting, route-driven tab views, custom pod flavor selectors, and fluid responsiveness across all viewports.",
    technologies: [
      "HTML5",
      "CSS3",
      "Space Grotesk",
      "Ambient Lighting",
      "Dynamic Route Views",
      "Vanilla JS"
    ],
    architecture: {
      rendering: "Vanilla JavaScript single-page application with micro-router simulating multi-page navigation",
      aesthetics: "Multi-layered ambient CSS glow meshes, custom SVG typography accents, and glassmorphic cards"
    }
  }
];

export const SKILLS_DATA = {
  "AI, Generative AI & Machine Learning": [
    { name: "Google Gemini 1.5/2.0 API", level: 94, tag: "GenAI Core" },
    { name: "Groq SDK & Fast LLM Inference", level: 92, tag: "Inference" },
    { name: "Autonomous AI Agents & Multi-Agent Workflows", level: 88, tag: "Agents" },
    { name: "LLMs, Prompt Engineering & RAG Architecture", level: 90, tag: "GenAI" },
    { name: "Computer Vision (CNNs, Object Detection)", level: 86, tag: "Vision" },
    { name: "Side-Scan Sonar Acoustic Preprocessing", level: 89, tag: "Specialized CV" },
    { name: "Natural Language Processing (NLP)", level: 85, tag: "NLP" },
    { name: "Model Evaluation, Verification & Alignment", level: 84, tag: "Evaluation" }
  ],
  "Programming & Core Languages": [
    { name: "Python", level: 93, tag: "Primary / AI" },
    { name: "TypeScript", level: 91, tag: "Full-Stack" },
    { name: "JavaScript (ES6+)", level: 95, tag: "Web Core" },
    { name: "Dart", level: 88, tag: "Mobile / Flutter" },
    { name: "Java", level: 82, tag: "Core OOP" },
    { name: "SQL", level: 86, tag: "Database" },
    { name: "HTML5 & Modern Vanilla CSS", level: 96, tag: "Front-End" }
  ],
  "Full-Stack Web & 3D Visualization": [
    { name: "Next.js 16 (App Router, Server Actions)", level: 91, tag: "React Framework" },
    { name: "React 19", level: 93, tag: "UI Library" },
    { name: "Node.js & Express.js", level: 88, tag: "Backend APIs" },
    { name: "Three.js & globe.gl (3D Graphics)", level: 84, tag: "3D Visualization" },
    { name: "Leaflet & React-Leaflet (Mapping)", level: 90, tag: "Geospatial" },
    { name: "Framer Motion & Micro-Animations", level: 90, tag: "Motion" },
    { name: "Tailwind CSS", level: 88, tag: "Styling" }
  ],
  "Mobile Apps, Databases & Cloud": [
    { name: "Flutter (Cross-Platform Mobile)", level: 90, tag: "Mobile Apps" },
    { name: "MongoDB & Mongoose ORM", level: 90, tag: "NoSQL DB" },
    { name: "Firebase (Realtime DB & Auth)", level: 88, tag: "BaaS" },
    { name: "Google Cloud Platform (GCP)", level: 84, tag: "Cloud" },
    { name: "Microsoft Azure (AI Services)", level: 86, tag: "Cloud AI" },
    { name: "Oracle Cloud Infrastructure (OCI)", level: 88, tag: "Certified Cloud" },
    { name: "Git, GitHub & CI/CD Pipelines", level: 92, tag: "DevOps" },
    { name: "RESTful API Architecture & JWT Security", level: 89, tag: "APIs" }
  ],
  "Product Strategy & Leadership": [
    { name: "Startup Pitching & Investor Decks", level: 92, tag: "Venture Strategy" },
    { name: "Minimum Viable Distribution (MVD)", level: 90, tag: "Go-To-Market" },
    { name: "Decision-Making Unit (DMU) Mapping", level: 88, tag: "B2B Strategy" },
    { name: "Product Design & Prototyping (MVP)", level: 91, tag: "Product" },
    { name: "Cross-Functional Team Leadership", level: 89, tag: "Leadership" }
  ]
};

export const ACHIEVEMENTS_DATA = [
  {
    icon: "🥇",
    title: "1st Place — GDG on Campus IFHE 2026",
    subtitle: "SafeStep — AI-Powered Women's Safety Navigation Platform",
    description: "Awarded 1st place among top engineering teams for developing SafeStep, an intelligent safety navigation platform powered by Gemini AI, Groq LLaMA 3.3 threat analysis, live Leaflet route danger grading, and instant emergency guardian coordination.",
    category: "Hackathon Champion",
    date: "2026",
    highlight: "First Place Winner"
  },
  {
    icon: "🥈",
    title: "2nd Place — Smart India Hackathon 2025",
    subtitle: "Aqualens — AI Side-Scan Sonar Marine Debris Detection",
    description: "Secured 2nd place in the prestigious nationwide Smart India Hackathon (SIH 2025) for Aqualens. Built an advanced acoustic sonar preprocessing pipeline (CLAHE, speckle filtering, spatial tiling) and deep CNNs to automatically detect submerged debris and reefs.",
    category: "National Hackathon",
    date: "2025",
    highlight: "National Runner-Up"
  },
  {
    icon: "🏆",
    title: "Winner — Startup Pitching Competition",
    subtitle: "Venture Strategy, Product Distribution & Market Viability",
    description: "Awarded top honors at the university startup pitching competition for articulating a scalable tech venture roadmap, demonstrating Minimum Viable Distribution (MVD) strategy, and presenting defensible unit economics to a jury of founders and investors.",
    category: "Venture Pitch Winner",
    date: "2026",
    highlight: "Best Startup Pitch"
  },
  {
    icon: "⚡",
    title: "Top Innovation Award — Syntax2Code Genesis Hackathon",
    subtitle: "Algorithmic Problem Solving & Rapid System Prototyping",
    description: "Recognized among top performers at the Syntax2Code Genesis Hackathon for high-velocity algorithmic execution, clean full-stack architectural design, and resilient implementation under rigorous competitive time constraints.",
    category: "Coding Hackathon",
    date: "2026",
    highlight: "Genesis Hackathon Winner"
  }
];

export const WORKSHOPS_DATA = [
  {
    id: "echai-iiith",
    title: "eChai Ventures × IIIT Hyderabad E-Cell Founder Workshop",
    organization: "IIIT Hyderabad & eChai Ventures",
    date: "2026",
    focus: "Startup Scaling & Minimum Viable Distribution (MVD)",
    description: "Intensive founder workshop exploring the transition from MVP to MVD (Minimum Viable Distribution), mapping Decision-Making Units (DMU) in B2B software, and structuring pitch narratives around measurable customer outcomes.",
    tags: ["Startup Strategy", "MVD Framework", "Pitching", "Founder Ecosystem"]
  },
  {
    id: "gdg-techsprint",
    title: "Google Developer Groups (GDG) AI TechSprint & Masterclasses",
    organization: "GDG on Campus IFHE",
    date: "2026",
    focus: "Gemini 1.5/2.0 API & Real-Time Multimodal Intelligence",
    description: "Hands-on engineering masterclasses exploring Google Gemini API, Groq high-speed inference, and geospatial threat analysis that directly served as the foundation for SafeStep (1st Place Hackathon Winner).",
    tags: ["Gemini API", "Groq SDK", "Multimodal AI", "Geospatial Routing"]
  },
  {
    id: "msft-agentic-ai",
    title: "Microsoft Azure AI Applications & Autonomous Agents Summit",
    organization: "Microsoft Learn & Azure Community",
    date: "2026",
    focus: "Autonomous Agent Workflows & Enterprise RAG",
    description: "Deep-dive technical workshop on orchestrating autonomous agent graphs, Azure OpenAI service integrations, Semantic Kernel pipelines, and vector database indexing.",
    tags: ["AI Agents", "Azure OpenAI", "Semantic Kernel", "Enterprise RAG"]
  },
  {
    id: "ecell-ideation",
    title: "Entrepreneurship Cell (E-Cell) Founder Roundtables",
    organization: "E-Cell ICFAItech",
    date: "2026",
    focus: "Venture Design, Prototyping & Investor Relations",
    description: "Collaborative founder roundtables mentoring early-stage student builders on converting AI/ML prototypes into viable venture concepts and preparing investor pitch decks.",
    tags: ["Venture Design", "Pitch Preparation", "Mentorship", "Community Building"]
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: "oci-ai-foundations",
    badge: "☁️",
    issuer: "Oracle",
    title: "Oracle Cloud Infrastructure 2026 AI Foundations",
    subtitle: "Certified Associate",
    credentialId: "OCI-AI-2026-ASSOCIATE",
    verificationUrl: "https://catalog-education.oracle.com/",
    status: "Verified Credential",
    date: "2026",
    description: "Demonstrated expertise in core OCI AI services, generative AI fundamentals, machine learning lifecycle orchestration, and cloud infrastructure deployment.",
    skillsCovered: ["OCI Generative AI", "Large Language Models", "Vector Databases", "Model Deployment", "Cloud Infrastructure"]
  },
  {
    id: "msft-azure-agents",
    badge: "⚡",
    issuer: "Microsoft",
    title: "Microsoft AI Applications & Agents on Azure",
    subtitle: "Azure AI Verified Credential",
    credentialId: "MSFT-AZURE-AI-AGENTS-2026",
    verificationUrl: "https://learn.microsoft.com/credentials/",
    status: "Verified Credential",
    date: "2026",
    description: "Mastery in designing autonomous agent workflows, Azure OpenAI Service integrations, semantic kernel orchestration, and enterprise RAG architecture.",
    skillsCovered: ["Autonomous AI Agents", "Azure OpenAI Service", "Semantic Kernel", "Enterprise RAG", "Prompt Engineering"]
  },
  {
    id: "msft-ai-concepts",
    badge: "🧠",
    issuer: "Microsoft",
    title: "Microsoft AI Concepts for Developers",
    subtitle: "AI Developer Credential",
    credentialId: "MSFT-AI-DEV-CONCEPTS",
    verificationUrl: "https://learn.microsoft.com/credentials/",
    status: "Verified Credential",
    date: "2026",
    description: "Practical engineering validation across foundational deep learning, computer vision, natural language understanding, and responsible AI system architecture.",
    skillsCovered: ["Deep Learning Fundamentals", "Computer Vision", "Natural Language Processing", "Responsible AI", "Model Evaluation"]
  },
  {
    id: "mongodb-cert-dev",
    badge: "🍃",
    issuer: "MongoDB",
    title: "MongoDB Certified Developer / Associate",
    subtitle: "Database Engineering Credential",
    credentialId: "MONGODB-ASSOC-DEV-2026",
    verificationUrl: "https://learn.mongodb.com/",
    status: "Verified Credential",
    date: "2026",
    description: "Validation in NoSQL document database schema design, aggregation pipeline optimization, index management, and Mongoose ORM full-stack integration.",
    skillsCovered: ["NoSQL Schema Design", "Aggregation Pipelines", "Indexing & Performance", "Mongoose ORM", "Data Modeling"]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Digital Head",
    company: "Student Council / Media & Tech Directorate, ICFAItech",
    period: "January 2026 – Present",
    location: "Hyderabad, India",
    type: "Leadership",
    description: "Leading institutional digital brand architecture, web operations, creative media pipelines, and technology outreach for university flagship events.",
    points: [
      "Architecting end-to-end digital branding, creative media campaigns, and interactive web experiences across major university hackathons and summits.",
      "Directing UI/UX design, visual media pipelines, and promotional multimedia for high-profile technical conferences and developer workshops.",
      "Expanding campus digital engagement and tech community participation by over 150% across digital communication channels.",
      "Mentoring multidisciplinary student teams across frontend web design, creative content production, and digital communication pipelines."
    ],
    tech: ["Digital Strategy", "UI/UX Design", "Brand Systems", "Web Architecture", "Creative Direction"]
  },
  {
    role: "Student Coordinator",
    company: "Entrepreneurship Cell (E-Cell), ICFAItech",
    period: "August 2026 – Present",
    location: "Hyderabad, India",
    type: "Leadership",
    description: "Driving startup incubation, venture development, and founder bootcamps to cultivate a hands-on builder and entrepreneurship ecosystem on campus.",
    points: [
      "Fostering campus entrepreneurial culture by organizing venture ideation sprints, product showcases, and student founder initiatives.",
      "Mentoring student founders through early-stage ideation, product-market fit validation, and building AI-powered Minimum Viable Products (MVPs).",
      "Managing corporate partnerships, venture capital invitations, and sponsorship pipelines for university-wide entrepreneurial summits and investor demo days.",
      "Facilitating interactive speaker sessions with prominent venture capitalists, startup founders, and angel investors to foster real-world venture creation."
    ],
    tech: ["Startup Incubation", "Venture Mentorship", "Ecosystem Building", "Event Operations", "Strategic Partnerships"]
  },
  {
    role: "Software & Mobile App Developer Intern",
    company: "Infobirth Innovations Pvt. Ltd.",
    period: "June 2026 – July 2026",
    location: "Hyderabad, India",
    type: "Internship",
    description: "Engineered production mobile applications and scalable backend integrations with high-performance responsive state management.",
    points: [
      "Architected cross-platform mobile user interfaces using Flutter & Dart with high-performance responsive state management.",
      "Developed RESTful API connectors and integrated MongoDB backends with Mongoose data modeling.",
      "Implemented real-time data sync, push notification triggers, and offline caching strategies for mobile resilience.",
      "Collaborated closely with engineering leads to write maintainable code, conduct PR reviews, and optimize application lifecycle performance."
    ],
    tech: ["Flutter", "Dart", "MongoDB", "REST APIs", "Node.js", "Git"]
  },
  {
    role: "B.Tech in Artificial Intelligence & Data Science",
    company: "ICFAItech, Hyderabad (IFHE)",
    period: "2025 – 2029",
    location: "Hyderabad, India",
    type: "Education",
    description: "Specialized 4-year undergraduate program focusing on advanced machine learning, neural networks, distributed systems, and computer vision.",
    points: [
      "Rigorous coursework in Deep Learning, Data Structures & Algorithms, Natural Language Processing, Database Management, and Cloud Computing.",
      "Active leader in university technical hackathons, winning 1st Place at GDG on Campus IFHE 2026 and 2nd Place at Smart India Hackathon 2025.",
      "Hands-on research and prototyping in autonomous multi-agent systems and acoustic marine telemetry."
    ],
    tech: ["Python", "Machine Learning", "Data Science", "Computer Vision", "Algorithms"]
  },
  {
    role: "High School & Senior Secondary Education",
    company: "Delhi Public School (DPS)",
    period: "Graduated with High Academic Distinction",
    location: "Hyderabad, India",
    type: "Education",
    description: "Rigorous secondary education with foundational focus on Computer Science, Mathematics, and Physical Sciences.",
    points: [
      "Developed foundational expertise in programming logic, data structures, and computational mathematics.",
      "Actively participated in STEM olympiads, school technical symposia, and coding competitions.",
      "Awarded academic excellence for performance in Mathematics and Computer Science."
    ],
    tech: ["Computer Science", "Mathematics", "Physics", "Computational Logic"]
  }
];
