import React from 'react';
import PageBanner from '../components/PageBanner';
import VillaAmenities from '../components/amenities/VillaAmenities';
import bannerImg from '../assets/poolsea2.jpg';

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased overflow-x-hidden">
      <main>
        {/* Dynamic header banner matching About & Gallery styles */}
        <PageBanner title="Amenities" bgImage={bannerImg} />
        <VillaAmenities />
      </main>
    </div>
  );
}
