import React from 'react';

interface AboutProps {
  onNavigate: (view: 'home' | 'timeline', sectionId?: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute top-10 right-10 w-24 h-24 -z-10 opacity-50 hidden md:block">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
          {/* Craters */}
          <div className="absolute top-4 left-4 w-5 h-5 bg-purple-700/50 rounded-full"></div>
          <div className="absolute bottom-5 right-3 w-8 h-8 bg-pink-700/50 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-purple-700/50 rounded-full"></div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-400">
          My Cosmic Journey
        </h2>
        <div className="max-w-3xl mx-auto bg-white/80 dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-200 dark:border-purple-800/50 flex flex-col items-center transition-colors duration-300">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
            Hello! I'm Mick, a passionate frontend developer charting my course through the digital cosmos. My journey began with a curiosity for how beautiful interfaces come to life, and it has since evolved into a full-blown mission to build seamless, user-centric web experiences.
          </p>
          <br />
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
            With a strong command of modern web technologies, I love crafting responsive and dynamic applications. From the smallest component to the overall architecture, I am dedicated to writing clean, efficient, and scalable code. Let's build something amazing together and launch it into the web-iverse!
          </p>
          
          <button
            onClick={() => onNavigate('timeline')}
            className="mt-8 inline-block px-8 py-3 bg-transparent border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-300 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          >
            View Full Timeline
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;