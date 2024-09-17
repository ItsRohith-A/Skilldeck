import React from "react";
import Image from "next/image";
import bannerimg from "../../../public/images/bannerimg.png";
import jump from "../../../public/images/banjump.png";

function BannerImage() {
  return (
    <div className="container mx-auto mt-4 mb-20" data-aos="fade-up">
      <div className="relative flex justify-center">
        <Image src={bannerimg} alt="Banner Image" className="w-auto" />
        <Image
          src={jump}
          alt="Jumping Image"
          className="absolute z-10 bottom-0 left-[850px] w-[300px] h-auto animate-bounce"
        />
      </div>
    </div>
  );
}

export default BannerImage;
