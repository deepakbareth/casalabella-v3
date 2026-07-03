import React from 'react';
import { MapPin, Compass, UtensilsCrossed, Waves, Plane } from 'lucide-react';

export default function AboutLocation() {
  const whatsNearby = [
    { name: "Mundaca House", detail: "6 min walk - 0.6 km" },
    { name: "Garrafon Natural Reef Park", detail: "10 min walk - 0.8 km" },
    { name: "West Coast National Park", detail: "11 min walk - 1.0 km" },
    { name: "Crayola House", detail: "14 min walk - 1.2 km" },
    { name: "Parque de los Suenos", detail: "3 min drive - 2.1 km" }
  ];

  const restaurants = [
    { name: "Albatros Beach Club", detail: "10 min walk" },
    { name: "La Casa del Tikinxic", detail: "10 min walk" },
    { name: "Mar Bella", detail: "12 min walk" },
    { name: "Icebar", detail: "16 min walk" },
    { name: "Zaza Beach Club", detail: "19 min walk" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] text-[#2D332F] relative overflow-hidden">
      {/* Background visual texture */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-12 lg:mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block mb-3">
            Location Overview
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#2D332F] leading-none mb-6">
            About the neighborhood
          </h2>
          <p className="font-sans text-base text-[#5A605C] leading-relaxed">
            Located in Isla Mujeres, this vacation home is in the city center and on the waterfront. Isla Mujeres Ferry Terminal and Playa Mujeres Golf Club are worth checking out if an activity is on the agenda, while those in the mood for shopping can visit La Isla Shopping Mall and Cancun Mall. With jet skiing, kayaking, and scuba diving nearby, you'll find plenty of adventures in the water.
          </p>
        </div>

        {/* Layout: Map on left, Lists on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Map Column (6 columns) */}
          <div className="lg:col-span-6 h-[350px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden border border-[#E3E0D8] shadow-lg relative bg-[#e5e3df]">
            <iframe 
              src="https://maps.google.com/maps?q=21.2064,-86.7176&z=14&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Casa La Bella neighborhood map"
            ></iframe>
          </div>

          {/* Details Column (6 columns) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* What's Nearby list */}
              <div className="space-y-4">
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-[#2D332F] flex items-center gap-2 pb-2 border-b border-[#E3E0D8]">
                  <MapPin className="w-4 h-4 text-[#ff6e00]" /> What's Nearby
                </h3>
                <ul className="space-y-3">
                  {whatsNearby.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-baseline gap-4 text-xs font-semibold text-[#5A605C]">
                      <span className="text-[#2D332F] font-normal">{item.name}</span>
                      <span className="text-[10px] text-[#ff6e00] uppercase tracking-wider text-right flex-shrink-0">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Restaurants list */}
              <div className="space-y-4">
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-[#2D332F] flex items-center gap-2 pb-2 border-b border-[#E3E0D8]">
                  <UtensilsCrossed className="w-4 h-4 text-[#007979]" /> Restaurants
                </h3>
                <ul className="space-y-3">
                  {restaurants.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-baseline gap-4 text-xs font-semibold text-[#5A605C]">
                      <span className="text-[#2D332F] font-normal">{item.name}</span>
                      <span className="text-[10px] text-[#007979] uppercase tracking-wider text-right flex-shrink-0">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Getting Around */}
            <div className="pt-6 border-t border-[#E3E0D8] space-y-3">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-[#2D332F] flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#ff6e00]" /> Getting Around
              </h3>
              <div className="flex justify-between items-baseline text-xs font-semibold text-[#5A605C]">
                <span className="text-[#2D332F] font-normal">Cancun Intl. Airport (CUN)</span>
                <span className="text-[10px] text-[#ff6e00] uppercase tracking-wider">107 min drive</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 border-b border-[#E3E0D8] mx-6 sm:mx-12"></div>
    </section>
  );
}
