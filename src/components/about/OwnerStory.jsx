import React from 'react';
import { Mail, Phone, CalendarCheck } from 'lucide-react';

export default function OwnerStory() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] text-[#2D332F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Vision & Host Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block mb-3">
                Original Owner
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#2D332F] leading-none">
                Crafted by Rick Cuny
              </h2>
            </div>
            
            <p className="font-sans text-sm text-[#5A605C] leading-relaxed">
              Rick Cuny (based in Vail, Colorado) designed and co-built Casa La Bella in 2003 alongside two close friends. Over the years, Rick became the sole proprietor and has personally directed every upgrade—from modern architectural revamps to installing the commercial back-up generator system and Starlink connectivity.
            </p>

            {/* Direct Booking Promo Badge */}
            <div className="p-6 bg-[#ff6e00]/10 border border-[#ff6e00]/20 rounded-2xl">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#ff6e00] mb-2">
                Book Directly & Save
              </h4>
              <p className="font-sans text-xs text-[#5A605C] leading-relaxed">
                By booking directly through Rick, guests bypass third-party service fees and enjoy flexible reservation terms.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Contacts */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-sans font-black text-lg uppercase tracking-tight text-[#2D332F]">
                A "User-Friendly" Sanctuary
              </h3>
              <p className="font-sans text-sm text-[#5A605C] leading-relaxed">
                Rick’s philosophy has always been to make the estate as user-friendly and reliable as a five-star resort, while preserving the soul of a private coastal home. Guests deal directly with Rick during the inquiry and booking process, ensuring complete clarity and personalized attention for every stay.
              </p>
            </div>

            {/* Direct Channels list */}
            <div className="space-y-4 pt-4 border-t border-[#E3E0D8]">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#2D332F] mb-4">
                Connect Directly with Rick
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="tel:+19703908874" 
                  className="flex items-center gap-4 p-4 bg-[#E3E0D8]/20 border border-[#E3E0D8] rounded-xl transition-colors hover:bg-[#E3E0D8]/40"
                >
                  <div className="w-10 h-10 rounded-full bg-[#007979]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#007979]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#8A908C]">Phone & Text</span>
                    <span className="text-xs font-semibold text-[#2D332F]">+1-970-390-8874</span>
                  </div>
                </a>

                <a 
                  href="mailto:vailcuny@gmail.com" 
                  className="flex items-center gap-4 p-4 bg-[#E3E0D8]/20 border border-[#E3E0D8] rounded-xl transition-colors hover:bg-[#E3E0D8]/40"
                >
                  <div className="w-10 h-10 rounded-full bg-[#ff6e00]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#ff6e00]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#8A908C]">Email Address</span>
                    <span className="text-xs font-semibold text-[#2D332F]">vailcuny@gmail.com</span>
                  </div>
                </a>
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
