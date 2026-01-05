'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const ModernHero = () => {
    const dispatch = useDispatch();

    const triggerForm = () => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id: 'v2-hero-demo',
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-[100px]" />

            <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">The #1 Platform for Training Companies</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        One Platform.{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Zero Chaos.
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
                    >
                        Run your entire training business at{' '}
                        <span className="text-white font-semibold">90% lower cost</span>.
                        Replace 10+ scattered tools with one powerful, AI-enabled platform.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-8 mb-10"
                    >
                        {[
                            { value: '500+', label: 'Companies' },
                            { value: '90%', label: 'Cost Savings' },
                            { value: '10+', label: 'Tools Replaced' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={triggerForm}
                            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300"
                        >
                            Start Free Trial
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300">
                            <Play className="w-5 h-5" />
                            Watch Demo
                        </button>
                    </motion.div>
                </div>

                {/* Floating UI Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 max-w-5xl mx-auto"
                >
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />

                        {/* Dashboard Preview Frame */}
                        <div className="relative bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-2 shadow-2xl">
                            {/* Browser Chrome */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="bg-white/5 rounded-lg px-4 py-1 text-xs text-gray-400">
                                        app.skilldeck.net
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-b-xl overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube-nocookie.com/embed/A-y-PXFigPI?modestbranding=1&rel=0&controls=0&showinfo=0"
                                    title="Skilldeck Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        </section>
    );
};

export default ModernHero;
