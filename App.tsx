import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [meteors, setMeteors] = useState<React.ReactNode[]>([]);

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

  return (
    <div className="bg-gradient-to-b from-black via-[#1e0a33] to-[#3a1d5f] text-white min-h-screen font-sans overflow-x-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {stars}
        {meteors}
      </div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 md:px-8">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;