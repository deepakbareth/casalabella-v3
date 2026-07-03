import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F7F5F0] text-[#2D332F] overflow-hidden">
      {/* Background visual texture / grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#E3E0D8] rounded-full mb-10 transition-transform hover:-translate-y-0.5 duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6e00] animate-pulse"></span>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#5A605C]">
            Welcome to Punta Sur
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-7 space-y-4">
            <h1 className="font-sans text-5xl sm:text-6xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.85] text-[#2D332F]">
              Isla Mujeres’ Finest <br />
              <span className="text-[#ff6e00]">
                Oceanfront Home
              </span>
            </h1>
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-5 lg:pt-3 border-l-2 border-[#ff6e00] pl-6 lg:pl-8">
            <p className="font-sans text-base sm:text-lg text-[#5A605C] leading-relaxed font-normal">
              Casa La Bella is a private clifftop retreat positioned on the edge of Punta Sur. Surrounded by water on three sides, the estate is meticulously designed to offer complete seclusion, panoramic sunrises over the open sea, and sunsets facing the Cancun coastline.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 border-b border-[#E3E0D8] mx-6 sm:mx-12"></div>
    </section>
  );
}
