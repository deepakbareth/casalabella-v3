import React from 'react';
import { Clock, Ban, Zap, UserCheck } from 'lucide-react';

export default function InquirePolicies() {
  return (
    <div className="p-8 bg-white border border-[#E3E0D8] rounded-3xl shadow-sm space-y-6">
      <div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#ff6e00] font-extrabold block mb-2">House Rules</span>
        <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-[#2D332F]">
          Booking Policies
        </h3>
      </div>
      <div className="space-y-5">
        {[
          { name: "Check-In & Check-Out", desc: "Check-in time: 4:00 PM. Check-out time: 11:00 AM.", icon: <Clock className="w-4 h-4 text-[#ff6e00]" /> },
          { name: "Strictly No Pets", desc: "No pets of any kind are allowed on the villa premises.", icon: <Ban className="w-4 h-4 text-[#ff6e00]" /> },
          { name: "Cummins Power Security", desc: "Commercial backup generator keeps entire house powered.", icon: <Zap className="w-4 h-4 text-[#ff6e00]" /> },
          { name: "Primary Renter Age Limit", desc: "Enforced guest age suitability guidelines apply.", icon: <UserCheck className="w-4 h-4 text-[#ff6e00]" /> }
        ].map((policy, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#FFF0E4]/70 border border-[#E3E0D8]/60 flex items-center justify-center shrink-0 mt-0.5">
              {policy.icon}
            </div>
            <div className="space-y-0.5">
              <h4 className="font-sans font-bold text-xs uppercase text-[#2D332F] tracking-wide">{policy.name}</h4>
              <p className="text-xs text-[#5A605C] leading-normal">{policy.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
