// Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/scooter-bg.jpg')" }}
      ></div>
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          BUILT TO MOVE <br /> BUILT TO LAST
        </h1>
        <p className="mt-10 text-lg">
          Durable, economical scooters for businesses and individuals <br />
          who need to carry more with less hassle.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-[#e9ff3a] text-black font-bold px-8 py-4 rounded-md hover:bg-[#c0e835] transition"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
