import Image from 'next/image';
import React from 'react';
import vision from '../../../public/images/aboutus/vision.svg';
import mission from '../../../public/images/aboutus/mission.svg';

const VisionMission = () => {
    return (
        <div className='container mx-auto space-y-10 mt-12'>
            {/* Vision Section */}
            <div className="bg-gradient-to-b from-slate-900 to-indigo-500 p-0.5 mx-4 rounded-2xl">
                <div className="bg-white rounded-xl p-6 lg:p-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
                    <Image src={vision} alt='Vision Icon' className='w-full h-auto lg:w-auto lg:h-auto' />
                    <div className="">
                        <div className="text-black text-xl lg:text-2xl font-bold leading-loose">Vision</div>
                        <div className="text-zinc-800 text-base font-normal leading-7 tracking-tight">
                            To provide the platform to as many training companies as possible and support with tech and marketing automation, handling all kinds of customization while making their marketing, tech, and operations investment less expensive, with the highest return on investment.
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-gradient-to-b from-indigo-500 to-slate-900 p-0.5 mx-4 rounded-2xl">
                <div className="bg-white rounded-xl p-6 lg:p-12 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-20">
                    <div className="">
                        <div className="text-black text-xl lg:text-2xl font-bold leading-loose">Mission</div>
                        <div className="text-zinc-800 text-base font-normal leading-7 tracking-tight">
                            Help at least 10,000 companies in the next 3 years with the most affordable solution in the market and to be recognized as the most affordable tech solution ever and forever.
                        </div>
                    </div>
                    <Image src={mission} alt='Mission Icon' className='w-full h-auto lg:w-auto lg:h-auto' />
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
