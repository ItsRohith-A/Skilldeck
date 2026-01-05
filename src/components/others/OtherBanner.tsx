import React from 'react';
import { Sparkles } from 'lucide-react';

interface OtherBannerProps {
    title: string;
    subtitle?: string;
}

const OtherBanner: React.FC<OtherBannerProps> = ({ title, subtitle }) => {
    return (
        <div className="relative bg-brand-gradient text-white overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-violet/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

            <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-xs font-semibold tracking-wide uppercase">Skilldeck</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        {title}
                    </h1>

                    {/* Optional Subtitle */}
                    {subtitle && (
                        <p className="text-white/80 text-base md:text-lg max-w-2xl">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OtherBanner;

