import Image from 'next/image'
import React from 'react'
import aboutussec from '../../../public/images/aboutus/aboutussec.png'

const AboutusSecondsec = () => {
    return (
        <div className='bg-prime-bg py-10 mt-12 lg:mt-24'>
            <div className="container mx-auto flex items-center gap-20">
                <div className="">
                    <div className="text-black text-lg font-normal leading-7 tracking-tight">This is the only <span className="text-prime-blue font-bold">less expensive high-performing solution</span> for training companies with a few hundred of features to automate their tech needed in various departments, this allows the business owners to relax about their tech and marketing automation and focus on the core operations and delivery.</div>
                    <br />
                    <div className="text-black text-lg font-normal leading-7 tracking-tight">We are proud to build such an amazing platform for the first time in the training space that suite the needs of the trainers who conduct the <span className="text-prime-blue font-bold">live offline/virtual classes across multiple geographies and numerous courses. </span></div>
                </div>
                <Image src={aboutussec} alt='-' />

            </div>

        </div >
    )
}

export default AboutusSecondsec
