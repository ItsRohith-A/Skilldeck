'use client';

import React from 'react';
import Image from 'next/image';
import {
    HiCurrencyDollar,
    HiWrench,
    HiUserMinus,
    HiCodeBracket,
    HiPuzzlePiece,
    HiRocketLaunch,
} from 'react-icons/hi2';

// Import actual client logos
import kh from '../../../public/images/cob/logos/kh.png';
import il from '../../../public/images/cob/logos/il.png';
import sta from '../../../public/images/cob/logos/sta.png';
import sax from '../../../public/images/cob/logos/sax.png';
import pal from '../../../public/images/cob/logos/pal.png';
import aa from '../../../public/images/cob/logos/aa.png';

const benefits = [
    {
        icon: HiCurrencyDollar,
        title: 'No Repetitive Development Costs',
        description: 'Stop paying for the same features over and over. Everything is built-in.',
    },
    {
        icon: HiWrench,
        title: 'No Maintenance Headaches',
        description: 'We handle all updates, security patches, and infrastructure.',
    },
    {
        icon: HiUserMinus,
        title: 'No Product Managers Needed',
        description: 'The platform is ready to use—no custom development required.',
    },
    {
        icon: HiCodeBracket,
        title: 'No Tech Agencies',
        description: 'Build and manage everything yourself with zero coding.',
    },
    {
        icon: HiPuzzlePiece,
        title: 'No Custom Integrations',
        description: 'Everything works together out of the box—no integration overhead.',
    },
    {
        icon: HiRocketLaunch,
        title: 'Market-Ready in No Time',
        description: 'Launch your training business faster than ever before.',
    },
];

const clientLogos = [
    { src: kh, alt: 'KnowledgeHut' },
    { src: il, alt: 'Invensis Learning' },
    { src: sta, alt: 'StarAgile' },
    { src: sax, alt: 'Simpliaxis' },
    { src: pal, alt: 'PremierAgile' },
    { src: aa, alt: 'NevoLearn' },
];

const GameChanger = () => {
    return (
        <section className="section-padding bg-surface-900 relative overflow-hidden" id="why-skilldeck">
            {/* Background elements */}
            <div className="absolute inset-0 gradient-mesh opacity-30" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-violet/10 rounded-full blur-3xl" />

            <div className="section-container relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="badge-dark mb-4">Why Skilldeck</span>
                    <h2 className="heading-lg text-white mb-6">
                        Why Skilldeck Is a{' '}
                        <span className="bg-gradient-ai-color bg-clip-text text-transparent">Game Changer</span>
                    </h2>
                    <p className="text-xl text-surface-300 mb-4">
                        Do More With Just 5–10% of the Resources
                    </p>
                    <p className="text-body-dark">
                        We built Skilldeck with a bold vision: What if a training company could run everything
                        with just 5- 10% of the manpower, money, and time normally required?
                    </p>
                    <p className="text-lg text-brand-400 font-semibold mt-4">
                        We're proud to say — we achieved it.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group card-dark hover:bg-surface-700/50 p-6"
                        >
                            {/* Icon and Title */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                                    <benefit.icon className="w-5 h-5 text-brand-400" />
                                </div>
                                <h3 className="text-base font-semibold text-white">
                                    {benefit.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-surface-400 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* You are market-ready */}
                <div className="text-center mb-16">
                    <div className="inline-block glass px-8 py-6">
                        <p className="text-2xl font-bold text-white">
                            You are <span className="gradient-text">market-ready</span> in no time.
                        </p>
                    </div>
                </div>

                {/* Experience section */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Proven by Industry Experience
                        </h3>
                        <p className="text-surface-400">
                            Skilldeck is the result of several years of hands-on experience working with leading training brands, including:
                        </p>
                    </div>

                    {/* Client logos - actual images */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                        {clientLogos.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white/10 rounded-xl px-4 py-4 flex items-center justify-center border border-white/10 hover:border-brand-500/50 transition-colors"
                            >
                                <Image
                                    src={client.src}
                                    alt={client.alt}
                                    className="h-8 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-surface-500">
                            And <span className="text-brand-400 font-semibold">30+ other training companies</span>
                        </p>
                    </div>

                    {/* Bottom message */}
                    <div className="mt-8 text-center">
                        <p className="text-surface-400 italic">
                            From technology to marketing to automation — Skilldeck is built on{' '}
                            <span className="text-white not-italic font-semibold">real-world challenges, not assumptions.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameChanger;
