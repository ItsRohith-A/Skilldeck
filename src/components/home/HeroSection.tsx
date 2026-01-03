import React from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { Rocket } from 'lucide-react';
import Image from 'next/image';
import heroImage from '../../../public/figma-designs/image.png';
import bannerBg from '../../../public/figma-designs/bannerbg.png';

const HeroSection = () => {
    return (
        <section className="section-padding relative overflow-hidden pt-32 lg:pt-40 ">
            {/* Background Image */}
            <Image
                src={bannerBg}
                alt="Background"
                fill
                className="object-cover object-center -z-10"
                priority
            />
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 gradient-mesh opacity-20" />

            <div className="container mx-auto ">
                <div className="flex gap-8 justify-between items-center">
                    <div className="">
                        <div className="self-stretch inline-flex flex-col justify-start items-start text-nowrap">
                            <div className="self-stretch justify-center">
                                <span className="text-color-grey-1 text-7xl font-semibold ">One Platform. <br /></span>
                                <span className="bg-gradient-ai-color bg-clip-text text-transparent text-8xl font-extrabold">Zero Chaos.<br /></span>
                                <span className="text-color-grey-1 text-3xl font-extrabold ">Run Your Entire Training Business at</span>
                                <br />
                                <span className="text-blue-600 text-7xl font-semibold ">90% Lower Cost</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 space-y-4">
                        <div className="self-stretch justify-center">
                            <span className="text-[#757575] text-xl font-medium leading-9">90% of training companies
                                overspend on the <span className="text-black text-xl font-extrabold leading-9">
                                    wrong technology, bloated marketing teams, fragmented tools, manual operations, and broken sales processes
                                </span>—and still struggle with lean margins.</span>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/pricing" className="inline-flex bg-brand-gradient items-center gap-2 rounded-md px-6 py-2">
                                <span className="text-white text-xl font-medium leading-9">Request Demo</span>
                                <HiArrowRight className="w-5 h-5 text-white" />
                            </Link>
                            <Link href="/pricing" className="inline-flex  items-center gap-2 rounded-md px-6 py-1">
                                <span className="text-xl font-medium leading-9">Explore Features</span>
                                <div className="bg-black p-4 rounded-md">
                                    <HiArrowRight className="w-5 h-5  text-white" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between py-10 px-20">
                    <div className="flex items-center gap-2">
                        <div className="bg-brand-gradient text-white w-fit p-3 rounded-md">
                            <Rocket />
                        </div>
                        Launch faster
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-brand-gradient text-white w-fit p-3 rounded-md">
                            <Rocket />
                        </div>
                        Launch faster
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-brand-gradient text-white w-fit p-3 rounded-md">
                            <Rocket />
                        </div>
                        Launch faster
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-brand-gradient text-white w-fit p-3 rounded-md">
                            <Rocket />
                        </div>
                        Launch faster
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="">
                        <div className="w-56 text-center justify-center">The unified SaaS platform built</div>
                        <div className="text-cyan-950 text-base font-bold leading-6">exclusively for trainers and training companies.

                        </div>
                    </div>
                    <Image src={heroImage} alt="hero" width={500} height={500} />
                    <div className="text-center justify-center text-black text-xl font-bold leading-6">What if one single <br />platform could<br /> replace all of it?
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;