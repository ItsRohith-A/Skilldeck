import React from 'react';
import Image from 'next/image';
import { Award } from 'lucide-react';

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

const ProvenExperience = () => {
    return (
        <section className="py-12 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-4">
                        <span className="bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Trusted by Industry Leaders
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Proven by{' '}
                        <span className="bg-gradient-ai-color bg-clip-text text-transparent">
                            Industry Experience
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                        Skilldeck is the result of several years of hands-on experience working with leading training brands
                    </p>
                </div>

                {/* Logos Section */}
                <div className="bg-gray-50 rounded-3xl p-6 md:p-10">
                    {/* Top Label */}
                    <div className="text-center mb-6">
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                            Trusted by training companies worldwide
                        </span>
                        <p className="text-gray-700 text-sm md:text-base mt-2">
                            Join <span className="text-blue-600 font-bold">500+</span> training organizations already on Skilldeck
                        </p>
                    </div>

                    {/* Infinite Scroll Logo Carousel */}
                    <div className="relative">
                        {/* Gradient Fade Left */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />

                        {/* Gradient Fade Right */}
                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                        {/* Scrolling Container */}
                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll gap-6 md:gap-8">
                                {/* First set of logos */}
                                {logos.map((logo, index) => (
                                    <div
                                        key={`first-${index}`}
                                        className="bg-white rounded-xl px-6 py-4 flex items-center justify-center h-16 md:h-20 shadow-sm border border-gray-100 flex-shrink-0 min-w-[140px] md:min-w-[160px]"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={120}
                                            height={40}
                                            className="object-contain max-h-10 md:max-h-12 w-auto"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate logos for seamless loop */}
                                {logos.map((logo, index) => (
                                    <div
                                        key={`second-${index}`}
                                        className="bg-white rounded-xl px-6 py-4 flex items-center justify-center h-16 md:h-20 shadow-sm border border-gray-100 flex-shrink-0 min-w-[140px] md:min-w-[160px]"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={120}
                                            height={40}
                                            className="object-contain max-h-10 md:max-h-12 w-auto"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Additional Companies Note */}
                    <div className="text-center mt-8">
                        <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">+</div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">30</div>
                            </div>
                            <span className="text-gray-700 text-sm font-medium">
                                And <span className="font-bold text-gray-900">30+ other</span> training companies
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm md:text-base italic">
                        From technology to marketing to automation — Skilldeck is built on{' '}
                        <span className="text-gray-900 font-semibold not-italic">real-world challenges</span>, not assumptions.
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
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default ProvenExperience;
