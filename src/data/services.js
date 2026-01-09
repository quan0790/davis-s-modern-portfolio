import { Code, Server, Smartphone, Database, Cog, Cloud } from "lucide-react";



export const services = [
  {
    id: 1,
    title: "Web Application Development",
    description: "Building modern, responsive, and scalable web applications using cutting-edge technologies.",
    longDescription: "I specialize in building high-performance, scalable, and secure web applications tailored to your business needs. From initial concept to deployment, I ensure every aspect of your application is optimized for speed, usability, and reliability.",
    icon: Code,
    features: ["React & Next.js", "Vue.js & Nuxt", "TypeScript", "Responsive Design"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vite"],
    benefits: [
        "Blazing fast performance",
        "SEO optimized architecture for higher rankings",
        "Responsive design that works on all devices"
    ],
    process: [
        "Requirement Gathering & Analysis",
        "UI/UX Design & Prototyping",
        "Frontend & Backend Development",
        "Testing & QA",
        "Deployment & Maintenance"
    ]
  },
  {
    id: 2,
    title: "Backend & API Development",
    description: "Designing and implementing robust RESTful and GraphQL APIs with focus on performance and security.",
    longDescription: "The backbone of any powerful application is a robust backend. I design and implement secure, scalable, and efficient APIs that power your frontend and mobile applications. Whether you need a simple REST API or a complex microservices architecture, I've got you covered.",
    icon: Server,
    features: ["Node.js & Express", "Python & FastAPI", "GraphQL", "Authentication & Security"],
    technologies: ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "Docker", "AWS"],
    benefits: [
        "Secure data handling and authentication",
        "Scalable architecture for growing user bases",
        "Efficient API response times"
    ],
    process: [
        "Database Schema Design",
        "API Architecture Planning",
        "Development & Integration",
        "Security Audits",
        "Performance Optimization"
    ]
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications that deliver native-like experiences.",
    longDescription: "Reach your users on their favorite devices with high-quality cross-platform mobile applications. using React Native and Flutter, I build apps that provide a native look and feel on both iOS and Android from a single codebase.",
    icon: Smartphone,
    features: ["React Native", "Flutter", "iOS & Android", "Push Notifications"],
     technologies: ["React Native", "Flutter", "Expo", "Firebase", "Redux Toolkit"],
    benefits: [
        "Cost-effective cross-platform development",
        "Native-like performance and animations",
        "Faster time to market"
    ],
    process: [
        "Mobile Strategy & Consultation",
        "UI/UX Design for Mobile",
        "App Development",
        "App Store Submission Assistance"
    ]
  },
  {
    id: 4,
    title: "Database Design",
    description: "Architecting efficient database solutions optimized for your application's specific needs.",
    longDescription: "Data is the most valuable asset of your business. I design efficient, normalized, and scalable database schemas that ensure data integrity and fast retrieval speeds, whether you're using SQL or NoSQL databases.",
    icon: Database,
    features: ["PostgreSQL & MySQL", "MongoDB & Redis", "Data Modeling", "Query Optimization"],
     technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Mongoose"],
    benefits: [
        "Optimized query performance",
        "Data integrity and security",
        "Scalable storage solutions"
    ],
    process: [
        "Data Requirement Analysis",
        "Conceptual & Logical Modeling",
        "Physical Implementation",
        "Indexing & Optimization"
    ]
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Designing engaging and intuitive interfaces that enhance user experience.",
    longDescription: "Great software starts with great design. I create intuitive, user-centric designs that not only look amazing but also guide users effortlessly through your application. My designs focus on usability, accessibility, and conversion.",
    icon: Cog,
    features: ["User Interface Design", "User Experience Principles", "Prototyping & Wireframes", "Usability Testing"],
     technologies: ["Figma", "Adobe XD", "Sketch", "Protopie"],
    benefits: [
        "Higher user engagement and retention",
        "Clear and intuitive navigation",
        "Consistent brand identity"
    ],
    process: [
        "User Research & Personas",
        "Wireframing & Information Architecture",
        "High-Fidelity Prototyping",
        "User Testing & Iteration"
    ]
  },
  {
    id: 6,
    title: "Graphic Design",
    description: "Creating visually appealing graphics, branding, and creative assets using modern design tools.",
    longDescription: "Establish a strong visual identity with professional graphic design services. From logos and branding materials to social media assets and marketing collateral, I help your brand stand out in a crowded marketplace.",
    icon: Cog,
    features: ["Canva", "Branding & Visual Identity", "Illustrations & Icons", "Marketing Materials"],
     technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Indesign"],
    benefits: [
        "Professional and memorable brand image",
        "Consistent visual language",
        "Eye-catching marketing materials"
    ],
    process: [
        "Brand Strategy Session",
        "Concept Development",
        "Design & Refinement",
        "Final Asset Delivery"
    ]
  },
  {
    id: 7,
    title: "Basic Cybersecurity",
    description: "Implementing fundamental security practices to protect applications and data from common threats.",
    longDescription: "Security is not an afterthought; it's a priority. I implement essential security measures to protect your applications and user data from common vulnerabilities like SQL injection, XSS, and CSRF, ensuring your digital assets are safe.",
    icon: Cloud,
    features: ["Secure Authentication", "Data Protection", "Network Security Basics", "Vulnerability Awareness"],
     technologies: ["OWASP Top 10", "JWT", "OAuth", "SSL/TLS", "Helmet.js"],
    benefits: [
        "Protection against common web attacks",
        "Secure user data handling",
        "Compliance with basic security standards"
    ],
    process: [
        "Security Assessment",
        "Vulnerability Scanning",
        "Implementation of Security Headers",
        "Secure Code Review"
    ]
  },
];
