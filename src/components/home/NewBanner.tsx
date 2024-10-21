import Image from 'next/image';
import React, { useState } from 'react';
import lap from '../../../public/images/newbanner.png';
import ele from '../../../public/images/bannerel.png';
import PopupForm from '../others/PopupForm';

const NewBanner = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 mt-8 lg:mt-24 items-center px-4'>
            <div className="relative">
                <Image src={lap} alt='-' className='w-full' />
                <Image src={ele} alt='-' className='absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-32 lg:w-64' />
            </div>
            <div className="space-y-6">
                <div className="flex items-center lg:justify-start justify-center space-x-2 lg:space-x-4">
                    <div className='h-0.5 w-8 lg:w-10 bg-prime-blue'></div>
                    <div className="text-prime-blue text-base lg:text-lg font-bold uppercase leading-tight tracking-widest ">All in One TECH</div>
                    <div className='h-0.5 w-8 lg:w-10 bg-prime-blue lg:hidden block'></div>
                </div>
                <div className="text-prime-dark text-3xl lg:text-5xl font-bold text-center lg:text-start">
                    Unlock success through <span className="text-prime-blue mt-6">Skilldeck</span>
                </div>
                <div className="text-slate-500 text-center lg:text-start text-base lg:text-lg font-normal">
                    Skilldeck is a fully automated ed-tech platform for training companies. This has built-in modules or options that automate the work of marketing, sales, business, and operation teams.
                    <br /><br />
                    It's a simplified tech and marketing solution for training companies.
                </div>
                <button onClick={() => setShowModal(true)} className=" flex justify-center  items-center lg:justify-start">
                    <div className="w-fit lg:h-14 px-8 lg:px-10 py-3 lg:py-4 bg-prime-blue rounded-full ">
                        <div className="text-white text-base lg:text-lg font-bold leading-tight">Try our platform</div>
                    </div>
                </button>
            </div>
            <PopupForm
                isVisible={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
};

export default NewBanner;
