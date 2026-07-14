import React from 'react';

export default function ReviewsSkeleton() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased select-none">
      {/* Banner Area Skeleton */}
      <div className="w-full h-[30vh] sm:h-[70vh] bg-[#E3E0D8]/45 relative animate-pulse flex items-center justify-center">
        <div className="h-10 w-60 bg-[#E3E0D8] rounded-md"></div>
      </div>

      {/* Main Page Content Skeleton */}
      <div className="py-20 max-w-7xl mx-auto px-6 sm:px-12 space-y-8 animate-pulse">
        <div className="h-10 w-96 bg-[#E3E0D8]/60 rounded-xl mx-auto"></div>
        <div className="h-4 w-[600px] max-w-full bg-[#E3E0D8]/40 rounded mx-auto"></div>
      </div>
    </div>
  );
}
