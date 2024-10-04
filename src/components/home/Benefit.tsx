import React, { useState } from 'react';
import Image from 'next/image';
import { MdStars } from 'react-icons/md';

import slide1 from '../../../public/images/benefit/slide1.jpg';
import slide2 from '../../../public/images/benefit/slide2.jpg';
import slide3 from '../../../public/images/benefit/slide3.jpg';
import slide4 from '../../../public/images/benefit/slide4.jpg';
import slide5 from '../../../public/images/benefit/slide5.jpg';
import slide6 from '../../../public/images/benefit/slide6.png';
import slide7 from '../../../public/images/benefit/slide7.png';
import slide8 from '../../../public/images/benefit/slide8.png';
import slide9 from '../../../public/images/benefit/slide9.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
        <div className="py-8 px-4 mt-12 lg:mt-24">
            <div className="container mx-auto flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                    <div className="bg-zinc-100 h-full flex flex-col justify-around items-center rounded-lg p-4 lg:p-8 space-y-4">
                        <div className="text-black text-center text-xl lg:text-2xl font-bold leading-normal mb-4 lg:mb-8">
                            Whom Does this Help, and How Does it Benefit
                        </div>
                        {/* disktop view */}
                        <div className="rounded-lg p-4 lg:flex items-center justify-between gap-4 bg-white w-full hidden">
                            <button onClick={prevSlide} className="p-2 lg:p-3 bg-blue-500 text-white rounded-full">
                                <FiChevronLeft />
                            </button>
                            <div className="flex flex-col items-center justify-center rounded-lg overflow-hidden">
                                <Image src={slides[currentSlide].image} alt="slide image" className="w-auto h-auto lg:h-60" />
                                <div className="h-28 text-center text-black text-sm lg:text-xl font-normal mt-4">
                                    {slides[currentSlide].text}
                                </div>
                            </div>
                            <button onClick={nextSlide} className="p-2 lg:p-3 bg-blue-500 text-white rounded-full">
                                <FiChevronRight />
                            </button>
                        </div>
                        {/* mobile view */}
                        <div className="rounded-lg p-4  lg:hidden items-center flex flex-col justify-start gap-4 bg-white w-full h-60 sm:h-52">
                            <div className="flex flex-col items-center justify-center rounded-lg overflow-hidden">
                                <Image src={slides[currentSlide].image} alt="slide image" className="w-auto h-auto lg:h-60" />
                                <div className=" text-center text-black text-sm lg:text-xl font-normal mt-2">
                                    {slides[currentSlide].text}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-around w-full lg:hidden ">
                            <button onClick={prevSlide} className="p-2 lg:p-3 bg-blue-500 text-white rounded-full">
                                <FiChevronLeft />
                            </button>
                            <button onClick={nextSlide} className="p-2 lg:p-3 bg-blue-500 text-white rounded-full">
                                <FiChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 bg-white border border-blue-500 rounded-lg p-4 h-fit sticky top-3">
                    <h5 className="text-center text-lg lg:text-xl font-bold mb-4">Benefits</h5>
                    {[
                        "Relax about the tech and marketing automation for the digital marketing teams, sales, operations, & publishing teams and focus on business development/core expertise",
                        "4X - 8X lesser resources",
                        "5X times faster implementation and scaling on the project",
                        "Lowest App maintenance and development cost",
                        "Advanced marketing implementations as an addon service",
                        "Access to tech, marketing, and various supporting teams at an optimal price",
                        "Assured results with proven strategies"
                    ].map((benefit, index) => (
                        <div key={index} className="flex mb-2">
                            <div className="">
                                <MdStars className="text-blue-500 mr-2" size={25} />
                            </div>
                            <p className="text-sm lg:text-base">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Benefit;
