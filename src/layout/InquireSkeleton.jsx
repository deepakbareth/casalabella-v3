import React from 'react';

export default function InquireSkeleton() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased select-none">
      {/* Banner skeleton */}
      <div className="w-full h-[30vh] sm:h-[70vh] bg-[#E3E0D8]/45 relative animate-pulse flex items-center justify-center">
        <div className="h-10 w-60 bg-[#E3E0D8] rounded-md"></div>
      </div>

      {/* Grid columns skeleton */}
      <div className="py-20 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 animate-pulse">
        {/* Left Column (5 columns) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="h-[250px] bg-[#E3E0D8]/45 rounded-3xl"></div>
          <div className="h-[300px] bg-[#E3E0D8]/30 rounded-3xl"></div>
        </div>

        {/* Right Column (7 columns) */}
        <div className="lg:col-span-7 h-[500px] bg-[#E3E0D8]/45 rounded-3xl"></div>
      </div>
    </div>
  );
}
