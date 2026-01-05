'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is Skilldeck and who is it for?",
        answer: "Skilldeck is a unified SaaS platform designed specifically for trainers and training companies. It replaces 10+ scattered tools with one powerful platform that handles everything from website and SEO to LMS, CRM, marketing, payments, and operations."
    },
    {
        question: "How does Skilldeck save up to 90% of costs?",
        answer: "By eliminating the need for multiple software subscriptions, reducing team size requirements, removing development and maintenance costs, and automating manual processes. Most training companies can operate with just 5-10% of the typical resources."
    },
    {
        question: "Can I migrate my existing data to Skilldeck?",
        answer: "Yes! We offer free migration assistance to help you transfer your existing data from other platforms. Our team will help ensure a smooth transition with minimal disruption to your operations."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a comprehensive demo session where you can experience the platform firsthand. You'll get one-time session access, a full platform walkthrough, personalized use case discussion, and Q&A with our product experts."
    },
    {
        question: "What kind of support do you provide?",
        answer: "We provide 24/7 support through multiple channels including chat, email, and phone. Additionally, you get access to our knowledge base, video tutorials, and dedicated account management for enterprise clients."
    },
    {
        question: "Is Skilldeck suitable for small training businesses?",
        answer: "Absolutely! Skilldeck is designed to scale with your business. Whether you're a solo trainer just starting out or an established training company with multiple instructors, our platform adapts to your needs."
    }
];

const FAQItem = ({ faq, isOpen, onClick, index }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-b border-white/10"
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 text-left hover:text-blue-400 transition-colors group"
            >
                <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors pr-8">
                    {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-500/20 rotate-180' : ''}`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-blue-400' : 'text-gray-400'}`} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 pb-6 pr-12 leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-32 bg-[#0a0a0f] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                            <HelpCircle className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">FAQs</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                            Frequently Asked{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg">
                            Everything you need to know about Skilldeck
                        </p>
                    </motion.div>

                    {/* FAQ List */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 md:px-8">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                index={index}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-400 mb-4">
                            Still have questions?
                        </p>
                        <a
                            href="/contact-us"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                            Contact our team
                            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
