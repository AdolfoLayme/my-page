
export interface Project {
  id: number;
  title: string;
  url: string;
  image: string;
  technologies: string[];
  description?: string; 
  category?: string; 
  year?: number; 
}

export const projects: Project[] = [
  {
    id: 1,
    title: "titulo del proyecto",
    url: "",
    image: "",
    technologies: ["React", "Next.js", "Prismic"],
    description: "",
    category: "web",
    year: 2025
  },
  {
    id: 2,
    title: "titulo del proyecto",
    url: "",
    image: "",
    technologies: ["React", "TypeScript", "Node.js"],
    description: "",
    category: "",
    year: 2025
  },
  {
    id: 3,
    title: "titulo del proyecto",
    url: "",
    image: "",
    technologies: ["Next.js", "Tailwind", "Sanity"],
    description: "",
    category: "",
    year: 2025
  },
  {
    id: 4,
    title: "titulo del proyecto",
    url: "",
    image: "",
    technologies: ["React", "Framer Motion", "CSS"],
    description: "",
    category: "",
    year: 2025
  }
];

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getAllTechnologies = (): string[] => {
  const allTechs = projects.flatMap(project => project.technologies);
  return Array.from(new Set(allTechs));
};
