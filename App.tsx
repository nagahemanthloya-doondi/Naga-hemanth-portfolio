
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioAssistant from './components/PortfolioAssistant';
import CursorFollower from './components/CursorFollower';

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Fix: Corrected the ref types from HTMLElement to HTMLDivElement to match the elements they are referencing, resolving TypeScript errors.
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const scrollToSection = (section: 'about' | 'projects' | 'contact') => {
    const ref = { about: aboutRef, projects: projectsRef, contact: contactRef }[section];
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="custom-cursor-area bg-brand-bg-light dark:bg-brand-bg-dark text-brand-text-light dark:text-brand-text-dark font-sans transition-colors duration-300">
      <CursorFollower />
      <Header onThemeToggle={toggleTheme} currentTheme={theme} onScrollTo={scrollToSection} />
      <main>
        <Hero onScrollTo={() => scrollToSection('projects')} />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
      <PortfolioAssistant />
    </div>
  );
};

export default App;