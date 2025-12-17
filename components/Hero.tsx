import React, { useState, useEffect } from 'react';
import Astronaut from './Astronaut';

const images = [
  { id: 'main', src: 'https://znzzn7sflh66ipma.public.blob.vercel-storage.com/ChulaUniform.png', alt: 'Profile' },
  { id: 'coding', src: 'https://znzzn7sflh66ipma.public.blob.vercel-storage.com/Coding.JPG', alt: 'Coding' },
  { id: 'chill', src: 'https://znzzn7sflh66ipma.public.blob.vercel-storage.com/Chill.png', alt: 'Chill' },
  { id: 'tech', src: 'https://znzzn7sflh66ipma.public.blob.vercel-storage.com/Google_Office.png', alt: 'Technology' },
];

type Position = 'center' | 'topLeft' | 'bottomLeft' | 'topRight';

const positionStyles: Record<Position, string> = {
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 border-4 border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.5)] z-20 hover:scale-105",
  topLeft: "-left-4 -top-4 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 border-cyan-400/30 shadow-lg z-30 cursor-pointer hover:scale-110 hover:border-cyan-400",
  bottomLeft: "-left-8 bottom-20 w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 border-2 border-cyan-400/30 shadow-lg z-20 cursor-pointer hover:scale-110 hover:border-cyan-400",
  topRight: "right-5 -top-5 w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 border-2 border-cyan-400/30 z-30 cursor-pointer hover:scale-110 hover:border-cyan-400", // Increased z-index to 30
};

const Hero: React.FC = () => {
  // Track which image is in which position
  const [slots, setSlots] = useState<Record<string, Position>>({
    'main': 'center',
    'coding': 'topLeft',
    'chill': 'bottomLeft',
    'tech': 'topRight',
  });

  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBubble(prev => !prev);
    }, 5000); // Toggle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (clickedId: string) => {
    const currentPosition = slots[clickedId];

    // If clicking the center image, do nothing
    if (currentPosition === 'center') return;

    // Find the id of the image currently in the center
    const centerImageId = Object.keys(slots).find(key => slots[key] === 'center');

    if (centerImageId) {
      // Swap positions
      setSlots(prev => ({
        ...prev,
        [clickedId]: 'center',
        [centerImageId]: currentPosition,
      }));
    }
  };

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
            href="#about"
            className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-lg shadow-purple-500/30 "
          >
            Explore My Universe
          </a>
        </div>
        <div className="md:w-1/2 top-10 flex justify-center items-center relative">
          {/* Profile Container */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] animate-float z-10 flex items-center justify-center">

            {/* Companion Astronaut (Floating in front) */}
            <div className="absolute -right-6 -bottom-6 w-40 h-40 md:w-64 md:h-64 z-40 animate-float-delayed drop-shadow-2xl transform rotate-12">
              <Astronaut />
              {/* Speech Bubble */}
              <div className={`absolute -top-5 -right-0 bg-white text-gray-800 px-4 py-2 rounded-xl rounded-bl-none shadow-lg text-sm font-bold whitespace-nowrap transition-opacity duration-500 ${showBubble ? 'opacity-100' : 'opacity-0'}`}>
                Click to change 📸
              </div>
            </div>

            {/* Rotating Rings (Holographic Effect) */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 border-dashed animate-[spin_10s_linear_infinite] z-10"></div>
            <div className="absolute inset-4 rounded-full border-2 border-cyan-400/30 border-dotted animate-[spin_15s_linear_infinite_reverse] z-10"></div>
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-ping opacity-20 z-10"></div>

            {/* Render All Images with Transitions */}
            {images.map((img) => (
              <div
                key={img.id}
                className={`absolute rounded-full overflow-hidden transition-all duration-700 ease-in-out ${positionStyles[slots[img.id]]}`}
                onClick={() => handleImageClick(img.id)}
              >
                <div className={`absolute inset-0 transition-colors duration-300 ${slots[img.id] === 'center' ? 'bg-transparent' : 'bg-black/0'}`}></div>
                {/* Overlay for center image hover effect if needed, currently transparent */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Orbiting Planet */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-8 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-bounce z-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;