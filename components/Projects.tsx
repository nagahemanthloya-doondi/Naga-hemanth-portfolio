
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const filterRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  const projectCategories = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))], []);
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="scroll-reveal text-4xl font-mono font-bold uppercase mb-12 text-center">
          // Featured Projects
        </h2>
        <div ref={filterRef} className="scroll-reveal flex justify-center flex-wrap gap-2 mb-12">
          {projectCategories.map(category => {
            const isActive = category === activeFilter;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 font-mono text-sm border-2 transition-all duration-200 
                  ${isActive 
                    ? 'bg-brand-text-light text-brand-bg-light dark:bg-brand-text-dark dark:text-brand-bg-dark border-brand-text-light dark:border-brand-text-dark' 
                    : 'border-brand-text-light dark:border-brand-text-dark hover:bg-brand-text-light/10 dark:hover:bg-brand-text-dark/10'
                  }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div ref={gridRef} className="scroll-reveal grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewProject={() => handleOpenModal(project)}
              style={{ transitionDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    </section>
  );
};

export default Projects;
