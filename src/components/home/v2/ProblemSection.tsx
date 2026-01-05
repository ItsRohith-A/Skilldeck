'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Search, FileSpreadsheet, Settings, Layers, DollarSign, Megaphone } from 'lucide-react';

const problems = [
    {
        icon: Megaphone,
        title: "Expensive & Unreliable Ads",
        description: "Google Ads are expensive and unreliable. You spend thousands but results remain unpredictable.",
        gradient: "from-orange-500 to-red-500"
    },
    {
        icon: Search,
        title: "SEO Feels Impossible",
        description: "SEO feels impossible with poor websites & weak CMS. You can't compete without proper foundation.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: FileSpreadsheet,
        title: "Leads in Spreadsheets",
        description: "Sales teams manage leads in spreadsheets. No automation, no tracking, no follow-up system.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: Settings,
        title: "Manual, Broken Workflows",
        description: "Operations run on manual, broken workflows. Everything requires human intervention.",
        gradient: "from-pink-500 to-rose-500"
    },
    {
        icon: Layers,
        title: "Scattered Tools",
        description: "LMS, CRM, marketing, events & payments are all scattered across platforms that don't talk to each other.",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        icon: DollarSign,
        title: "Thin Margins",
        description: "Margins are thin—or completely wiped out. The competition is brutal and costs keep rising.",
        gradient: "from-amber-500 to-orange-500"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const ProblemSection = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-300">The Problem</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        The Training Industry is{' '}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                            Broken
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        The training industry is massive—but brutally competitive. Most companies struggle with fragmented tools and inefficient processes.
                    </p>
                </motion.div>

                {/* Problem Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            {/* Gradient Hover Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <problem.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {problem.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="inline-block bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/20 rounded-2xl px-8 py-4">
                        <p className="text-gray-300">
                            Sound familiar? <span className="text-white font-semibold">There's a better way.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection;
