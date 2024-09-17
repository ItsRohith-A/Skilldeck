import Image from "next/image";
import React from "react";
import profile from "../../../public/images/founder.png";
import dots from "../../../public/images/dots.svg";
import line from "../../../public/images/line.svg";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

function Founder() {
  return (
    <div className="container mx-auto my-12">
      <div className="flex justify-evenly">
        <div className="bg-gray-800 text-white rounded-t-lg w-full max-w-sm pt-6 flex flex-col items-center">
          <div className="flex justify-between items-center w-full px-8 mb-6">
            <Image src={line} alt="icons" />
            <Image src={dots} alt="icons" />
          </div>
          <div className="bg-white w-full flex flex-col items-center pt-4 pb-6 px-4 rounded-lg">
            <Image src={profile} alt="Founder" className="rounded-full" />
            <p className="text-2xl font-bold mt-4 text-center">
              Manjunath
              <br />
              <span className="text-sm font-light">Founder & CEO</span>
            </p>
            <div className="flex justify-center mt-4 space-x-4">
              <Link href="/" className="text-gray-800 bg-blue-100 rounded-full p-2 hover:bg-blue-200">
                <CiLinkedin size={30} />
              </Link>
              <Link href="/" className="text-gray-800 bg-blue-100 rounded-full p-2 hover:bg-blue-200">
                <CiLinkedin size={30} />
              </Link>
              <Link href="/" className="text-gray-800 bg-blue-100 rounded-full p-2 hover:bg-blue-200">
                <CiLinkedin size={30} />
              </Link>
              <Link href="/" className="text-gray-800 bg-blue-100 rounded-full p-2 hover:bg-blue-200">
                <CiLinkedin size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full max-w-lg">
          <p className="text-lg">
            <span className="font-bold text-blue-600 text-xl">Manjunath</span> is an Engineering
            and MBA graduate passionate about web technologies and digital
            marketing and has worked in various roles building tech and
            marketing solutions at various organizations. Manjunath has played a
            pivotal role in building it from the ground up to a significant
            level.
            <br />
            <br />
            He has built solutions for companies stuck in terms of ROI, global
            expansion, and marketing channel diversification by using tech and
            marketing automation as the key.
            <br />
            <br />
            Manjunath is the founder and CEO of KandraDigital. Manjunath is a
            consultant who has helped “N” several training companies with deep
            expertise in building solutions, and he was the EX- Digital
            Marketing Head at Knowledgehut Upgrad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Founder;
