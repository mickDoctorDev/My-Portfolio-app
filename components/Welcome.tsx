import React, { useState } from 'react';
import { GitHubIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from './Icons';
import Astronaut from './Astronaut';
import RocketAnimation from './RocketAnimation';

interface WelcomeProps {
    onEnter: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onEnter }) => {
    const [isLaunching, setIsLaunching] = useState(false);

    const handleEnter = () => {
        setIsLaunching(true);
    };

    const handleAnimationComplete = () => {
        onEnter();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center relative z-50">
            {isLaunching && <RocketAnimation onComplete={handleAnimationComplete} />}

            <div className={`transition-opacity duration-1000 ${isLaunching ? 'opacity-0' : 'opacity-100'} flex flex-col items-center`}>
                {/* Central Content */}
                <div className="mb-10 relative group">
                    <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full animate-pulse"></div>
                    <div className="relative pointer-events-none transform hover:scale-105 transition-transform duration-500">
                        <Astronaut />
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 animate-[fadeIn_1s_ease-out]">
                    Welcome to My Universe
                </h1>

                <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-80 animate-[fadeIn_1.5s_ease-out]">
                    Explore the galaxy of code, creativity, and innovation.
                </p>

                {/* Social Media Links */}
                <div className="flex space-x-8 mb-12 animate-[slideUp_1s_ease-out]">
                    <a href="https://github.com/mickDoctorDev/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transform hover:scale-125 transition-all duration-300">
                        <GitHubIcon className="w-10 h-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/noppawat-loryingyongphaisal-129808343" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transform hover:scale-125 transition-all duration-300">
                        <LinkedInIcon className="w-10 h-10" />
                    </a>
                    <a href="#" className="text-white hover:text-pink-400 transform hover:scale-125 transition-all duration-300">
                        <InstagramIcon className="w-10 h-10" />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transform hover:scale-125 transition-all duration-300">
                        <FacebookIcon className="w-10 h-10" />
                    </a>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col md:flex-row gap-6 animate-[slideUp_1.5s_ease-out]">

                    <button
                        onClick={handleEnter}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] hover:scale-110 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            🚀 Enter Website
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>

                    <a
                        href="#"
                        className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-full text-cyan-400 font-bold text-lg shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300"
                    >
                        📖 Read Book 1
                    </a>

                    <a
                        href="#"
                        className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-full text-cyan-400 font-bold text-lg shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300"
                    >
                        📚 Read Book 2
                    </a>

                </div>
            </div>

        </div>
    );
};

export default Welcome;
