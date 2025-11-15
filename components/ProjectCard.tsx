import React, { CSSProperties } from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewProject: () => void;
  style?: CSSProperties;
}

const GitHubIcon: React.FC = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewProject, style }) => {
  return (
    <div 
      className="group flex flex-col border-2 border-brand-text-light dark:border-brand-text-dark bg-brand-bg-light dark:bg-brand-bg-dark shadow-neo-light dark:shadow-neo-dark transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-light-lg dark:hover:shadow-neo-dark-lg"
      style={style}
    >
      <div className="overflow-hidden border-b-2 border-brand-text-light dark:border-brand-text-dark">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-mono font-bold mb-2">{project.title}</h3>
        <p className="text-sm font-mono uppercase text-brand-text-light/70 dark:text-brand-text-dark/70 mb-4">{project.category}</p>
        <p className="mb-6 flex-grow">{project.description}</p>
        <div className="flex items-center gap-4 mt-auto">
            <button 
              onClick={onViewProject}
              className="flex-1 px-4 py-3 font-mono text-sm border-2 border-brand-text-light dark:border-brand-accent-dark bg-brand-accent-light dark:bg-brand-accent-dark text-brand-bg-dark hover:bg-transparent hover:text-brand-text-light dark:hover:bg-transparent dark:hover:text-brand-text-dark transition-all duration-200 shadow-neo-light dark:shadow-neo-dark hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              View Details
            </button>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="p-3 border-2 border-brand-text-light dark:border-brand-text-dark hover:bg-brand-text-light hover:text-brand-bg-light dark:hover:bg-brand-text-dark dark:hover:text-brand-bg-dark transition-all duration-200 shadow-neo-light dark:shadow-neo-dark hover:shadow-none hover:translate-x-1 hover:translate-y-1 flex items-center justify-center"
              >
                <GitHubIcon />
              </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;