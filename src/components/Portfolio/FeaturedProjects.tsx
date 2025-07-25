import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Tech stack icons
import bootstrap from '../../../public/portfolio/toolsandtech/bootstrap.png';
import firebase from '../../../public/portfolio/toolsandtech/firebase.png';
import laravel from '../../../public/portfolio/toolsandtech/laravel.png';
import mongodb from '../../../public/portfolio/toolsandtech/mongodb.png';
import mysql from '../../../public/portfolio/toolsandtech/mysql.png';
import nextjs from '../../../public/portfolio/toolsandtech/nextjs.png';
import nodejs from '../../../public/portfolio/toolsandtech/nodejs.png';
import reactjs from '../../../public/portfolio/toolsandtech/reactjs.png';
import razorpay from '../../../public/portfolio/toolsandtech/razorpay.png';

import nevodashbord from '../../../public/portfolio/featuredprojects/nevodashbord.png'
import nevodashbord2 from '../../../public/portfolio/featuredprojects/nevodashbord2.png'
import nevodashbord3 from '../../../public/portfolio/featuredprojects/nevodashbord3.png'

const projects = [
    {
        title: 'Smart Learning LMS',
        client: 'EdTech Startup',
        summary: 'Built a full LMS platform with user roles, quizzes, and certificates.',
        stackIcons: [reactjs, nodejs, mongodb, firebase],
        result: 'Used by 10,000+ learners globally.',
        images: [nevodashbord, nevodashbord2, nevodashbord3],
    },
    {
        title: 'E-commerce CRM Dashboard',
        client: 'Retail Chain',
        summary: 'Custom CRM with lead tracking, history & auto follow-up.',
        stackIcons: [laravel, mysql, bootstrap],
        result: 'Doubled repeat customer engagement.',
        images: [nevodashbord, nevodashbord3, nevodashbord2],
    },
    {
        title: 'Event Booking Platform',
        client: 'Global Events Company',
        summary: 'Timezone-based listings, QR tickets, and payment integration.',
        stackIcons: [nextjs, firebase, razorpay],
        result: '15,000+ global check-ins enabled.',
        images: [nevodashbord2, nevodashbord, nevodashbord3],
    },
];

const FeaturedProjects = () => {
    const [imageIndexes, setImageIndexes] = useState(projects.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndexes((prev) =>
                prev.map((curr, idx) => (curr + 1) % projects[idx].images.length)
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container mx-auto mt-12 xl:mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Featured <span className='text-prime-blue'>Projects</span></h2>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300 flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-48 overflow-hidden rounded-2xl ">
                            <Image
                                src={project.images[imageIndexes[i]]}
                                alt={project.title}
                                fill
                                className="group-hover:scale-105 transition-transform duration-700 w-full"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow gap-3">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-500"><strong>Client:</strong> {project.client}</p>
                            <p className="text-sm text-gray-700">{project.summary}</p>
                            <div className="flex gap-2 flex-wrap mt-2">
                                {project.stackIcons.map((icon, idx) => (
                                    <Image
                                        key={idx}
                                        src={icon}
                                        alt="Tech Icon"
                                        className="rounded-sm w-10 object-contain"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-green-700 font-medium mt-auto">{project.result}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
