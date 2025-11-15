import React from 'react';
import { PERSONAL_INFO, SKILLS, PROFILE_IMAGE_URL } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
    const titleRef = useScrollReveal<HTMLHeadingElement>();
    const imageRef = useScrollReveal<HTMLDivElement>();
    const textRef = useScrollReveal<HTMLParagraphElement>();
    const skillsTitleRef = useScrollReveal<HTMLHeadingElement>();
    const skillsListRef = useScrollReveal<HTMLUListElement>();

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-bg-light dark:bg-brand-bg-dark border-y-2 border-brand-text-light dark:border-brand-text-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="scroll-reveal text-4xl font-mono font-bold uppercase mb-12">
          // About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-12 items-center">
            <div ref={imageRef} className="scroll-reveal md:col-span-1" style={{ transitionDelay: '200ms' }}>
                <div className="transform -rotate-2 transition-transform duration-300 hover:rotate-0">
                    <img 
                        src={PROFILE_IMAGE_URL} 
                        alt={`A portrait of ${PERSONAL_INFO.name}`}
                        className="w-full h-auto object-cover border-2 border-brand-text-light dark:border-brand-text-dark shadow-neo-light dark:shadow-neo-dark"
                    />
                </div>
            </div>
            <div className="md:col-span-2">
              <p ref={textRef} className="scroll-reveal text-lg leading-relaxed mb-12" style={{ transitionDelay: '300ms' }}>
                {PERSONAL_INFO.bio}
              </p>
              <h3 ref={skillsTitleRef} className="scroll-reveal text-2xl font-mono font-bold mb-6" style={{ transitionDelay: '400ms' }}>My Toolkit:</h3>
              <ul ref={skillsListRef} className="scroll-reveal flex flex-wrap gap-2" style={{ transitionDelay: '500ms' }}>
                {SKILLS.map((skill, index) => (
                  <li key={index} className="px-3 py-1 bg-brand-accent-light text-brand-bg-dark dark:bg-brand-accent-dark dark:text-brand-bg-dark font-mono text-sm border-2 border-brand-text-light dark:border-brand-text-dark">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;