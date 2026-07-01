import React from 'react';
import { BedDouble, Bath, Compass, Waves } from 'lucide-react';
import pool from "../assets/house.jpg"

export default function Overview() {
  const specs = [
    {
      icon: <BedDouble className="w-5 h-5 text-choco-900 stroke-[1]" />,
      title: "4 Bedrooms",
      desc: "3 Oceanfront Master Suites with private balconies, plus a 4th room adjacent to the kitchen."
    },
    {
      icon: <Bath className="w-5 h-5 text-choco-900 stroke-[1]" />,
      title: "4 Bathrooms",
      desc: "Private en-suite bathroom inside every bedroom, plus a convenient main-floor powder room."
    },
    {
      icon: <Compass className="w-5 h-5 text-choco-900 stroke-[1]" />,
      title: "Punta Sur Location",
      desc: "Perched on a rare coastal cliff edge surrounded by turquoise waters on three sides."
    },
    {
      icon: <Waves className="w-5 h-5 text-choco-900 stroke-[1]" />,
      title: "Infinity Pool",
      desc: "A private oceanfront infinity pool that merges seamlessly with the Caribbean horizon."
    }
  ];

  return (
    <section id="villa" className="py-24 lg:py-40 bg-choco-50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Intro Grid */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">

          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-choco-600 font-medium mb-8">
              The Sanctuary
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-choco-900 font-bold leading-tight tracking-wide mb-10">
              More than just a stay, it's your <span className="italic">oceanside home</span>
            </h2>

            <div className="h-[1px] w-12 bg-choco-900 mb-10"></div>

            <p className="font-serif text-xl text-choco-700 font-light leading-relaxed mb-8">
              Perched on the stunning cliffs of Punta Sur in Isla Mujeres, Casa La Bella offers an unparalleled vacation experience. With views of the sea from almost every angle, wake up to spectacular sunrises and unwind to majestic ocean sunsets.
            </p>

            <p className="font-serif text-xl text-choco-600 font-light leading-relaxed">
              Four elegant bedrooms, including three master suites, comfortably accommodate up to 8 guests.
            </p>
          </div>

          <div className="lg:col-span-7">
            {/* Raw Borderless Image */}
            <div className="relative aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-choco-100">
              <img
                src={pool}
                alt="Casa La Bella balcony view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Minimal Architectural Specs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {specs.map((spec, index) => (
            <div key={index} className="flex flex-col group border-t border-choco-200/60 pt-8 transition-colors hover:border-choco-900">
              <div className="flex items-center gap-4 mb-6">
                <div className="opacity-70 transition-opacity group-hover:opacity-100">
                  {spec.icon}
                </div>
                <h3 className="font-serif text-xl tracking-[0.1em] font-bold text-choco-900">
                  {spec.title}
                </h3>
              </div>
              <p className="font-serif text-xl font-light leading-relaxed text-choco-600">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
