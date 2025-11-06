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
    figmaLink: 'https://www.figma.com/proto/km4iMBHi6oljyyILOmaKz1/ZENIT-Client-Preview?page-id=0%3A1&node-id=48-834&viewport=869%2C257%2C0.45&t=fm6nTt6D4L9dlK3r-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=48%3A834&show-proto-sidebar=1',
};

const otherTemplates = [
    {
        image: mockup2,
        title: 'Trip Organizers Website',
        figmaLink: 'https://www.figma.com/proto/bpBWVJmxPcBodg786maXFz/TeamTrip-Client-Copy?page-id=0%3A1&node-id=378-32602&p=f&viewport=1059%2C668%2C0.08&t=30RfHDLg2OJIDNEX-1&scaling=scale-down-width&content-scaling=fixed',
    },
    {
        image: mockup3,
        title: 'Skilldots Training Website',
        figmaLink: 'https://www.figma.com/proto/btnMbrhYZQn1b8OX8T7A5i/Skilldots?page-id=4%3A31&node-id=4-33&viewport=699%2C497%2C1&t=1er1H7UOXmuvlIR3-1&scaling=scale-down-width&content-scaling=fixed',
    },
    {
        image: mockup4,
        title: 'VLSIFirst Training Website',
        figmaLink: 'https://www.figma.com/proto/T5ucI3qdWJhGYRtr289d5O/2025-VLSIFirst?page-id=0%3A1&node-id=104-1072&viewport=37%2C163%2C0.1&t=Gcm1gW28a82LiAym-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A393',
    },
    {
        image: mockup5,
        title: 'Online Learning Platform UI',
        figmaLink: 'https://www.figma.com/proto/vd6JDv7ks2jTGIV57zdzrz/Nevolearn?page-id=15%3A12813&node-id=295-29224&viewport=191%2C376%2C0.02&t=xrYo4zsC5SilYyQO-1&scaling=scale-down-width&content-scaling=fixed', // Link not available
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
                <a
                    href={mainTemplate.figmaLink || '#'}
                    target={mainTemplate.figmaLink ? '_blank' : '_self'}
                    rel="noopener noreferrer noindex nofollow"
                    className={`relative rounded-2xl overflow-hidden space-y-5 group block ${mainTemplate.figmaLink ? 'cursor-pointer' : 'cursor-not-allowed'
                        }`}
                    style={{ backgroundColor: mainTemplate.bgColor }}
                    title={mainTemplate.figmaLink ? '' : 'Figma link not available'}
                >
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
                </a>

                {/* Other Template Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {otherTemplates.map((template, index) => {
                        const hasLink = !!template.figmaLink;
                        return (
                            <a
                                key={index}
                                href={hasLink ? template.figmaLink : '#'}
                                target={hasLink ? '_blank' : '_self'}
                                rel="noopener noreferrer noindex nofollow"
                                title={hasLink ? '' : 'Figma link not available'}
                                className={`bg-white/20 p-4 group rounded-lg border border-neutral-400/30 backdrop-blur-[5px] flex flex-col items-center justify-center gap-4 transition ${hasLink ? 'cursor-pointer' : 'cursor-not-allowed'
                                    }`}
                            >
                                <Image
                                    src={template.image}
                                    alt={template.title}
                                    className="group-hover:scale-105 transition-all duration-1000"
                                />
                                <p className="text-zinc-800 text-base font-semibold text-center">
                                    {template.title}
                                </p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default UxUiTemplates;
