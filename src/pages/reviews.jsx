import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import bannerImg from '../assets/testimonials.jpg';
import { reviewsData } from '../data/reviews';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, CornerDownRight, ArrowRight } from 'lucide-react';

export default function ReviewsPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedAspect, setSelectedAspect] = useState('all');

  // Total reviews count
  const totalReviews = reviewsData.length;

  // Filter reviews by selected aspect
  const filteredReviews = selectedAspect === 'all'
    ? reviewsData
    : reviewsData.filter(rev => rev.liked.includes(selectedAspect));

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredReviews.length));
  };

  const handleAspectChange = (aspect) => {
    setSelectedAspect(aspect);
    setVisibleCount(6); // Reset pagination count
  };

  // Helper to render rating stars
  const renderStars = () => {
    return (
      <div className="flex items-center gap-1 text-[#ff6e00]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased overflow-x-hidden pb-20">
      <main>
        {/* Dynamic header banner */}
        <PageBanner title="Reviews" bgImage={bannerImg} />

        {/* SECTION 1: RATING DASHBOARD */}
        <section className="py-16 max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Score Box */}
            <div className="lg:col-span-4 p-8 bg-[#E3E0D8]/30 border border-[#E3E0D8] rounded-3xl flex flex-col justify-center items-center text-center space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00]">
                Overall Rating
              </span>
              <div className="space-y-1">
                <span className="font-sans text-7xl font-black text-[#2D332F]">10</span>
                <span className="font-sans text-3xl font-bold text-[#5A605C]">/10</span>
              </div>
              <div className="space-y-1">
                <p className="font-sans font-black text-xl uppercase tracking-tight text-[#2D332F]">Excellent</p>
                <p className="text-xs text-[#5A605C] flex items-center gap-1.5 justify-center font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#007979]" /> {totalReviews} Verified Guest Reviews
                </p>
              </div>
            </div>

            {/* Right Rating Details */}
            <div className="lg:col-span-8 p-8 bg-[#E3E0D8]/20 border border-[#E3E0D8]/60 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h3 className="font-sans font-black text-sm uppercase text-[#2D332F] tracking-wide">
                  Guest Satisfaction Metrics
                </h3>
                <p className="text-xs text-[#5A605C] leading-relaxed">
                  Casa La Bella consistently scores maximum marks across all rating pillars verified directly by guests during check-out surveys.
                </p>
              </div>

              {/* Progress bars */}
              <div className="space-y-3.5">
                {[
                  { name: "Cleanliness", val: "100%" },
                  { name: "Location & Clifftops", val: "100%" },
                  { name: "Check-in Experience", val: "100%" },
                  { name: "Host Communication", val: "100%" },
                  { name: "Listing Accuracy", val: "100%" },
                  { name: "Value for Money", val: "100%" }
                ].map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-wide text-[#5A605C]">
                      <span>{metric.name}</span>
                      <span>{metric.val}</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#E3E0D8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#007979] rounded-full" style={{ width: metric.val }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: FILTER PILLS */}
        <section className="py-6 max-w-7xl mx-auto px-6 sm:px-12 relative z-10 border-t border-[#E3E0D8]/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-sans text-xs font-extrabold uppercase tracking-widest text-[#5A605C]">
              Filter reviews by liked aspect:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Reviews' },
                { id: 'cleanliness', label: 'Cleanliness' },
                { id: 'location', label: 'Location' },
                { id: 'communication', label: 'Host/Mgr' },
                { id: 'value for money', label: 'Value' }
              ].map(pill => (
                <button
                  key={pill.id}
                  onClick={() => handleAspectChange(pill.id)}
                  className={`px-4 py-2 rounded-full font-sans text-[10px] uppercase tracking-widest font-extrabold border transition-all duration-300 cursor-pointer ${selectedAspect === pill.id
                    ? 'bg-[#2D332F] text-white border-[#2D332F]'
                    : 'bg-white/70 hover:bg-[#E3E0D8]/45 text-[#5A605C] border-[#E3E0D8]'
                    }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: REVIEWS LIST */}
        <section className="py-8 max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-8">
          <div className="grid grid-cols-1 gap-8">
            {filteredReviews.slice(0, visibleCount).map((rev, idx) => (
              <div 
                key={idx}
                className="p-8 bg-white border border-[#E3E0D8] rounded-3xl shadow-sm space-y-6 hover:shadow-md transition-all duration-300"
              >
                {/* Header Metadata */}
                <div className="flex flex-col md:flex-row justify-between gap-4 pb-4 border-b border-[#E3E0D8]/50">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#ff6e00] bg-[#FFF0E4] px-2.5 py-1 rounded-lg border border-[#ff6e00]/25">
                        {rev.rating}
                      </span>
                      {renderStars()}
                    </div>
                    <h3 className="font-sans font-black text-lg sm:text-xl uppercase text-[#2D332F] tracking-tight">
                      {rev.headline}
                    </h3>
                  </div>

                  {/* Traveler info */}
                  <div className="text-left md:text-right space-y-1">
                    <div className="flex items-center md:justify-end gap-1.5">
                      <span className="text-xs font-bold text-[#2D332F]">{rev.author}</span>
                      {rev.verified && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#007979]/10 text-[#007979] text-[9px] uppercase tracking-wider font-extrabold rounded-md">
                          <ShieldCheck className="w-3 h-3" /> Verified Guest
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8A908C] font-extrabold">
                      {rev.stayDuration} • {rev.stayDate}
                    </p>
                    {rev.travelerType && (
                      <p className="text-[10px] text-[#5A605C] italic">{rev.travelerType}</p>
                    )}
                  </div>
                </div>

                {/* Review Body */}
                {rev.body && (
                  <p className="font-sans text-sm sm:text-base text-[#5A605C] leading-relaxed">
                    "{rev.body}"
                  </p>
                )}

                {/* Tags liked */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {rev.liked.map((like, lIdx) => (
                    <span 
                      key={lIdx}
                      className="px-3 py-1 bg-[#E3E0D8]/20 border border-[#E3E0D8]/60 text-[#5A605C] text-[10px] uppercase tracking-wider font-extrabold rounded-lg"
                    >
                      ✓ {like}
                    </span>
                  ))}
                </div>

                {/* Host Response */}
                {rev.response && (
                  <div className="p-6 bg-[#E3E0D8]/30 border-l-2 border-[#ff6e00] rounded-2xl space-y-3 flex items-start gap-4">
                    <CornerDownRight className="w-5 h-5 text-[#ff6e00] shrink-0 mt-1" />
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#2D332F]">
                          {rev.response.author}
                        </span>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#8A908C]">
                          {rev.response.role}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5A605C] italic leading-relaxed">
                        "{rev.response.text}"
                      </p>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Load More Trigger */}
          {visibleCount < filteredReviews.length && (
            <div className="text-center pt-8">
              <button
                onClick={loadMore}
                className="px-10 py-4 bg-[#2D332F] text-white font-sans text-xs uppercase tracking-widest font-extrabold rounded-full hover:bg-[#ff6e00] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                Load More Reviews ({filteredReviews.length - visibleCount} remaining)
              </button>
            </div>
          )}

          {/* Empty fallback */}
          {filteredReviews.length === 0 && (
            <div className="text-center py-20 bg-[#E3E0D8]/20 border border-dashed border-[#E3E0D8] rounded-3xl">
              <MessageSquare className="w-12 h-12 text-[#8A908C] mx-auto mb-4" />
              <p className="font-sans text-base font-semibold text-[#5A605C]">No reviews found matching that criteria.</p>
            </div>
          )}

        </section>

      </main>
    </div>
  );
}
