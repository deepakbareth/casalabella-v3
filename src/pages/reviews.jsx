import React from 'react';
import PageBanner from '../components/PageBanner';
import VillaReviews from '../components/reviews/VillaReviews';
import bannerImg from '../assets/testimonials.jpg';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased overflow-x-hidden pb-24">
      <main>
        {/* Banner with background image */}
        <PageBanner title="Reviews" bgImage={bannerImg} />
        
        {/* Modular reviews listing layout */}
        <VillaReviews />
      </main>
    </div>
  );
}
