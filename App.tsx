import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Timeline from './components/Timeline';

const App: React.FC = () => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [meteors, setMeteors] = useState<React.ReactNode[]>([]);
  const [currentView, setCurrentView] = useState<'home' | 'timeline'>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Apply dark class to html element based on theme state
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const generateStars = () => {
        const newStars = [];
        const numStars = 250;
        for (let i = 0; i < numStars; i++) {
            const style = {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
            };
            newStars.push(<div key={`star-${i}`} className="absolute bg-white rounded-full star-twinkle" style={style}></div>);
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
      const newMeteors = [];
      const numMeteors = 5;
      for (let i = 0; i < numMeteors; i++) {
        const style = {
          left: `${Math.random() * 80 + 10}%`,
          top: `${-10 - Math.random() * 20}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${Math.random() * 5 + 3}s`,
        };
        newMeteors.push(<div key={`meteor-${i}`} className="meteor" style={style}></div>);
      }
      setMeteors(newMeteors);
    };

    generateStars();
    generateMeteors();
  }, []);

  const handleNavigate = (view: 'home' | 'timeline', sectionId?: string) => {
    if (view !== currentView) {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      if (view === 'home' && sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 dark:text-white text-gray-900 overflow-x-hidden">
      <div className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black via-[#1e0a33] to-[#3a1d5f]' 
          : 'bg-gradient-to-b from-blue-50 via-white to-purple-50'
      }`}>
        <div className={`transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
          {stars}
          {meteors}
        </div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header currentView={currentView} onNavigate={handleNavigate} theme={theme} toggleTheme={toggleTheme} />
        <main className="container mx-auto px-4 md:px-8 flex-grow">
          {currentView === 'home' ? (
            <>
              <Hero />
              <About onNavigate={handleNavigate} />
              <Projects />
              <Skills />
              <Contact />
            </>
          ) : (
            <Timeline />
          )}
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;