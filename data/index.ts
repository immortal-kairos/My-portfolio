// data/index.ts

export const DATA = {
  home: {
    hero: {
      name: "Farhan Mansoori",
      title: "AI & ML Developer | Generative AI Specialist",
      subtitle:
        "B.Tech Computer Science student at Poornima University, specializing in Generative AI and on-device NLP deployment with LangChain and Ollama.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription: "Bridging the gap between complex AI architectures and intuitive product design.",
      overview: [
        { name: "GenAI & LLMs", level: 95, icon: "lucide:brain-circuit", color: "primary" },
        { name: "SAS Ecosystem", level: 90, icon: "lucide:database", color: "secondary" },
        { name: "Data Analyst", level: 85, icon: "lucide:bar-chart-3", color: "success" },
        { name: "Cloud Engineering", level: 80, icon: "lucide:cloud", color: "warning" },
      ],
    },
    testimonials: {
      sectionTitle: "Impact & Leadership",
      sectionDescription: "Recognition from my roles as a Student Mentor and MLSA Captain.",
      items: [
        {
          id: 1,
          name: "Microsoft Speaker Session",
          role: "MLSA Event",
          content: "Successfully organized a technical session for 500+ students, bridging the gap between industry and academia.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Farhan Mansoori",
      title: "AI & ML Developer | McKinsey Forward Graduate",
      image: "/profile.png",
      description: [
        "I am a 3rd-year B.Tech student at Poornima University specializing in AI & ML with SAS (Class of 2027).",
        "My work focuses on building secure, scalable AI solutions using LangChain and Ollama, prioritizing user privacy and seamless UI/UX.",
        "I leverage my background from the McKinsey Forward Program to apply practical problem-solving and effective communication to digital workplace challenges.",
      ],
    },
    education: [
      {
        title: "B.Tech in Computer Science (AI & ML with SAS)",
        date: "2023 - 2027",
        icon: "mdi:school",
        description: "Focusing on Neural Networks, Text Analytics, and Deep Learning at Poornima University.",
      },
    ],
    experience: [
      {
        title: "Data Analyst Intern - Tata Group",
        date: "Sep 2025",
        icon: "mdi:chart-timeline-variant",
        description: "Developed AI-driven collections strategies and interactive dashboards using predictive analytics and data storytelling.",
      },
      {
        title: "Machine Learning Intern - ONGC",
        date: "Jun 2025 - Aug 2025",
        icon: "mdi:briefcase",
        description: "Engineered a production-ready Sentiment Analysis Dashboard using local LLMs to maintain enterprise data privacy.",
      },
      {
        title: "Captain - MLSA Students' Council",
        date: "Nov 2024 - Jun 2025",
        icon: "mdi:account-group",
        description: "Led a council of student ambassadors to organize technical initiatives and workshops for 500+ participants.",
      },
    ],
    technologies: {
      programming: {
        description: "Core languages for AI and data modeling.",
        tools: [
          { name: "Python", icon: "logos:python" },
          { name: "SQL", icon: "logos:postgresql" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
        ],
      },
      frameworks: {
        description: "Generative AI and Neural Network frameworks.",
        tools: [
          { name: "LangChain", icon: "logos:langchain-icon" },
          { name: "Flutter", icon: "logos:flutter" },
          { name: "TensorFlow", icon: "logos:tensorflow" },
        ],
      },
      cloud: {
        description: "Certified Google Cloud skills for infrastructure and security.",
        tools: [
          { name: "Google Cloud", icon: "logos:google-cloud" },
          { name: "Firebase", icon: "logos:firebase" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription: "A selection of my recent work in AI, NLP, and Digital Product Design",
    work: [
      {
        id: 1,
        title: "Advanced Sentiment Analysis Dashboard",
        description: "A privacy-focused application for sentiment classification using local LLMs.",
        category: "Artificial Intelligence",
        details: "Engineered using Python, LangChain, and Ollama. Developed NLP pipelines supporting batch analysis of CSV records with real-time visual feedback via Streamlit.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
        gallery: [],
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "LangChain", icon: "logos:langchain-icon" },
          { name: "Ollama", icon: "simple-icons:ollama" },
          { name: "Streamlit", icon: "logos:streamlit" },
        ],
        github: "https://github.com/immortal-kairos",
      },
      {
        id: 2,
        title: "Bibliopolium: Digital Literary Platform",
        description: "A digital resource for bibliophiles focusing on rare and unique literature.",
        category: "Web Development",
        details: "Features interactive community engagement tools, literary reviews, and historical context articles with a user-friendly interface accessible to all literacy levels.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
        gallery: [],
        tech: [
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Next.js", icon: "logos:nextjs-icon" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        ],
        github: "https://github.com/immortal-kairos",
      },
      {
        id: 3,
        title: "MYFit Gym Application",
        description: "User-centric UI/UX design featuring routine tracking and subscriptions.",
        category: "Product Design",
        details: "Developed in Figma with a focus on accessibility and responsive layouts. Includes personalized recommendations and subscription management.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
        gallery: [],
        tech: [
          { name: "Figma", icon: "logos:figma" },
          { name: "UI/UX", icon: "lucide:layout" },
        ],
        github: "https://github.com/immortal-kairos",
      },
    ],
  },
  contact: {
    heading: "Let's Connect",
    location: {
      // This is a verified Google Maps Embed URL for Jaipur
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38243301073!2d75.65047113942063!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adb4ad9fd13%3A0xc3191e17bc7868f!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1712164000000!5m2!1sen!2sin",
      address: "Jaipur, Rajasthan, India",
    },
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Farhan Mansoori",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "farhanmansoori043@gmail.com",
      phone: "+91 7737392939",
      location: "Jaipur, Rajasthan, India",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/immortal-kairos", icon: "mdi:github" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/farhan-mansoori", icon: "mdi:linkedin" },
    ],
    services: ["AI/ML Solutions", "Flutter Development", "Student Mentorship"],
  },
  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
} as const;