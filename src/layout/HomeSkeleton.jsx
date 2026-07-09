import React from 'react';

// Dark premium placeholder layout for the homepage
export default function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-[#2D332F] text-[#F7F5F0] antialiased select-none flex flex-col justify-between p-8 sm:p-16 lg:p-24 relative overflow-hidden">
      {/* Abstract background pulse */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Top Spacer to align with Navbar */}
      <div className="h-16"></div>

      {/* Hero Area */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 relative z-10 w-full max-w-7xl mx-auto my-auto">
        {/* Left Text Column */}
        <div className="space-y-6 w-full lg:w-2/3">
          {/* Location badge skeleton */}
          <div className="h-8 w-44 bg-white/10 rounded-full animate-pulse border border-white/20"></div>
          
          {/* Massive Heading skeleton */}
          <div className="space-y-3">
            <div className="h-12 sm:h-16 w-11/12 bg-white/15 rounded-xl animate-pulse"></div>
            <div className="h-12 sm:h-16 w-10/12 bg-white/15 rounded-xl animate-pulse"></div>
            <div className="h-12 sm:h-16 w-8/12 bg-white/15 rounded-xl animate-pulse"></div>
            <div className="h-12 sm:h-16 w-5/12 bg-[#ff6e00]/20 rounded-xl animate-pulse"></div>
          </div>

          {/* Description skeleton */}
          <div className="space-y-2 border-l-2 border-[#ff6e00]/40 pl-6 max-w-xl">
            <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Right Action Column */}
        <div className="w-full lg:w-96 p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl animate-pulse space-y-4">
          <div className="h-4 w-24 bg-white/20 rounded"></div>
          <div className="h-12 w-full bg-white/10 rounded-lg"></div>
          <div className="h-12 w-full bg-[#ff6e00]/25 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
