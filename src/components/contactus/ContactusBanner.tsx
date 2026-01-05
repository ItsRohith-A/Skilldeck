import React from 'react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

const ContactusBanner = () => {
    return (
        <div className="relative bg-brand-gradient text-white overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-violet/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-xs font-semibold tracking-wide uppercase">Get in Touch</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Contact Us
                    </h1>
                    <p className="text-white/80 text-base md:text-lg max-w-2xl mb-10">
                        Have questions? We'd love to hear from you. Reach out to us through any of the channels below.
                    </p>

                    {/* Contact Cards */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <Link
                            href="mailto:hello@skilldeck.net"
                            className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-white/60 text-sm">Email us at</p>
                                <p className="font-semibold">hello@skilldeck.net</p>
                            </div>
                        </Link>

                        <Link
                            href="tel:+919036707847"
                            className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-white/60 text-sm">Call us at</p>
                                <p className="font-semibold">+91 9036707847</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactusBanner;

