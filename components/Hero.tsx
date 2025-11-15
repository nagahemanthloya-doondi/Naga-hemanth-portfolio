
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ScrambleText from './ScrambleText';

interface HeroProps {
    onScrollTo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    // Check for prefers-reduced-motion before applying parallax
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
        setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>();
  const buttonRef = useScrollReveal<HTMLDivElement>();


  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden text-center">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-brand-bg-light dark:bg-brand-bg-dark opacity-30 dark:opacity-50" 
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmIj48L3JlY3Q+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzAwMCI+PC9jaXJjbGU+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMTExIj48L3JlY3Q+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2ZmZiI+PC9jaXJjbGU+PC9zdmc+')] opacity-10 dark:opacity-5"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
           <ScrambleText text={PERSONAL_INFO.name} as="h1" className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold uppercase" />
        </div>
        <p ref={subtitleRef} className="scroll-reveal mt-4 text-xl md:text-2xl font-sans" style={{ transitionDelay: '300ms' }}>
          {PERSONAL_INFO.title}
        </p>
        <div ref={buttonRef} className="scroll-reveal mt-12" style={{ transitionDelay: '500ms' }}>
          <button onClick={onScrollTo} className="px-8 py-4 font-mono text-lg border-2 border-brand-text-light dark:border-brand-accent-dark bg-brand-accent-light dark:bg-brand-accent-dark text-brand-bg-dark dark:text-brand-bg-dark hover:bg-transparent hover:text-brand-text-light dark:hover:bg-transparent dark:hover:text-brand-text-dark transition-all duration-200 shadow-neo-light dark:shadow-neo-dark hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;