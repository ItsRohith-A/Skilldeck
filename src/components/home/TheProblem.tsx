import React from 'react';
import Image from 'next/image';
import problemImage from '../../../public/figma-designs/the-problem.png';
import { Search, FileSpreadsheet, Settings, Layers, DollarSign, Megaphone } from 'lucide-react';
import PayingFor from './PayingFor';

const problemCards = [
    {
        icon: Megaphone,
        title: "Expensive & Unreliable Ads",
        description: "Google Ads are expensive and unreliable. You spend thousands but results remain unpredictable.",
        color: "from-orange-400 to-orange-500"
    },
    {
        icon: Search,
        title: "SEO Feels Impossible",
        description: "SEO feels impossible with poor websites & weak CMS. You can't compete without proper technical foundation.",
        color: "from-blue-400 to-blue-500"
    },
    {
        icon: FileSpreadsheet,
        title: "Leads in Spreadsheets",
        description: "Sales teams manage leads in spreadsheets. No automation, no tracking, no follow-up system.",
        color: "from-purple-400 to-purple-500"
    },
    {
        icon: Settings,
        title: "Manual, Broken Workflows",
        description: "Operations run on manual, broken workflows. Everything requires human intervention.",
        color: "from-pink-400 to-pink-500"
    },
    {
        icon: Layers,
        title: "Scattered Tools",
        description: "LMS, CRM, marketing, events & payments are all scattered across different platforms that don't talk to each other.",
        color: "from-indigo-400 to-indigo-500"
    },
    {
        icon: DollarSign,
        title: "Thin Margins",
        description: "Margins are thin—or completely wiped out. The competition is brutal and costs keep rising.",
        color: "from-amber-400 to-amber-500"
    }
];

const TheProblem = () => {
    return (
        <section className="section-padding py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-6">
                        <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                            The Problem
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        The Problem with the{' '}
                        <span className="bg-gradient-ai-color bg-clip-text text-transparent">
                            Training Industry
                        </span>{' '}
                        Today
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        The training industry is massive—but brutally competitive.
                    </p>
                </div>

                {/* Nested Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

                    {/* Left Column - Problem Image (spans 5 columns) */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full h-full min-h-[400px] lg:min-h-full">
                            {/* Background Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-orange-50 rounded-3xl blur-2xl opacity-60" />

                            {/* Image Container */}
                            <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-100 flex items-center justify-center">
                                <Image
                                    src={problemImage}
                                    alt="Training Industry Challenges"
                                    width={450}
                                    height={450}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Bento Grid of Problem Cards (spans 7 columns) */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* First 2 cards - Top Row */}
                            {problemCards.slice(0, 2).map((card, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <card.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 mb-1 text-base">
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Middle Row - 1 wide card spanning 2 columns */}
                            <div className="sm:col-span-2 group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${problemCards[2].color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <FileSpreadsheet className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 mb-1 text-base">
                                            {problemCards[2].title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {problemCards[2].description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row - Last 3 cards */}
                            {problemCards.slice(3, 6).map((card, index) => (
                                <div
                                    key={index + 3}
                                    className={`group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 ${index === 2 ? 'sm:col-span-2' : ''}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <card.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 mb-1 text-base">
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Nested PayingFor Section */}
            <PayingFor />
        </section>
    );
};

export default TheProblem;