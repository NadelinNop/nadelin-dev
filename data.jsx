// data.jsx — Portfolio content for fictional engineer

const PERSONA = {
  name: "Nadelin Nop",
  handle: "nadelin",
  role: "Software Engineer",
  tagline:
    "Seeking research assistant roles or open to collab on any fun projects",
  location: "Melbourne, Australia",
  email: "nadelinnop19@gmail.com",
  github: "github.com/nadelinnop",
  years: "1.5",
  shipped: "12",
  papers: "2",
  skills: [
    "C#",
    "Typescript",
    "JavaScript",
    "Python",
    "PyTorch",
    "SQL",
    "Docker",
  ],
  interests: ["AI in Biology", "RAG", "NLP"],
};

const PROJECTS = [
  {
    id: "MonitorCRMS",
    name: "MonitorCRMS",
    folder: "Experience",
    year: "2024–Present",
    desc: [
      "Resolved 56+ Jira tickets spanning bug fixes and feature shipments across CRM platform",
      "Cut production support tickets on real time event-driven email module from ~6/month to zero, fixing defects in the scheduling logic and optimising slow log-write queries",
      "One of two engineers rewriting the platform from legacy ASP.NET MVC to containerised React 19 / .NET 10, re-architecting the C# backend into a modular monolith (ongoing)",
      "Contributed to code reviews and sprint planning, improving release velocity by 20% in Agile workflows",
    ],
    stack: ["C#", "TypeScript", "SQL", "Azure", "Docker"],
    role: "Graduate Software Engineer",
    art: "MonitorCRMS",
  },
  {
    id: "Qeeri.AI",
    name: "Qeeri.AI",
    folder: "Experience",
    year: "2023–2024",
    desc: [
      "Built backend services and RESTful APIs for an AI-powered educational platform using C# and ASP.NET MVC",
      "Designed Azure infrastructure using SQL Database, Blob Storage, and Azure OpenAI for personalised student feedback",
    ],
    stack: ["C#", "Azure"],
    role: "Software Engineer (Intern)",
    art: "Qeeri.AI",
  },
  {
    id: "Botum Guide",
    name: "Botum Guide",
    folder: "Experience",
    year: "2023",
    desc: [
      "Built and styled a responsive frontend using React and Tailwind CSS for an e-commerce admin dashboard",
      "Developed backend logic to manage stock inventory, CRUD operations, and admin-level user roles",
    ],
    stack: ["React", "Tailwind CSS"],
    role: "Software Engineer (Intern)",
    art: "Botum",
  },
  {
    id: "Sentiment-Based Stock Advisor",
    name: "Sentiment-Based Stock Advisor",
    folder: "Projects",
    desc: [
      "Won Most Innovative Startup at StartHack 2023 — built a real-time stock sentiment analyser",
      "Aggregated financial news headlines and scored stock tickers using NLP sentiment analysis with VADER and custom financial lexicons",
      "Visualised sentiment trends via a Flask/JavaScript web app to assist trading decisions",
    ],
    stack: ["Python", "Flask", "JavaScript", "VADER", "NLP"],
    art: "senti",
  },
  {
    id: "Stock Prediction",
    name: "Stock Prediction",
    folder: "Projects",
    desc: [
      "Built a stock price prediction model combining LSTM and ARIMA in an ensemble approach using Python and TensorFlow",
      "Implemented data preprocessing with MinMaxScaler and visualised historical trends using candlestick and box plots",
    ],
    stack: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
    repo: "https://github.com/NadelinNop/StockPredicition-",
    art: "stock",
  },
  {
    id: "Decentralised Trading Platform",
    name: "Decentralised Trading Platform",
    folder: "Projects",
    desc: [
      "Built a decentralised asset trading platform with React frontend and Node/Express backend",
      "Wrote Solidity smart contracts for secure on-chain transactions, integrated via Web3.js",
      "Implemented real-time listings and account dashboards for asset management",
    ],
    stack: ["React", "Node.js", "Express", "Solidity", "Web3.js"],
    art: "trade",
  },

  {
    id: "SafeScroll",
    name: "SafeScroll",
    folder: "Projects",
    desc: [
      "Finalist at eSafety Commissioner x MLAI 'Needle in the Hashtag' Hackathon  — built SafeScroll, an AI safety layer detecting harmful content spirals on social media",
      "Developed context-switching algorithm using LLM semantic scoring to compute user-specific harm thresholds and redirect vulnerable users toward positive content in real time",
    ],
    stack: ["Python", "NLP", "LLM", "Machine Learning"],
    art: "safescroll",
  },
];

const RESUME = {
  experience: [
    {
      role: "Graduate Software Engineer",
      company: "Monitor CRMS",
      where: "Melbourne, Australia",
      from: "2024",
      to: "Present",
      bullets: [
        "Resolved 56+ Jira tickets spanning bug fixes and feature shipments across CRM platform.",
        "Cut production support tickets on real time event-driven email module from ~6/month to zero, fixing defects in the scheduling logic and optimising slow log-write queries.",
        "One of two engineers rewriting the platform from legacy ASP.NET MVC to containerised React 19 / .NET 10, re-architecting the C# backend into a modular monolith (ongoing).",
        "Contributed to code reviews and sprint planning, improving release velocity by 20% in Agile workflows.",
      ],
    },
    {
      role: "Software Engineer (Intern)",
      company: "Qeeri AI",
      where: "Melbourne, Australia",
      from: "2023",
      to: "2024",
      bullets: [
        "Built backend services and RESTful APIs for an AI-powered educational platform using C# and ASP.NET MVC.",
        "Designed Azure infrastructure using SQL Database, Blob Storage, and Azure OpenAI for personalised student feedback.",
      ],
    },
    {
      role: "Software Engineer (Intern)",
      company: "Botum Guide",
      where: "Phnom Penh, Cambodia",
      from: "2023",
      to: "2023",
      bullets: [
        "Built and styled a responsive frontend using React and Tailwind CSS for an e-commerce admin dashboard.",
        "Developed backend logic to manage stock inventory, CRUD operations, and admin-level user roles.",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. Computer Science, minor Mathematics",
      school: "Northeastern University",
      where: "Boston, MA",
      from: "2019",
      to: "2023",
      bullets: [
        "GPA 3.86 / 4.00. Honors thesis on attention-head ablation in small LMs.",
        "TA: CS 2510 (Fundies II), CS 3500 (Object-Oriented Design).",
      ],
    },
  ],
  publications: [
    {
      title: "Sparse-Probe Attribution in Sub-7B Decoders",
      venue: "Workshop on Mechanistic Interpretability — NeurIPS '25",
      authors: "Holloway, M. & Rao, P.",
    },
    {
      title: "Tiny RAG: Recipes Below 3B Parameters",
      venue: "Pre-print, arXiv:2510.01294",
      authors: "Holloway, M., Park, J., Achebe, K.",
    },
  ],
};

const GUESTBOOK = [
  {
    who: "AnonProf",
    when: "Apr 22, 2026",
    msg: "Read your sparse-probe paper. The ablation diff plots are gorgeous.",
  },
];

Object.assign(window, { PERSONA, PROJECTS, RESUME, GUESTBOOK });
