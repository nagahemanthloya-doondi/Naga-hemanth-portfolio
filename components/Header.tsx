import React from 'react';

interface HeaderProps {
  onThemeToggle: () => void;
  currentTheme: string;
  onScrollTo: (section: 'about' | 'projects' | 'contact') => void;
}

const NavLink: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button onClick={onClick} className="font-mono text-sm uppercase tracking-wider hover:text-brand-accent-light dark:hover:text-brand-accent-dark transition-colors">
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ onThemeToggle, currentTheme, onScrollTo }) => {
  return (
    <header className="sticky top-0 z-50 bg-brand-bg-light/80 dark:bg-brand-bg-dark/80 backdrop-blur-sm border-b-2 border-brand-text-light dark:border-brand-text-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="font-mono font-bold">
            <a href="#" className="block border-2 border-blue-500 px-4 py-1 text-2xl hover:bg-blue-500 hover:text-white transition-colors duration-200">DOONDI</a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => onScrollTo('about')}>// About</NavLink>
            <NavLink onClick={() => onScrollTo('projects')}>// Projects</NavLink>
            <NavLink onClick={() => onScrollTo('contact')}>// Contact</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 font-mono text-sm border-2 border-brand-text-light dark:border-brand-text-dark bg-transparent hover:bg-brand-text-light hover:text-brand-bg-light dark:hover:bg-brand-text-dark dark:hover:text-brand-bg-dark transition-all duration-200 shadow-neo-light dark:shadow-neo-dark hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">
              Resume
            </a>
            <button
              onClick={onThemeToggle}
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center border-2 border-brand-text-light dark:border-brand-text-dark"
            >
              {currentTheme === 'light' ? (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;