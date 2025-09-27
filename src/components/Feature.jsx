import React from "react";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center space-y-10">
      {/* First Image */}
      <img 
        src="Frame 9.png" 
        alt="Features 1" 
        className="w-full max-w-7xl rounded-xl shadow-lg"
      />

      {/* Second Image */}
      <img 
        src="Frame 5.png" 
        alt="Features 2" 
        className="w-full max-w-7xl rounded-xl shadow-lg"
      />
    </div>
  );
};

export default FeaturesPage;
