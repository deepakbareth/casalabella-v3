import React from 'react';
import { MapPin, Compass, ShieldAlert, Heart } from 'lucide-react';

export default function LocalExperience() {
  const attractions = [
    {
      icon: <MapPin className="w-5 h-5 text-[#ff6e00]" />,
      title: "Southern Tip (Punta Sur)",
      desc: "Perched on the highest cliffs in the Yucatan Peninsula, adjacent to the Punta Sur Ecological Park and ancient Mayan ruins."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#007979]" />,
      title: "Garrafon Reef Proximity",
      desc: "Within a 15-minute walk of Garrafon Natural Reef Park, offering exceptional snorkeling, kayaking, and coastal views."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#ff6e00]" />,
      title: "10 Minutes to Downtown",
      desc: "Enjoy quiet clifftop privacy. When you seek action, downtown shopping, dining, and beaches are just a 10-minute golf cart ride away."
    },
    {
      icon: <Heart className="w-5 h-5 text-[#007979]" />,
      title: "Local Charm & Safety",
      desc: "Isla Mujeres is known for its friendly residents, safe streets, and local independently-owned shops (no large commercial chains)."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F7F5F0] text-[#2D332F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block mb-3">
            Local Setting
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#2D332F] leading-none">
            The Magic of Punta Sur
          </h2>
          <p className="font-sans text-sm text-[#5A605C] leading-relaxed mt-4">
            Located on a quiet waterfront segment, Casa La Bella offers the rare combination of absolute tranquility on the clifftops and convenient access to local treasures.
          </p>
        </div>

        {/* Local Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-[#E3E0D8]/20 border border-[#E3E0D8] rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#E3E0D8] flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#2D332F]">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-[#5A605C] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
