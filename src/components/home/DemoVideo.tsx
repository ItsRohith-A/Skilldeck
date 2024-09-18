import Image from "next/image";
import React from "react";
import video from "../../../public/images/videoimg.png";

function DemoVideo() {
  return (
    <div className="container mx-auto mt-12 lg:mt-24 px-3">
      <div className="text-center text-slate-900 text-2xl lg:text-4xl font-bold leading-loose">Watch A Demo!</div>
      <div className="text-center flex justify-center my-4 lg:my-12">
        <Image src={video} alt="video image" />
      </div>
      <div className="text-center text-black text-lg lg:text-2xl font-bold ">The brief demo of the platforms</div>
    </div>
  );
}

export default DemoVideo;
