import React, { useEffect, useState } from 'react';
import { IoMdPricetags } from 'react-icons/io';

const sections = [
    { id: 'pricing', label: 'Pricing' },
    { id: 'about-us', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
];

const StickyNavbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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
            const offset = 96; // Top offset for spacing
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
        <div className=' w-full z-50 sticky top-96' >
            {/* Desktop Screen */}
            <div className="">
                <div className="bg-prime-dark rounded-full absolute right-5 py-6 px-2 hidden md:block">
                    <div className="flex flex-col gap-6">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="relative group cursor-pointer select-none"
                            >
                                <IoMdPricetags className="text-xl text-prime-lightblue" />
                                <span className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-prime-dark text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity text-nowrap">
                                    {section.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Screen */}
            {isVisible && (
                <div className="fixed bottom-0 left-0 right-0 bg-prime-lightblue/80 rounded-full py-3 m-3 md:hidden shadow-lg backdrop-blur-sm">
                    <div className="flex justify-around">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="relative group cursor-pointer select-none flex flex-col items-center gap-1"
                            >
                                <IoMdPricetags className="text-xl text-prime-dark" />
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
