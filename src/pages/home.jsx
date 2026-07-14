import React from 'react';
import Navbar from '../layout/Navbar';
import Hero from '../components/home/Hero';
import LuxuryExperience from '../components/home/LuxuryExperience';
import Amenities from '../components/home/Amenities';
import Testimonials from '../components/home/Testimonials';
import AvailabilityRates from '../components/home/AvailabilityRates';
import BookingInquiry from '../components/home/BookingInquiry';
import Footer from '../layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal antialiased overflow-x-hidden">
      {/* <Navbar /> */}

      <main>
        <Hero />
        <LuxuryExperience />
        <Amenities />
        <Testimonials />
        <AvailabilityRates />
        <BookingInquiry />
      </main>


    </div>
  );
}
