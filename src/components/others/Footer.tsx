'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import { Mail, Linkedin, Twitter, Instagram, Youtube, ArrowUp, Sparkles, Check } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../public/images/logo/logo-alt.png';

function Footer() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const triggerForm = (id: string) => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id,
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email && /\S+@\S+\.\S+/.test(email)) {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitted(true);
                setLoading(false);
                setEmail('');
            }, 1000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
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

    const features = [
        'No setup fees',
        'Free migration',
        '24/7 support',
    ];

    return (
        <footer className="bg-surface-900 relative overflow-hidden" id="footer">
            {/* Background elements */}
            <div className="absolute inset-0 gradient-mesh opacity-20" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-violet/10 rounded-full blur-3xl" />

            {/* CTA Section */}
            <div className="relative z-10 pt-16 md:pt-24 pb-12 md:pb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-brand-400" />
                            <span className="text-surface-300 text-sm">Ready to Transform Your Business?</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Stay Ahead. Stay Focused.
                        </h2>

                        {/* Description */}
                        <p className="text-surface-400 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                            Skilldeck is built for trainers & training companies who want to focus on what truly matters — <span className="text-white font-semibold">delivering great training and growing their business.</span>
                        </p>

                        {/* Checkmarks */}
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 text-surface-400 text-sm">
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-surface-400" />
                                Stop managing tools.
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-surface-400" />
                                Stop wasting money.
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-surface-400" />
                                Start scaling with Skilldeck.
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <button
                                onClick={() => triggerForm('footer-get-started')}
                                className="inline-flex items-center gap-2 bg-brand-gradient text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg cursor-pointer"
                            >
                                Get Started Today
                                <ArrowUp className="w-4 h-4 rotate-45" />
                            </button>
                            <button
                                onClick={() => triggerForm('footer-talk-to-sales')}
                                className="inline-flex items-center gap-2 bg-surface-800 border border-surface-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-surface-700 transition-colors cursor-pointer"
                            >
                                Talk to Sales
                            </button>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            {features.map((feature, index) => (
                                <span key={index} className="flex items-center gap-2 text-surface-400 text-sm">
                                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                                    </div>
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 border-t border-surface-800 py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Brand Column */}
                        <div className="lg:col-span-4">
                            {/* Logo */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">S</span>
                                </div>
                                <span className="text-white text-xl font-bold">SkillDeck</span>
                            </div>

                            <p className="text-surface-400 text-sm mb-6 max-w-xs">
                                The all-in-one platform for training companies. Website, LMS, CRM, and marketing—all in one place.
                            </p>

                            {/* Newsletter */}
                            <div className="mb-6">
                                <p className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</p>
                                <form onSubmit={handleSubmit} className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="flex-1 bg-surface-800 border border-surface-700 rounded-lg px-4 py-2 text-white text-sm placeholder:text-surface-500 focus:outline-none focus:border-brand-500 transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="bg-brand-gradient text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                                    >
                                        {loading ? '...' : 'Subscribe'}
                                    </button>
                                </form>
                                {isSubmitted && (
                                    <p className="text-emerald-400 text-xs mt-2">Thanks for subscribing!</p>
                                )}
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                <Link href="#" className="w-9 h-9 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center text-surface-400 hover:text-white hover:border-brand-500 transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="w-9 h-9 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center text-surface-400 hover:text-white hover:border-brand-500 transition-colors">
                                    <Twitter className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="w-9 h-9 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center text-surface-400 hover:text-white hover:border-brand-500 transition-colors">
                                    <Instagram className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="w-9 h-9 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center text-surface-400 hover:text-white hover:border-brand-500 transition-colors">
                                    <Youtube className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Product Links */}
                        <div className="lg:col-span-2">
                            <h4 className="text-surface-500 text-xs uppercase tracking-wider font-semibold mb-4">Product</h4>
                            <ul className="space-y-3">
                                {productLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-surface-300 text-sm hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="lg:col-span-2">
                            <h4 className="text-surface-500 text-xs uppercase tracking-wider font-semibold mb-4">Company</h4>
                            <ul className="space-y-3">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-surface-300 text-sm hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="lg:col-span-2">
                            <h4 className="text-surface-500 text-xs uppercase tracking-wider font-semibold mb-4">Legal</h4>
                            <ul className="space-y-3">
                                {legalLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-surface-300 text-sm hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Contact */}
                            <div className="mt-6">
                                <h4 className="text-surface-500 text-xs uppercase tracking-wider font-semibold mb-3">Contact</h4>
                                <Link href="mailto:hello@skilldeck.net" className="flex items-center gap-2 text-surface-300 text-sm hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" />
                                    hello@skilldeck.net
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="relative z-10 border-t border-surface-800 py-6">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-surface-500 text-sm">
                            © 2026 Skilldeck. All rights reserved.
                        </p>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-surface-400 text-sm hover:text-white transition-colors"
                        >
                            Back to top
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
