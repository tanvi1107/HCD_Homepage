import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[100vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/scooter-bg.jpg')",
              
       }} // put your image in public/
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
          BUILT TO MOVE <br /> BUILT TO LAST
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Durable, economical scooters for businesses and individuals <br />
          who need to carry more with less hassle.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-[#d7fc3f] text-black font-bold px-8 py-4 rounded-md hover:bg-[#c0e835] transition"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
