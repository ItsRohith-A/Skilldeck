import React from "react";
import Image from "next/image";
import bannerimg from "../../../public/images/bannerimg.png";
import jump from "../../../public/images/banjump.png";

function BannerImage() {
  return (
    <div className="container mx-auto mt-4 mb-20" data-aos="fade-up">
      <div className=" flex justify-center">
        <div className="relative">
          <Image src={bannerimg} alt="Banner Image" className="w-[800px] h-auto" />
          <Image
            src={jump}
            alt="Jumping Image"
            className="absolute z-10 bottom-0 -right-20 hidden lg:block w-72  h-auto animate-slow-bounce"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerImage;
