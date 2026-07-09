import React from 'react';

// Light editorial content style placeholder for the About page
export default function AboutSkeleton() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased select-none">
      {/* Banner Area */}
      <div className="w-full h-[35vh] sm:h-[45vh] bg-[#E3E0D8]/45 animate-pulse flex items-center justify-center border-b border-[#E3E0D8]">
        <div className="h-10 w-36 bg-[#E3E0D8]/80 rounded-lg animate-pulse"></div>
      </div>

      {/* Intro Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="h-4 w-28 bg-[#E3E0D8]/80 rounded animate-pulse"></div>
          <div className="h-10 w-3/4 bg-[#E3E0D8]/80 rounded-lg animate-pulse"></div>
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full bg-[#E3E0D8]/40 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-[#E3E0D8]/40 rounded animate-pulse"></div>
            <div className="h-4 w-4/5 bg-[#E3E0D8]/40 rounded animate-pulse"></div>
          </div>
        </div>
        {/* Right Highlight Card */}
        <div className="lg:col-span-5 p-8 bg-white border border-[#E3E0D8] rounded-3xl space-y-6 animate-pulse shadow-sm">
          <div className="h-6 w-32 bg-[#E3E0D8]/80 rounded"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-16 bg-[#E3E0D8]/30 rounded-xl"></div>
            <div className="h-16 bg-[#E3E0D8]/30 rounded-xl"></div>
          </div>
          <div className="h-12 bg-[#2D332F]/10 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
