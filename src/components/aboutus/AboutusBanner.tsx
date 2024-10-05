import Image from 'next/image';
import React from 'react';
import banner from '../../../public/images/aboutus/aboutusbannerjpg.jpg';
import people from '../../../public/images/aboutus/people.png';
import Link from 'next/link';
import { BsLightningCharge } from 'react-icons/bs';
import { PiPlayBold } from 'react-icons/pi';

const AboutusBanner = () => {
    return (
        <div className='container mx-auto mt-8 lg:mt-24 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20 px-4'>
            {/* Banner image */}
            <Image src={banner} alt='About Us Banner' className='w-full lg:w-auto' />

            {/* Text and buttons */}
            <div className="space-y-6">
                {/* Title */}
                <div className="text-prime-blue text-3xl lg:text-5xl font-semibold text-center lg:text-start">
                    About Us
                </div>

                {/* Description */}
                <div className="text-zinc-800 text-base lg:text-lg font-normal leading-relaxed text-center lg:text-start">
                    The web application is explicitly built for training companies and trainers to help them automate monotonous tasks implemented in various stages by different teams in the organization.
                    <br /> <br />
                    Skilldeck is a world-class, mature platform for training companies. It has multiple built-in features to support training companies' tech, marketing, operations, and sales teams.
                </div>

                {/* Action buttons */}
                <div className="flex justify-center lg:justify-start sm:flex-row gap-4">
                    <Link href='/' className='bg-[#e5e5e5] w-fit flex p-3 lg:p-4 gap-2 lg:gap-3 rounded-lg items-center'>
                        <div className="text-center text-zinc-950 text-sm font-semibold">
                            Explore Features
                        </div>
                        <BsLightningCharge className='text-prime-blue' />
                    </Link>
                    <Link href='/' className='bg-prime-dark w-fit flex p-3 lg:p-4 gap-2 lg:gap-3 rounded-lg items-center'>
                        <div className="text-center text-sm font-semibold text-white">
                            Watch Demo
                        </div>
                        <PiPlayBold className='text-white' />
                    </Link>
                </div>

                {/* Trusted by section */}
                <div className="space-y-2">
                    <Image src={people} alt='People image' className='h-12 lg:h-16 w-auto  mx-auto' />
                    <div className="text-zinc-400 text-sm lg:text-base font-normal leading-relaxed tracking-tight text-center lg:text-start">
                        Trusted by 30,000+ Businesses Worldwide
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutusBanner;
