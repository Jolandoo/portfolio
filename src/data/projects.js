// Add a new project = add a new object here.
// title/description support { fr, en }. tech is an array of short tags.
// github / demo are optional — leave empty string to hide.
export const projects = [
  {
    id: "manco-paris",
    title: { fr: "MANCO.PARIS", en: "MANCO.PARIS" },
    description: {
      fr: "Refonte complète du site d'une société de gestion d'actifs régulée AMF. Bilingue, CMS headless, formulaires de contact segmentés, animations soignées.",
      en: "Full rebuild of an AMF-regulated French asset management firm's website. Bilingual, headless CMS, segmented contact forms, polished motion design.",
    },
    tech: ["Next.js 15", "TypeScript", "Tailwind", "Sanity", "Framer Motion", "Resend"],
    github: "https://github.com/Jolandoo/manco-paris",
    demo: "https://manco.paris",
    year: "2026",
  },
  {
    id: "port-arcachon",
    title: { fr: "Port d'Arcachon", en: "Port d'Arcachon" },
    description: {
      fr: "App mobile React Native pour les plaisanciers : météo, marées avec calcul de coefficient et interpolation cosinus, plan interactif, espace utilisateur.",
      en: "React Native mobile app for boaters: weather, tides with coefficient computation and cosine interpolation, interactive map, user dashboard.",
    },
    tech: ["React Native", "Expo", "TypeScript", "TanStack Query", "Zustand"],
    github: "https://github.com/Jolandoo/port-arcachon",
    demo: "",
    year: "2026",
  },
  {
    id: "myriam-madec",
    title: { fr: "tourismearcachon.fr", en: "tourismearcachon.fr" },
    description: {
      fr: "Site vitrine pour une guide conférencière du Bassin d'Arcachon. Stack moderne, CMS autonome, animations scroll et SEO soigné.",
      en: "Showcase site for an official tour guide on the Bassin d'Arcachon. Modern stack, autonomous CMS, scroll animations and tight SEO.",
    },
    tech: ["Next.js 15", "TypeScript", "Tailwind", "Sanity", "Framer Motion"],
    github: "https://github.com/Jolandoo/myriam-madec",
    demo: "https://myriam-madec.vercel.app",
    year: "2026",
  },
  {
    id: "music-care",
    title: { fr: "Music Care", en: "Music Care" },
    description: {
      fr: "Refonte du site d'un dispositif médical de Classe I qui réduit la consommation médicamenteuse via des protocoles musicaux basés sur la neuroscience.",
      en: "Rebuild of a Class I medical device's site that reduces medication intake through neuroscience-backed music protocols.",
    },
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/Jolandoo/music-care",
    demo: "",
    year: "2026",
  },
  {
    id: "trading-bot",
    title: { fr: "Trading Bot", en: "Trading Bot" },
    description: {
      fr: "Bot algo BTC/USDT sur Binance — stratégie Golden Cross / RSI filtrée par SMA200, gestion du risque (SL/TP, sizing) et dashboard temps réel.",
      en: "Algorithmic BTC/USDT bot on Binance — Golden Cross / RSI strategy filtered by SMA200, risk management (SL/TP, sizing) and real-time dashboard.",
    },
    tech: ["Python", "FastAPI", "WebSockets", "Binance API"],
    github: "https://github.com/Jolandoo/Trading-Bot",
    demo: "",
    year: "2026",
  },
]
