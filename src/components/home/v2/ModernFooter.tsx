'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Linkedin, Twitter, Instagram, Youtube, ArrowUp, Send } from 'lucide-react';

const ModernFooter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && /\S+@\S+\.\S+/.test(email)) {
            setIsSubmitted(true);
            setEmail('');
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const productLinks = [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Demo', href: '/demo' },
        { label: 'Portfolio', href: '/portfolio' },
    ];

    const companyLinks = [
        { label: 'About Us', href: '/about-us' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact-us' },
        { label: 'Guest Author', href: '/guest-author' },
    ];

    const legalLinks = [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-and-condition' },
        { label: 'Refund Policy', href: '/cancellation-and-refund' },
    ];

    const socialLinks = [
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    ];

    return (
        <footer className="bg-[#0a0a0f] border-t border-white/10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">S</span>
                                </div>
                                <span className="text-2xl font-bold text-white">Skilldeck</span>
                            </div>
                        </Link>

                        <p className="text-gray-400 mb-6 max-w-sm">
                            The unified SaaS platform built exclusively for trainers and training companies. Run your entire business at 90% lower cost.
                        </p>

                        {/* Newsletter */}
                        <div className="mb-6">
                            <p className="text-white font-medium mb-3">Stay updated</p>
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                            {isSubmitted && (
                                <p className="text-emerald-400 text-sm mt-2">Thanks for subscribing!</p>
                            )}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-3">
                            {productLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Skilldeck. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <span className="text-sm">Back to top</span>
                        <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;
