import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentView: 'home' | 'timeline';
  onNavigate: (view: 'home' | 'timeline', sectionId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
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
    onNavigate('home');
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="text-2xl font-bold tracking-wider text-purple-300 hover:text-white transition-colors"
        >
          ML
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.view as 'home' | 'timeline', link.id)}
              className={`text-lg relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                currentView === 'timeline' && link.id === 'timeline'
                  ? 'text-white after:scale-x-100 after:origin-bottom-left' 
                  : 'text-gray-300 hover:text-white after:scale-x-0 after:origin-bottom-right'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-3xl font-semibold hover:text-purple-300 ${
                 (currentView === 'timeline' && link.id === 'timeline') ? 'text-purple-400' : 'text-gray-200'
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