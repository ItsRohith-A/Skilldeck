'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Skilldeck has transformed our online Test Prep classes. The quizzes, polls, leaderboards, and attentiveness measurement tool have increased the learner engagement. Teaching is more interactive and effective.",
        name: "Training Director",
        role: "Test Prep Academy",
        image: "/images/cob/logos/kh.png",
        company: "KnowledgeHut"
    },
    {
        quote: "Skilldeck has been crucial for my training company. It allows me to connect with students easily and share session recordings without worrying about them being shared. The integration is fantastic.",
        name: "Founder",
        role: "Language School",
        image: "/images/cob/logos/sta.png",
        company: "StarAgile"
    },
    {
        quote: "With insights and data from Skilldeck, our team efficiently monitors thousands of tutoring sessions daily. Interactive features have enhanced our educational offering and student engagement.",
        name: "Operations Head",
        role: "EdTech Company",
        image: "/images/cob/logos/sax.png",
        company: "Simpliaxis"
    },
    {
        quote: "Tracking sessions, recording lessons, and managing payments are now effortless. The intuitive design made it the perfect fit. Our tutors can now manage their schedules independently.",
        name: "CEO",
        role: "Training Institute",
        image: "/images/cob/logos/pal.png",
        company: "PremierAgile"
    }
];

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px]" />
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
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                        <Quote className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">Testimonials</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Loved by{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Training Companies
                        </span>
                    </h2>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
                            >
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote className="w-12 h-12 text-purple-500/30" />
                                </div>

                                {/* Quote Text */}
                                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                                    "{testimonials[current].quote}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <span className="text-xl">👤</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">
                                            {testimonials[current].name}
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            {testimonials[current].role} at {testimonials[current].company}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prev}
                                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrent(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                                            ? 'bg-purple-500 w-8'
                                            : 'bg-white/20 hover:bg-white/40'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
