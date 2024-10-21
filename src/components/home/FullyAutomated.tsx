
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import cardimg1 from '../../../public/images/empowering/fully1.png';
import cardimg2 from '../../../public/images/empowering/fully2.png';
import cardimg3 from '../../../public/images/empowering/fully3.png';
import cardimg4 from '../../../public/images/empowering/fully4.png';
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import PopupForm from "../others/PopupForm";

function FullyAutomated() {

  const [showModal, setShowModal] = useState(false);


  const points = [
    "Training Companies Using this Software and automating their process across various departments (Sales, Operations, Marketing & Business) & Preponing their success. 4x more quick growth with marketing metrics",
    "Conversion and revenues are up by up to 8X times on average",
    "Global expansion, Time Zones, and Multi-Currency optimization in just a few clicks",
    "Automation of content and Marketing Implementations",
  ];

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div>
      <div className="container mx-auto my-12 px-4 lg:px-0">
        <div className="lg:flex justify-between">
          <div className="lg:w-1/3 self-center">
            <div className="text-slate-900 text-base sm:text-lg lg:text-2xl text-center lg:text-start font-medium leading-6 sm:leading-7 lg:leading-10">
              Empowering Training Companies With <br />
              <span className="text-prime-blue text-xl sm:text-3xl lg:text-4xl font-bold">
                The Fully Automated Tech & Marketing Solution!
              </span> <br />
              At <span className="text-green-600">4x lesser cost</span> & 10x best features
            </div>
          </div>

          {/* Points Section */}
          <div className="lg:w-2/3 mt-6 lg:mt-0 space-y-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center border-2 border-slate-900/10 rounded-lg p-3 hover:border-prime-blue hover:text-prime-blue transition"
              >
                <div>
                  <MdKeyboardArrowRight size={30} className="mr-2" />
                </div>
                <p className="opacity-80 text-black text-sm sm:text-base lg:text-lg font-semibold">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="container mx-auto px-4 lg:px-0" data-aos="zoom-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {[
            { image: cardimg1, text: "5X Quicker Progress" },
            { image: cardimg2, text: "8X More Conversions" },
            { image: cardimg3, text: "4X Less Operational Costs" },
            { image: cardimg4, text: "100% Upvotes" },
          ].map((card, index) => (
            <div
              key={index}

              className="py-4 rounded-xl border border-prime-dark/20 hover:border-prime-blue transition flex-col flex items-center"
            >
              <Image src={card.image} alt={card.text} className="rounded-t-xl" />
              <p className="text-center font-bold py-3">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          <button onClick={() => setShowModal(true)} className="px-6 py-3 flex items-center gap-3 bg-prime-dark text-white rounded-lg text-lg w-full sm:w-auto justify-center">
            Book A Demo
            <FaChevronRight />
          </button>
          <button onClick={scrollToFeatures} className="px-6 py-3 border border-prime-dark rounded-lg text-lg w-full sm:w-auto justify-center">
            Explore More!
          </button>
        </div>
      </div>
      <PopupForm
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default FullyAutomated;
