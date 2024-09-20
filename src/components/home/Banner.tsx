import React from "react";
import { FaAngleDown } from "react-icons/fa";

function Banner() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="container mx-auto mt-8 p-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-normal text-prime-dark">
            Unlock success through
            <br />
            <span className="text-prime-blue">Skilldeck</span>
          </h1>
          <div className="flex justify-center mt-6">
            <p className="text-sm lg:text-base font-semibold w-full max-w-3xl">
              Skilldeck is a fully automated ed-tech platform for training companies. This has built-in modules or options that automate the work of marketing, sales, business, and operation teams.
            </p>
          </div>
          <p className="text-sm lg:text-base font-semibold mt-4">
            It's a simplified tech and marketing solution for training companies.
          </p>
          <div className="flex justify-center mt-8">
            <button className="w-60 h-14 bg-prime-dark text-white rounded-lg bg-cover hover:bg-prime-blue flex items-center justify-center" style={{ backgroundImage: "url('/btngif.gif')" }}>
              Try our platform
              <FaAngleDown size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
