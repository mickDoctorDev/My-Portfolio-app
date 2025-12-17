import React from 'react';

const traits = [
    {
        title: 'Tech Leadership',
        icon: '🚩', // You can replace with an SVG icon component if you have one
        description: 'Leading the Google Developer Group on Campus and organizing major tech conferences like Devfest Cloud Bangkok. Proven ability to guide communities and teams.',
        color: 'from-blue-500 to-cyan-400',
        stat: 'LEADERSHIP',
        level: '95%'
    },
    {
        title: 'Adaptive Intelligence',
        icon: '🧠',
        description: 'Rapidly mastering new technologies. From C++ algorithms to full-stack Next.js and Flutter development. I adapt to the mission requirements instantly.',
        color: 'from-purple-500 to-pink-500',
        stat: 'ADAPTABILITY',
        level: '98%'
    },
    {
        title: 'Engineering Mindset',
        icon: '⚙️',
        description: 'Deep foundation in algorithms (POSN Computer Camp) and problem-solving. I don\'t just write code; I engineer scalable, efficient solutions.',
        color: 'from-amber-400 to-orange-500',
        stat: 'LOGIC',
        level: '92%'
    }
];

const CoreTraits: React.FC = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Core Systems & Traits
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
                        Pilot Capabilities Analysis
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {traits.map((trait, index) => (
                        <div key={index} className="group relative">
                            {/* Holographic Card Container */}
                            <div className="relative h-full bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-500 group-hover:transform group-hover:-translate-y-2 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">

                                {/* Decorative HUD corners */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg group-hover:border-cyan-400/50 transition-colors"></div>
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg group-hover:border-cyan-400/50 transition-colors"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg group-hover:border-cyan-400/50 transition-colors"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg group-hover:border-cyan-400/50 transition-colors"></div>

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${trait.color} p-0.5 mb-6 mx-auto relative`}>
                                    <div className="w-full h-full bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-3xl filter drop-shadow-lg">{trait.icon}</span>
                                    </div>
                                    <div className="absolute inset-0 rounded-full animate-pulse opacity-50 bg-white blur-md"></div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {trait.title}
                                </h3>

                                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-4"></div>

                                <p className="text-gray-400 text-center leading-relaxed text-sm">
                                    {trait.description}
                                </p>

                                {/* Stat Bar (Decorative) */}
                                <div className="mt-8">
                                    <div className="flex justify-between text-xs text-gray-500 mb-1 font-mono uppercase">
                                        <span>{trait.stat}</span>
                                        <span className="text-cyan-400">{trait.level}</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${trait.color} relative`}
                                            style={{ width: trait.level }}
                                        >
                                            <div className="absolute inset-0 bg-white/50 animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Background Glow on Hover */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${trait.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10 rounded-2xl`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreTraits;
