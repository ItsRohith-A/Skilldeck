'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Import logos
import knowledgeHutLogo from '../../../../public/images/cob/logos/kh.png';
import invensisLogo from '../../../../public/images/cob/logos/il.png';
import starAgileLogo from '../../../../public/images/cob/logos/sta.png';
import simpliaxisLogo from '../../../../public/images/cob/logos/sax.png';
import premierAgileLogo from '../../../../public/images/cob/logos/pal.png';
import bellsLogo from '../../../../public/images/cob/logos/bt.png';
import vlsiLogo from '../../../../public/images/cob/logos/vf.png';
import learnNthriveLogo from '../../../../public/images/cob/logos/lnt.png';

const logos = [
    { src: knowledgeHutLogo, alt: 'KnowledgeHut' },
    { src: invensisLogo, alt: 'Invensis Learning' },
    { src: starAgileLogo, alt: 'StarAgile' },
    { src: simpliaxisLogo, alt: 'Simpliaxis' },
    { src: premierAgileLogo, alt: 'PremierAgile' },
    { src: bellsLogo, alt: 'Bells' },
    { src: vlsiLogo, alt: 'VLSI First' },
    { src: learnNthriveLogo, alt: 'LearnNthrive' },
];

const TrustedBy = () => {
    return (
        <section className="py-16 md:py-20 bg-[#0a0a0f] relative overflow-hidden">
            {/* Subtle top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
                        Trusted by industry leaders
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Empowering <span className="text-blue-400">500+</span> Training Companies Worldwide
                    </h2>
                </motion.div>

                {/* Infinite Scroll Logos */}
                <div className="relative">
                    {/* Gradient Fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

                    <div className="flex overflow-hidden">
                        <motion.div
                            animate={{ x: [0, -50 * logos.length] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear"
                                }
                            }}
                            className="flex gap-12 items-center"
                        >
                            {/* Double the logos for seamless loop */}
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={120}
                                        height={40}
                                        className="h-8 md:h-10 w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
                >
                    {[
                        { value: '500+', label: 'Training Companies', icon: '🏢' },
                        { value: '50K+', label: 'Learners Trained', icon: '👨‍🎓' },
                        { value: '30+', label: 'Countries', icon: '🌍' },
                        { value: '99.9%', label: 'Uptime SLA', icon: '⚡' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedBy;
