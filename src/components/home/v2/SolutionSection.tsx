'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, Zap } from 'lucide-react';

const withoutSkilldeck = [
    "10+ different software subscriptions",
    "Large team to manage operations",
    "High development costs",
    "Constant maintenance issues",
    "Disconnected data & workflows",
    "Thin or negative margins"
];

const withSkilldeck = [
    "One unified platform",
    "Lean team (5-10% of typical size)",
    "Zero development costs",
    "No maintenance headaches",
    "All data in one place",
    "Healthy, sustainable margins"
];

const SolutionSection = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0f0f1a] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
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
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">The Solution</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Everything You Need.{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            One Dashboard.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Skilldeck eliminates up to <span className="text-white font-semibold">90% of unnecessary expenses</span> by replacing multiple tools, teams, and manual processes with a single, powerful platform.
                    </p>
                </motion.div>

                {/* Feature Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 mb-16"
                >
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Just one system that runs your entire training business end-to-end.
                        </h3>
                        <p className="text-white/80 mb-8">
                            From website to LMS, CRM to marketing, payments to analytics.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {['No juggling tools', 'No heavy tech investments', 'No operational nightmares'].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Check className="w-4 h-4 text-emerald-300" />
                                    <span className="text-white text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Without Skilldeck */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                                <span className="text-white text-xl">😤</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Without Skilldeck</h3>
                        </div>

                        <ul className="space-y-4">
                            {withoutSkilldeck.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-red-400 text-sm">✕</span>
                                    </div>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* With Skilldeck */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 overflow-hidden"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">With Skilldeck</h3>
                            </div>

                            <ul className="space-y-4">
                                {withSkilldeck.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-400/30 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-emerald-300" />
                                        </div>
                                        <span className="text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
