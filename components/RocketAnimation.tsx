import React, { useEffect, useState } from 'react';
import Rocket from './Rocket';

interface RocketAnimationProps {
    onComplete: () => void;
}

const RocketAnimation: React.FC<RocketAnimationProps> = ({ onComplete }) => {
    const [animationStage, setAnimationStage] = useState(0);

    useEffect(() => {
        // Stage 1: Ignition & Shake (0ms - 1000ms)
        // Stage 2: Launch (1000ms - 3000ms)
        // Stage 3: Complete (3000ms)
        const launchTimer = setTimeout(() => {
            setAnimationStage(1); // Start flying
        }, 800);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 2500); // 2.5s total duration

        return () => {
            clearTimeout(launchTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden">
            {/* Background Fade Out Overlay */}
            <div className={`absolute inset-0 bg-black transition-opacity duration-[2000ms] ease-in ${animationStage >= 1 ? 'opacity-100' : 'opacity-0'}`}></div>

            {/* Stars rushing by effect */}
            {animationStage >= 1 && (
                <div className="absolute inset-0 w-full h-full">
                    <div className="star-rush-container absolute inset-0">
                        {/* CSS generated stars would go here, but efficient to use simple lines */}
                    </div>
                </div>
            )}

            {/* The Rocket Container */}
            <div
                className={`transform transition-all duration-[2000ms] ease-in cubic-bezier(0.55, 0.085, 0.68, 0.53)
                    ${animationStage === 0 ? 'translate-y-[20vh] scale-50' : ''}
                    ${animationStage === 1 ? '-translate-y-[150vh] scale-150' : ''}
                `}
            >
                <div className={`${animationStage === 0 ? 'animate-[shake_0.5s_linear_infinite]' : ''} relative`}>
                    <Rocket className="w-64 h-64 md:w-96 md:h-96 drop-shadow-[0_0_50px_rgba(251,191,36,0.5)]" />
                    {/* Engine Glow */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-40 bg-orange-500/50 blur-[40px] rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Speed lines logic could be added here */}

            <style>
                {`
                @keyframes shake {
                    0% { transform: translate(1px, 1px) rotate(0deg); }
                    10% { transform: translate(-1px, -2px) rotate(-1deg); }
                    20% { transform: translate(-3px, 0px) rotate(1deg); }
                    30% { transform: translate(3px, 2px) rotate(0deg); }
                    40% { transform: translate(1px, -1px) rotate(1deg); }
                    50% { transform: translate(-1px, 2px) rotate(-1deg); }
                    60% { transform: translate(-3px, 1px) rotate(0deg); }
                    70% { transform: translate(3px, 1px) rotate(-1deg); }
                    80% { transform: translate(-1px, -1px) rotate(1deg); }
                    90% { transform: translate(1px, 2px) rotate(0deg); }
                    100% { transform: translate(1px, -2px) rotate(-1deg); }
                }
                `}
            </style>
        </div>
    );
};

export default RocketAnimation;
