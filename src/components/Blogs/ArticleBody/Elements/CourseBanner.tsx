import React, { useState, useEffect } from 'react';
import bannerImg from '../../../../../public/Blogs/course-registragion.svg'
import Image from 'next/image';

const slides = [
  {
    title: "Online Course Registration",
    subtitle: "Top 20 courses among our 1350+ free online courses by experts",
    buttonText: "Download Now",
    image: bannerImg
  },
  {
    title: "Learn from Industry Experts",
    subtitle: "Access premium content from leading professionals",
    buttonText: "Download Now",
    image: bannerImg
  },
  {
    title: "Flexible Learning Schedule",
    subtitle: "Study at your own pace with 24/7 course access",
    buttonText: "Download Now",
    image: bannerImg
  }
];

const CourseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!startX) return;
    
    const currentX = e.clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) { // threshold for swipe
      if (diff > 0) {
        setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
      } else {
        setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
      }
      setStartX(null);
    }
  };

  

  return (
    <div
      className="relative w-full max-w-md rounded-2xl overflow-hidden bg-black select-none cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setStartX(null);
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
     
    >
      <div className="relative aspect-square w-full">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Image */}
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          unoptimized
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />

        {/* Content */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-white text-base md:text-xl font-bold">
              {slides[currentSlide].title}
            </h2>
            <p className="text-white/90 text-xs md:text-sm">
              {slides[currentSlide].subtitle}
            </p>
            <button className="bg-prime text-sm md:text-base text-white px-4 py-2 rounded-md w-fit hover:bg-prime/80 transition-colors">
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-6 bg-prime' 
                  : 'w-1 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;