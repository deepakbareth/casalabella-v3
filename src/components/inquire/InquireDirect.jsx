import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function InquireDirect() {
  return (
    <div className="p-8 bg-white border border-[#E3E0D8] rounded-3xl shadow-sm space-y-6">
      <div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#ff6e00] font-extrabold block mb-2">Direct Channel</span>
        <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-[#2D332F]">
          Rick Cuny, Owner
        </h3>
        <p className="text-xs text-[#5A605C] leading-relaxed mt-2">
          Direct bookings bypass booking platform commission fees. Contact the owner directly for immediate reservations or rates.
        </p>
      </div>

      <div className="space-y-4">
        <a
          href="tel:+19703908874"
          className="flex items-center gap-4 group p-4 bg-[#F7F5F0]/60 hover:bg-[#E3E0D8]/45 rounded-full border border-[#E3E0D8]/40 hover:border-[#ff6e00] transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-white border border-[#E3E0D8] flex items-center justify-center text-[#ff6e00] group-hover:bg-[#ff6e00] group-hover:text-white transition-colors shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] text-[#8A908C] uppercase tracking-widest block font-extrabold">Call / Text Direct</span>
            <span className="text-sm font-sans text-[#2D332F] font-bold group-hover:text-[#ff6e00] transition-colors">+1 (970) 390-8874</span>
          </div>
        </a>

        <a
          href="mailto:vailcuny@gmail.com?subject=Casa La Bella Booking Inquiry"
          className="flex items-center gap-4 group p-4 bg-[#F7F5F0]/60 hover:bg-[#E3E0D8]/45 rounded-full border border-[#E3E0D8]/40 hover:border-[#ff6e00] transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-white border border-[#E3E0D8] flex items-center justify-center text-[#ff6e00] group-hover:bg-[#ff6e00] group-hover:text-white transition-colors shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[9px] text-[#8A908C] uppercase tracking-widest block font-extrabold">Email Direct</span>
            <span className="text-sm font-sans text-[#2D332F] font-bold group-hover:text-[#ff6e00] transition-colors truncate block">vailcuny@gmail.com</span>
          </div>
        </a>
      </div>
    </div>
  );
}
