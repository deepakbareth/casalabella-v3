import React, { useState } from 'react';
import guestImg from '../../assets/testimonials.jpg';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      quote: "We have been returning to Casa La Bella for years now. There are so many spaces to enjoy, but my favorite is the cabana by the pool with my book. The service and privacy are unmatched.",
      author: "Stephanie McAllister",
      location: "Dallas, Texas"
    },
    {
      quote: "The sunrise views from the clifftop master suites are something we will never forget. The infinity pool merges with the ocean, creating a pure sanctuary.",
      author: "Charles & Katherine Vance",
      location: "Chicago, Illinois"
    }
  ];

  return (
    <section id="reviews" className="py-24 lg:py-40 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Decorative subtle gradient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal-light/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Overline Title */}
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.45em] text-brand-teal-light font-semibold block">
            Guest Chronicles
          </span>
        </div>

        {/* Magazine Editorial Spread */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Column: Overlapping Picture Frame (5 columns) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">

            {/* Main Picture Frame */}
            <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden border border-white/10 bg-white/5 shadow-2xl group">
              <img
                src={guestImg}
                alt="Luxury living guest experience"
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-103 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121314]/80 via-transparent to-transparent pointer-events-none" />


            </div>

            {/* Decorative Offset Golden Box */}
            <div className="absolute -right-4 -bottom-4 w-[80%] h-[80%] border border-brand-teal-light/25 -z-10 pointer-events-none hidden lg:block" />

          </div>

          {/* Right Column: Dynamic Quote Box (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[300px]">

            {/* The Quote Bubble (Cormorant Serif) */}
            <blockquote className="relative">
              {/* Huge stylistic quote mark */}
              <span className="absolute -top-16 -left-8 font-serif text-[180px] text-white/5 font-extrabold select-none leading-none">
                “
              </span>

              <p
                key={activeIdx}
                className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-extralight italic leading-relaxed tracking-wide mb-12 relative z-10 animate-gentle-fade-in"
              >
                "{reviews[activeIdx].quote}"
              </p>
            </blockquote>

            {/* Divider line */}
            <div className="h-[1px] w-16 bg-brand-teal-light mb-8" />

            {/* Footer / Author & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 w-full">

              {/* Author text */}
              <div>
                <span className="font-sans text-xs sm:text-sm text-white uppercase tracking-[0.25em] font-semibold block mb-1">
                  {reviews[activeIdx].author}
                </span>
                <span className="font-sans text-[9px] text-brand-teal-light uppercase tracking-[0.3em] block">
                  {reviews[activeIdx].location}
                </span>
              </div>

              {/* Slider Controls */}
              <div className="flex gap-4">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] tracking-[0.1em] font-bold uppercase transition-all cursor-pointer ${activeIdx === idx
                        ? 'border-brand-teal-light bg-brand-teal-light text-brand-dark'
                        : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                      }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes gentleFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gentle-fade-in {
          animation: gentleFadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
