"use client";

import { BrowserWindow } from '@/components/ui/BrowserWindow';
import { TechIcon } from '@/components/ui/TechIcon';
import { projects } from '@/data/projects';

export default function Works() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 pt-34">
          <h1 className="text-4xl md:text-3xl font-bold text-white mb-4">
            Descubre una selección de mis últimos proyectos.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <BrowserWindow url={project.url} />
                
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="bg-gray-100 p-4">
                  <div className="flex gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 cursor-pointer"
                        title={tech}
                        role="button"
                        tabIndex={0}
                        aria-label={tech}
                      >
                        <TechIcon tech={tech} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}