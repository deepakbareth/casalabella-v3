import React from 'react';
import { Compass, MapPin, Sunset, Navigation } from 'lucide-react';
import seaImg from '../../assets/testimonials.jpg';

export default function LocationExperience() {
  const localAttractions = [
    {
      title: "Mayan Temple Ruins",
      distance: "5 min walk",
      desc: "Historic temple structure dedicated to Ixchel, the Mayan goddess of fertility and moon, perched at the cliff tip."
    },
    {
      title: "Sculpture Garden",
      distance: "6 min walk",
      desc: "An outdoor contemporary art path running along the rugged sea cliffs of Punta Sur."
    },
    {
      title: "Garrafon Reef Park",
      distance: "3 min drive",
      desc: "Recreational reef snorkeling, kayaking, and coastal zip-lines adjacent to the estate."
    }
  ];

  return (
    <section id="location" className="py-24 lg:py-40 bg-brand-cream border-t border-brand-peach/40 relative overflow-hidden">
      {/* Background grid line effects */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 pointer-events-none opacity-[0.03]">
        <div className="border-r border-brand-teal-deep h-full" />
        <div className="border-r border-brand-teal-deep h-full" />
        <div className="border-r border-brand-teal-deep h-full" />
        <div className="h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.45em] text-brand-teal-deep font-semibold mb-6 block">
            The Location Experience
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-light leading-tight">
            Perched at the edge of <br />
            <span className="italic font-normal text-brand-teal-deep">Punta Sur.</span>
          </h2>
        </div>

        {/* Layout: Split Columns */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column: Styled Editorial Map / Visual Card (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between relative">
            
            {/* The Visual Showcase Card */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-brand-peach bg-[#e5e3df] shadow-md group">
              <img
                src={seaImg}
                alt="Turquoise sea surrounding Punta Sur cliffs"
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-[#121314]/15 group-hover:bg-[#121314]/25 transition-colors pointer-events-none" />
              
              {/* Overlapping Map Interface Tag */}
              <div className="absolute top-6 left-6 z-10 glass-panel p-4 rounded-sm border border-white/20 flex items-center gap-3">
                <Navigation className="w-4 h-4 text-brand-teal-deep animate-pulse" />
                <div className="text-[9px] uppercase tracking-widest text-brand-charcoal font-bold">
                  Isla Mujeres Peninsula
                </div>
              </div>

              {/* Coordinates Tag */}
              <div className="absolute bottom-6 right-6 z-10 glass-panel px-4 py-2 rounded-sm border border-white/20">
                <span className="text-[9px] tracking-widest text-brand-charcoal/60 font-semibold block uppercase">Compass Bearing</span>
                <span className="text-[10px] tracking-widest text-brand-charcoal font-bold">120° Southeast Ridge</span>
              </div>
            </div>

            {/* Location highlight overlay blocks */}
            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-teal-deep shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg text-brand-charcoal font-semibold mb-1">Clifftop Promontory</h4>
                  <p className="font-sans text-sm sm:text-base text-brand-charcoal/80 font-normal leading-relaxed">
                    Perched at the southern-most tip of Mexico, capturing the first sunlight in the country.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Sunset className="w-5 h-5 text-brand-teal-deep shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg text-brand-charcoal font-semibold mb-1">Sunset Deck Elevation</h4>
                  <p className="font-sans text-sm sm:text-base text-brand-charcoal/80 font-normal leading-relaxed">
                    Custom rooftop vantage point mapping out vistas extending to the Cancun skyline.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Local Attractions Log (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center border-l border-brand-peach pl-8 lg:pl-12">
            <h3 className="text-xs uppercase tracking-[0.3em] text-brand-teal-deep font-bold mb-10">
              Punta Sur Highlights
            </h3>

            <div className="space-y-12">
              {localAttractions.map((attraction, idx) => (
                <div key={idx} className="group border-b border-brand-peach/60 pb-8 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-baseline mb-3">
                    <h4 className="font-serif text-xl text-brand-charcoal group-hover:text-brand-teal-deep transition-colors duration-300">
                      {attraction.title}
                    </h4>
                    <span className="text-[9px] tracking-widest text-brand-teal-deep uppercase font-bold bg-brand-cream border border-brand-peach px-2 py-0.5 rounded-full">
                      {attraction.distance}
                    </span>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-brand-charcoal/80 font-normal leading-relaxed">
                    {attraction.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Elegant Map link CTA */}
            <div className="mt-12">
              <a
                href="https://maps.google.com/?q=Punta+Sur+Isla+Mujeres"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-charcoal hover:text-brand-teal-deep transition-colors group"
              >
                <Compass className="w-4 h-4 text-brand-teal-deep group-hover:rotate-45 transition-transform duration-500" />
                Open Google Maps Location
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
