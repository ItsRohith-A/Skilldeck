import Image from "next/image";
import React from "react";
import dashboard from "../../../public/images/unique/dashbord.png";
import codingIcon from "../../../public/images/unique/coding.svg";
import box1bg from "../../../public/images/unique/boxa.png";
import mboxa from "../../../public/images/unique/mboxa.png";
import box2bg from "../../../public/images/unique/boxb.png";
import chart from "../../../public/images/unique/boxc.png";
import star from "../../../public/images/unique/star.svg";
import loginimg from "../../../public/images/unique/loginimg.png";

function Unique() {
  return (
    <div className="" id="benefits">
      <div className="container mx-auto mt-12 lg:mt-24 hidden lg:block" id="unique" >
        <div className="grid gap-6">
          <div className="grid grid-cols-3 gap-6">
            {/* card 1 */}
            <div className="col-span-2 space-y-6 ">
              <div className="flex bg-prime-bg pl-6 pt-6 rounded-xl gap-6 h-full overflow-hidden group">
                <div className="self-center pb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Image src={codingIcon} alt="coding icon" className="" />
                    <div className="text-center text-prime-blue text-xl font-black tracking-wide">What&apos;s So Unique about this Application?</div>
                  </div>
                  <div className=" text-black text-lg font-medium leading-normal">This application was developed by a team with expertise in building applications for leading companies in the Ed-tech space and others that have grown from zero to a significant level in a short span
                  </div>
                </div>
                <Image src={box1bg} alt="dashboard" className="mx-auto mt-4  rounded-tl-xl bg-prime-dark group-hover:scale-110  ease-in-out duration-300" />
              </div>
            </div>
            {/* card 2 */}
            <div className="col-span-1 bg-prime-bg pl-6 pt-6 rounded-xl relative flex items-center justify-center group ">
              <Image src={box2bg} alt="coding icon" className="group-hover:opacity-100 opacity-50" />
              <div className="text-center absolute  text-prime-blue text-3xl font-bold leading-9">
                Fully automated
                <br />
                <span className="text-black text-3xl font-bold leading-9">plug-and-play platform</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-6 grid-rows-3">
            <div className="col-span-2 grid grid-cols-4 gap-6 row-span-1">
              {/* card 3 */}
              <div className="bg-prime-dark col-span-3 rounded-xl p-6 flex gap-12 items-center justify-center group">
                <div className="text-center text-prime-blue text-2xl font-bold">High-standard<br />
                  <span className="text-white text-2xl font-semibold">user interface<br />& experience</span>
                </div>
                <Image src={chart} alt="coding icon" className="group-hover:scale-110 ease-in-out duration-300" />
              </div>
              {/* card 4 */}
              <div className="col-span-1 bg-prime-dark rounded-xl p-6 flex-col flex items-center justify-around group">
                <Image src={star} alt="coding icon" className="group-hover:animate-spin ease-in-out duration-1000" />
                <div className="text-center text-white text-base font-normal leading-normal">Fully optimized for<br />
                  <span className="text-prime-blue text-xl font-bold leading-normal">Conversion Rates</span>
                </div>
              </div>
              {/* --------------------- */}
            </div>
            {/* card 5 */}
            <div className="row-span-3 bg-prime-bg rounded-xl p-6 flex-col justify-around flex h-full group">
              <div className="text-center text-prime-blue text-3xl font-bold">An SEO-automated,<br />
                <span className="text-black text-2xl font-normal ">optimized & market-ready website</span>
              </div>
              <Image src={dashboard} alt="coding icon" className="mx-auto group-hover:scale-110 ease-in-out duration-300" />
              <div className="text-center text-black text-base font-semibold leading-loose">Brings in the advanced technology, process, and automation that the business needs</div>
            </div>
            <div className="flex gap-6 row-span-3 col-span-2 mt-6">
              <div className="bg-prime-dark rounded-xl  flex-col justify-between py-6 px-10 gap-5 grow flex items-center group">
                <div className=" text-center text-white text-xl font-bold">Proven strategy with<br />
                  <span className="text-prime-blue text-xl font-bold">“N” number of businesses</span>
                </div>
                <Image src={loginimg} alt="-" className="group-hover:scale-110 ease-in-out duration-300" />
                <div className=" text-center text-prime-blue text-2xl font-bold ">Highest ROI<br />
                  <span className="text-white text-2xl font-bold ">from the marketing<br />investments</span>
                </div>
              </div>
              <div className="bg-prime-bg rounded-xl py-6 px-10 space-y-6 shrink text-wrap flex flex-col justify-center">
                <div className=" text-center text-prime-blue text-2xl font-black">4X times smaller<br />
                  <span className="text-black text-lg font-normal">Teams & brings down the operations costs significantly</span>
                </div>
                <div className=" text-center text-prime-blue text-2xl font-black">6X times faster<br />
                  <span className="text-black text-lg font-normal">Than other companies have seen their growth</span>
                </div>
                <div className=" text-center text-prime-blue text-2xl font-black">10X times lesser<br />
                  <span className="text-black text-lg font-normal">Investment/budget on technology and marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}

      {/* Mobile view container */}
      <div className="block lg:hidden px-2">
        <div className="container mx-auto mt-12" id="unique">
          <div className="grid gap-6">

            {/* card 1 */}
            <div className="space-y-2 ">
              <div className="flex bg-prime-bg p-4 rounded-xl gap-4 h-full overflow-hidden flex-col">
                <div className="self-center">
                  <div className="flex items-center gap-3">
                    <Image src={codingIcon} alt="coding icon" className="" />
                    <div className="text-start text-prime-blue text-lg font-black">
                      What&apos;s So Unique about this Application?
                    </div>
                  </div>
                  <div className="text-black text-sm font-medium">
                    This application was developed by a team with expertise in building applications for leading companies in the Ed-tech space and others that have grown from zero to a significant level in a short span.
                  </div>
                </div>
                <Image src={mboxa} alt="dashboard" className="mx-auto rounded-xl border-4 border-prime-blue bg-prime-dark " />
              </div>
            </div>

            {/* card 2 */}
            <div className="bg-prime-bg pl-4 pt-4 rounded-xl relative flex items-center justify-center group ">
              <Image src={box2bg} alt="coding icon" className="group-hover:opacity-100 opacity-50" />
              <div className="text-center absolute text-prime-blue text-xl font-bold leading-7">
                Fully automated
                <br />
                <span className="text-black text-xl font-bold leading-7">plug-and-play platform</span>
              </div>
            </div>

            {/* card 3 */}
            <div className="bg-prime-dark rounded-xl p-4 flex gap-4 items-center justify-center flex-col">
              <div className="text-center text-prime-blue text-lg font-bold">High-standard <br />
                <span className="text-white text-lg font-semibold"> user interface & experience</span>
              </div>
              <Image src={chart} alt="coding icon" className="" />
            </div>

            {/* card 4 */}
            <div className="bg-prime-dark rounded-xl p-4 flex flex-col items-center justify-around group gap-3">
              <Image src={star} alt="coding icon" className="group-hover:animate-spin " />
              <div className="text-center text-white text-base font-normal leading-normal">
                Fully optimized for <br />
                <span className="text-prime-blue text-lg font-bold leading-normal">Conversion Rates</span>
              </div>
            </div>

            {/* card 5 */}
            <div className="bg-prime-bg rounded-xl p-4 flex-col justify-around flex h-full gap-3">
              <div className="text-center text-prime-blue text-xl font-bold">An SEO-automated, <br />
                <span className="text-black text-base font-normal"> optimized & market-ready website</span>
              </div>
              <Image src={dashboard} alt="coding icon" className="mx-auto" />
              <div className="text-center text-black text-sm font-semibold">Brings in the advanced technology, process, and automation that the business needs</div>
            </div>

            {/* card 6 */}
            <div className="bg-prime-dark rounded-xl w-full flex-col justify-between p-3 flex items-center gap-3">
              <div className="w-full text-center text-white text-lg font-bold">Proven strategy with <br />
                <span className="text-prime-blue text-lg font-bold">“N” number of businesses</span>
              </div>
              <Image src={loginimg} alt="-" />
              <div className="w-full text-center text-prime-blue text-xl font-bold">Highest ROI <br />
                <span className="text-white text-lg font-medium"> from the marketing investments</span>
              </div>
            </div>

            {/* card 7 */}
            <div className="bg-prime-bg rounded-xl p-3 py-5 space-y-6">
              <div className="text-center text-prime-blue text-lg font-black leading-5">4X times smaller <br />
                <span className="text-black text-sm font-normal"> Teams & brings down the operations costs significantly</span>
              </div>
              <div className="text-center text-prime-blue text-lg font-black leading-5">6X times faster <br />
                <span className="text-black text-sm font-normal"> Than other companies have seen their growth</span>
              </div>
              <div className="text-center text-prime-blue text-lg font-black leading-5">10X times lesser <br />
                <span className="text-black text-sm font-normal"> Investment/budget on technology and marketing</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Unique;
