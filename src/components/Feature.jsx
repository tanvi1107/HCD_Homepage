import React from "react";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center space-y-10 px-2 md:px-8 py-8">
      {/* First Image */}
      <img 
        src="Frame 9.png" 
        alt="Features 1" 
        className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl rounded-xl shadow-lg object-contain"
      />

      {/* Second Image */}
      <img 
        src="Frame 5.png" 
        alt="Features 2" 
        className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl rounded-xl shadow-lg object-contain"
      />
    </div>
  );
};

export default FeaturesPage;
