import Image from "next/image";
import React from "react";
import dashboard from "../../../public/images/unique/dashbord.png";
import codingIcon from "../../../public/images/unique/coding.svg";
import chart from "../../../public/images/unique/boxc.png";
import star from "../../../public/images/unique/star.svg";
import loginimg from "../../../public/images/unique/loginimg.png";

function Unique() {
  return (
    <div className="container mx-auto py-16 px-4" id="unique">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Card */}
        <div className="bg-prime-lightblue/20 p-6 rounded-lg flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Image src={codingIcon} alt="coding icon" className="w-8 h-8" />
            <h5 className="text-prime-blue font-bold">
              What’s So Unique about this Application?
            </h5>
          </div>
          <p className="text-lg font-medium leading-relaxed">
            This application was developed by a team with expertise in building
            applications for leading companies in the Ed-tech space and others
            that have grown from zero to a significant level in a short span.
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-prime-lightblue/20 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold">Fully automated plug-and-play platform</h3>
          <Image src={dashboard} alt="dashboard" className="mx-auto mt-4" />
        </div>

        {/* Third Card */}
        <div className="bg-prime-dark text-white p-6 rounded-lg flex items-center space-x-4">
          <h5 className="text-prime-blue font-bold">High-standard user interface & experience</h5>
          <Image src={chart} alt="chart image" />
        </div>

        {/* Fourth Card */}
        <div className="bg-prime-dark text-white p-6 rounded-lg flex flex-col items-center">
          <Image src={star} alt="star icon" className="w-10 h-10 animate-spin-slow" />
          <p className="mt-4">Fully optimized for <span className="text-prime-blue font-bold">Conversion Rates</span></p>
        </div>

        {/* Fifth Card */}
        <div className="bg-prime-lightblue/20 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold">An SEO-automated optimized & market-ready website</h3>
          <Image src={dashboard} alt="dashboard" className="mx-auto mt-4" />
        </div>

        {/* Sixth Card */}
        <div className="bg-prime-dark text-white p-6 rounded-lg flex flex-col items-center">
          <h5 className="text-prime-blue font-bold">
            Proven strategy with “N” number of businesses
          </h5>
          <Image src={loginimg} alt="login image" className="mt-4" />
          <p className="mt-4 text-center">
            Highest ROI from marketing investments
          </p>
        </div>

        {/* Seventh Card */}
        <div className="bg-prime-lightblue/20 p-6 rounded-lg flex flex-col items-center">
          <p className="text-xl font-bold">
            <span className="text-prime-blue">4X times smaller</span> teams & reduced operation costs
          </p>
          <p className="text-xl font-bold mt-4">
            <span className="text-prime-blue">6X times faster</span> growth than other companies
          </p>
          <p className="text-xl font-bold mt-4">
            <span className="text-prime-blue">10X times lesser</span> investment in technology & marketing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Unique;
