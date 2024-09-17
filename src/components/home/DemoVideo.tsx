import Image from "next/image";
import React from "react";
import video from "../../../public/images/videoimg.png";

function DemoVideo() {
  return (
    <div className="container mx-auto " data-aos="fade-up">
      <h3 className=" font-bold text-center ">Watch A Demo!</h3>
      <div className="text-center flex justify-center">
        <Image src={video} alt="video image" />
      </div>
      <p className="text-center font-bold mt-5">The brief demo of the platforms</p>
    </div>
  );
}

export default DemoVideo;
