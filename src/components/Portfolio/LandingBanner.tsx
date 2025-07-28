import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useDispatch } from 'react-redux';

import dynamic from 'next/dynamic';
import { sampleData } from '../ui/SampleData';

// Import your component dynamically and disable SSR
const World = dynamic(() => import("../ui/Globe").then((m) => m.World), {
    ssr: false,
});
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center flex flex-col-reverse">
                {/* Left Content */}
                <div className="space-y-3 lg:space-y-6 lg:py-40">
                    <h1 className="text-center lg:text-start text-neutral-950 text-2xl lg:text-5xl font-bold leading-snug sm:leading-[55px] lg:leading-[65px]">
                        Crafting <span className="text-prime-blue">Scalable Digital Solutions</span> with Precision & Passion
                    </h1>
                    <p className="text-center lg:text-start text-zinc-800 text-sm lg:text-base font-medium sm:font-semibold leading-relaxed">
                        From pixel-perfect websites to complex business systems I design, develop, and deploy modern digital solutions tailored for your growth.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6">
                        <button
                            onClick={triggerForm}
                            className="px-4 py-3 sm:py-4 bg-prime-blue rounded-xl hover:shadow-[0px_10px_32px_0px_rgba(0,103,236,0.20)]"
                        >
                            <span className="text-white text-base font-bold">Contact Me</span>
                        </button>
                        <button
                            onClick={scrollToFeatures}
                            className="group flex items-center justify-center px-4 py-3 sm:py-4 gap-2 rounded-xl transition-all duration-300 ease-in-out hover:shadow-[0px_10px_32px_0px_rgba(0,103,236,0.20)]"
                        >
                            <span className="text-black text-base font-bold">View Projects</span>
                            <IoIosArrowRoundForward className="group-hover:rotate-90 text-3xl sm:text-4xl group-hover:text-prime-blue transition-all duration-300 ease-in-out" />
                        </button>
                    </div>
                </div>
                {/* Right Content: Globe */}
                <div className="w-full h-[300px] sm:h-[400px] lg:h-full">
                    <World
                        globeConfig={{
                            pointSize: 1,
                            globeColor: '#0c213a',
                            showAtmosphere: true,
                            atmosphereColor: '#ffffff',
                            atmosphereAltitude: 0.1,
                            emissive: '#6374ff',
                            emissiveIntensity: 0.1,
                            shininess: 0.9,
                            polygonColor: 'rgba(255,255,255,0.7)',
                            ambientLight: '#ffffff',
                            directionalLeftLight: '#ffffff',
                            directionalTopLight: '#ffffff',
                            pointLight: '#ffffff',
                            arcTime: 2000,
                            arcLength: 0.9,
                            rings: 2,
                            maxRings: 3,
                            initialPosition: { lat: 20, lng: 78 },
                            autoRotate: true,
                            autoRotateSpeed: 3,
                        }}
                        data={sampleData}
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingBanner
