import Image from "next/image";
import React from "react";
import dashboard from "../../../public/images/unique/dashbord.png";
import codingIcon from "../../../public/images/unique/coding.svg";
import box2bg from "../../../public/images/unique/boxb.png";
import chart from "../../../public/images/unique/boxc.png";
import star from "../../../public/images/unique/star.svg";
import loginimg from "../../../public/images/unique/loginimg.png";

function Unique() {
  return (
    <div className="container mx-auto mt-12 lg:mt-24" id="unique">
      <div className="grid gap-6">
        <div className="grid grid-cols-3 gap-6">
          {/* card 1 */}
          <div className="col-span-2 space-y-6 ">
            <div className="flex bg-prime-bg pl-6 pt-6 rounded-xl gap-6 h-full overflow-hidden">
              <div className="self-center pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Image src={codingIcon} alt="coding icon" className="" />
                  <div className="text-center text-indigo-500 text-xl font-black tracking-wide">What's So Unique about this Application?</div>
                </div>
                <div className=" text-black text-lg font-medium leading-normal">This application was developed by a team with expertise in building applications for leading companies in the Ed-tech space and others that have grown from zero to a significant level in a short span
                </div>
              </div>
              <Image src={dashboard} alt="dashboard" className="mx-auto mt-4 border-l-4 border-t-4 border-prime-blue rounded-tl-xl bg-prime-dark" />
            </div>
          </div>
          {/* card 2 */}
          <div className="col-span-1 bg-prime-bg pl-6 pt-6 rounded-xl relative flex items-center justify-center group ">
            <Image src={box2bg} alt="coding icon" className="group-hover:opacity-100 opacity-50" />
            <div className="text-center absolute  text-indigo-500 text-3xl font-bold leading-9">
              Fully automated
              <br />
              <span className="text-black text-3xl font-bold leading-9">plug-and-play platform</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 grid grid-cols-3 gap-6">
            {/* card 3 */}
            <div className="bg-prime-dark col-span-2 rounded-xl p-6 flex gap-12 items-center justify-center">
              <div className="text-center text-indigo-500 text-2xl font-bold">High-standard<br />
                <span className="text-white text-2xl font-semibold">user interface<br />& experience</span>
              </div>
              <Image src={chart} alt="coding icon" className="" />
            </div>
            {/* --------------------- */}

            {/* card 4 */}
            <div className="col-span-1 bg-prime-dark rounded-xl p-6 flex-col flex items-center group">
              <Image src={star} alt="coding icon" className="group-hover:animate-spin " />

              <div className="text-center text-white text-base font-normal leading-normal">Fully optimized for<br />
                <span className="text-indigo-500 text-xl font-bold leading-normal">Conversion Rates</span>
              </div>
            </div>
            {/* --------------------- */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Unique;
