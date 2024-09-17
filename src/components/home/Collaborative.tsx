import Image from "next/image";
import React, { useEffect, useRef } from "react";
import logo1 from "../../../public/images/cob/logos/lnt.png";
import aa from "../../../public/images/cob/logos/aa.png";
import kh from "../../../public/images/cob/logos/kh.png";
import bt from "../../../public/images/cob/logos/bt.png";
import pal from "../../../public/images/cob/logos/pal.png";
import sa from "../../../public/images/cob/logos/sa.png";
import sta from "../../../public/images/cob/logos/sta.png";
import vf from "../../../public/images/cob/logos/vf.png";
import il from "../../../public/images/cob/logos/il.png";

const logos = [logo1, aa, bt, il, kh, pal, sa, sta, vf];

const Collaborative: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval: NodeJS.Timeout;

    if (scrollContainer) {
      scrollInterval = setInterval(() => {
        // Automatically scroll the container horizontally
        scrollContainer.scrollBy({ left: 1, behavior: "smooth" });
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0 });
        }
      }, 30); // Adjust the speed by changing the interval time
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval); // Clear the interval on unmount
    };
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <p className="text-center font-bold text-3xl mb-12">
          Successful Collaborative Efforts
        </p>
        <div className="flex justify-evenly gap-10 mb-8">
          <div className="bg-cover bg-center p-8 rounded-xl bg-[url('/images/cob/card1bg.png')]">
            <p className="font-bold text-gray-700">
              The product team has worked with various training companies to
              provide the requirements for automating marketing, operations,
              sales, and business development.
            </p>
          </div>
          <div className="bg-cover bg-center p-8 rounded-xl bg-[url('/images/cob/card2bg.png')]">
            <p className="font-bold text-gray-700">
              The team has played a pivotal role in crafting the tech and
              marketing solutions at different stages for the following training
              companies to establish their internet portfolio.
            </p>
          </div>
        </div>

        {/* Auto-scrolling logo section */}
        <div
          className="overflow-hidden whitespace-nowrap"
          ref={scrollContainerRef}
        >
          <div className="flex items-center space-x-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="inline-block p-2 border border-gray-300 rounded-lg bg-gray-100 "
              >
                <Image
                  src={logo}
                  alt={`logo-${index}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={index + logos.length} // Duplicate for infinite scroll effect
                className=" p-2 border border-gray-300 rounded-lg bg-gray-100 "
              >
                <Image
                  src={logo}
                  alt={`logo-${index + logos.length}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborative;
