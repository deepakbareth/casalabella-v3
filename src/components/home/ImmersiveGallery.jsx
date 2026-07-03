import React, { useState } from 'react';

// Import local assets
import banner1 from '../../assets/banner.jpg';
import banner2 from '../../assets/house.jpg';
import banner3 from '../../assets/banner3.jpg';
import bedsea from '../../assets/bedsea.jpg';
import house from '../../assets/house.jpg';
import pool from '../../assets/pool.jpg';
import poolsea2 from '../../assets/poolsea2.jpg';

export default function ImmersiveGallery() {
  const [activeVibe, setActiveVibe] = useState('twilight');

  const vibes = [
    {
      id: 'twilight',
      label: 'Golden Twilight',
      time: '05:45 PM',
      description: 'Wind down to copper sunsets and warm poolside lighting beneath a dome of stars.',
      mainImg: banner3,
      quote: "Where the warmth of daylight gives way to cozy clifftop evenings.",
      badgeText: "Twilight glow"
    },
    {
      id: 'dawn',
      label: 'Dawn Light',
      time: '06:15 AM',
      description: 'Experience soft pastels and silent ocean breezes as the sun rises directly before the villa.',
      mainImg: banner2,
      quote: "The quietest hour. Golden beams slowly touching the limestone cliffs.",
      badgeText: "Dawn light"
    },
    {
      id: 'midday',
      label: 'Midday Sol',
      time: '12:30 PM',
      description: 'Bask in turquoise waters glittering under the high Mexican sun, merging pool and sea in one.',
      mainImg: pool,
      quote: "Turquoise water as far as the eye can see, shifting in shades of blue.",
      badgeText: "Midday sol"
    },
  ];

  const currentVibe = vibes.find(v => v.id === activeVibe) || vibes[1];

  return (
    <section id="gallery" className="relative min-h-screen w-full flex flex-col lg:flex-row-reverse bg-[#F7F5F0] text-[#2D332F] overflow-hidden py-20 lg:py-24 px-5 border-t border-[#E3E0D8]">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
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
            Cinematic Canvas
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-sans text-5xl sm:text-6xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.85] mb-8">
          Shifting <br />
          <span className="text-[#ff6e00]">Light</span>
        </h2>

        {/* Dynamic Vibe Selectors */}
        <div className="flex flex-col w-full border-t border-[#E3E0D8] mt-4">
          {vibes.map((v) => (
            <button
              key={v.id}
              // onClick={() => setActiveVibe(v.id)}
              className={`flex items-start text-left py-6 border-b border-[#E3E0D8]/60 transition-all duration-300 group cursor-pointer ${activeVibe === v.id ? 'pl-4' : 'hover:pl-2'
                }`}
            >
              {/* Vibe Clock Selector */}
              <div className={`px-4 py-2 text-[10px] font-mono tracking-widest font-extrabold uppercase rounded-full border transition-all duration-300 mr-5 mt-0.5 ${activeVibe === v.id
                ? 'border-[#ff6e00] bg-[#ff6e00]/10 text-[#ff6e00]'
                : 'border-[#E3E0D8] bg-transparent text-[#5A605C] group-hover:border-[#ff6e00]/60'
                }`}>
                {v.time}
              </div>

              {/* Text Blocks */}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h3 className={`font-sans text-xl font-bold uppercase tracking-tight transition-colors duration-300 ${activeVibe === v.id ? 'text-[#ff6e00]' : 'text-[#2D332F]/80 group-hover:text-[#2D332F]'
                    }`}>
                    {v.label}
                  </h3>
                </div>

                {/* Description - legible font-sans sizes */}
                <div className={`transition-all duration-500 overflow-hidden ${activeVibe === v.id ? 'max-h-36 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                  <p className="font-sans text-sm sm:text-base text-[#5A605C] leading-relaxed mb-3">
                    {v.description}
                  </p>
                  <p className="font-serif text-sm italic text-[#ff6e00]/90 border-l border-[#ff6e00]/40 pl-4 py-0.5">
                    "{v.quote}"
                  </p>
                </div>
              </div>
            </button>
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
            src={currentVibe.mainImg}
            alt={currentVibe.label}
            key={activeVibe}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-out animate-gentle-fade-in"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Floating Glass Coordinates Badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-2">
              Atmosphere
            </p>
            <p className="font-mono text-white text-sm font-semibold tracking-wide">
              {currentVibe.badgeText}
            </p>
            <p className="font-mono text-white text-sm font-semibold tracking-wide">
              {currentVibe.time}
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes gentleFadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-gentle-fade-in {
          animation: gentleFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
