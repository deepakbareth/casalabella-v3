import React from 'react';
import { Bed, Bath, Compass, UserCheck } from 'lucide-react';

export default function BedroomsBathrooms() {
  const suites = [
    {
      title: "Oceanfront Master Suite I",
      features: ["King Bed", "Private En-Suite Bathroom", "Sunrise Balcony", "Walk-in Closet"],
      details: "Located on the upper level, offering elevated panoramic views of the turquoise reef and coastline."
    },
    {
      title: "Oceanfront Master Suite II",
      features: ["King Bed", "Private En-Suite Bathroom", "Direct Terrace Access", "Sitting Area"],
      details: "Opens directly onto the main pool deck, providing seamless transition from sleep to sunbathing."
    },
    {
      title: "Oceanfront Master Suite III",
      features: ["King Bed", "Private En-Suite Bathroom", "Private Sunset Balcony", "Panoramic Windows"],
      details: "Positioned to capture both the sea breeze and the dramatic evening lights of Cancun across the bay."
    },
    {
      title: "Garden & Kitchen Suite IV",
      features: ["Double/King Bed", "Private Bathroom", "Proximity to Kitchen", "Quiet Garden View"],
      details: "Located on the ground level, offering quick access to amenities. Ideal for teenagers, staff, or guests seeking privacy."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] text-[#2D332F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block mb-3">
            Accommodations
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#2D332F] leading-none">
            Sleeping Sanctuaries
          </h2>
          <p className="font-sans text-base text-[#5A605C] leading-relaxed mt-4">
            The estate includes four fully air-conditioned guest suites. The layout ensures maximum acoustic and visual privacy, with three principal master wings enjoying dedicated balconies facing the sea.
          </p>
        </div>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {suites.map((suite, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#E3E0D8]/30 rounded-3xl border border-[#E3E0D8] transition-all duration-300 hover:bg-[#E3E0D8]/50 hover:-translate-y-1"
            >
              <h3 className="font-sans font-black text-lg uppercase tracking-tight text-[#2D332F] mb-3">
                {suite.title}
              </h3>
              <p className="font-sans text-base text-[#5A605C] leading-relaxed mb-6">
                {suite.details}
              </p>

              {/* Specs tags list */}
              <div className="flex flex-wrap gap-2">
                {suite.features.map((feat, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFF0E4]/60 border border-[#E3E0D8] rounded-full text-xs font-semibold text-[#5A605C] tracking-wide"
                  >
                    {feat.includes("Bed") && <Bed className="w-4 h-4 text-[#ff6e00]" />}
                    {feat.includes("Bath") && <Bath className="w-4 h-4 text-[#007979]" />}
                    {feat.includes("Terrace") || feat.includes("Balcony") || feat.includes("Access") ? <Compass className="w-4 h-4 text-[#007979]" /> : null}
                    {!feat.includes("Bed") && !feat.includes("Bath") && !feat.includes("Terrace") && !feat.includes("Balcony") && !feat.includes("Access") && <UserCheck className="w-4 h-4 text-[#ff6e00]" />}
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 border-b border-[#E3E0D8] mx-6 sm:mx-12"></div>
    </section>
  );
}
