'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

const CTABanner = () => {
    const dispatch = useDispatch();

    const triggerForm = () => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id: 'v2-cta-banner',
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };

    return (
        <section className="py-20 md:py-32 bg-[#0f0f1a] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />

            {/* Animated Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">Ready to Transform?</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Stay Ahead.{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Stay Focused.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Skilldeck is built for trainers & training companies who want to focus on what truly matters —
                        <span className="text-white font-semibold"> delivering great training and growing their business.</span>
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-gray-300">
                        {['No setup fees', 'Free migration', '24/7 support'].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-emerald-400" />
                                </div>
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={triggerForm}
                            className="group relative inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
                        >
                            Get Started Today
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={triggerForm}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/20 transition-all duration-300"
                        >
                            Talk to Sales
                        </button>
                    </div>

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>500+ Companies Trust Us</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-white/20" />
                        <div className="hidden sm:flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            <span>99.9% Uptime SLA</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTABanner;
