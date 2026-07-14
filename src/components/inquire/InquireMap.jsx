import React from 'react';
import { Compass } from 'lucide-react';

export default function InquireMap() {
  return (
    <div className="p-4 bg-white border border-[#E3E0D8] rounded-3xl shadow-sm space-y-4">
      <div className="flex items-center gap-2.5 px-2">
        <Compass className="w-5 h-5 text-[#ff6e00]" />
        <div>
          <h4 className="font-sans font-bold text-xs uppercase text-[#2D332F] tracking-wide">Punta Sur Location</h4>
          <p className="text-[10px] text-[#8A908C]">Carretera Garrafon, Isla Mujeres, MX</p>
        </div>
      </div>
      <div className="h-[250px] w-full rounded-2xl overflow-hidden border border-[#E3E0D8]">
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
