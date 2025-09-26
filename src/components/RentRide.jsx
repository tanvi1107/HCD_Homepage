import React from "react";

const RentRide = () => {
  return (
    <>
      {/* Warranty Section (Above Rent & Ride) */}
      <section className="bg-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-x-6 md:space-y-8">
          {/* Left: Warranty Image */}
          <img
            src="warranty.png"
            alt="3 Year Warranty"
            className="w-36 md:w-48 object-contain"
          />

          {/* Right: Warranty Text */}
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-black">
              3 YEAR WARRANTY
            </h2>
            <p className="text-base md:text-lg font-semibold text-black mt-2">
              Every NPS Cargo comes with a 3-year warranty covering the motor,
              controller, speedometer, and battery.
            </p>
          </div>
        </div>
      </section>

      {/* Rent & Ride Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-[#111] px-0 sm:px-0 md:px-0 py-16 md:py-20">
        {/* Left: Scooter Image */}
        <div className="md:w-1/2 flex flex-col items-center relative">
          <img
            src="red-scooter.png"
            alt="Rent & Ride Scooter"
            className="w-64 sm:w-80 md:w-[550px] object-contain"
          />

        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 mt-12 md:mt-0 md:pl-10 text-center md:text-left max-w-lg">
          <h2 className="text-5xl sm:text-6xl md:text-6xl font-extrabold mb-6 text-white">
            Rent & Ride
          </h2>

          <ul className="space-y-4 text-base sm:text-lg text-gray-300">
            <li className="flex items-center">
              <span className="text-lime-400 mr-3">✔</span> Low-cost rental
            </li>
            <li className="flex items-center">
              <span className="text-lime-400 mr-3">✔</span> Perfect for delivery
              shifts or short-term needs
            </li>
            <li className="flex items-center">
              <span className="text-lime-400 mr-3">✔</span> Quick battery swaps at designated pods
            </li>
          </ul>

          <button className="mt-8 bg-black text-white font-bold px-8 py-3 rounded-sm hover:bg-gray-200 hover:text-black transition">
            Rent Now
          </button>
        </div>
      </section>
    </>
  );
};

export default RentRide;
