const NpsCargo = () => {
  return (
    <section className="relative bg-black text-white py-28 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Big NPS Text with Gradient */}
      <h1
        className="absolute top-10 left-1/2 -translate-x-1/2 
        text-[9rem] md:text-[25rem] font-extrabold tracking-widest 
        select-none pointer-events-none w-full text-center 
        bg-gradient-to-b from-white/50 to-white/3 text-transparent bg-clip-text"
      >
        NPS
      </h1>

      {/* Scooter Image */}
      <div className="relative z-10">
        <img
          src="/image2.png" // ✅ your scooter image in public/
          alt="NPS Cargo Scooter"
          className="w-[700px] md:w-[900px] object-contain drop-shadow-2xl mx-auto mt-9"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 mt-2 max-w-8xl text-center">
        < img
          src="NPS Cargo.png" // ✅ your NPS logo image in public/
          alt="NPS Logo"
          className="w-[800px] md:w-[700px] object-contain  mb-2"
        />
        <p className="mt-6 text-14xl text-gray-300 " style={{ maxWidth: '600px', margin: '0 auto' }} >
          India’s First Patented Electric 2-Wheeler for Cargo & Deliveries — 
          Built to tackle tough Indian roads and daily heavy-duty use.
        </p>
        <div className="mt-8">
          <button className="bg-[#e6ff00] text-black font-bold px-8 py-3 rounded-sm hover:bg-lime-400 transition">
            View NPS Cargo
          </button>
        </div>
      </div>
    </section>
  );
};

export default NpsCargo;
