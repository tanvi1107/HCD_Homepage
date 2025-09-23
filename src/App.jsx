import React from "react";
import Navbar from "./components/Navbar";
import NpsCargo from "./components/NpsCargo";
import RentRide from "./components/RentRide";
import Hero from "./components/hero";
import FeaturesPage from "./components/Feature";
import StrongSimplePage from "./components/StrongSimple";
import ClientsPartners from "./components/Clients";
import TestimonialsSection from "./components/Testimonals";
function App() {
  return (
    <div className="bg-black text-white">
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
    </div>
  );
}

export default App;
