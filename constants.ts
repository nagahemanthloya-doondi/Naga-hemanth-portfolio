
import type { Project } from './types';

export const PERSONAL_INFO = {
  name: "L Naga Hemanth",
  title: "18-year-old Student",
  bio: "I'm a passionate 18-year-old student with a deep curiosity for technology and a drive to create amazing things for the web. I'm currently honing my skills in React, TypeScript, and modern web development, always eager to learn new technologies and tackle challenging projects. My goal is to transform creative ideas into beautiful, functional, and user-friendly digital experiences.",
  email: "nagahemanthloya@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  }
};

export const PROFILE_IMAGE_URL = 'https://picsum.photos/seed/doondi-profile/400/500';

export const SKILLS = [
  "React", "TypeScript", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", 
  "GraphQL", "REST APIs", "Node.js", "Figma", "UI/UX Design",
  "Web Performance", "Accessibility", "CI/CD"
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "QuantumLeap CRM",
    category: "Web App",
    image: "https://picsum.photos/seed/quantum/800/600",
    description: "A comprehensive CRM platform for sales teams, built with Next.js and GraphQL.",
    longDescription: "QuantumLeap CRM is a feature-rich web application designed to streamline sales workflows. It includes contact management, deal tracking, reporting dashboards, and team collaboration tools. The entire frontend was built using Next.js for server-side rendering and performance, with a GraphQL API for flexible data fetching. State management is handled with Zustand for simplicity and scalability.",
    techStack: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "Zustand"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "Aether E-commerce",
    category: "E-commerce",
    image: "https://picsum.photos/seed/aether/800/600",
    description: "A headless e-commerce store with a focus on user experience and performance.",
    longDescription: "Aether is a modern, headless e-commerce platform built with React and connected to a Shopify backend. The focus was on creating a blazing-fast, highly interactive shopping experience. Features include instant search, dynamic filtering, a seamless checkout process, and a fully responsive design that looks great on any device.",
    techStack: ["React", "TypeScript", "Shopify API", "Styled Components", "Redux Toolkit"],
    liveUrl: "#",
  },
  {
    id: 3,
    title: "DataViz Pro",
    category: "Data Visualization",
    image: "https://picsum.photos/seed/dataviz/800/600",
    description: "An interactive dashboard for visualizing complex datasets using D3.js.",
    longDescription: "DataViz Pro is a powerful tool for analysts to explore and visualize large datasets. Using React and D3.js, I built a suite of interactive charts and graphs, including bar charts, line graphs, and heatmaps. Users can filter, sort, and drill down into the data in real-time to uncover insights. The project required careful performance optimization to handle the large amounts of data smoothly.",
    techStack: ["React", "D3.js", "TypeScript", "Node.js", "Express"],
    repoUrl: "#"
  },
  {
    id: 4,
    title: "Portfolio 'DOONDI'",
    category: "Web App",
    image: "https://picsum.photos/seed/doondi/800/600",
    description: "This very portfolio, built with React, TypeScript, and Tailwind CSS in a neo-brutalist style.",
    longDescription: "My personal portfolio was an exercise in combining a unique design aesthetic with modern frontend technologies. It's built with React and TypeScript for a solid foundation. Styling is handled exclusively with Tailwind CSS, adhering to a strict neo-brutalist design system. It features scroll-based animations, a theme toggle, and an AI assistant powered by the Gemini API to showcase my skills in integrating AI services.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Framer Motion"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 5,
    title: "iPod Classic Retro Player",
    category: "Web App",
    image: "https://picsum.photos/seed/ipod/800/600",
    description: "A pixel-perfect recreation of the classic iPod interface, bringing back nostalgic music vibes to the web browser.",
    longDescription: "This project is a tribute to the iconic Apple iPod Classic. Built with React, it faithfully simulates the click wheel interaction and the classic menu navigation. It's a fun, interactive demonstration of complex state management and frontend animations to replicate a beloved piece of hardware in a web environment.",
    techStack: ["React", "TypeScript", "Styled Components", "State Machines"],
    repoUrl: "https://github.com/nagahemanthloya-doondi/iPod-classic-retro"
  },
  {
    id: 6,
    title: "StudyTube AI",
    category: "AI / EdTech",
    image: "https://picsum.photos/seed/studytube/800/600",
    description: "An AI-powered learning platform that transforms YouTube videos into interactive study courses.",
    longDescription: "StudyTube AI is an innovative educational tool that leverages the Gemini API to analyze YouTube video content. It can generate summaries, create quizzes, define key terms, and build a structured learning path from a single video URL. The goal is to make learning from online video content more efficient and engaging for students. The platform features user authentication, course creation, and progress tracking.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Firebase"],
    repoUrl: "https://github.com/nagahemanthloya-doondi/Studytube-ai-"
  }
];
