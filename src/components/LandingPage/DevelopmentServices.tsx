import Link from 'next/link';
import React from 'react';
import { FaGlobe, FaChalkboardTeacher, FaMobileAlt, FaCogs, FaRegListAlt, FaUserCog, FaTasks, FaRobot, FaComments } from 'react-icons/fa';

const services = [
    {
        icon: <FaGlobe className="text-prime-blue text-2xl" />,
        title: 'Static & Dynamic Websites',
        description: 'Lightweight, SEO-optimized, and fully responsive websites that look great across all devices.',
    },
    {
        icon: <FaChalkboardTeacher className="text-prime-blue text-2xl" />,
        title: 'E-Learning Systems',
        description: 'Interactive LMS platforms with course creation, progress tracking, assessments, and certification modules.',
    },
    {
        icon: <FaCogs className="text-prime-blue text-2xl" />,
        title: 'CMS Development',
        description: 'Headless CMS or custom-built systems to let you manage content effortlessly.',
    },
    {
        icon: <FaRegListAlt className="text-prime-blue text-2xl" />,
        title: 'Event Management Systems',
        description: 'Event registrations, ticketing, scheduling, and real-time analytics — built for scale.',
    },
    {
        icon: <FaTasks className="text-prime-blue text-2xl" />,
        title: 'Task & Workflow Management',
        description: 'Custom tools to streamline team collaboration, task assignment, and productivity tracking.',
    },
    {
        icon: <FaMobileAlt className="text-prime-blue text-2xl" />,
        title: 'Mobile App Development',
        description: 'Android and iOS apps built using modern stacks—optimized for performance and UX.',
    },
    {
        icon: <FaUserCog className="text-prime-blue text-2xl" />,
        title: 'CRM Development',
        description: 'Custom CRMs to manage leads, clients, pipelines, and customer data with ease.',
    },
    {
        icon: <FaRobot className="text-prime-blue text-2xl" />,
        title: 'Marketing Automation',
        description: 'Automate your campaigns, email flows, and user journeys with data-driven strategies.',
    },
    {
        icon: <FaComments className="text-prime-blue text-2xl" />,
        title: 'Live Web Chat Integration',
        description: 'Real-time support chat tools for improved customer experience and engagement.',
    },
];

const DevelopmentServices = () => {
    return (
        <div className="container mx-auto mt-12 xl:mt-24">
            <div className="grid grid-cols-3 gap-12 items-center border border-prime-blue rounded-3xl p-12">
                <div className="col-span-1 space-y-4">
                    <div className="text-neutral-950 text-4xl font-bold leading-[54px]">
                        I provide end-to-end <span className="text-prime-blue">development services</span> for
                    </div>
                    <div className="text-zinc-800 text-base font-bold leading-normal mt-4">
                        I specialize in UI/UX design and development. My passion is solving problems through user-centric systems and digital innovation.
                    </div>
                    <button className="px-4 py-4 w-fit text-white text-base font-bold bg-prime-blue rounded-xl hover:shadow-[0px_10px_32px_0px_rgba(0,103,236,0.20)]" >
                        Hire Me
                    </button>
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-2 gap-8 overflow-y-auto overflow-hidden h-96 pr-2">
                        <div className="space-y-12 px-5 py-6">
                            {services.slice(0, Math.ceil(services.length / 2)).map((service, index) => (
                                <div key={index} className="space-y-3 hover:scale-105 transition-all duration-300 ease-in-out border-dashed border-prime-blue border rounded-xl p-6">
                                    {service.icon}
                                    <div className="text-black text-xl font-bold leading-tight">{service.title}</div>
                                    <div className="text-zinc-800 text-sm font-bold leading-tight">{service.description}</div>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-12 pt-32 px-5">
                            {services.slice(Math.ceil(services.length / 2)).map((service, index) => (
                                <div key={index} className="space-y-3 hover:scale-105 transition-all duration-300 ease-in-out border-dashed border-prime-blue border rounded-xl p-6">
                                    {service.icon}
                                    <div className="text-black text-xl font-bold leading-tight">{service.title}</div>
                                    <div className="text-zinc-800 text-sm font-bold leading-tight">{service.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopmentServices;
