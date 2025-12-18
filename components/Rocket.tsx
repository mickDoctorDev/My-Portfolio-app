import React from 'react';

const Rocket: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            viewBox="0 0 512 512"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="rocketBodyBot" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="50%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="rocketBodyTop" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
                <linearGradient id="windowData" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="fireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
            </defs>

            {/* Flame */}
            <path
                d="M256,410 c-20,0 -40,10 -40,40 c0,40 30,60 40,62 c10,-2 40,-22 40,-62 c0,-30 -20,-40 -40,-40 z"
                fill="url(#fireGradient)"
                className="animate-pulse"
                style={{ transformOrigin: 'center top' }}
            />
            <path
                d="M256,420 c-10,0 -20,10 -20,30 c0,30 10,40 20,42 c10,-2 20,-12 20,-42 c0,-20 -10,-30 -20,-30 z"
                fill="#ffffff"
                className="animate-pulse opacity-80"
            />

            {/* Fins */}
            <path d="M160,300 L160,380 L220,360 Z" fill="#ef4444" stroke="#991b1b" strokeWidth="4" strokeLinejoin="round" />
            <path d="M352,300 L352,380 L292,360 Z" fill="#ef4444" stroke="#991b1b" strokeWidth="4" strokeLinejoin="round" />
            <path d="M256,300 L256,380 L256,350 Z" fill="#b91c1c" />

            {/* Main Body */}
            <ellipse cx="256" cy="220" rx="70" ry="180" fill="url(#rocketBodyBot)" stroke="#475569" strokeWidth="4" />

            {/* Nose cone - using path for better shape */}
            <path d="M186,220 Q256,40 326,220 Z" fill="url(#rocketBodyBot)" stroke="none" />
            <path d="M192,120 Q256,-20 320,120" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />

            {/* Window */}
            <circle cx="256" cy="180" r="35" fill="#e2e8f0" stroke="#475569" strokeWidth="6" />
            <circle cx="256" cy="180" r="28" fill="url(#windowData)" />
            {/* Glare on window */}
            <path d="M265,165 Q275,165 278,175" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />

            {/* Details */}
            <path d="M220,300 L292,300" stroke="#94a3b8" strokeWidth="2" />
            <path d="M210,320 L302,320" stroke="#94a3b8" strokeWidth="2" />

        </svg>
    );
};

export default Rocket;
