'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import {
    Globe,
    BarChart3,
    Users,
    Zap,
    Calendar,
    ShoppingCart,
    ArrowRight,
    Sparkles
} from 'lucide-react';

const features = [
    {
        icon: Globe,
        title: "SEO-Optimized Website",
        description: "Launch a beautiful, SEO-optimized website in no time. Generate region-wise landing pages automatically.",
        gradient: "from-blue-500 to-cyan-500",
        highlight: "Website & SEO"
    },
    {
        icon: BarChart3,
        title: "LMS, CRM & Marketing",
        description: "Run LMS, CRM & Marketing from one dashboard. Manage learners, leads, and campaigns seamlessly.",
        gradient: "from-purple-500 to-pink-500",
        highlight: "All-in-One"
    },
    {
        icon: Calendar,
        title: "Class & Event Management",
        description: "Manage classes, events & trainers globally. Schedule sessions, track attendance with ease.",
        gradient: "from-orange-500 to-red-500",
        highlight: "Scheduling"
    },
    {
        icon: ShoppingCart,
        title: "Sell Courses & Products",
        description: "Sell courses, products & services effortlessly with built-in checkout, subscriptions & payments.",
        gradient: "from-emerald-500 to-teal-500",
        highlight: "E-Commerce"
    },
    {
        icon: Zap,
        title: "Automate Operations",
        description: "Automate operations across departments. Reduce manual work and scale without hiring.",
        gradient: "from-amber-500 to-orange-500",
        highlight: "Automation"
    },
    {
        icon: Users,
        title: "Built for Trainers",
        description: "Designed specifically for trainers & training companies. Not a generic SaaS platform.",
        gradient: "from-indigo-500 to-purple-500",
        highlight: "Industry-Specific"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeatureShowcase = () => {
    const dispatch = useDispatch();

    const triggerForm = () => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id: 'v2-features-demo',
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };

    return (
        <section className="py-20 md:py-32 bg-[#0a0a0f] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
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
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">What You Get</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Launch Faster.{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Scale Smarter.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Everything you need to run a successful training business, unified in one powerful platform.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

                            <div className="relative z-10">
                                {/* Highlight Tag */}
                                <div className="inline-block text-xs text-gray-400 uppercase tracking-wider mb-4">
                                    {feature.highlight}
                                </div>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {feature.description}
                                </p>

                                {/* Learn More Link */}
                                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
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
                    <button
                        onClick={triggerForm}
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300"
                    >
                        Explore All Features
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureShowcase;
