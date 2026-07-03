import React from 'react';
import { ShieldCheck, Compass, Sparkles, Zap } from 'lucide-react';

export default function VillaOverview() {
  const highlights = [
    {
      icon: <Compass className="w-5 h-5 text-[#007979]" />,
      title: "3-Sided Ocean Exposure",
      desc: "Perched uniquely on a peninsula segment, offering unobstructed ocean views on three sides."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#ff6e00]" />,
      title: "Noble Finishes",
      desc: "Built to custom standards featuring imported marble flooring and rich granite surfaces throughout."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#007979]" />,
      title: "Full Power Backup",
      desc: "Equipped with a commercial full-house generator ensuring consistent electricity, air conditioning, and Starlink internet."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ff6e00]" />,
      title: "Privacy & Space",
      desc: "Includes a walled security layout, poolside patio for sunsets, and a rooftop sun-deck for sunrises."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] text-[#2D332F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Big Stats & Layout */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block mb-3">
                Estate Features
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#2D332F] leading-[1.05]">
                Built for <br />
                uncompromised <br />
                comfort.
              </h2>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#E3E0D8]/40 rounded-2xl border border-[#E3E0D8]">
                <span className="block font-sans text-4xl lg:text-5xl font-extrabold text-[#ff6e00] tracking-tight">4</span>
                <span className="text-sm uppercase tracking-widest text-[#5A605C] font-semibold mt-1 block">Bedrooms</span>
              </div>
              <div className="p-6 bg-[#E3E0D8]/40 rounded-2xl border border-[#E3E0D8]">
                <span className="block font-sans text-4xl lg:text-5xl font-extrabold text-[#ff6e00] tracking-tight">4.5</span>
                <span className="text-sm uppercase tracking-widest text-[#5A605C] font-semibold mt-1 block">Bathrooms</span>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Descriptions */}
          <div className="lg:col-span-7 space-y-8 lg:mt-4">
            <p className="font-sans text-[#5A605C] leading-relaxed text-base sm:text-lg">
              The finishes of the villa are impeccable with marble and granite throughout. Outside, the infinity pool creates a mirage of blue flowing water across the Caribbean to the coastline of Cancun. For complete peace of mind, the home includes a full house generator assuring that you will never be without power or internet, and our prices include all fees with no hidden fees.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E3E0D8] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#2D332F]">
                    {item.title}
                  </h4>
                  <p className="font-sans text-base text-[#5A605C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 border-b border-[#E3E0D8] mx-6 sm:mx-12"></div>
    </section>
  );
}
