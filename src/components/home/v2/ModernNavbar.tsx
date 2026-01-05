'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Platform', href: '/platform' },
    { name: 'Insights', href: '/blog' },
    { name: 'Contact', href: '/contact-us' },
];

const ModernNavbar = () => {
    const dispatch = useDispatch();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const triggerForm = () => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id: 'v2-navbar-demo',
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'py-4 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5'
                    : 'py-6 bg-transparent'
                }`}>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-xl font-bold text-white">Skilldeck</span>
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button
                                onClick={triggerForm}
                                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
                            >
                                Start Free
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-[#0a0a0f] transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="pt-24 px-6">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl font-medium py-3 border-b border-white/10"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <button
                        onClick={() => { triggerForm(); setIsMobileMenuOpen(false); }}
                        className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-full font-medium flex items-center justify-center gap-2"
                    >
                        Start Free Trial
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ModernNavbar;
