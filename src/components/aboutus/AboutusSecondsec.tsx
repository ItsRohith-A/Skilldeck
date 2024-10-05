import Image from 'next/image';
import React from 'react';
import aboutussec from '../../../public/images/aboutus/aboutussec.png';

const AboutusSecondsec = () => {
    return (
        <div className='bg-prime-bg py-10 mt-12 lg:mt-24'>
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-20 px-4">
                {/* Text section */}
                <div className="space-y-4 lg:space-y-6">
                    <div className="text-black text-base lg:text-lg font-normal leading-7 tracking-tight">
                        This is the only <span className="text-prime-blue font-bold">less expensive high-performing solution</span> for training companies with a few hundred of features to automate their tech needed in various departments. This allows the business owners to relax about their tech and marketing automation and focus on the core operations and delivery.
                    </div>
                    <div className="text-black text-base lg:text-lg font-normal leading-7 tracking-tight">
                        We are proud to build such an amazing platform for the first time in the training space that suits the needs of the trainers who conduct the <span className="text-prime-blue font-bold">live offline/virtual classes across multiple geographies and numerous courses.</span>
                    </div>
                </div>

                {/* Image section */}
                <Image src={aboutussec} alt='About Us Section' className='w-full lg:w-auto' />
            </div>
        </div>
    );
};

export default AboutusSecondsec;
