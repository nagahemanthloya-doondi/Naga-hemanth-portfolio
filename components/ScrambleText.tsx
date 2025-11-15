import React, { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, as: Component = 'h1' }) => {
  // Fix: Explicitly setting the generic type for useState to address a potential type inference issue that may have caused the "Expected 1 arguments, but got 0" error.
  const [currentText, setCurrentText] = useState<string>('');
  const intervalRef = useRef<number>();
  const isMounted = useRef(false);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    isMounted.current = true;
    let iteration = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set initial text to empty spaces to avoid flash of final text
    setCurrentText(text.split("").map(() => " ").join(""));

    const intervalId = window.setInterval(() => {
        if (!isMounted.current) {
            clearInterval(intervalId);
            return;
        }
      const newText = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          if (letter === ' ') return ' ';
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
        
      setCurrentText(newText);

      if (iteration >= text.length) {
        clearInterval(intervalId);
      }
      
      iteration += 1 / 2; // Controls speed of reveal
    }, 40); // Controls frame rate
    intervalRef.current = intervalId;

    return () => {
        isMounted.current = false;
        if(intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [text]);

  return <Component className={className}>{currentText}</Component>;
};

export default ScrambleText;