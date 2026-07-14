import React from 'react';
import PageBanner from '../components/PageBanner';
import VillaInquire from '../components/inquire/VillaInquire';
import bannerImg from '../assets/banner3.jpg';

export default function InquirePage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased overflow-x-hidden">
      <main>
        {/* Banner with background sunset image */}
        <PageBanner title="Book Now" bgImage={bannerImg} />

        {/* Form and Map wrapper */}
        <VillaInquire />
      </main>
    </div>
  );
}
