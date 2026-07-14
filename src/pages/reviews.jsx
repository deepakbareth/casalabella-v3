import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import bannerImg from '../assets/testimonials.jpg';
import { reviewsData } from '../data/reviews';
import { Star, ShieldCheck, CornerDownRight } from 'lucide-react';

export default function ReviewsPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [expandedReviews, setExpandedReviews] = useState({});

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, reviewsData.length));
  };

  const toggleExpand = (idx) => {
    setExpandedReviews(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Helper to render rating stars
  const renderStars = () => {
    return (
      <div className="flex items-center gap-0.5 text-[#ff6e00]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-current" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased overflow-x-hidden pb-24">
      <main>
        {/* Banner with background image */}
        <PageBanner title="Reviews" bgImage={bannerImg} />

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

        {/* Reviews Grid (Same width and grid structures as Bedrooms/Bathrooms about pages) */}
        <section className="py-8 max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-start">
            {reviewsData.slice(0, visibleCount).map((rev, idx) => {
              const hasLongText = rev.body.length > 160;
              const isExpanded = expandedReviews[idx];
              const displayText = hasLongText && !isExpanded
                ? `${rev.body.slice(0, 160)}...`
                : rev.body;

              return (
                <div
                  key={idx}
                  className="p-8 bg-white border border-[#E3E0D8] rounded-3xl shadow-sm space-y-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                >
                  <div className="space-y-4">
                    {/* Header Metadata */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 pb-4 border-b border-[#E3E0D8]/50">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-[#ff6e00] bg-[#FFF0E4] px-2 py-0.5 rounded border border-[#ff6e00]/25">
                            {rev.rating}
                          </span>
                          {renderStars()}
                        </div>
                        <h3 className="font-sans font-black text-base sm:text-lg uppercase text-[#2D332F] tracking-tight">
                          {rev.headline}
                        </h3>
                      </div>

                      {/* Author Stay details */}
                      <div className="text-left sm:text-right flex-shrink-0">
                        <div className="flex items-center sm:justify-end gap-1.5">
                          <span className="text-xs font-bold text-[#2D332F]">{rev.author}</span>
                          {rev.verified && (
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#007979]/10 text-[#007979] text-[8px] uppercase tracking-wider font-extrabold rounded">
                              <ShieldCheck className="w-2.5 h-2.5" /> Verified
                            </span>
                          )}
                        </div>
                        <p className="text-[9px] uppercase tracking-widest text-[#8A908C] font-extrabold mt-1">
                          {rev.stayDuration} • {rev.stayDate}
                        </p>
                      </div>
                    </div>

                    {/* Review Content */}
                    {rev.body && (
                      <div className="space-y-2">
                        <p className="font-sans text-sm text-[#5A605C] leading-relaxed">
                          "{displayText}"
                        </p>
                        {hasLongText && (
                          <button
                            onClick={() => toggleExpand(idx)}
                            className="text-[10px] font-extrabold uppercase tracking-widest text-[#ff6e00] hover:text-[#007979] transition-colors cursor-pointer mt-1"
                          >
                            {isExpanded ? 'Show Less' : 'Read More'}
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Footer tags & response */}
                  <div className="space-y-4 pt-4 border-t border-[#E3E0D8]/30">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {rev.liked.map((like, lIdx) => (
                        <span
                          key={lIdx}
                          className="px-2 py-0.5 bg-[#E3E0D8]/20 border border-[#E3E0D8]/60 text-[#8A908C] text-[9px] uppercase tracking-wider font-extrabold rounded"
                        >
                          ✓ {like}
                        </span>
                      ))}
                    </div>

                    {/* Owner Response */}
                    {rev.response && (
                      <div className="p-5 bg-[#E3E0D8]/30 border-l-2 border-[#ff6e00] rounded-2xl space-y-2 flex items-start gap-3">
                        <CornerDownRight className="w-4 h-4 text-[#ff6e00] shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-sans font-extrabold text-[10px] uppercase tracking-wider text-[#2D332F]">
                              {rev.response.author}
                            </span>
                            <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#8A908C]">
                              {rev.response.role}
                            </span>
                          </div>
                          <p className="text-xs text-[#5A605C] italic leading-relaxed">
                            "{rev.response.text}"
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Load More Trigger */}
          {visibleCount < reviewsData.length && (
            <div className="text-center pt-8">
              <button
                onClick={loadMore}
                className="px-10 py-4 bg-[#2D332F] text-white font-sans text-xs uppercase tracking-widest font-extrabold rounded-full hover:bg-[#ff6e00] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                Load More ({reviewsData.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
