
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    // Focus trapping
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    modalRef.current?.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      modalRef.current?.removeEventListener('keydown', handleTabKey);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] bg-brand-bg-light dark:bg-brand-bg-dark text-brand-text-light dark:text-brand-text-dark border-2 border-brand-text-light dark:border-brand-text-dark shadow-neo-light dark:shadow-neo-dark flex flex-col"
      >
        <div className="p-6 border-b-2 border-brand-text-light dark:border-brand-text-dark flex justify-between items-start">
            <h2 id={`modal-title-${project.id}`} className="text-2xl font-mono font-bold">{project.title}</h2>
            <button onClick={onClose} aria-label="Close modal" className="w-8 h-8 flex items-center justify-center border-2 border-brand-text-light dark:border-brand-text-dark hover:bg-brand-accent-light dark:hover:bg-brand-accent-dark hover:text-black transition-colors">
                ✕
            </button>
        </div>
        <div className="p-6 overflow-y-auto">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover mb-6 border-2 border-brand-text-light dark:border-brand-text-dark" />
            <p className="mb-6">{project.longDescription}</p>
            <h3 className="font-mono font-bold mb-2">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-brand-accent-light text-brand-bg-dark dark:bg-brand-accent-dark dark:text-brand-bg-dark font-mono text-sm border-2 border-brand-text-light dark:border-brand-text-dark">{tech}</span>
                ))}
            </div>
            <div className="flex flex-wrap gap-4">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 font-mono text-sm border-2 border-brand-text-light dark:border-brand-text-dark bg-transparent hover:bg-brand-text-light hover:text-brand-bg-light dark:hover:bg-brand-text-dark dark:hover:text-brand-bg-dark transition-all duration-200 shadow-neo-light dark:shadow-neo-dark hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">Live Site</a>}
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 font-mono text-sm border-2 border-brand-text-light dark:border-brand-text-dark bg-transparent hover:bg-brand-text-light hover:text-brand-bg-light dark:hover:bg-brand-text-dark dark:hover:text-brand-bg-dark transition-all duration-200 shadow-neo-light dark:shadow-neo-dark hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">GitHub Repo</a>}
            </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;