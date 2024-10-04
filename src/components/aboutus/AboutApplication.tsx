import Image from 'next/image'
import React from 'react'
import react from '../../../public/images/aboutus/reactjs.svg'
import nextjs from '../../../public/images/aboutus/nextjs.svg'
import mongodb from '../../../public/images/aboutus/mongodb.svg'
import expressjs from '../../../public/images/aboutus/expressjs.svg'
import amazonaws from '../../../public/images/aboutus/amazonaws.svg'
import digitalocean from '../../../public/images/aboutus/digitalocean.svg'

const AboutApplication = () => {
    return (
        <div className='mt-12 lg:mt-24'>
            <div className="text-center text-indigo-500 text-2xl font-bold leading-loose">About the web application</div>
            <div className="text-center text-black text-base font-normal  leading-loose">The web application is explicitly built for training companies and trainers to help them automate monotonous tasks implemented in various stages by different teams in the organization.</div>
            <div className="container mx-auto p-12 m-12 bg-prime-dark rounded-2xl space-y-6">
                <div className="text-neutral-50 text-4xl font-semibold text-center">Application Technicalities</div>
                <div className="text-center text-neutral-50 text-base font-normal leading-7 tracking-tight">This application is built on the mern stack, the latest framework, which is easily scalable, secure, and best performing for web applications.</div>
                <div className="grid grid-cols-3 gap-6 ">
                    <div className="flex gap-12 px-12 py-5 bg-white rounded-2xl border border-indigo-300 justify-center">
                        <Image src={react} alt='-' />
                        <Image src={nextjs} alt='-' />
                    </div>
                    <div className="px-12 py-5 bg-white rounded-2xl border border-indigo-300 ">
                        <Image src={mongodb} alt='-' className='mx-auto' />
                    </div>
                    <div className="px-12 py-5 bg-white rounded-2xl border border-indigo-300 ">
                        <Image src={expressjs} alt='-' className='mx-auto' />
                    </div>
                    <div className="flex col-span-3 px-12 py-5 gap-10 bg-white rounded-2xl border border-indigo-300 justify-center">
                        <Image src={amazonaws} alt='-' />
                        <Image src={digitalocean} alt='-' />
                        <div className="text-center text-slate-900 text-base font-normal leading-loose">Deployment Platform<br />
                            <span className="text-slate-900 text-base font-bold leading-loose">AWS ( Amazon web services) / Digital Ocean</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutApplication
