import React from "react";
import Navbar from "./components/Navbar";
import NpsCargo from "./components/NpsCargo";
import RentRide from "./components/RentRide";
import Hero from "./components/hero";
import FeaturesPage from "./components/Feature";
import StrongSimplePage from "./components/StrongSimple";
import ClientsPartners from "./components/Clients";
import TestimonialsSection from "./components/Testimonals";
import LocationMapSection from "./components/Location"; 
import ReadyToRider from "./components/ReadyToRider";
import Footer from "./components/Footer";

import './index.css';

function App() {
  return (
<div className="bg-black text-white w-[1280px]">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Page Sections */}
      <section id="nps-cargo">
        <NpsCargo />
      </section>

      <section id="rent-ride">
        <RentRide />
      </section>

      <section id="features">
        <FeaturesPage />
      </section>

      <section id="strong-simple">
        <StrongSimplePage />
      </section>

      <section id="clients-partners">
        <ClientsPartners />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="location-map">
        <LocationMapSection />
      </section>

      <section id="ready-to-ride">
        <ReadyToRider />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
