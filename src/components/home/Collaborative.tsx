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
import sax from "../../../public/images/cob/logos/sax.png";
import eg from "../../../public/images/cob/logos/eg.png";
import sd from "../../../public/images/cob/logos/sd.png";

const logos = [logo1, aa, bt, il, kh, pal, sa, sta, vf, sax, eg, sd];


const Collaborative: React.FC = () => {

  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      if (ul.nextSibling) {
        (ul.nextSibling as HTMLElement).setAttribute('aria-hidden', 'true');
      }
    }
  }, []);

  return (
    <div className="mt-12 lg:mt-24">
      <div className="container mx-auto">
        <p className="text-center font-bold text-2xl lg:text-3xl mb-4 lg:mb-12">
          Successful Collaborative Efforts
        </p>
        <div className="">
          <div className="mb-8 lg:flex gap-x-6 px-2 lg:px-0 space-y-4 lg:space-y-0">
            <div className="bg-cover bg-center px-4 lg:p-8 rounded-xl h-52 flex items-center  bg-no-repeat bg-[url('/images/cob/card1bg.png')]">
              <p className="lg:w-4/6 font-bold lg:text-gray-700 lg:leading-7">
                The product team has worked with various training companies to
                provide the requirements for automating marketing, operations,
                sales, and business development.
              </p>
            </div>
            <div className="bg-cover bg-center px-4 lg:p-8 rounded-xl h-52 flex items-center  bg-no-repeat bg-[url('/images/cob/card2bg.png')]">
              <p className="lg:w-4/6 font-bold lg:text-gray-700 lg:leading-7">
                The team has played a pivotal role in crafting the tech and
                marketing solutions at different stages for the following training
                companies to establish their internet portfolio.
              </p>
            </div>
          </div>
          {/* Auto-scrolling logo section */}
          <div
            className="w-full py-6 inline-flex flex-nowrap overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-3 lg:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {logos.map((logo, index) => (
                <li key={index} className='flex-shrink-0 bg-[#F2F2F2] px-4 rounded-xl py-2'>
                  <Image src={logo} alt={`client logo ${index}`} className='lg:h-10 w-auto' />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborative;
