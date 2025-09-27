import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black py-14 px-8"
      style={{
        minWidth: 900,
        width: "100vw",
        maxWidth: "100vw",
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/scooter-bg.jpg')" }}
      ></div>
      {/* Content */}
      <div
        className="relative z-10 max-w-3xl w-full px-8 text-white"
        style={{
          minWidth: 600,
        }}
      >
        <h1
          className="text-7xl font-extrabold leading-tight"
          style={{
            fontSize: "5rem", // keep heading large everywhere
            lineHeight: 1.1,
          }}
        >
          BUILT TO MOVE <br /> BUILT TO LAST
        </h1>
        <p
          className="mt-10 text-xl"
          style={{
            marginTop: "2.5rem",
            fontSize: "1.25rem",
          }}
        >
          Durable, economical scooters for businesses and individuals <br />
          who need to carry more with less hassle.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-[#e9ff3a] text-black font-bold px-8 py-4 rounded-md hover:bg-[#c0e835] transition"
          style={{
            marginTop: "2rem",
            fontWeight: 700,
            padding: "1rem 2rem",
            borderRadius: "0.5rem",
            background: "#e9ff3a",
            color: "#111",
            fontSize: "1rem",
          }}
        >
          Explore Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
