import React from "react";

function DemoVideo() {
  return (
    <div className="container mx-auto mt-12 lg:mt-24 px-3" id="demo">
      <div className="text-center text-slate-900 text-2xl lg:text-4xl font-bold leading-loose">Watch A Demo!</div>

      {/* <Image src={video} alt="video image" className="md:h-[96] lg:h-[600px] w-auto" /> */}
      <div className="text-center flex justify-center my-4 lg:my-12">
        <div className="relative w-full pb-[56.25%] lg:pb-[45%] h-0"> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/A-y-PXFigPI?si=rv07PnxoYMsmuMbL"
            title="Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="text-center text-black text-lg lg:text-2xl font-bold ">The brief demo of the platforms</div>
    </div>
  );
}

export default DemoVideo;
