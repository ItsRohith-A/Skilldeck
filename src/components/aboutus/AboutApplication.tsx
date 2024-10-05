import Image from 'next/image';
import React from 'react';
import react from '../../../public/images/aboutus/reactjs.svg';
import nextjs from '../../../public/images/aboutus/nextjs.svg';
import mongodb from '../../../public/images/aboutus/mongodb.svg';
import expressjs from '../../../public/images/aboutus/expressjs.svg';
import amazonaws from '../../../public/images/aboutus/amazonaws.svg';
import digitalocean from '../../../public/images/aboutus/digitalocean.svg';

const AboutApplication = () => {
    return (
        <div className='mt-12 lg:mt-24'>
            {/* Title and description */}
            <div className="text-center text-indigo-500 text-2xl font-bold leading-loose">About the web application</div>
            <div className="text-center text-black text-base font-normal leading-loose px-4 lg:px-0">
                The web application is explicitly built for training companies and trainers to help them automate monotonous tasks implemented in various stages by different teams in the organization.
            </div>

            {/* Application details */}
            <div className="container mx-auto p-6 lg:p-12 bg-prime-dark rounded-2xl space-y-6">
                <div className="text-neutral-50 text-2xl lg:text-4xl font-semibold text-center">Application Technicalities</div>
                <div className="text-center text-neutral-50 text-base font-normal leading-7 tracking-tight px-4 lg:px-0">
                    This application is built on the MERN stack, the latest framework, which is easily scalable, secure, and best performing for web applications.
                </div>

                {/* Grid of technologies */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex gap-4 lg:gap-12 px-8 py-5 bg-white rounded-2xl border border-indigo-300 justify-center">
                        <Image src={react} alt='React' />
                        <Image src={nextjs} alt='Next.js' />
                    </div>
                    <div className="px-8 py-5 bg-white rounded-2xl border border-indigo-300 flex justify-center">
                        <Image src={mongodb} alt='MongoDB' />
                    </div>
                    <div className="px-8 py-5 bg-white rounded-2xl border border-indigo-300 flex justify-center">
                        <Image src={expressjs} alt='Express.js' />
                    </div>

                    {/* Full-width row for deployment platforms */}
                    <div className="flex flex-col sm:flex-row col-span-1 sm:col-span-2 lg:col-span-3 px-8 py-5 gap-6 bg-white rounded-2xl border border-indigo-300 justify-center items-center">
                        <div className="sm:flex gap-6">
                            <Image src={amazonaws} alt='AWS' />
                            <Image src={digitalocean} alt='Digital Ocean' />
                        </div>
                        <div className="text-center text-slate-900 text-base font-normal leading-loose">
                            Deployment Platform <br />
                            <span className="text-slate-900 text-base font-bold leading-loose">
                                AWS (Amazon Web Services) / Digital Ocean
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutApplication;
