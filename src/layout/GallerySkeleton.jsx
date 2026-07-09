import React from 'react';

// Light grid-based photo catalog placeholder for the Gallery page
export default function GallerySkeleton() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased select-none">
      {/* Banner Area Placeholder */}
      <div className="w-full h-[35vh] sm:h-[45vh] bg-[#E3E0D8]/45 animate-pulse flex items-center justify-center border-b border-[#E3E0D8]">
        <div className="h-8 w-44 bg-[#E3E0D8]/80 rounded-lg animate-pulse"></div>
      </div>

      {/* Grid Content Placeholders */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <div className="h-3 w-32 bg-[#E3E0D8]/60 rounded-full mx-auto animate-pulse"></div>
          <div className="h-8 w-64 bg-[#E3E0D8]/80 rounded-lg mx-auto animate-pulse"></div>
          <div className="h-4 w-96 bg-[#E3E0D8]/60 rounded-md mx-auto animate-pulse"></div>
        </div>

        {/* Gallery Pill filter skeleton */}
        <div className="flex justify-center">
          <div className="w-80 h-12 bg-white border border-[#E3E0D8] rounded-full animate-pulse"></div>
        </div>

        {/* Gallery card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="p-2 bg-white border border-[#E3E0D8] rounded-3xl space-y-3 shadow-sm">
              <div className="aspect-[4/3] rounded-2xl bg-[#E3E0D8]/30 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
