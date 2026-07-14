import React from 'react';

// Light themed custom skeleton fallback for the Amenities page
export default function AmenitiesSkeleton() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased select-none">
      {/* Banner Area Placeholder */}
      <div className="w-full h-[35vh] sm:h-[45vh] bg-[#E3E0D8]/45 animate-pulse flex items-center justify-center border-b border-[#E3E0D8]">
        <div className="h-8 w-48 bg-[#E3E0D8]/80 rounded-lg animate-pulse"></div>
      </div>

      {/* Grid Content Placeholders */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 space-y-16">
        {/* Intro Text skeleton */}
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <div className="h-3 w-32 bg-[#E3E0D8]/60 rounded-full mx-auto animate-pulse"></div>
          <div className="h-8 w-64 bg-[#E3E0D8]/80 rounded-lg mx-auto animate-pulse"></div>
          <div className="h-4 w-96 bg-[#E3E0D8]/60 rounded-md mx-auto animate-pulse"></div>
        </div>

        {/* Tab switcher filter skeleton */}
        <div className="flex flex-wrap justify-center gap-3">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="w-28 h-10 bg-white border border-[#E3E0D8] rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Amenities grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="p-6 bg-white border border-[#E3E0D8] rounded-3xl space-y-4 shadow-sm animate-pulse">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E3E0D8]/40 shrink-0"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-2/3 bg-[#E3E0D8]/60 rounded"></div>
                  <div className="h-2 w-1/3 bg-[#E3E0D8]/40 rounded"></div>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <div className="h-3 w-full bg-[#E3E0D8]/30 rounded"></div>
                <div className="h-3 w-5/6 bg-[#E3E0D8]/30 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
