import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black py-14 px-4 overflow-x-auto overflow-y-hidden"
      style={{ minWidth: 320 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/scooter-bg.jpg')" }}
      ></div>

      {/* Content */}
      <div
        className="relative z-10 max-w-3xl w-full px-4 text-white"
        style={{ minWidth: 300 }}
      >
        <h1 className="font-extrabold leading-tight text-[3rem] sm:text-[4.5rem] md:text-[5rem]">
          BUILT TO MOVE <br /> BUILT TO LAST
        </h1>
        <p className="mt-10 text-lg sm:text-xl">
          Durable, economical scooters for businesses and individuals <br />
          who need to carry more with less hassle.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-[#e9ff3a] text-black font-bold px-8 py-4 rounded-md hover:bg-[#c0e835] transition text-base sm:text-lg"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
