import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NpsCargo = () => {
  const scooterRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      scooterRef.current,
      { x: "-200px", y: "150px", opacity: 0 },
      {
        x: "1550px",
        y: "0px",
        opacity: 10,
        duration: 15,
        ease: "power3.out",
        repeat:-1
      }
    );
  }, []);

  return (
    <section
      className="relative bg-[#ddd1d1] text-white py-16 sm:py-24 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden"
      style={{
        clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      {/* Animate THIS scooter */}
      <img
        ref={scooterRef}
        src="/Frame 7.png"
        alt="NPS Cargo Scooter"
        className="absolute left-0 top-0 w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] object-contain  z-40"
        style={{ transform: "translateY(-20%)" }}
      />

      {/* Background Big NPS Text */}
      <h1
        className="absolute top-8 left-1/2 -translate-x-1/2
          text-[8rem] sm:text-[9rem] md:text-[15rem] lg:text-[25rem] font-extrabold tracking-widest
          select-none pointer-events-none w-full text-center
          bg-gradient-to-b from-white/85 to-white/5 text-transparent bg-clip-text"
      >
        NPS
      </h1>

      {/* Scooter Image */}
      <div className="relative z-10 mt-8 sm:mt-20 md:mt-30">
        <img
          src="/image2.png"
          alt="NPS Cargo Scooter"
          className="w-[350px] sm:w-[550px] md:w-[800px] lg:w-[950px] object-contain drop-shadow-2xl mx-auto"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 mt-1 max-w-7xl text-center px-4">
        <img
          src="/NPS Cargo.png"
          alt="NPS Logo"
          className="w-[400px] sm:w-[600px] md:w-[900px] mx-auto mb-2 object-contain"
        />
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          India’s First Patented Electric 2-Wheeler for Cargo & Deliveries —
          Built to tackle tough Indian roads and daily heavy-duty use.
        </p>
        <button className="mt-6 sm:mt-8 bg-[#e6ff00] text-black font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-sm hover:bg-lime-400 transition">
          View NPS Cargo
        </button>
      </div>
    </section>
  );
};

export default NpsCargo;
