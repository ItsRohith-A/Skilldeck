import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image';
import Templates from '../../../../../public/Blogs/business-card.svg';
import { FaStar } from 'react-icons/fa';

const cards = [
    {
        id: 1,
        title: 'Business Excel Template',
        rating: 1.0,
        reviews: 54,
        price: 55.25,
        image: Templates,
    },
    {
        id: 2,
        title: 'Marketing Plan Template',
        rating: 4.5,
        reviews: 102,
        price: 65.0,
        image: Templates,
    },
    {
        id: 3,
        title: 'Project Budget Template',
        rating: 4.0,
        reviews: 78,
        price: 45.75,
        image: Templates,
    },
];
const BusinessCard = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [startX, setStartX] = useState(null);
    const cardRef = useRef(null);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentCardIndex((prevIndex) =>
                    prevIndex === cards.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-400'}
            />
        ));
    };

    const handleMouseDown = (e: any) => {
        setStartX(e.clientX);
    };

    const handleMouseMove = (e: any) => {
        if (!startX) return;

        const currentX = e.clientX;
        const diff = startX - currentX;

        if (Math.abs(diff) > 50) { // threshold for swipe
            if (diff > 0) {
                setCurrentCardIndex(prev => prev === cards.length - 1 ? 0 : prev + 1);
            } else {
                setCurrentCardIndex(prev => prev === 0 ? cards.length - 1 : prev - 1);
            }
            setStartX(null);
        }
    };
    return (
        <div>
            <div
                ref={cardRef}
                className="w-fill select-none max-w-md cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
            >
                <div
                    className=" flex items-center gap-x-2 h-fit md:gap-x-5 lg:gap-x-2  border border-prime rounded-xl transition-all duration-500 ease-in-out"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <Image
                        src={cards[currentCardIndex].image}
                        unoptimized
                        alt='template'
                        className=' w-16 h-20 object-cover md:w-24 md:h-24'
                        draggable="false"
                    />
                    <div className="space-y-1 px-2 ">
                        <div className="text-sm md:text-base font-medium">
                            {cards[currentCardIndex].title}
                        </div>
                        <div className="flex gap-x-2 items-center lg:items-start">
                            <div className="flex">
                                {renderStars(cards[currentCardIndex].rating)}
                            </div>
                            <span className='text-xs md:text-sm font-bold text-gray-700'>
                                {cards[currentCardIndex].rating.toFixed(1)}
                            </span>
                        </div>
                        <div className="text-slate-900 text-xs text-normal md:text-base font-normal">
                            Starts from
                            <span className='text-prime font-bold text-sm md:text-base'>
                                {' '}${cards[currentCardIndex].price}
                            </span>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center gap-2 mt-3">
                    {cards.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 rounded-full transition-all duration-300 ${currentCardIndex === index
                                ? 'w-6  bg-prime'
                                : 'w-2 bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BusinessCard
