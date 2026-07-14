import React from 'react';
import { Compass, MapPin, ExternalLink } from 'lucide-react';

export default function InquireLocation() {
  return (
    <div className="p-8 bg-white border border-[#E3E0D8] rounded-3xl shadow-sm space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-12 items-center">
      
      {/* Left Details (5 columns) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FFF0E4]/70 border border-[#E3E0D8] flex items-center justify-center text-[#ff6e00]">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#ff6e00] font-extrabold block">Location</span>
            <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-[#2D332F]">
              Punta Sur Clifftops
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#5A605C] leading-relaxed">
          Casa La Bella sits perched 50 feet above the Caribbean ocean on the quiet southern tip of Isla Mujeres. Wake up to spectacular sunrises and watch the Cancun high-rise hotel line glow 7 miles away across the water.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-[#5A605C]">
            <MapPin className="w-4 h-4 text-[#ff6e00]" />
            <span>Carretera Garrafon, Punta Sur, Isla Mujeres, MX</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#5A605C]">
            <MapPin className="w-4 h-4 text-[#ff6e00]" />
            <span>Walking distance to Garrafon Reef Snorkeling Park</span>
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=Casa+La+Bella+Isla+Mujeres"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#E3E0D8] hover:border-[#ff6e00] text-xs font-extrabold uppercase tracking-widest text-[#2D332F] rounded-full transition-all duration-300 hover:bg-[#F7F5F0]"
        >
          Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Right Map Embed (7 columns) */}
      <div className="lg:col-span-7 h-[350px] rounded-2xl overflow-hidden border border-[#E3E0D8] relative">
        <iframe
          title="Casa La Bella Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14346.883713009772!2d-86.71887309999998!3d21.196924299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c3bf5fcf214b7%3A0xc3910c660601f01c!2sCasa%20La%20Bella!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}
