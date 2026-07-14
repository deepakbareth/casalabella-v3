import React from 'react';
import { 
  Zap, Wifi, Tv, WashingMachine, ShieldCheck, PhoneCall, Music, Baby, BookOpen, Disc
} from 'lucide-react';

export default function SystemsSafety() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block">
            Systems & Safety
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#2D332F] leading-none">
            Villa Utilities & Safety
          </h2>
          <p className="font-sans text-base text-[#5A605C] leading-relaxed">
            Equipped with heavy commercial systems to ensure that your clifftop vacation remains fully connected, secure, and powered.
          </p>
        </div>

        {/* Staggered features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Cummins Power Generator",
              icon: <Zap className="w-6 h-6 text-[#ff6e00]" />,
              desc: "A commercial-grade full-house backup generator that runs entire AC, water, and internet when the island grid cuts out."
            },
            {
              title: "Starlink High-Speed Wi-Fi",
              icon: <Wifi className="w-6 h-6 text-[#007979]" />,
              desc: "High-speed wireless satellite connection accessible inside the villa, observation deck, and pool area."
            },
            {
              title: "Apple TV & Smart TV",
              icon: <Tv className="w-6 h-6 text-[#ff6e00]" />,
              desc: "Flat-screen TV equipped with Apple TV module (simply bring your Netflix or streaming passwords)."
            },
            {
              title: "Washing Machine & Dryer",
              icon: <WashingMachine className="w-6 h-6 text-[#007979]" />,
              desc: "Full-size laundry appliances. The clothes dryer is conveniently located in the garage room."
            },
            {
              title: "Villa Secure Safes",
              icon: <ShieldCheck className="w-6 h-6 text-[#ff6e00]" />,
              desc: "Deadbolt security doors, external perimeter lighting, and in-room digital safe for passports and valuables."
            },
            {
              title: "In-Villa Phone Landline",
              icon: <PhoneCall className="w-6 h-6 text-[#007979]" />,
              desc: "Landline phone connectivity. Direct number for guest coordination: 011-52-1-998-999-0118."
            },
            {
              title: "iPod Kitchen Stereo",
              icon: <Music className="w-6 h-6 text-[#ff6e00]" />,
              desc: "Bring your phone or iPod; we have a kitchen stereo unit you can use inside and out."
            },
            {
              title: "Baby Travel Crib",
              icon: <Baby className="w-6 h-6 text-[#007979]" />,
              desc: "Travel crib/pack-and-play is available for families traveling with toddlers."
            },
            {
              title: "Guest Books Library",
              icon: <BookOpen className="w-6 h-6 text-[#ff6e00]" />,
              desc: "A custom shelf of books left behind by previous guests for vacation reading."
            },
            {
              title: "Satellite TV & DVD Player",
              icon: <Disc className="w-6 h-6 text-[#007979]" />,
              desc: "Satellite/cable connection, DVD player, video library, and a physical music library."
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="p-8 bg-[#E3E0D8]/30 border border-[#E3E0D8] rounded-3xl space-y-4 hover:bg-[#E3E0D8]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FFF0E4]/70 border border-[#E3E0D8] flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="font-sans font-black text-base uppercase text-[#2D332F] tracking-tight">{item.title}</h4>
              <p className="text-sm text-[#5A605C] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Safety Checklist footer */}
        <div className="p-6 bg-[#E3E0D8]/20 border border-[#E3E0D8]/60 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {[
            { label: "Smoke Detector", val: "Yes" },
            { label: "First Aid Kit", val: "Kitchen Drawer" },
            { label: "Fire Extinguisher", val: "Yes" },
            { label: "Carbon Monoxide", val: "Not Reported" }
          ].map((safety, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <p className="text-[9px] uppercase tracking-widest text-[#8A908C] font-extrabold">{safety.label}</p>
              <p className="text-xs font-sans font-bold text-[#2D332F]">{safety.val}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 border-b border-[#E3E0D8] mx-6 sm:mx-12"></div>
    </section>
  );
}
