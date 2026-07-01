import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LuxuryExperience from './components/LuxuryExperience';
import VillaHighlights from './components/VillaHighlights';
import ImmersiveGallery from './components/ImmersiveGallery';
import Amenities from './components/Amenities';
import LocationExperience from './components/LocationExperience';
import Testimonials from './components/Testimonials';
import AvailabilityRates from './components/AvailabilityRates';
import BookingInquiry from './components/BookingInquiry';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal antialiased overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <LuxuryExperience />
        <Amenities />
        <Testimonials />
        <AvailabilityRates />
        <BookingInquiry />
      </main>

      <Footer />
    </div>
  );
}

export default App;
