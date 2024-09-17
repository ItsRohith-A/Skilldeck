import React, { useState } from 'react';
import Image from 'next/image';
import { MdStars } from 'react-icons/md';

import slide1 from '../../../public/images/benefit/slide1.png';
import slide2 from '../../../public/images/benefit/slide2.png';
import slide3 from '../../../public/images/benefit/slide3.png';
import slide4 from '../../../public/images/benefit/slide4.png';
import slide5 from '../../../public/images/benefit/slide5.png';
import slide6 from '../../../public/images/benefit/slide6.png';
import slide7 from '../../../public/images/benefit/slide7.png';
import slide8 from '../../../public/images/benefit/slide8.png';
import slide9 from '../../../public/images/benefit/slide9.png';

const slides = [
    { image: slide1, text: "To business owners (trainers/Training companies) who don’t know what and how the technical requirements for the training business" },
    { image: slide2, text: "Someone investing a lot, significantly high on the tech, needs to look into something that can eliminate all the tech barriers" },
    { image: slide3, text: "Looking for automation of SEO, Content publishing, and operations" },
    { image: slide4, text: "Top-level brief of the overall progress department-wise for someone looking for a straightforward measure of the teams/implementation outcomes" },
    { image: slide5, text: "It helps someone who pays attention to data and numbers" },
    { image: slide6, text: "Someone who is on the aggressive growth stage or looking for more significant growth in the business" },
    { image: slide7, text: "Someone looking for an appealing UI/UX and highly converting website" },
    { image: slide8, text: "Someone who wants to reap the maximum from the marketing investment" },
    { image: slide9, text: "Build world-class platforms at a very affordable price (at the price of the CTC of one resource)" },
];

function Benefit() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="py-12 px-4">
            <div className="container mx-auto flex flex-col lg:flex-row">
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                    <div className="relative">
                        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full">
                            &lt;
                        </button>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <div className="flex flex-col items-center justify-center h-80 bg-white rounded-lg overflow-hidden">
                                <Image src={slides[currentSlide].image} alt="slide image" />
                                <div className="p-4 text-center">{slides[currentSlide].text}</div>
                            </div>
                        </div>
                        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full">
                            &gt;
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/3 bg-white border border-blue-500 rounded-lg p-4">
                    <h5 className="text-center text-xl font-bold mb-4">Benefits</h5>
                    <div className="flex items-center mb-2">
                        <div className="">
                            <MdStars className="text-blue-500 mr-2" size={25} />
                        </div>
                        <p>Relax about the tech and marketing automation for the digital marketing teams, sales, operations, & publishing teams and focus on business development/core expertise</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdStars className="text-blue-500 mr-2" size={25} />
                        <p>4X - 8X lesser resources</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdStars className="text-blue-500 mr-2" size={25} />
                        <p>5X times faster implementation and scaling on the project</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdStars className="text-blue-500 mr-2" size={25} />
                        <p>Lowest App maintenance and development cost</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdStars className="text-blue-500 mr-2" size={25} />
                        <p>Advanced marketing implementations as an addon service</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdStars className="text-blue-500 mr-2" size={25} />
                        <p>Access to tech, marketing, and various supporting teams at an optimal price</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdStars className="text-blue-500 mr-2" size={25} />
                        <p>Assured results with the proven strategies</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;
