import React from 'react';
import { MapPin, Info } from 'lucide-react';

export default function LocalActivities() {
  const activities = [
    "Snorkeling (Garrafon Park walking distance)", "Scuba Diving", "Sailing & Boating", 
    "Jet Skiing", "Kayaking & Windsurfing", "Whale Watching (Seasonal)", 
    "Wildlife Viewing", "Deep Sea Fishing", "Local Shopping & Dining (10 mins to Downtown)"
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block">
            Local Guide
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#2D332F] leading-none">
            Punta Sur Activities
          </h2>
          <p className="font-sans text-base text-[#5A605C] leading-relaxed">
            Located on the clifftops of Punta Sur, within walking distance of Garrafon Reef Park and 10 minutes from the vibrant downtown.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-4 px-6 py-4 bg-white/40 border border-[#E3E0D8]/45 rounded-2xl"
            >
              <MapPin className="w-5 h-5 text-[#ff6e00] shrink-0" />
              <span className="text-sm font-sans font-semibold text-[#5A605C]">{act}</span>
            </div>
          ))}
        </div>

        {/* Guidebook banner notice */}
        <div className="p-8 bg-[#E3E0D8]/30 border border-[#E3E0D8] rounded-3xl flex flex-col md:flex-row items-center gap-6 mt-8">
          <Info className="w-10 h-10 text-[#ff6e00] shrink-0" />
          <div className="space-y-1">
            <h4 className="font-sans font-bold text-sm uppercase text-[#2D332F] tracking-wide">
              Excursion Attachment Guide
            </h4>
            <p className="text-sm text-[#5A605C] leading-relaxed">
              When you book your stay at Casa La Bella, Rick will send you a detailed guidebook attachment covering all the top snorkeling spots, restaurants, and golf cart travel tips on the island.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
