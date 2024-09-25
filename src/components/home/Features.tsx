import React, { useState } from "react";
import { featuresData } from "../Data/Data";
import { MdStars, MdKeyboardArrowRight } from "react-icons/md";

function Features() {
  const [sideData, setSideData] = useState(featuresData[0].id);

  const toggleSideData = (id: React.SetStateAction<number>) => {
    setSideData(id);
  };

  return (
    <div className="container mx-auto my-12 px-2 lg:px-4">
      <div className="text-center mb-8">
        <p className="text-2xl font-bold">
          The <span className="text-prime-blue">Application Features</span> Brief
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          {featuresData.map((item, index) => (
            <button
              key={index}
              className="flex items-center justify-between w-full py-3 px-2 lg:px-4 mb-2 border-2 border-gray-300 rounded-lg bg-transparent hover:border-prime-blue hover:text-prime-blue"
              onClick={() => toggleSideData(item.id)}
            >
              <div className="flex items-center">
                <div className="">
                  <MdStars size={25} className="text-prime-blue mr-2" />
                </div>
                <span className="text-start">{item.title}</span>
              </div>
              <div className="">
                <MdKeyboardArrowRight size={25} className={`transition-transform ${sideData === item.id ? 'text-prime-blue' : 'text-gray-500'}`} />
              </div>
            </button>
          ))}
        </div>
        <div className="lg:w-1/3 lg:ml-4 sticky top-4 border border-gray-300 rounded-lg p-4 bg-white h-fit text-center" >
          {featuresData.map((item) => (
            <div key={item.id} className={`${item.id === sideData ? 'block' : 'hidden'}`} >
              {item.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
