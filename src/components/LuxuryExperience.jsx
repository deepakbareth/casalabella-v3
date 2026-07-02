import React from 'react';
import imageHouse from '../assets/house.jpg';

export default function LuxuryExperience() {
  const stats = [
    { value: "360°", label: "Horizons", desc: "Views of the azure sea from almost every angle." },
    { value: "100%", label: "Privacy", desc: "Exclusive clifftop estate for your guest party." },
    { value: "14m", label: "Elevation", desc: "Perched majestically above Punta Sur cliffs." }
  ];

  return (
    <section id="villa" className="relative min-h-screen w-full flex flex-col lg:flex-row-reverse bg-[#F7F5F0] text-[#2D332F] overflow-hidden py-20 lg:py-24 px-5">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 pointer-events-none opacity-[0.02]">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      {/* Right Content Half (Left-aligned text visually on desktop due to flex-row-reverse) */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 lg:py-0 z-10">

        {/* Category Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#E3E0D8] rounded-full w-max mb-8 transition-transform hover:-translate-y-1 duration-300 cursor-default">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6e00] animate-pulse"></span>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#5A605C]">
            The Clifftop Sanctuary
          </span>
        </div>

        {/* Heading - Heavy Sans-serif */}
        <h2 className="font-sans text-5xl sm:text-6xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.85] mb-8">
          Your Oceanside <br className="hidden lg:block" />
          <span className="text-[#ff6e00]">Sanctuary</span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-[#5A605C] font-normal leading-relaxed max-w-md mb-12">
          Perched on the stunning cliffs of Punta Sur in Isla Mujeres, Casa La Bella offers an unparalleled vacation experience. Wake up to spectacular sunrises and unwind to majestic ocean sunsets from almost every angle of the estate.
        </p>

        {/* Staggered Metrics Grid */}
        <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-[#E3E0D8]">
          {stats.map((stat, idx) => (
            <div key={idx} className="group">
              <span className="font-sans text-4xl font-extrabold text-[#ff6e00] tracking-tight block mb-2 group-hover:translate-x-1 transition-transform duration-300">
                {stat.value}
              </span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8A908C] mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-[#5A605C] font-medium leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Left Image Half (Right-aligned visually on desktop due to flex-row-reverse) */}
      <div className="w-full lg:w-[45%] h-[60vh] lg:h-screen relative p-4 lg:p-8 flex items-center justify-center">

        {/* Background panel to anchor image on desktop */}
        <div className="hidden lg:block absolute top-0 left-0 w-3/4 h-full bg-[#2D332F]"></div>

        {/* Framed Image Card */}
        <div className="relative w-full h-full lg:h-[90%] rounded-2xl overflow-hidden shadow-2xl z-10 group">
          <img
            src={imageHouse}
            alt="Casa La Bella Clifftop Architectural Estate"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-out"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Floating Glass Coordinates Badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-2">
              Estate Details
            </p>
            <p className="font-mono text-white text-sm font-semibold tracking-wide">
              Sleeps 8 Guests
            </p>
            <p className="font-mono text-white text-sm font-semibold tracking-wide">
              4 En-suite Suites
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
