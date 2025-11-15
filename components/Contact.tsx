
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const textRef = useScrollReveal<HTMLParagraphElement>();
  const emailRef = useScrollReveal<HTMLAnchorElement>();
  const socialRef = useScrollReveal<HTMLDivElement>();
  
  return (
    <section id="contact" className="py-20 md:py-32 border-y-2 border-brand-text-light dark:border-brand-text-dark bg-brand-accent-light dark:bg-brand-accent-dark text-brand-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 ref={titleRef} className="scroll-reveal text-4xl font-mono font-bold uppercase mb-4">
          // Get In Touch
        </h2>
        <p ref={textRef} className="scroll-reveal max-w-2xl mx-auto mb-8 text-lg">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, a question, or just want to say hi!
        </p>
        <a 
          ref={emailRef}
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="scroll-reveal inline-block px-8 py-4 font-mono text-lg border-2 border-brand-bg-dark bg-brand-bg-dark text-brand-accent-dark hover:bg-transparent hover:text-brand-bg-dark transition-all duration-200 shadow-[4px_4px_0px_#111] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
        >
          {PERSONAL_INFO.email}
        </a>
        <div ref={socialRef} className="scroll-reveal mt-12 flex justify-center space-x-6">
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-brand-bg-dark hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
          </a>
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-bg-dark hover:scale-110 transition-transform">
             <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
