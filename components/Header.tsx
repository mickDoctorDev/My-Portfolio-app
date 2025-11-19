import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
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
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        <a href="#" className="text-2xl font-bold tracking-wider text-purple-300 hover:text-white transition-colors">
          ML
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-gray-300 hover:text-white relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
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
              key={link.href}
              href={link.href}
              className="text-3xl font-semibold text-gray-200 hover:text-purple-300"
              onClick={() => setIsMenuOpen(false)}
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