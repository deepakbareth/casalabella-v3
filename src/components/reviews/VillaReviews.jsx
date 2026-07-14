import React, { useState } from 'react';
import { reviewsData } from '../../data/reviews';
import ReviewCard from './ReviewCard';

export default function VillaReviews() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, reviewsData.length));
  };

  return (
    <div>
      {/* Section Header */}
      <section className="pt-20 pb-8 max-w-7xl mx-auto px-6 sm:px-12 text-center space-y-4">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block">
          Guest Testimonials
        </span>
        <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#2D332F] leading-none">
          What Our <span className="text-[#ff6e00]">Guests Say</span>
        </h2>
        <p className="font-sans text-base text-[#5A605C] leading-relaxed max-w-2xl mx-auto">
          Read direct experiences and reviews shared by travelers who have stayed at Casa La Bella.
        </p>
      </section>

      {/* Reviews Grid */}
      <section className="py-8 max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        {/* Blueprint background grid lines */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
          <div className="border-r border-[#2D332F] h-full" />
          <div className="border-r border-[#2D332F] h-full" />
          <div className="border-r border-[#2D332F] h-full" />
          <div className="h-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-start relative z-10">
          {reviewsData.slice(0, visibleCount).map((rev, idx) => (
            <ReviewCard key={idx} rev={rev} />
          ))}
        </div>

        {/* Load More Trigger */}
        {visibleCount < reviewsData.length && (
          <div className="text-center pt-8 relative z-10">
            <button
              onClick={loadMore}
              className="px-10 py-4 bg-[#2D332F] text-white font-sans text-xs uppercase tracking-widest font-extrabold rounded-full hover:bg-[#ff6e00] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              Load More ({reviewsData.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
