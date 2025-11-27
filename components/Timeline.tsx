import React, { useState } from 'react';
import { timelineData } from '../timelineData';
import type { TimelineItem } from '../types';

const categories: TimelineItem['category'][] = ['PCSHSPL', 'SAMSEN', 'Chula'];

const Timeline: React.FC = () => {
  // Default to all categories selected or just the first one? 
  // "Choose multiple periods" implies starting with one or all. Let's start with all for a full view, or just PCSHSPL as before.
  // Let's start with all to show the "connected" nature immediately.
  const [selectedCategories, setSelectedCategories] = useState<TimelineItem['category'][]>(['PCSHSPL', 'SAMSEN', 'Chula']);

  const toggleCategory = (category: TimelineItem['category']) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredData = timelineData.filter(item => selectedCategories.includes(item.category));

  return (
    <section id="timeline" className="py-20 md:py-32 relative overflow-hidden min-h-screen">
      {/* 
        Removed opaque background to blend with global App background.
        Kept a very subtle gradient to ensure text readability if needed, but mostly transparent.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B1E]/30 to-transparent -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Mission Log
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select mission phases to view the trajectory.
          </p>
        </div>

        {/* Mission Control (Multi-select Tabs) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const isActive = selectedCategories.includes(category);
            return (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`
                  relative px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 border-2
                  ${isActive
                    ? 'bg-purple-600/40 border-purple-500 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                    : 'bg-white/5 border-white/10 text-gray-500 hover:border-purple-500/30 hover:text-purple-300'}
                `}
              >
                {/* Rocket Icon for Active Tab */}
                {isActive && (
                  <span className="absolute -left-2 -top-2 text-xl filter drop-shadow-lg animate-bounce">
                    🚀
                  </span>
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line - Always visible to show continuity */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-purple-500/0 md:-ml-0.5"></div>

          <div className="space-y-12">
            {filteredData.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Planet/Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 z-20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] relative">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative bg-[#16162c]/60 backdrop-blur-md border border-purple-500/20 p-6 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent transform rotate-45 translate-x-10 -translate-y-10 group-hover:from-cyan-400/20 transition-colors duration-300"></div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 rounded-md bg-purple-900/30 border border-purple-500/30 text-cyan-300 text-xs font-mono">
                        {item.year}
                      </span>
                      <span className="text-xs text-purple-400/70 uppercase tracking-widest">{item.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.image && (
                      <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-700 ease-in-out">
                        <div className="mt-4 rounded-lg overflow-hidden border border-purple-500/20 shadow-lg">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center text-gray-500 py-20">
              <p>Select a mission phase to view data.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;