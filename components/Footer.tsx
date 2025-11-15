
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg-dark text-brand-text-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm font-mono">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
        <p className="mt-1">Designed & Built with a Neo-Brutalist Touch.</p>
      </div>
    </footer>
  );
};

export default Footer;
