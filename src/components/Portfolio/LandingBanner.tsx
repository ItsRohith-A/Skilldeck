import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useDispatch } from 'react-redux';
const LandingBanner = () => {

    const dispatch = useDispatch();

    const triggerForm = () => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id: 'home-banner',
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };
    const scrollToFeatures = () => {
        const portfolioSection = document.getElementById("portfolio");
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 pt-24 pb-12 gap-6">
                <div className="space-y-6">
                    <div className="self-stretch justify-start text-neutral-950 text-5xl font-bold leading-[65px]">Crafting <span className="text-prime-blue text-5xl font-bold leading-[65px]">Scalable Digital Solutions </span>with Precision & Passion
                    </div>
                    <div className="text-zinc-800 text-base font-bold leading-normal">From pixel-perfect websites to complex business systems I design, develop, and deploy modern digital solutions tailored for your growth.</div>
                    <div className="flex items-center gap-6">
                        <button onClick={triggerForm} className="px-4 py-4 bg-prime-blue rounded-xl hover:shadow-[0px_10px_32px_0px_rgba(0,103,236,0.20)]" >
                            <div className=" text-white text-base font-bold">Contact Me</div>
                        </button>
                        <button onClick={scrollToFeatures} className="group flex items-center px-4 py-4 gap-2 rounded-xl transition-all duration-300 ease-in-out hover:shadow-[0px_10px_32px_0px_rgba(0,103,236,0.20)]" >
                            <div className="justify-center text-black text-base font-bold leading-normal">View Projects</div>
                            <div className="">
                                <IoIosArrowRoundForward className='group-hover:rotate-90 text-4xl group-hover:text-prime-blue transition-all duration-300 ease-in-out' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingBanner
