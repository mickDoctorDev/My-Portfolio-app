import React from 'react';
import { timelineData } from '../timelineData';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 md:py-32 relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-400">
          My Timeline
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line - Left on Mobile, Center on Desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-400 dark:via-purple-500 to-transparent md:-ml-0.5"></div>

          {timelineData.map((item, index) => (
            <div key={index} className={`relative mb-12 flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 z-10 rounded-full bg-purple-700 dark:bg-purple-900 border-2 border-purple-300 dark:border-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]">
                <div className="absolute inset-0 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
              </div>

              {/* Spacer to push content to the correct side on desktop */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className={`bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-purple-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] group flex flex-col items-start ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  
                  <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-bold mb-3 shadow-sm">
                    {item.year}
                  </span>
                  
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-400 text-sm leading-relaxed ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;