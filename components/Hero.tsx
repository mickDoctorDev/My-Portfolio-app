import React from 'react';
import Astronaut from './Astronaut';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            <span className="text-gray-700 dark:text-gray-300 transition-colors">Hi, I'm </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500">
              Mick
            </span>
            <br />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-m mx-auto md:mx-0 transition-colors">
            A Frontend Developer who turns ideas into stunning web realities in the vast universe of code.
          </p>
          <a
            href="#projects"
            className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-lg shadow-purple-500/30 "
          >
            Explore My Universe
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float z-10">
            <Astronaut />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;