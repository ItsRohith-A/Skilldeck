import React, { useEffect, useState } from 'react';
import { IoIosArrowDropupCircle, IoMdPricetags } from 'react-icons/io';
import { FaRegStar, FaRegSmileBeam, FaArrowCircleUp, FaBloggerB, FaQuoteLeft } from 'react-icons/fa';
import { FiAirplay } from 'react-icons/fi';

const sections = [
    { id: 'benefits', label: 'Benefits', icon: <FaRegSmileBeam className="text-xl text-prime-dark lg:hover:text-prime-dark/70" /> },
    { id: 'demo', label: 'Demo', icon: <FiAirplay className="text-xl text-prime-dark lg:hover:text-prime-dark/70" /> },
    { id: 'features', label: 'Features', icon: <FaRegStar className="text-xl text-prime-dark lg:hover:text-prime-dark/70" /> },
    // { id: 'blogs', label: 'Blogs', icon: <FaBloggerB className="text-xl text-prime-dark lg:hover:text-prime-dark/70" /> },
    // { id: 'pricing', label: 'Pricing', icon: <IoMdPricetags className="text-xl text-prime-dark lg:hover:text-prime-dark/70" /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuoteLeft className="text-xl text-prime-dark lg:hover:text-prime-dark/70" /> },
];

const StickyNavbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;

        // Check if user has reached the bottom of the page
        if (currentScrollY + windowHeight >= bodyHeight) {
            setIsVisible(false);
            return; // Exit the function early if at the bottom
        }

        // Show navbar if scrolled down and not at the bottom
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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="w-full z-50 sticky">
            {/* Desktop (lg) Screen */}
            <div className="lg:flex justify-center hidden">
                <div className="fixed bottom-0 bg-prime-lightblue/80 rounded-full py-3 m-3 shadow-xl backdrop-blur-sm w-2/5">
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
                        <button className="flex flex-col items-center gap-1 text-xs" onClick={scrollToTop}>
                            <IoIosArrowDropupCircle className="text-xl text-prime-dark lg:hover:text-prime-dark/70" />
                            Top
                        </button>
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
