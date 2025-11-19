import React from 'react';
import type { Skill } from '../types';
import { ReactIcon, TypeScriptIcon, NodeIcon, TailwindIcon, JavaScriptIcon, NextJSIcon, FigmaIcon, GitIcon } from './Icons';

const skillsData: Skill[] = [
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextJSIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'Git', icon: <GitIcon /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute top-20 right-20 w-16 h-16 -z-10 opacity-70 hidden md:block">
          <div className="w-full h-full rounded-full bg-gray-400 shadow-inner">
            <div className="absolute top-3 right-3 w-4 h-4 bg-gray-500/50 rounded-full"></div>
            <div className="absolute bottom-4 left-2 w-2 h-2 bg-gray-500/50 rounded-full"></div>
          </div>
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
          My Tech Toolkit
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-purple-800/30 rounded-lg transition-all duration-300 hover:bg-purple-900/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mb-4 text-purple-400 group-hover:text-white transition-colors duration-300">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;