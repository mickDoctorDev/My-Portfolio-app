import React from 'react';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './Icons';
const SAM_logo = "/assets/images/SAMTECH_logo.png";
const ZOMBIE_logo = "/assets/images/SAMSEN_VS_ZOMBIE_logo.png";

const projectsData: Project[] = [
  {
    title: 'SAMTECH_Application',
    description: 'Color detection application with live-cam on mobile phone',
    tags: ['Flutter', 'Dart', 'App', 'iOS', 'Android'],
    imageUrl: SAM_logo,
    liveUrl: '#',
    githubUrl: 'https://github.com/mickDoctorDev/SAMTECH_Application-Dart',
  },
  {
    title: 'SAMSEN_VS_ZOMBIE-Edition',
    description: 'Mini-game that help teacher do game for learning easier.',
    tags: ['C++', 'Game Development', 'Notepad++'],
    imageUrl: ZOMBIE_logo,
    liveUrl: '#',
    githubUrl: 'https://github.com/mickDoctorDev/SAMSEN_VS_ZOMBIE-Edition',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 hover:-translate-y-2 hover:scale-105 flex flex-col">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-purple-700 dark:text-purple-300 transition-colors">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow transition-colors">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium px-3 py-1 rounded-full transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
          {/* {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              <ExternalLinkIcon className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )} */}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
            <GitHubIcon className="w-5 h-5 mr-2" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute bottom-10 left-10 w-32 h-32 -z-10 opacity-60 hidden lg:block">
        <div className="w-full h-full rounded-full bg-gradient-to-bl from-teal-400 to-blue-600 shadow-xl relative">
        </div>
        <div className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 border-4 border-teal-200/50 rounded-full rotate-[30deg]"></div>
        <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 border-2 border-teal-200/80 rounded-full rotate-[30deg]"></div>
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-400">
          Constellations of Code
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;