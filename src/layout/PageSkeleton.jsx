import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PageSkeleton() {
  const location = useLocation();
  const path = location.pathname;

  // 1. HOME PAGE SKELETON (Dark Hero style)
  if (path === '/') {
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

          {/* Right Action Selector Column */}
          <div className="w-full lg:w-96 p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl animate-pulse space-y-4">
            <div className="h-4 w-24 bg-white/20 rounded"></div>
            <div className="h-12 w-full bg-white/10 rounded-lg"></div>
            <div className="h-12 w-full bg-[#ff6e00]/25 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  // 2. ABOUT PAGE SKELETON (Editorial Content Style)
  if (path === '/about') {
    return (
      <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased select-none">
        {/* Banner Area */}
        <div className="w-full h-[35vh] sm:h-[45vh] bg-[#E3E0D8]/45 animate-pulse flex items-center justify-center border-b border-[#E3E0D8]">
          <div className="h-10 w-36 bg-[#E3E0D8]/80 rounded-lg animate-pulse"></div>
        </div>

        {/* About Intro Content Skeleton */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="h-4 w-28 bg-[#E3E0D8]/80 rounded animate-pulse"></div>
            <div className="h-10 w-3/4 bg-[#E3E0D8]/80 rounded-lg animate-pulse"></div>
            <div className="space-y-3 pt-4">
              <div className="h-4 w-full bg-[#E3E0D8]/40 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-[#E3E0D8]/40 rounded animate-pulse"></div>
              <div className="h-4 w-4/5 bg-[#E3E0D8]/40 rounded animate-pulse"></div>
            </div>
          </div>
          {/* Right Floating Highlight Card */}
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

  // 3. GALLERY PAGE / DEFAULT SKELETON (Grid-based photo list)
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
