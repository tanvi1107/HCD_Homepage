import React from "react";

const RentRide = () => {
  return (
    <>
      {/* Warranty Section (Above Rent & Ride) */}
     {/* Warranty Section (Above Rent & Ride) */}
<section className="bg-white px-4 py-1 ">
  <div className="max-w-9xl mx-auto flex items-center space-x-6">
    {/* Left: Warranty Image */}
    <img
      src="warranty.png" // replace with your warranty badge image
      alt="3 Year Warranty"
      className="w-[150px] md:w-[200px] object-contain"
    />

    {/* Right: Warranty Text */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-black">
        3 YEAR WARRANTY
      </h2>
      <p className="text-lg text-black extrabold mt-2">
        Every NPS Cargo comes with a 3-year warranty covering the motor,
        controller, speedometer, and battery.
      </p>
    </div>
  </div>
</section>


      {/* Rent & Ride Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-[#111] px-8 py-20">
        {/* Left: Scooter Image */}
        <div className="md:w-11xl flex flex-col items-center">
  {/* Main Scooter */}
  <div className="relative">
    <img
      src="red-scooter.png"
      alt="Rent & Ride Scooter"
      className="w-[350px] md:w-[450px] object-contain"
    />

   <img
      src="reflection.png"
      alt="scooter"
      className="w-[350px] md:w-[450px] object-contain absolute top-6xl right-10xl transform translate-x-1/6 -translate-y-1/4"
    />
  </div>
  </div>


        {/* Right: Content */}
        <div className="md:w-1/2 mt-12xl md:mt-0 md:pl-10 text-top md:text-left">
          <h2 className="text-8xl md:text-8xl font-extrabold mb-6 text-white justify-start">
            Rent & Ride
          </h2>

          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-center">
              <span className="text-lime-400 mr-3">✔</span> Low-cost rental
            </li>
            <li className="flex items-center">
              <span className="text-lime-400 mr-3">✔</span> Perfect for delivery
              shifts or short-term needs
            </li>
            <li className="flex items-center">
              <span className="text-lime-400 mr-3">✔</span> Quick battery swaps
              at designated pods
            </li>
          </ul>

          <button className="mt-8 bg-black text-white font-bold px-9 py-4 rounded-sm hover:bg-gray-200 hover:text-black transition">
            Rent Now
          </button>
        </div>
      </section>
    </>
  );
};

export default RentRide;
