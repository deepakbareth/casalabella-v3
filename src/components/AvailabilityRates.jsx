import React from 'react';
import { Calendar, ShieldCheck, UserCheck, Star } from 'lucide-react';

export default function AvailabilityRates() {
  const policies = [
    {
      icon: <UserCheck className="w-5 h-5 text-[#E57A55]" />,
      title: "Maximum Occupancy",
      desc: "Accommodates up to 8 guests comfortably across 4 en-suite bedrooms."
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#E57A55]" />,
      title: "Minimum Stay",
      desc: "5-night minimum stay is required to preserve the quality of the estate sanctuary."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E57A55]" />,
      title: "Flexible Cancellation",
      desc: "100% full refund if cancellation notice is provided 30+ days prior to check-in date."
    }
  ];

  const calendarDays = Array.from({ length: 30 }, (_, i) => ({
    dayNum: i + 1,
    status: i % 7 === 2 || i % 7 === 3 || i === 12 || i === 13 ? 'booked' : 'available'
  }));

  return (
    <section id="rates" className="py-14 lg:py-20 bg-[#F7F5F0] text-[#2D332F] border-t border-[#E3E0D8] relative">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Header Block */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#E3E0D8] rounded-full w-max mb-8 transition-transform hover:-translate-y-1 duration-300 cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E57A55] animate-pulse"></span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#5A605C]">
                Availability & Rates
              </span>
            </div>
            <h2 className="font-sans text-5xl sm:text-6xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Plan Your <br />
              <span className="text-[#E57A55]">Retreat</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end shrink-0">
            <span className="text-xs uppercase tracking-widest text-[#8A908C] mb-1 font-bold">Rates Start At</span>
            <span className="font-sans text-4xl sm:text-5xl lg:text-6xl text-[#2D332F] font-black uppercase tracking-tighter leading-none">
              $685 <span className="text-sm font-sans text-[#5A605C] lowercase tracking-normal font-normal">/ night</span>
            </span>
          </div>
        </div>

        {/* Layout: Pricing Sheets vs Stylized Calendar Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

          {/* Left Column: Guidelines & Policies (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-10">
              {policies.map((policy, idx) => (
                <div key={idx} className="flex gap-5 group border-b border-[#E3E0D8]/60 pb-8 last:border-b-0 last:pb-0">
                  <div className="p-3 bg-white border border-[#E3E0D8] group-hover:border-[#E57A55] transition-colors duration-300 rounded-full shrink-0">
                    {policy.icon}
                  </div>
                  <div>
                    <h4 className="font-sans text-lg font-bold uppercase tracking-tight text-[#2D332F] mb-1">
                      {policy.title}
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-[#5A605C] leading-relaxed">
                      {policy.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Booking Guarantee Card */}
            <div className="mt-12 p-8 border border-[#E3E0D8] bg-white rounded-2xl hover:border-[#E57A55] transition-all duration-500 shadow-sm group">
              <div className="flex items-center gap-2.5 mb-3 text-[#E57A55]">
                <Star className="w-4 h-4 fill-current animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-extrabold">Direct Benefits</span>
              </div>
              <h5 className="font-sans text-base font-bold uppercase tracking-tight text-[#2D332F] mb-2">Book Direct with Owner</h5>
              <p className="font-sans text-sm sm:text-base text-[#5A605C] leading-relaxed">
                By booking directly with owner Rick Cuny, you skip extra third-party service fees and secure custom check-in assistance.
              </p>
            </div>
          </div>

          {/* Right Column: High-End Stylized Visual Planner Calendar (7 columns) */}
          <div className="lg:col-span-7 bg-white border border-[#E3E0D8] p-8 sm:p-12 flex flex-col justify-between shadow-sm hover:border-[#E57A55] rounded-2xl transition-colors duration-700">
            <div>
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-[#E3E0D8]/60">
                <div>
                  <h4 className="font-sans text-xl font-bold uppercase tracking-tight text-[#2D332F]">Seasonal Overview</h4>
                  <span className="text-[9px] uppercase tracking-widest text-[#8A908C] font-extrabold">Next 30 Days</span>
                </div>
                <div className="flex gap-4 text-[9px] uppercase tracking-widest font-extrabold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-[#E3E0D8]/40 rounded-full"></span>
                    <span className="text-[#8A908C]">Booked</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-[#007979]/20 rounded-full border border-[#007979]/40"></span>
                    <span className="text-[#007979]">Available</span>
                  </div>
                </div>
              </div>

              {/* Day Grid Matrix */}
              <div className="grid grid-cols-7 gap-3 sm:gap-4 text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                  <span key={idx} className="text-[9px] tracking-widest font-extrabold text-[#8A908C] uppercase mb-2">
                    {day}
                  </span>
                ))}
                {calendarDays.map((day) => (
                  <div
                    key={day.dayNum}
                    className={`aspect-square flex items-center justify-center text-xs font-bold rounded-full border transition-all duration-300 ${day.status === 'booked'
                        ? 'bg-[#E3E0D8]/20 border-transparent text-[#2D332F]/30 line-through cursor-not-allowed'
                        : 'bg-[#007979]/5 border-[#007979]/20 text-[#007979] hover:bg-[#24B1B1] hover:text-[#F7F5F0] hover:border-[#24B1B1] cursor-pointer'
                      }`}
                  >
                    {day.dayNum}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E3E0D8]/60 text-[10px] text-[#8A908C] font-sans font-normal leading-relaxed">
              * Calendar is for visual concept purposes. Real-time dates will be confirmed by owner Rick Cuny within 24 hours of form inquiry below.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
