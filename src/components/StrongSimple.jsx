import React from "react";

const StrongSimple = () => {
  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Top (Yellow) Section */}
      <div className="relative bg-[#f5ff33] flex-1 flex items-end justify-self-start px-12 pt-16 text-[#111]">
        {/* STRONG Text */}
        <h1 className="text-[10rem] font-extrabold leading-none">STRONG</h1>

        {/* Enough for business */}
        <div className="ml-6 mt-10 text-3xl font-medium leading-snug text-[#111] px-5 py-3">
          <p>enough</p>
          <p>for</p>
          <p>business</p>
        </div>

        {/* Right Image */}
        <img
          src="image 5.png"
          alt="Simple scooter"
          className="absolute top-1 right-0 w-[380px] object-contain"
        />
      </div>

      {/* Bottom (Black) Section */}
      <div className="relative bg-black flex-1 flex items-centre justify-end px-12 pb-16">
        <div className="flex flex-col items-end">
          {/* SIMPLE Text */}
          <h1 className="text-[10rem] font-extrabold text-[#f5ff33] leading-none">
            SIMPLE
          </h1>

          {/* Enough for anyone - placed directly below SIMPLE */}
          <p className="text-2xl text-[#f5ff33] font-medium mt-2">
            enough for anyone
          </p>
        </div>
        {/* Left Image */}
        <img
          src="image 6.png"
          alt="Strong Scooter"
          className="absolute bottom-0 left-0 w-[390px] object-contain"
        />
      </div>
    </section>
  );
};

export default StrongSimple;
