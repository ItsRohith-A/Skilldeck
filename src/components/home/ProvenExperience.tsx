import React from 'react';
import Image from 'next/image';
import { Award, Sparkles, Users, Building2 } from 'lucide-react';

// Import logos
import knowledgeHutLogo from '../../../public/images/cob/logos/kh.png';
import invensisLogo from '../../../public/images/cob/logos/il.png';
import starAgileLogo from '../../../public/images/cob/logos/sta.png';
import simpliaxisLogo from '../../../public/images/cob/logos/sax.png';
import premierAgileLogo from '../../../public/images/cob/logos/pal.png';
import bellsLogo from '../../../public/images/cob/logos/bt.png';
import vlsiLogo from '../../../public/images/cob/logos/vf.png';
import learnNthriveLogo from '../../../public/images/cob/logos/lnt.png';
import aaLogo from '../../../public/images/cob/logos/aa.png';
import egLogo from '../../../public/images/cob/logos/eg.png';
import sdLogo from '../../../public/images/cob/logos/sd.png';
import saLogo from '../../../public/images/cob/logos/sa.png';

const logos = [
    { src: knowledgeHutLogo, alt: 'KnowledgeHut' },
    { src: invensisLogo, alt: 'Invensis Learning' },
    { src: starAgileLogo, alt: 'StarAgile' },
    { src: simpliaxisLogo, alt: 'Simpliaxis' },
    { src: premierAgileLogo, alt: 'PremierAgile' },
    { src: bellsLogo, alt: 'Bells' },
    { src: vlsiLogo, alt: 'VLSI First' },
    { src: learnNthriveLogo, alt: 'LearnNthrive' },
    { src: aaLogo, alt: 'AA' },
    { src: egLogo, alt: 'EG' },
    { src: sdLogo, alt: 'SD' },
    { src: saLogo, alt: 'SA' },
];

const stats = [
    { icon: Users, value: '500+', label: 'Companies Trust Us' },
    { icon: Building2, value: '30+', label: 'Enterprise Clients' },
    { icon: Sparkles, value: '5+', label: 'Years Experience' },
];

const ProvenExperience = () => {
    return (
        <section className="py-5 md:py-0 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Compact Header with Stats */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 md:mb-10">
                    {/* Left - Title */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-3">
                            <Award className="w-3.5 h-3.5 text-amber-600" />
                            <span className="text-amber-700 text-xs font-semibold uppercase tracking-wide">Trusted Partners</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Proven by{' '}
                            <span className="bg-gradient-ai-color bg-clip-text text-transparent">
                                Industry Experience
                            </span>
                        </h2>
                    </div>

                    {/* Right - Stats */}
                    <div className="flex items-center justify-center lg:justify-end gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center gap-1.5 mb-1">
                                    <stat.icon className="w-4 h-4 text-blue-500" />
                                    <span className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</span>
                                </div>
                                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logo Carousel - Clean Design */}
                <div className="relative">
                    {/* Gradient Fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Logos */}
                    <div className="flex overflow-hidden py-2">
                        <div className="flex animate-scroll gap-4 md:gap-6">
                            {/* First set */}
                            {logos.map((logo, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="group bg-white rounded-xl px-5 py-3 flex items-center justify-center h-14 md:h-16 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 flex-shrink-0 min-w-[120px] md:min-w-[140px]"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={150}
                                        height={32}
                                        className="object-contain max-h-8 md:max-h-10 w-auto"
                                    />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {logos.map((logo, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="group bg-white rounded-xl px-5 py-3 flex items-center justify-center h-14 md:h-16 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 flex-shrink-0 min-w-[120px] md:min-w-[140px]"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={100}
                                        height={32}
                                        className="object-contain max-h-8 md:max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Tagline */}
                <div className="text-center mt-6 md:mt-8">
                    <p className="text-gray-500 text-xs md:text-sm">
                        Built on <span className="text-gray-800 font-semibold">real-world challenges</span> from technology to marketing to automation
                    </p>
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 25s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default ProvenExperience;
