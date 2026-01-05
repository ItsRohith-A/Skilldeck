'use client';

import React from 'react';
import ModernNavbar from './ModernNavbar';
import ModernHero from './ModernHero';
import TrustedBy from './TrustedBy';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import FeatureShowcase from './FeatureShowcase';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import CTABanner from './CTABanner';
import ModernFooter from './ModernFooter';

/**
 * Modern Homepage V2
 * 
 * A complete redesign of the homepage with:
 * - Framer Motion animations
 * - Gradient accents and glassmorphism
 * - Clean typography and spacing
 * - Mobile-first responsive design
 */
const HomePageV2 = () => {
    return (
        <main className="bg-[#0a0a0f] min-h-screen">
            <ModernNavbar />
            <ModernHero />
            <TrustedBy />
            <ProblemSection />
            <SolutionSection />
            <FeatureShowcase />
            <TestimonialsSection />
            <FAQSection />
            <CTABanner />
            <ModernFooter />
        </main>
    );
};

export default HomePageV2;
