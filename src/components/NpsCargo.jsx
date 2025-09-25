import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NpsCargo = () => {
  const scooterRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      scooterRef.current,
      { x: "-200px", y: "150px", opacity: 0 }, // start off-screen (bottom-left)
      {
        x: "0px",
        y: "0px",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      className="relative bg-#101010 text-white py-28 px-6 flex flex-col items-center justify-center overflow-hidden"
      style={{
        clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)", // 🔥 slanted top
      }}
    >
      {/* 🔥 Animate THIS scooter */}
      <img
        ref={scooterRef}
        src="/Frame 7.png" // ✅ must be in public/ folder
        alt="NPS Cargo Scooter"
        className="absolute left-0 top-0 w-[800px] md:w-[700px] object-contain drop-shadow-2xl z-40"
        style={{ transform: "translateY(-50%)" }}
      />

      {/* Background Big NPS Text */}
      <h1
        className="absolute top-10 left-1/2 -translate-x-1/2 
        text-[9rem] md:text-[25rem] font-extrabold tracking-widest 
        select-none pointer-events-none w-full text-center 
        bg-gradient-to-b from-white/50 to-white/5 text-transparent bg-clip-text"
      >

      NPS
      </h1>

      {/* Scooter Image */}
       <div className="relative z-10"> 
        <img src="/image2.png" // ✅ your scooter image in public/ 
        alt="NPS Cargo Scooter"
         className="w-[700px] md:w-[900px] object-contain drop-shadow-2xl mx-auto mt-9" /> </div>

      {/* Text Content */}
      <div className="relative z-10 mt-2 max-w-8xl text-center">
        <img
          src="/NPS Cargo.png"
          alt="NPS Logo"
          className="w-[800px] md:w-[700px] object-contain mb-2 mx-auto"
        />
        <p className="mt-6 text-xl text-gray-300 max-w-xl mx-auto">
          India’s First Patented Electric 2-Wheeler for Cargo & Deliveries — 
          Built to tackle tough Indian roads and daily heavy-duty use.
        </p>
        <button className="mt-8 bg-[#e6ff00] text-black font-bold px-8 py-3 rounded-sm hover:bg-lime-400 transition">
          View NPS Cargo
        </button>
      </div>
    </section>
  );
};

export default NpsCargo;
