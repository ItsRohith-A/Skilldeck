import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
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
    const dispatch = useDispatch();

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
                            <button onClick={() => triggerForm('hero-request-demo')} className="inline-flex bg-brand-gradient items-center justify-center gap-2 rounded-lg px-5 py-2.5 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                                <span className="text-white text-sm sm:text-base font-medium">Request Demo</span>
                                <HiArrowRight className="w-4 h-4 text-white" />
                            </button>
                            <Link href="/features" className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 border border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
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
                    <div className="group flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">

                        {/* LEFT CARD */}
                        <div
                            className="
                    hidden lg:block
                    bg-brand-gradient p-4 rounded-2xl space-y-4 pb-4
                    -rotate-12 z-10
                    transition-transform duration-500 ease-out
                    group-hover:-translate-y-8 group-hover:-translate-x-10 group-hover:rotate-0
                "
                        >
                            <Image
                                src={bannerLeft}
                                alt="hero"
                                width={200}
                                height={200}
                            />
                            <div className="text-center text-white text-xl font-bold leading-6">
                                What if one single <br />
                                platform could <br />
                                replace all of it?
                            </div>
                        </div>

                        {/* VIDEO SECTION (HOVER TRIGGER) */}
                        <div className="relative w-full max-w-[560px] lg:w-auto">

                            {/* Glow Border */}
                            <div className="absolute -inset-1 rounded-3xl blur-sm opacity-75 
                    group-hover:opacity-100 group-hover:blur-md 
                    transition-all duration-500 animate-pulse" />

                            {/* Glass Container */}
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 
                    backdrop-blur-xl p-2 sm:p-3 rounded-2xl 
                    border border-white/20 shadow-2xl
                    transition-transform duration-500
                    group-hover:scale-[1.02]"
                            >
                                {/* Video Wrapper */}
                                <div
                                    className="relative overflow-hidden rounded-xl shadow-inner aspect-video"
                                    style={{ maxHeight: "315px" }}
                                >
                                    {/* Reflection Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t 
                            from-transparent via-transparent to-white/10 
                            pointer-events-none rounded-xl z-10"
                                    />

                                    {/* Iframe */}
                                    <iframe
                                        className="rounded-xl w-full h-full lg:w-[560px] lg:h-[365px]"
                                        style={{ marginBottom: "-50px" }}
                                        src="https://www.youtube-nocookie.com/embed/A-y-PXFigPI?modestbranding=1&rel=0&controls=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div
                            className="
                    hidden lg:block
                    bg-[#FFCB27] p-4 rounded-2xl space-y-4 pb-4
                    rotate-12 w-60 h-64
                    transition-transform duration-500 ease-out
                    group-hover:-translate-y-8 group-hover:translate-x-10 group-hover:rotate-0
                "
                        >
                            <div className="text-center text-black text-xl font-bold leading-6">
                                The unified SaaS platform built
                                <p className="text-sm font-medium">
                                    exclusively for trainers and training companies.
                                </p>
                            </div>

                            <Image
                                src={bannerRight}
                                alt="hero"
                                width={200}
                                height={200}
                            />
                        </div>

                    </div>

                    {/* Mobile Only - Combined Feature Section (Below Video) */}
                    <div className="lg:hidden mt-6 space-y-4">
                        {/* Value Proposition Card */}
                        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-5 relative overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white font-bold text-sm">One Platform. Infinite Possibilities.</span>
                                </div>

                                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                                    Replace 10+ tools with one unified platform built exclusively for trainers & training companies.
                                </p>

                                {/* Stats Row */}
                                <div className="flex items-center justify-between">
                                    <div className="text-center">
                                        <div className="text-xl font-bold text-white">90%</div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Cost Saved</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-700" />
                                    <div className="text-center">
                                        <div className="text-xl font-bold text-white">10+</div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Tools Replaced</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-700" />
                                    <div className="text-center">
                                        <div className="text-xl font-bold text-white">500+</div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Companies</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature Pills - Infinite Auto Scroll */}
                        <div className="relative overflow-hidden -mx-4">
                            {/* Gradient Fade Left */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                            {/* Gradient Fade Right */}
                            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                            <div className="flex overflow-hidden">
                                <div className="flex gap-3 animate-scroll-pills">
                                    {/* First set */}
                                    {featurePills.map((item, index) => (
                                        <div key={`first-${index}`} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 border border-gray-100 shadow-sm flex-shrink-0">
                                            <div className="bg-brand-gradient text-white p-1 rounded-full flex-shrink-0">
                                                <item.icon className="w-3 h-3" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{item.text}</span>
                                        </div>
                                    ))}
                                    {/* Duplicate for seamless loop */}
                                    {featurePills.map((item, index) => (
                                        <div key={`second-${index}`} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 border border-gray-100 shadow-sm flex-shrink-0">
                                            <div className="bg-brand-gradient text-white p-1 rounded-full flex-shrink-0">
                                                <item.icon className="w-3 h-3" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animation for mobile pills */}
            <style jsx>{`
                @keyframes scroll-pills {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll-pills {
                    animation: scroll-pills 15s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;