export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  stack: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "src/assets/ecom.png",
    stack: ["React", "Node.js", "Stripe"],
    github: "https://github.com/quan0790/crotchet-atelier-online-main",
    demo: "https://tourmaline-phoenix-9d7f4e.netlify.app/",
    featured: true, // ⭐ Featured
  },
  {
    id: 2,
    title: "FoodShare App",
    description:
      "A community donation app helping users share excess food with nearby recipients and organizations.",
    image: "src/assets/jirani.png",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/quan0790/Foodshare",
    demo: "https://jirani-eats-five.vercel.app/",
    featured: true, // ⭐ Featured
  },
  {
    id: 3,
    title: "The Residence – Rental Management System",
    description:
      "Rental management platform for properties, tenants, invoices, and digital payments.",
    image: "src/assets/residence.png",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/quan0790/The_Residence_",
    demo: "",
    featured: false,
  },
  {
  id: 4,
  title: "My Personal Portfolio",
  description:
    "A personal portfolio website showcasing my projects, skills, and professional experience. Built to highlight my expertise in web development and provide a central hub for my work.",
  image: "src/assets/portfolio.png",
  stack: ["React", "Node.js", "Express"],
  github: "https://github.com/quan0790/The_Residence_",
  demo: "", 
  featured: false,
},

  
  {
    id: 5,
    title: "Gulfstream – E-Recycle App",
    description:
      "Electronic waste recycling app enabling users to schedule pickups and track disposal progress.",
    image: "src/assets/gulfstream.png",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/quan0790/Gulfstream_",
    demo: "https://quan0790.github.io/Gulfstream_/",
    featured: true, // ⭐ Featured
  },
  {
    id: 6,
    title: "Solar Impact",
    description:
      "Solar energy monitoring dashboard with device tracking, energy analytics, and reporting.",
    image: "src/assets/solar.png",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/quan0790/solar_impact",
    demo: "https://solar-impact.vercel.app/",
    featured: true, // ⭐ Featured
  },
  {
    id: 7,
    title: "Law Firm Website",
    description:
      "Professional law firm website featuring service pages, booking, and contact automation.",
    image: "src/assets/law.png",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/quan0790/Law-Firm",
    demo: "https://quan0790.github.io/Law-Firm_/",
    featured: false,
  },
  {
    id: 8,
    title: "Rica – Finance Tool",
    description:
      "A personal finance management app for tracking transactions, budgeting, and account history.",
    image: "src/assets/rica.png",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/quan0790/Rica_",
    demo: "https://quan0790.github.io/Rica_/",
    featured: false,
  },
  {
    id: 9,
    title: "Cleaning Services Website",
    description:
      "A modern cleaning services website with service listings, pricing, contact, and booking features.",
    image: "src/assets/clean.png",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/quan0790/Clean_Swift",
    demo: "https://quan0790.github.io/Clean_Swift/",
    featured: false,
  },
];
