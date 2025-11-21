import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './Icons';

interface HeaderProps {
  currentView: 'home' | 'timeline';
  onNavigate: (view: 'home' | 'timeline', sectionId?: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', view: 'home' },
    { id: 'timeline', label: 'My Timeline', view: 'timeline' },
    { id: 'projects', label: 'Projects', view: 'home' },
    { id: 'skills', label: 'Skills', view: 'home' },
    { id: 'contact', label: 'Contact', view: 'home' },
  ];

  const handleLinkClick = (e: React.MouseEvent, view: 'home' | 'timeline', id: string) => {
    e.preventDefault();
    const sectionId = view === 'timeline' ? undefined : id;
    onNavigate(view, sectionId);
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/50 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        {/* Toggle Theme Button */}
        <button 
          onClick={handleLogoClick}
          className="group flex items-center gap-2 text-2xl font-bold tracking-wider text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          ML
          <div className="relative w-6 h-6">
             <div className={`absolute inset-0 transform transition-transform duration-500 ${theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
               <SunIcon className="w-6 h-6" />
             </div>
             <div className={`absolute inset-0 transform transition-transform duration-500 ${theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
               <MoonIcon className="w-6 h-6" />
             </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.view as 'home' | 'timeline', link.id)}
              className={`text-lg relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                currentView === 'timeline' && link.id === 'timeline'
                  ? 'text-purple-800 dark:text-white after:scale-x-100 after:origin-bottom-left' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white after:scale-x-0 after:origin-bottom-right'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden z-50 text-gray-800 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-black/90 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-3xl font-semibold hover:text-purple-500 dark:hover:text-purple-300 ${
                 (currentView === 'timeline' && link.id === 'timeline') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200'
              }`}
              onClick={(e) => handleLinkClick(e, link.view as 'home' | 'timeline', link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;