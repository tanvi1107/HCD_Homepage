import React from "react";

const StrongSimple = () => {
  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Top (Yellow) Section */}
      <div className="relative bg-[#f5ff33] flex-1 flex items-end justify-start px-6 sm:px-12 pt-12 sm:pt-16 text-[#111] overflow-hidden">
        {/* STRONG Text */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-extrabold leading-none max-w-full whitespace-nowrap">
          STRONG
        </h1>

        {/* Enough for business */}
        <div className="ml-4 sm:ml-6 mt-6 sm:mt-10 text-xl sm:text-3xl font-medium leading-snug text-[#111] px-2 sm:px-5 py-1 sm:py-3 whitespace-nowrap">
          <p>enough</p>
          <p>for</p>
          <p>business</p>
        </div>

        {/* Right Image */}
        <img
          src="image 5.png"
          alt="Simple scooter"
          className="absolute top-0 sm:top-0 right-0 w-40 sm:w-[390px] object-contain select-none pointer-events-none"
        />
      </div>

      {/* Bottom (Black) Section */}
      <div className="relative bg-black flex-1 flex items-center justify-end px-6 sm:px-12 pb-12 sm:pb-16 overflow-hidden">
        <div className="flex flex-col items-end max-w-full">
          {/* SIMPLE Text */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-extrabold text-[#f5ff33] leading-none whitespace-nowrap">
            SIMPLE
          </h1>

          {/* Enough for anyone - placed directly below SIMPLE */}
          <p className="text-lg sm:text-2xl text-[#f5ff33] font-medium mt-2 max-w-xs sm:max-w-md whitespace-nowrap">
            enough for anyone
          </p>
        </div>

        {/* Left Image */}
        <img
          src="image 6.png"
          alt="Strong Scooter"
          className="absolute bottom-0 left-1 w-50 sm:w-[360px] object-contain select-none pointer-events-none"
        />
      </div>
    </section>
  );
};

export default StrongSimple;
