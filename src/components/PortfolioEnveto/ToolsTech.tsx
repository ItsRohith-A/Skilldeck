import React from 'react';
import Image from 'next/image';

import bootstrap from '../../../public/portfolio/toolsandtech/bootstrap.png';
import docker from '../../../public/portfolio/toolsandtech/docker.png';
import expressjs from '../../../public/portfolio/toolsandtech/expressjs.png';
import firebase from '../../../public/portfolio/toolsandtech/firebase.png';
import javascript from '../../../public/portfolio/toolsandtech/javascript.png';
import laravel from '../../../public/portfolio/toolsandtech/laravel.png';
import mongodb from '../../../public/portfolio/toolsandtech/mongodb.png';
import mysql from '../../../public/portfolio/toolsandtech/mysql.png';
import nestjs from '../../../public/portfolio/toolsandtech/nestjs.png';
import nextjs from '../../../public/portfolio/toolsandtech/nextjs.png';
import nodejs from '../../../public/portfolio/toolsandtech/nodejs.png';
import postgresql from '../../../public/portfolio/toolsandtech/postgresql.png';
import reactjs from '../../../public/portfolio/toolsandtech/reactjs.png';
import reactnative from '../../../public/portfolio/toolsandtech/reactnative.png';
import redux from '../../../public/portfolio/toolsandtech/redux.png';
import styledcomponents from '../../../public/portfolio/toolsandtech/styledcomponents.png';
import tailwindcss from '../../../public/portfolio/toolsandtech/tailwindcss.png';
import typescript from '../../../public/portfolio/toolsandtech/typescript.png';


const techLogos = [
    { img: nextjs, name: 'Next.js' },
    { img: reactjs, name: 'React.js' },
    { img: typescript, name: 'TypeScript' },
    { img: javascript, name: 'JavaScript' },
    { img: nodejs, name: 'Node.js' },
    { img: expressjs, name: 'Express.js' },
    { img: mongodb, name: 'MongoDB' },
    { img: redux, name: 'Redux' },
    { img: tailwindcss, name: 'Tailwind CSS' },
    { img: bootstrap, name: 'Bootstrap' },
    { img: firebase, name: 'Firebase' },
    { img: mysql, name: 'MySQL' },
    { img: postgresql, name: 'PostgreSQL' },
    { img: nestjs, name: 'NestJS' },
    { img: docker, name: 'Docker' },
    { img: reactnative, name: 'React Native' },
    { img: laravel, name: 'Laravel' },
    { img: styledcomponents, name: 'Styled Components' },
];

const ToolsTech = () => {
    return (
        <div className="container mx-auto mt-12 xl:mt-24 px-4">
            <h2 className="text-prime-dark text-2xl md:text-3xl lg:text-4xl text-center font-bold leading-relaxed mb-6 lg:mb-10">
                Tools & <span className="text-prime-blue">Tech Used</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-20 ">
                {techLogos.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col select-none items-center gap-3 w-[75px] sm:w-[90px] group transition-transform duration-300 ease-in-out"
                    >
                        <div className="p-4 bg-white rounded-xl group-hover:shadow-md group-hover:scale-105 transition-all duration-300 cursor-pointer">
                            <Image
                                src={tech.img}
                                alt={tech.name}
                                className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
                            />
                        </div>
                        <p className="text-center text-neutral-600 group-hover:text-prime-blue text-xs sm:text-sm font-bold tracking-wider text-nowrap">
                            {tech.name}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default ToolsTech;
