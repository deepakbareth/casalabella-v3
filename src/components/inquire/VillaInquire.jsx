import React from 'react';
import InquireDirect from './InquireDirect';
import InquirePolicies from './InquirePolicies';
import InquireForm from './InquireForm';
import InquireLocation from './InquireLocation';

export default function VillaInquire() {
  return (
    <section className="py-20 bg-[#F7F5F0] text-[#2D332F] relative overflow-hidden">
      {/* Decorative background grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block">
            Booking & Contact
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#2D332F] leading-none">
            Plan Your <span className="text-[#ff6e00]">Vacation</span>
          </h2>
          <p className="font-sans text-base text-[#5A605C] leading-relaxed">
            Get in touch directly to secure your desired dates at Casa La Bella, arrange custom guest chef dinners, or seek travel guidance on Isla Mujeres.
          </p>
        </div>

        {/* Section 1: Contacts and Form Grid (Asymmetrical balanced layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Direct Channels & Policies */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <InquireDirect />
            <InquirePolicies />
          </div>

          {/* Right Column: Inquiry Form Panel */}
          <InquireForm />

        </div>

        {/* Section 2: Location Map Details (Full-width side-by-side component) */}
        <InquireLocation />

      </div>
    </section>
  );
}
