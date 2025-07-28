'use client';
import React from 'react';
import Image from 'next/image';
import mockup1 from '../../../public/portfolio/templates/mockup1.png';
import mockup2 from '../../../public/portfolio/templates/mockup2.png';
import mockup3 from '../../../public/portfolio/templates/mockup3.png';
import mockup4 from '../../../public/portfolio/templates/mockup4.png';
import mockup5 from '../../../public/portfolio/templates/mockup5.png';
import appmockup from '../../../public/portfolio/templates/appmockup.png';
import figmaicon from '../../../public/portfolio/templates/figmaicon.png';

const mainTemplate = {
    icon: figmaicon,
    mockup: mockup1,
    appMockup: appmockup,
    titleTop: 'With Full Branding Kit',
    titleBottom: 'Mobile App UI/UX\nwith Dashboard',
    bgColor: '#6AD4DD',
};

const otherTemplates = [
    {
        image: mockup2,
        title: 'Trip Organizers Website',
    },
    {
        image: mockup3,
        title: 'Real Estate Web UI',
    },
    {
        image: mockup4,
        title: 'Fitness & Nutrition App',
    },
    {
        image: mockup5,
        title: 'Online Learning Platform UI',
    },
];

const UxUiTemplates = () => {
    return (
        <section className="mt-12 xl:mt-24 container mx-auto px-4">
            <h2 className="text-neutral-800 text-2xl sm:text-3xl lg:text-4xl text-center font-bold leading-tight mb-12">
                <span className="text-prime-blue">UI/UX Templates</span> & Resources
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Main Template Card */}
                <div
                    className="relative p-5 rounded-2xl overflow-hidden space-y-5 group "
                    style={{ backgroundColor: mainTemplate.bgColor }}
                >
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-white p-3 rounded-lg w-fit">
                            <Image
                                src={mainTemplate.icon}
                                alt="Figma icon"
                                className="w-12 h-auto"
                            />
                        </div>
                        <p className="text-start lg:text-right text-dark text-lg sm:text-2xl font-semibold leading-snug pr-4">
                            {mainTemplate.titleTop}
                        </p>
                    </div>
                    <Image src={mainTemplate.mockup} alt="Mockup 1" className="mx-auto group-hover:scale-105 transition-all duration-1000" />
                    <Image
                        src={mainTemplate.appMockup}
                        alt="App Mockup"
                        className="absolute -bottom-3 w-60 h-auto right-8 sm:right-16 group-hover:-bottom-96 transition-all duration-1000"
                    />
                    <p className="text-center lg:text-start  text-white text-xl sm:text-2xl font-semibold leading-tight pl-4 pb-4 whitespace-pre-line">
                        {mainTemplate.titleBottom}
                    </p>
                </div>

                {/* Other Template Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {otherTemplates.map((template, index) => (
                        <div
                            key={index}
                            className="bg-white/20 p-4 group rounded-lg border border-neutral-400/30 backdrop-blur-[5px] flex flex-col items-center justify-center gap-4"
                        >
                            <Image src={template.image} alt={template.title} className='group-hover:scale-105 transition-all duration-1000' />
                            <p className="text-zinc-800 text-base font-semibold text-center">
                                {template.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UxUiTemplates;
