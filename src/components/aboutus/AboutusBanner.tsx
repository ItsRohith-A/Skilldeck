import Image from 'next/image'
import React from 'react'
import banner from '../../../public/images/aboutus/aboutusbannerjpg.jpg'
import people from '../../../public/images/aboutus/people.png'
import Link from 'next/link'
import { BsLightningCharge } from 'react-icons/bs'
import { PiPlayBold } from 'react-icons/pi'

const AboutusBanner = () => {
    return (
        <div className='container mx-auto mt-12 lg:mt-24 flex  items-center gap-20'>
            <Image src={banner} alt='-' />
            <div className="space-y-6">
                <div className="text-prime-blue text-5xl font-semibold ">About Us</div>
                <div className="text-zinc-800 text-lg font-normal ">
                    The web application is explicitly built for training companies and trainers to help them automate monotonous tasks implemented in various stages by different teams in the organization.
                    <br /> <br />
                    Skilldeck is a world-class, mature platform for training companies. It has multiple built-in features to support training companies' tech, marketing, operations, and sales teams.
                </div>
                <div className="flex gap-4">
                    <Link href='/' className='bg-[#e5e5e5] w-fit flex p-4 gap-3 rounded-lg items-center'>
                        <div className="text-center text-zinc-950 text-sm font-semibold ">Explore Features</div>
                        <BsLightningCharge className='text-prime-blue' />
                    </Link>
                    <Link href='/' className='bg-prime-dark w-fit flex p-4 gap-3 rounded-lg items-center'>
                        <div className="text-center text-sm font-semibold text-white">Watch Demo</div>
                        <PiPlayBold className='text-white' />
                    </Link>
                </div>
                <div className="space-y-2">
                    <Image src={people} alt='-' />
                    <div className="text-zinc-400 text-base font-normal leading-relaxed tracking-tight">Trusted by 30.000+ Businesses Worldwide</div>
                </div>
            </div>
        </div>
    )
}

export default AboutusBanner
