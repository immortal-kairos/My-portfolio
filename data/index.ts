export const DATA = {
  home: {
    hero: {
      name: "Farhan Mansoori",
      title: "AI & ML Specialist | Flutter Developer",
      subtitle:
        "B.Tech Computer Science student at Poornima University, focusing on building intelligent systems and cross-platform mobile applications.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription: "Specialized in creating modern digital experiences with cutting-edge technologies",
      overview: [
        { name: "AI & ML", level: 90, icon: "lucide:cpu", color: "primary" },
        { name: "Mobile Dev", level: 85, icon: "lucide:smartphone", color: "secondary" },
        { name: "Python", level: 90, icon: "lucide:code", color: "success" },
        { name: "Cloud", level: 80, icon: "lucide:cloud", color: "warning" },
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
      title: "Class Representative & Student Mentor",
      image: "/profile.png",
      description: [
        "I am currently pursuing a B.Tech in Computer Science with a specialization in AI & ML at Poornima University (Class of 2027).",
        "My expertise lies at the intersection of Machine Learning and Mobile Development, where I leverage Flutter to create data-driven user experiences.",
        "Beyond coding, I serve as a Class Representative and Student Mentor, helping my peers navigate technical challenges and academic growth.",
      ],
    },
    education: [
      {
        title: "B.Tech in Computer Science (AI & ML)",
        date: "2023 - 2027",
        icon: "mdi:school",
        description: "Focusing on Neural Networks, Deep Learning, and Cybersecurity at Poornima University.",
      },
    ],
    experience: [
      {
        title: "Machine Learning Intern - ONGC",
        date: "Aug 2025",
        icon: "mdi:briefcase",
        description: "Developed ML models and gained hands-on industry experience at the Oil and Natural Gas Corporation.",
      },
      {
        title: "Captain - MLSA Student's Council",
        date: "Feb 2025",
        icon: "mdi:account-group",
        description: "Led a team to organize a Microsoft professional speaker session for over 500 students.",
      },
    ],
    technologies: {
      programming: {
        description: "Core languages and logic used in my AI and DSA projects.",
        tools: [
          { name: "Python", icon: "logos:python" },
          { name: "Dart", icon: "logos:dart" },
          { name: "C++", icon: "logos:c-plusplus" },
        ],
      },
      frameworks: {
        description: "Tools I use to build and deploy applications.",
        tools: [
          { name: "Flutter", icon: "logos:flutter" },
          { name: "TensorFlow", icon: "logos:tensorflow" },
          { name: "React", icon: "logos:react" },
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
    sectionDescription: "A selection of my recent work in AI and Mobile Development",
    work: [
      {
        id: 1,
        title: "Flutter Dating App",
        description: "A full-featured dating application with a modern UI.",
        category: "Applications",
        details: "Built with Flutter and Firebase, featuring secure authentication.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
        gallery: [],
        tech: [
          { name: "Flutter", icon: "logos:flutter" },
          { name: "Firebase", icon: "logos:firebase" },
        ],
        github: "https://github.com/yourusername",
      },
      {
        id: 2,
        title: "ML Project (ONGC)",
        description: "Predictive analysis project developed during internship.",
        category: "Artificial Intelligence",
        details: "Utilized regression models to analyze industry data for ONGC.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
        gallery: [],
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "Scikit-learn", icon: "logos:scikit-learn" },
        ],
        github: "https://github.com/yourusername",
      },
    ],
  },
  contact: {
    heading: "Let's Connect",
    location: {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.847525287!2d75.8122!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDgnNDMuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
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
      location: "Jaipur, India",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/", icon: "mdi:github" },
      { platform: "LinkedIn", url: "https://linkedin.com/", icon: "mdi:linkedin" },
    ],
    services: ["AI/ML Solutions", "Flutter Development", "Student Mentorship"],
  },
  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
} as const;