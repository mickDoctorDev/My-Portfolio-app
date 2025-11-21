import React, { useRef, useState, useEffect } from 'react';
import type { Skill } from '../types';
import { 
  ReactIcon, 
  TypeScriptIcon, 
  NodeIcon, 
  TailwindIcon, 
  JavaScriptIcon, 
  NextJSIcon, 
  FigmaIcon, 
  GitIcon,
  PythonIcon,
  CPPIcon,
  DartIcon,
  FirebaseIcon,
  JavaIcon,
  HTML5Icon,
  FlutterIcon,
  CSS3Icon,
  


} from './Icons';

const skillsData: Skill[] = [

  { name: 'Python', icon: <PythonIcon /> },
  { name: 'C++', icon: <CPPIcon />},
  { name: 'Dart', icon: <DartIcon />},
  { name: 'Java', icon: <JavaIcon />},
  { name: 'HTML5', icon: <HTML5Icon />},
  { name: 'CSS3', icon: <CSS3Icon />},
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextJSIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Firebase', icon: <FirebaseIcon />},
  { name: 'Flutter', icon: <FlutterIcon />},
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'Git', icon: <GitIcon /> },

];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div
    className="
      group/card relative flex flex-col items-center justify-center p-6
      bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl
      transition-all duration-500 ease-out
      hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-50 dark:hover:from-purple-50 dark:hover:to-white
      hover:border-purple-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
      w-[180px] h-[160px] select-none cursor-pointer
    "
  >
    <div className="w-16 h-16 mb-4 text-purple-600 dark:text-purple-400 transition-colors duration-300 group-hover/card:text-purple-700">
      {skill.icon}
    </div>
    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover/card:text-purple-900">
      {skill.name}
    </p>
  </div>
);

const Skills: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Create 4 sets of skills to ensure smooth infinite scrolling and enough content for 2 rows
  const displaySkills = [...skillsData, ...skillsData, ...skillsData, ...skillsData];

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (scrollRef.current && !isDragging && !isPaused) {
        scrollRef.current.scrollLeft += 1; // Auto-scroll speed
        
        // Infinite scroll logic: Reset when halfway through
        // We use 4 sets, so resetting at half-width (2 sets) is seamless
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Scroll speed multiplier during drag
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute top-20 right-20 w-16 h-16 -z-10 opacity-70 hidden md:block">
          <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-400 shadow-inner">
            <div className="absolute top-3 right-3 w-4 h-4 bg-gray-400/50 dark:bg-gray-500/50 rounded-full"></div>
            <div className="absolute bottom-4 left-2 w-2 h-2 bg-gray-400/50 dark:bg-gray-500/50 rounded-full"></div>
          </div>
      </div>
      
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-400">
          My Tech Toolkit
        </h2>

        <div className="relative white w-full mx-auto rounded-lg">
          {/* Gradient Masks for fading effect at edges - Adjusted for light/dark */}
          <div className="absolute rounded-l-3xl top-0 left-0 z-20 w-12 md:w-22 h-full bg-gradient-to-r from-blue-50 dark:from-[#4b1980] to-transparent pointer-events-none"></div>
          <div className="absolute rounded-r-3xl top-0 right-0 z-20 w-12 md:w-22 h-full bg-gradient-to-l from-purple-50 dark:from-[#4b1980] to-transparent pointer-events-none"></div>
          
          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden cursor-grab active:cursor-grabbing py-10 px-4 select-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsPaused(true)}
          >
            <div className="grid grid-rows-2 grid-flow-col gap-6 px-4">
              {displaySkills.map((skill, index) => (
                <SkillCard key={`${skill.name}-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;