import React, { useState } from 'react';
import { BedDouble, Bath, Compass, Waves } from 'lucide-react';
import poolImg from '../assets/pool.jpg';
import bedImg from '../assets/bedsea.jpg';
import landscapeImg from '../assets/poolsea2.jpg';

export default function VillaHighlights() {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      icon: <Waves className="w-5 h-5 text-[#ff6e00]" />,
      title: "Infinity Pool",
      subtitle: "Infinite Horizon",
      desc: "An oceanfront infinity pool that merges seamlessly with the turquoise Caribbean horizon, featuring private lounging sunbeds.",
      image: poolImg,
      badgeText: "Horizon Pool"
    },
    {
      icon: <Compass className="w-5 h-5 text-[#ff6e00]" />,
      title: "Punta Sur Cliffs",
      subtitle: "Dramatic Vistas",
      desc: "Perched on a rare coastal cliff edge, surrounded by turquoise waters on three sides, offering dramatic 360-degree ocean views.",
      image: landscapeImg,
      badgeText: "Cliff Vistas"
    },
    {
      icon: <BedDouble className="w-5 h-5 text-[#ff6e00]" />,
      title: "Oceanfront Suites",
      subtitle: "3 Master Bedrooms",
      desc: "Wake up to ocean waves in one of the 3 oceanfront master suites, each featuring its own private sea-facing balcony.",
      image: bedImg,
      badgeText: "Master Suites"
    },
    {
      icon: <Bath className="w-5 h-5 text-[#ff6e00]" />,
      title: "En-Suite Bathrooms",
      subtitle: "Private Retreats",
      desc: "Every bedroom is equipped with a private en-suite bathroom, alongside a main floor powder room for day guests.",
      image: poolImg, // fallback/estate preview
      badgeText: "En-Suite"
    }
  ];

  return (
    <section id="highlights" className="relative min-h-screen w-full flex flex-col lg:flex-row bg-[#F7F5F0] text-[#2D332F] overflow-hidden py-20 lg:py-24 px-5">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      {/* Left Content Half - Text and Feature Selector */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 lg:py-0 z-10">

        {/* Category Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#E3E0D8] rounded-full w-max mb-8 transition-transform hover:-translate-y-1 duration-300 cursor-default">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6e00] animate-pulse"></span>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#5A605C]">
            Villa Composition
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-sans text-5xl sm:text-6xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.85] mb-8">
          Refined <br />
          <span className="text-[#ff6e00]">Details</span>
        </h2>

        {/* Feature Interactive List */}
        <div className="flex flex-col w-full border-t border-[#E3E0D8] mt-4">
          {highlights.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-start text-left py-6 border-b border-[#E3E0D8]/60 transition-all duration-300 group cursor-pointer ${activeTab === idx ? 'pl-4' : 'hover:pl-2'
                }`}
            >
              {/* Icon Accent */}
              <div className={`p-2.5 rounded-full border transition-all duration-300 mr-5 mt-0.5 ${activeTab === idx
                  ? 'border-[#ff6e00] bg-[#ff6e00]/10'
                  : 'border-[#E3E0D8] bg-transparent group-hover:border-[#ff6e00]/60'
                }`}>
                {item.icon}
              </div>

              {/* Text Blocks */}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h3 className={`font-sans text-xl font-bold uppercase tracking-tight transition-colors duration-300 ${activeTab === idx ? 'text-[#ff6e00]' : 'text-[#2D332F]/80 group-hover:text-[#2D332F]'
                    }`}>
                    {item.title}
                  </h3>
                  <span className="text-[9px] uppercase tracking-widest text-[#8A908C] font-extrabold">
                    {item.subtitle}
                  </span>
                </div>

                {/* Description - legible font-sans sizes */}
                <p className={`font-sans text-sm sm:text-base text-[#5A605C] transition-all duration-500 overflow-hidden leading-relaxed ${activeTab === idx ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                  {item.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Right Image Half */}
      <div className="w-full lg:w-[45%] h-[60vh] lg:h-screen relative p-4 lg:p-8 flex items-center justify-center">

        {/* Background panel to anchor image on desktop */}
        <div className="hidden lg:block absolute top-0 right-0 w-3/4 h-full bg-[#2D332F]"></div>

        {/* Framed Image Card */}
        <div className="relative w-full h-full lg:h-[90%] rounded-2xl overflow-hidden shadow-2xl z-10 group">
          <img
            src={highlights[activeTab].image}
            alt={highlights[activeTab].title}
            key={activeTab}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-out animate-gentle-fade-in"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Floating Glass Coordinates Badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-2">
              Estate Details
            </p>
            <p className="font-mono text-white text-sm font-semibold tracking-wide">
              {highlights[activeTab].badgeText}
            </p>
            <p className="font-mono text-white text-sm font-semibold tracking-wide">
              Casa La Bella
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