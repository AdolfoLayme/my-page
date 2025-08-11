export interface BlogSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  backgroundImage: string;
  route: string;
}

export const blogSections: BlogSection[] = [
  {
    id: "music",
    title: "Música",
    description: "Mis álbumes favoritos y descubrimientos musicales",
    icon: "/blog/icons/music-icon.png",
    color: "from-purple-500 to-pink-600",
    backgroundImage: "/blog/music-bg.jpg",
    route: "/music"
  },
  {
    id: "tech",
    title: "Tecnología",
    description: "Artículos sobre desarrollo web, programación y nuevas tecnologías",
    icon: "/blog/icons/tech-icon.png",
    color: "from-blue-500 to-purple-600",
    backgroundImage: "/blog/tech-bg.jpg",
    route: "/tech"
  },
  {
    id: "learning",
    title: "Aprendizaje",
    description: "Mi camino de aprendizaje, tutoriales y recursos útiles",
    icon: "/blog/icons/learning-icon.png",
    color: "from-green-500 to-teal-600",
    backgroundImage: "/blog/learning-bg.jpg",
    route: "/learning"
  },
  {
    id: "histories",
    title: "Historia",
    description: "Historias que me gusta compartir",
    icon: "/blog/icons/histories-icon.png",
    color: "from-orange-500 to-red-600",
    backgroundImage: "/blog/histories-bg.jpg",
    route: "/histories"
  }
];

export const getBlogSectionById = (id: string): BlogSection | undefined => {
  return blogSections.find(section => section.id === id);
};

export const getAllBlogSections = (): BlogSection[] => {
  return blogSections;
};
