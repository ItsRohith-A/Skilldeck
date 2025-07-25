// components/ServicesWorkflow.tsx

import React from 'react';
import {
    FaRegLightbulb,
    FaDraftingCompass,
    FaCode,
    FaRocket,
} from 'react-icons/fa';

const workflowSteps = [
    {
        icon: <FaRegLightbulb className="text-yellow-500 text-2xl" />,
        title: 'Consult & Plan',
        description: 'We dive into your business objectives to build a detailed roadmap for success.',
    },
    {
        icon: <FaDraftingCompass className="text-pink-500 text-2xl" />,
        title: 'Design & Prototype',
        description: 'Our UI/UX experts craft wireframes and interactive mockups to visualize your product.',
    },
    {
        icon: <FaCode className="text-blue-500 text-2xl" />,
        title: 'Develop & Integrate',
        description: 'Robust code, seamless integration, and scalable architecture built to last.',
    },
    {
        icon: <FaRocket className="text-green-500 text-2xl" />,
        title: 'Launch & Support',
        description: 'From go-live to growth, we provide hands-on support and performance optimization.',
    },
];

const hiringBenefits = [
    "🎯 Tailor-made solutions, not templates",
    "🧠 Blend of creativity, logic & performance",
    "🌍 Support for multiple currencies & timezones",
    "🔒 Secure code practices & GDPR compliance",
    "🔧 Post-launch maintenance & training",
    "💼 Trusted by startups and small businesses",
];

const ServicesWorkflow = () => {
    return (
        <section className="bg-prime-dark py-12 xl:py-24 mt-12 xl:mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Workflow Steps */}
                    <div className='flex justify-between items-center'>
                        <div className="w-12 h-12 flex justify-center">
                            <h2 className="text-3xl text-nowrap sm:text-4xl font-bold text-center lg:text-left text-white -rotate-90">
                                Services <span className="text-prime-blue animate-pulse">Workflow</span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6">
                            {workflowSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className=" bg-white border space-y-3 p-6 rounded-xl hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex justify-center">{step.icon}</div>
                                        <h4 className="text-lg font-semibold">{step.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Hire Me Section */}
                    <div className="flex flex-col gap-6 justify-center">
                        <h3 className="text-white text-3xl sm:text-4xl font-semibold leading-snug">
                            Why Hire Me For Your <br />
                            Next <span className="text-prime-blue">Project?</span>
                        </h3>

                        <ul className="space-y-3">
                            {hiringBenefits.map((point, idx) => (
                                <li key={idx} className="text-white text-base sm:text-lg">{point}</li>
                            ))}
                        </ul>

                        <p className="text-white text-sm sm:text-base leading-relaxed">
                            With years of experience delivering digital products across industries, I offer
                            full-cycle solutions that blend creativity, technology, and measurable outcomes. Let’s collaborate and bring your vision to life — backed by reliable support and a scalable foundation.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 bg-prime-blue text-prime-dark rounded-xl font-bold hover:bg-opacity-90 transition">Hire Us</button>
                            <button className="px-6 py-3 bg-white text-prime-dark rounded-xl font-bold hover:bg-gray-200 transition">Get in Touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesWorkflow;
