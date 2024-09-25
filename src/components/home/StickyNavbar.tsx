import React, { useEffect, useState } from 'react';
import { IoMdPricetags } from 'react-icons/io';
import { FaRegStar, FaRegSmileBeam, FaArrowCircleUp } from 'react-icons/fa';
import { FiAirplay } from 'react-icons/fi';

const sections = [
    { id: 'benefits', label: 'Benefits', icon: <FaRegSmileBeam className="text-xl text-prime-dark lg:text-prime-lightblue  lg:hover:text-prime-lightblue/50" /> },
    { id: 'demo', label: 'Demo', icon: <FiAirplay className="text-xl text-prime-dark lg:text-prime-lightblue lg:hover:text-prime-lightblue/50" /> },
    { id: 'features', label: 'Features', icon: <FaRegStar className="text-xl text-prime-dark lg:text-prime-lightblue  lg:hover:text-prime-lightblue/50" /> },
    { id: 'pricing', label: 'Pricing', icon: <IoMdPricetags className="text-xl text-prime-dark lg:text-prime-lightblue  lg:hover:text-prime-lightblue/50" /> },
];

const StickyNavbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 1,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        // Hide navbar when scrolling back to the top
        if (currentScrollY < lastScrollY) {
            setIsVisible(false);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 20; // Top offset for spacing
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = section.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="w-full z-50 sticky top-80">
            {/* Desktop Screen */}
            <div>
                <div className="">
                    <FaArrowCircleUp className='text-white' />
                </div>
                <div className="flex flex-col gap-2 absolute right-5">
                    {/* on clicking this button it should scroll to top */}
                    <button onClick={scrollToTop} className="bg-prime-dark w-fit p-2 rounded-full  ">
                        <div className="text-white"><FaArrowCircleUp /></div>
                    </button>
                    <div className="bg-prime-dark rounded-full  py-6 px-2 hidden lg:block">
                        <div className="flex flex-col gap-6 justify-center items-center">
                            {sections.map((section) => (
                                <div
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="relative group cursor-pointer select-none"
                                >
                                    <div className="">{section.icon}</div>
                                    <span className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-prime-dark text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity text-nowrap">
                                        {section.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Screen */}
            {isVisible && (
                <div className="fixed bottom-0 left-0 right-0 bg-prime-lightblue/80 rounded-full py-3 m-3 lg:hidden shadow-lg backdrop-blur-sm">
                    <div className="flex justify-around">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="relative group cursor-pointer select-none flex flex-col items-center gap-1"
                            >
                                <div className="">{section.icon}</div>
                                <div className="text-xs">{section.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StickyNavbar;
