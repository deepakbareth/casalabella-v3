import React from 'react';
import { Check } from 'lucide-react';
import poolImg from '../../assets/gallery/g12.jpg';

export default function OutdoorsPool() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block mb-3">
                Outdoor Living
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#2D332F] leading-[1.05]">
                Clifftop Oasis & <br />
                <span className="text-[#ff6e00]">Infinity Pool</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#5A605C] leading-relaxed mt-4">
                Perched 50 feet above the ocean, the outdoor terraces merge absolute privacy with the breeze of Punta Sur. Relax poolside or take in views of the Cancun skyline across the bay.
              </p>
            </div>

            {/* Specs checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Private Infinity Pool", desc: "Mirage of blue water looking out to Cancun." },
                { name: "360° Rooftop Sky Deck", desc: "Observer deck for sunrises and starry nights." },
                { name: "Oceanfront Patio", desc: "Spacious patio dining overlooking the sea." },
                { name: "Stainless Gas Grill", desc: "Poolside BBQ setup for guest use." },
                { name: "Private Lounge Terraces", desc: "Glass-railed balconies on bedroom wings." },
                { name: "Golf Cart Parking", desc: "Driveway space with charging connections." },
                { name: "Strict No-Pets Policy", desc: "No pets allowed on the property." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#ff6e00] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase text-[#2D332F] tracking-wide">{item.name}</h4>
                    <p className="text-xs text-[#5A605C] leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-6 h-[40vh] sm:h-[50vh] lg:h-[60vh] relative p-4 sm:p-6 flex items-center justify-center">
            <div className="absolute top-0 right-0 w-5/6 h-full bg-[#E3E0D8]/45 rounded-3xl -z-10"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group">
              <img src={poolImg} alt="Infinity Pool" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">Ocean View</p>
                <p className="font-mono text-white text-xs font-semibold">50ft Elevation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-b border-[#E3E0D8] mx-6 sm:mx-12"></div>
    </section>
  );
}
