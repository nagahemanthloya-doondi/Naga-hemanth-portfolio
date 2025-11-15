import React, { useState, useEffect } from 'react';

const CursorFollower: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as Element;
            // Check for common interactive elements
            if (target.closest('a, button, input[type="submit"], [role="button"], .cursor-interactive')) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => document.removeEventListener('mousemove', onMouseMove);
    }, []);
    
    const size = isPointer ? 48 : 24;

    const cursorClasses = `
        hidden md:block fixed top-0 left-0 rounded-full z-[9999] pointer-events-none
        border-2 border-brand-accent-light dark:border-brand-accent-dark
        transition-all duration-200 ease-out
        ${isPointer 
            ? 'bg-transparent' // On hover, becomes a ring
            : 'bg-brand-text-light dark:bg-brand-text-dark' // Default is a filled circle
        }
    `;

    return (
        <div
            className={cursorClasses}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
            }}
        />
    );
};

export default CursorFollower;
