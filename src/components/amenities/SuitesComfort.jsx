import React from 'react';
import { Check } from 'lucide-react';
import bedImg from '../../assets/gallery/g31.jpg';

export default function SuitesComfort() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Image Card */}
          <div className="lg:col-span-6 h-[40vh] sm:h-[50vh] lg:h-[60vh] relative p-4 sm:p-6 flex items-center justify-center order-last lg:order-first">
            <div className="absolute top-0 left-0 w-5/6 h-full bg-[#E3E0D8]/45 rounded-3xl -z-10"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group">
              <img src={bedImg} alt="Master Bedroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">Accommodations</p>
                <p className="font-mono text-white text-xs font-semibold">Sleeps 8 Guests</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block mb-3">
                Interior & Comfort
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#2D332F] leading-[1.05]">
                Sleeping <br />
                <span className="text-[#ff6e00]">Sanctuaries</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#5A605C] leading-relaxed mt-4">
                The villa is configured with three primary King master wings that open onto private oceanfront balconies, plus a fourth quiet room.
              </p>
            </div>

            {/* Specs checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "3 King Master Suites", desc: "Private en-suite baths and sunrise balconies." },
                { name: "4.5 Bathrooms", desc: "Finished with floor-to-ceiling natural marble." },
                { name: "Hair Dryer & Ironing", desc: "In-villa hair dryer, iron, and ironing board." },
                { name: "Toiletries & Soaps", desc: "Basic soaps and starter toilet paper provided." },
                { name: "Linens & Towels Inc.", desc: "All bath, bed, and pool towels provided." },
                { name: "Mid-week Changes", desc: "Change of sheets available for a small fee if desired." },
                { name: "Climate Control AC", desc: "Separate room controls plus ceiling fans." },
                { name: "No Fireplace / Wood Stove", desc: "No fireplace or wood stove inside the villa." }
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

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-b border-[#E3E0D8] mx-6 sm:mx-12"></div>
    </section>
  );
}
