import React from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { Rocket, Zap, Settings, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import heroImage from '../../../public/figma-designs/image.png';
import bannerBg from '../../../public/figma-designs/bannerbg.png';
import bannerLeft from '../../../public/figma-designs/banner-left.png';
import bannerRight from '../../../public/figma-designs/banner-right.png';

const featurePills = [
    { icon: Rocket, text: 'Launch faster' },
    { icon: Settings, text: 'Operate leaner' },
    { icon: Zap, text: 'Automate everything' },
    { icon: TrendingUp, text: 'Scale without stress' }
];

const HeroSection = () => {
    return (
        <section className="section-padding relative overflow-hidden pt-28 pb-8 md:pt-32 md:pb-12 lg:pt-40 lg:pb-16">
            {/* Background Image */}
            <Image
                src={bannerBg}
                alt="Background"
                fill
                className="object-cover object-center -z-10"
                priority
            />
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 gradient-mesh opacity-20 -z-50" />

            <div className="container mx-auto px-4 md:px-6">
                {/* Hero Content - Stacks on mobile, side by side on desktop */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-center lg:items-center">
                    {/* Main Heading - Centered on mobile */}
                    <div className="w-full lg:w-auto text-center lg:text-left">
                        <div className="flex flex-col justify-start items-center lg:items-start">
                            <div>
                                <span className="text-color-grey-1 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">One Platform. <br /></span>
                                <span className="bg-gradient-ai-color bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight">Zero Chaos.<br /></span>
                                <span className="text-color-grey-1 text-base sm:text-lg md:text-xl lg:text-3xl font-extrabold mt-2 block">Run Your Entire Training Business at</span>
                                <span className="text-blue-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">90% Lower Cost</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="w-full lg:w-4/12 space-y-4 text-center lg:text-left">
                        <p className="text-[#757575] text-sm sm:text-base lg:text-xl font-medium leading-6 lg:leading-9">
                            90% of training companies overspend on the{' '}
                            <span className="text-black font-extrabold">
                                wrong technology, bloated marketing teams, fragmented tools, manual operations, and broken sales processes
                            </span>
                            —and still struggle with lean margins.
                        </p>

                        {/* CTA Buttons - Stack on very small screens */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link href="/pricing" className="inline-flex bg-brand-gradient items-center justify-center gap-2 rounded-lg px-5 py-2.5 shadow-lg hover:shadow-xl transition-shadow">
                                <span className="text-white text-sm sm:text-base font-medium">Request Demo</span>
                                <HiArrowRight className="w-4 h-4 text-white" />
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 border border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
                                <span className="text-sm sm:text-base font-medium">Explore Features</span>
                                <div className="bg-black p-2 rounded-md">
                                    <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Feature Pills - Desktop Only */}
                <div className="hidden md:flex items-center justify-between py-10 px-10 lg:px-20">
                    {featurePills.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="bg-brand-gradient text-white w-fit p-3 rounded-md">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm md:text-base whitespace-nowrap font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>

                {/* Meet Skilldeck Section */}
                <div className="space-y-6 mt-6 md:mt-6">
                    <div className="flex items-center justify-center gap-4 md:gap-6">
                        <div className="border-b border-[#757575]/50 h-1 w-full" />
                        <div className="bg-brand-gradient w-fit px-4 py-1.5 rounded-full mx-auto flex-shrink-0">
                            <div className="justify-center text-white text-center text-xs sm:text-sm text-nowrap">Meet Skilldeck</div>
                        </div>
                        <div className="border-b border-[#757575]/50 h-1 w-full" />
                    </div>

                    {/* Video Section with Side Cards */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">

                        {/* Left Card - Hidden on mobile, visible on lg */}
                        <div className="hidden lg:block bg-brand-gradient p-4 rounded-2xl space-y-4 pb-4 -rotate-12 z-10">
                            <Image src={bannerLeft} alt="hero" width={200} height={200} />
                            <div className="text-center justify-center text-white text-xl font-bold leading-6">What if one single <br />platform could<br /> replace all of it?</div>
                        </div>

                        {/* Enhanced YouTube Video Container */}
                        <div className="group relative w-full max-w-[560px] lg:w-auto">
                            {/* Gradient Border & Glow Effect */}
                            <div className="absolute -inset-1 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse" />

                            {/* Glassmorphic Container */}
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-2 sm:p-3 rounded-2xl border border-white/20 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                                {/* Inner Shadow Frame - Crops bottom YouTube bar */}
                                <div className="relative overflow-hidden rounded-xl shadow-inner aspect-video lg:aspect-auto" style={{ maxHeight: '315px' }}>
                                    {/* Video Reflection Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none rounded-xl z-10" />

                                    {/* Iframe wrapper to hide "Watch on YouTube" bar */}
                                    <div className="overflow-hidden w-full h-full">
                                        <iframe
                                            className="rounded-xl w-full h-full lg:w-[560px] lg:h-[365px]"
                                            style={{ marginBottom: '-50px' }}
                                            src="https://www.youtube-nocookie.com/embed/A-y-PXFigPI?si=QuXKZfAhxb054Gyz&modestbranding=1&rel=0&showinfo=0&controls=1"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Card - Hidden on mobile, visible on lg */}
                        <div className="hidden lg:block bg-[#FFCB27] p-4 rounded-2xl space-y-4 pb-4 rotate-12 w-60 h-64">
                            <div className="text-center justify-center text-black text-xl font-bold leading-6">The unified SaaS platform built
                                <p className="text-center justify-center text-black text-sm">
                                    exclusively for trainers and training companies.
                                </p></div>
                            <Image src={bannerRight} alt="hero" width={200} height={200} />
                        </div>
                    </div>

                    {/* Mobile Only - Combined Feature Section (Below Video) */}
                    <div className="lg:hidden mt-6 space-y-4">
                        {/* Info Cards Row */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-brand-gradient p-3 rounded-2xl">
                                <Image src={bannerLeft} alt="hero" width={100} height={100} className="mx-auto mb-2" />
                                <div className="text-center text-white text-xs font-bold leading-4">What if one single platform could replace all of it?</div>
                            </div>
                            <div className="bg-ai-gradient p-3 rounded-2xl">
                                <div className="text-center text-black text-xs font-bold leading-4 mb-2">The unified SaaS platform built
                                    <span className="text-[10px] font-normal block mt-0.5">
                                        exclusively for trainers and training companies.
                                    </span>
                                </div>
                                <Image src={bannerRight} alt="hero" width={100} height={100} className="mx-auto" />
                            </div>
                        </div>

                        {/* Feature Pills Grid */}
                        <div className="grid grid-cols-2 gap-2">
                            {featurePills.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2.5 border border-gray-100 shadow-sm">
                                    <div className="bg-brand-gradient text-white p-1.5 rounded-md flex-shrink-0">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-medium text-gray-800">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;