import React from 'react';
import image from '../../assets/banner3.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] lg:min-h-0 lg:h-screen w-full flex flex-col justify-end overflow-hidden bg-[#2D332F]">

      {/* Edge-to-Edge Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={image}
          alt="Casa La Bella Exterior"
          className="w-full h-full object-cover animate-slow-zoom scale-100"
        />
      </div>

      {/* Broad Gradient Overlays for Text Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#121413] via-[#2D332F]/60 lg:via-[#2D332F]/50 to-transparent opacity-60 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#121413]/80 via-[#121413]/40 lg:via-transparent to-transparent opacity-70 pointer-events-none" />

      {/* Main Content Container - Broad Bottom Layout */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-12 lg:px-16 pt-28 lg:pt-0 pb-6 sm:pb-12 lg:pb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 h-full lg:h-auto mt-auto">

        {/* Left Side: Massive Typography & Context */}
        <div className="flex flex-col items-start max-w-4xl w-full">

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 lg:gap-3 px-4 py-2 lg:px-5 lg:py-2.5 backdrop-blur-md bg-white/10 border border-white/20 rounded-full w-max mb-5 lg:mb-8 transition-transform hover:-translate-y-1 duration-300 cursor-default">
            <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#ff6e00] animate-pulse shadow-[0_0_12px_#ff6e00]"></span>
            <span className="text-[9px] lg:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F7F5F0]">
              Isla Mujeres, Mexico
            </span>
          </div>

          {/* Heavy Broad Heading */}
          <h1 className="font-sans text-5xl sm:text-7xl lg:text-[130px] font-black uppercase tracking-tighter leading-[0.95] lg:leading-[0.85] text-[#F7F5F0] mb-5 lg:mb-8">
            Casa <br />
            <span className="text-[#ff6e00]">La Bella</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-xl text-[#F7F5F0]/80 font-medium leading-relaxed max-w-lg border-l-2 border-[#ff6e00] pl-4 lg:pl-6">
            Experience the ultimate coastal escape. Perched on the majestic cliffs of Punta Sur, where bold modern architecture meets the endless Caribbean sea.
          </p>

        </div>

        {/* Right Side: Metadata & Action Container */}
        <div className="flex flex-col items-start lg:items-end w-full lg:w-auto mt-2 lg:mt-0">

          {/* Glassmorphism Data Grid */}
          <div className="grid grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-4 lg:gap-y-6 backdrop-blur-[4px]  bg-white/10 lg:bg-white/5 border border-white/10 p-6 lg:p-8 rounded-2xl mb-4 lg:mb-8 w-full sm:w-auto shadow-2xl lg:shadow-none">
            <div>
              <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-[#F7F5F0]/60 lg:text-[#F7F5F0]/50 mb-1">Elevation</p>
              <p className="font-mono text-[#F7F5F0] text-xs lg:text-sm font-semibold tracking-tight">14m / 45ft</p>
            </div>
            <div>
              <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-[#F7F5F0]/60 lg:text-[#F7F5F0]/50 mb-1">Sanctuary</p>
              <p className="font-mono text-[#F7F5F0] text-xs lg:text-sm font-semibold tracking-tight">Clifftop</p>
            </div>
            <div className="col-span-2 border-t border-white/20 lg:border-white/10 pt-4 lg:pt-6">
              <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-[#F7F5F0]/60 lg:text-[#F7F5F0]/50 mb-1">GPS Coordinates</p>
              <p className="font-mono text-[#F7F5F0] text-xs lg:text-sm font-semibold tracking-wide">
                21.2064° N, 86.7176° W
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full sm:w-auto px-6 lg:px-10 py-4 lg:py-5 bg-[#ff6e00] text-[#F7F5F0] text-[11px] lg:text-xs font-black uppercase tracking-[0.2em] hover:bg-[#F7F5F0] hover:text-[#2D332F] transition-colors duration-300 rounded-md lg:rounded-sm">
            Reserve the Estate
          </button>

        </div>

      </div>
    </section>
  );
}
