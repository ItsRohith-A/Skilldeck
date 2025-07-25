import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
const LandingBanner = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 pt-24 pb-12 gap-6">
                <div className="space-y-6">
                    <div className="self-stretch justify-start text-neutral-950 text-5xl font-bold leading-[65px]">Crafting <span className="text-prime-blue text-5xl font-bold leading-[65px]">Scalable Digital Solutions </span>with Precision & Passion
                    </div>
                    <div className="text-zinc-800 text-base font-bold leading-normal">From pixel-perfect websites to complex business systems I design, develop, and deploy modern digital solutions tailored for your growth.</div>
                    <div className="flex items-center gap-6">
                        <div className="px-4 py-4 bg-prime-blue rounded-xl hover:shadow-[0px_10px_32px_0px_rgba(0,103,236,0.20)]" >
                            <div className=" text-white text-base font-bold">Contact Me</div>
                        </div>
                        <div className="group flex items-center px-4 py-4 gap-2 rounded-xl transition-all duration-300 ease-in-out hover:shadow-[0px_10px_32px_0px_rgba(0,103,236,0.20)]" >
                            <div className="justify-center text-black text-base font-bold leading-normal">View Portfolio</div>
                            <div className="">
                                <IoIosArrowRoundForward className='group-hover:-rotate-45 text-4xl group-hover:text-prime-blue transition-all duration-300 ease-in-out' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingBanner
