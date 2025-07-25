// components/Testimonials.tsx

import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import Image from 'next/image';
import OurClients from '../home/OurClients';
import arjunImg from '../../../public/portfolio/testimonial/arjun.png';
import defaultImg from '../../../public/portfolio/testimonial/default.png';
import jhonSnowImg from '../../../public/portfolio/testimonial/jhonsnow.png';
import karanImg from '../../../public/portfolio/testimonial/karan.png';
import meeraImg from '../../../public/portfolio/testimonial/meera.png';
import rahulImg from '../../../public/portfolio/testimonial/rahul.png';
import robinImg from '../../../public/portfolio/testimonial/robin.png';
import rohithImg from '../../../public/portfolio/testimonial/rohith.png';
import snehaImg from '../../../public/portfolio/testimonial/sneha.png';
import vikramImg from '../../../public/portfolio/testimonial/vikram.png';


// Sample testimonial data
const testimonials = [
    {
        quote:
            "The team's attention to detail and commitment to quality exceeded our expectations. Their innovative ideas boosted our user engagement by 40%.",
        author: 'Rohith A',
        authordec: 'Marketing Head, Retail Firm',
        image: rohithImg,
    },
    {
        quote:
            'Exceptional development skills! The platform is running flawlessly and user feedback has been overwhelmingly positive.',
        author: 'Sneha K',
        authordec: 'Founder, EduTech Startup',
        image: snehaImg,
    },
    {
        quote:
            'They delivered a high-performing product under a tight deadline. Professional and responsive throughout the project.',
        author: 'Vikram S',
        authordec: 'CTO, FinTech Company',
        image: vikramImg,
    },
    {
        quote:
            'Great communication and quick turnaround. We’ve already seen measurable results since launch.',
        author: 'Meera D',
        authordec: 'Project Manager, NGO',
        image: meeraImg,
    },
    {
        quote:
            'Their UI/UX work is top-notch. Our mobile app looks stunning and functions beautifully.',
        author: 'Arjun M',
        authordec: 'Product Owner, Fitness Brand',
        image: arjunImg,
    },
    {
        quote:
            'They helped modernize our legacy system with modern tech. Massive performance improvements.',
        author: 'Robin B',
        authordec: 'Operations Head, Logistics Company',
        image: robinImg,
    },
    {
        quote:
            'From ideation to launch, they were proactive, skilled, and results-driven.',
        author: 'Jhon Snow',
        authordec: 'Startup Founder',
        image: jhonSnowImg,
    },
    {
        quote:
            'Loved the professionalism and the post-launch support. Highly recommended!',
        author: 'Karan J',
        authordec: 'CEO, Ecommerce Startup',
        image: karanImg,
    },
    {
        quote:
            'Truly collaborative approach — it felt like working with an internal team!',
        author: 'Divya N',
        authordec: 'Lead Designer, SaaS Firm',
        image: defaultImg,
    },
    {
        quote:
            'Everything was delivered with quality and transparency. We’ll definitely work together again.',
        author: 'Rahul T',
        authordec: 'Managing Director, Real Estate Group',
        image: rahulImg,
    },
];


const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const { quote, author, authordec, image } = testimonials[currentIndex];

    return (
        <section className="container mx-auto mt-12 xl:mt-24">
            <div className="p-8 sm:p-12 rounded-2xl bg-prime-dark relative">
                <div className="text-center text-red-50 text-sm font-normal mb-2">OUR CLIENTS SAY</div>
                <h2 className="text-center text-white text-3xl sm:text-4xl font-semibold mb-6">
                    What Our Satisfied Clients Are Saying
                </h2>
                <div className=" px-4 sm:px-16 space-y-8">
                    <FaQuoteLeft className="text-5xl text-prime-blue absolute top-6 left-6 animate-pulse" />
                    {/* Testimonial Content */}
                    <div className="min-h-28 flex items-center justify-center text-center px-2 sm:px-10">
                        <p className="text-stone-300 text-lg sm:text-xl font-normal max-w-3xl">{quote}</p>
                    </div>
                    {/* Author Details + Arrows */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-24">
                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                            <Image
                                src={image}
                                alt={author}
                                width={48}
                                height={48}
                                className="rounded-md object-cover h-16 w-auto"
                            />
                            <div className='h-16 flex flex-col justify-center'>
                                <p className="text-white font-semibold text-base">{author}</p>
                                <p className="text-gray-400 text-sm">{authordec}</p>
                            </div>
                        </div>
                        {/* Arrow Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={handlePrev}
                                className="p-3 bg-prime-blue  text-prime-dark rounded-xl font-bold hover:bg-opacity-90 transition active:bg-prime-blue duration-75"
                            >
                                <IoIosArrowRoundBack className="text-3xl" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-3 bg-white text-prime-dark rounded-xl font-bold active:bg-prime-blue transition duration-75"
                            >
                                <IoIosArrowRoundForward className="text-3xl" />
                            </button>
                        </div>
                    </div>
                    {/* Our Clients */}
                    <div className="bg-white rounded-xl overflow-hidden h-20 flex items-center justify-center">
                        <OurClients />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
