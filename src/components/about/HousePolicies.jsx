import React from 'react';
import { ShieldAlert, Check, X, Clock, HelpCircle, ShieldCheck } from 'lucide-react';

export default function HousePolicies() {
  const rules = [
    { text: "Minimum age to rent: 21", allowed: true },
    { text: "Children allowed: ages 0-17", allowed: true },
    { text: "No events allowed", allowed: false },
    { text: "No pets allowed", allowed: false },
    { text: "Smoking is not permitted", allowed: false }
  ];

  const importantInfos = [
    "Extra-person charges may apply and vary depending on property policy",
    "Government-issued photo identification and a deposit may be required at check-in for incidental charges",
    "Special requests are subject to availability upon check-in and cannot be guaranteed",
    "Onsite parties or group events are strictly prohibited",
    "Safety features at this property include a fire extinguisher, a first aid kit, a deadbolt lock, and a smoke detector"
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] text-[#2D332F] relative overflow-hidden">
      {/* Background visual texture */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00] block mb-3">
            Stay Guidelines
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#2D332F] leading-none">
            Rules & Policies
          </h2>
          <p className="font-sans text-base text-[#5A605C] leading-relaxed mt-4">
            Please review the house rules and important stay policies to ensure a comfortable and seamless experience at Casa La Bella.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: House Rules (5 columns) */}
          <div className="lg:col-span-5 p-8 bg-[#E3E0D8]/20 border border-[#E3E0D8] rounded-3xl flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-[#2D332F] pb-4 border-b border-[#E3E0D8]">
                House Rules
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3 text-sm text-[#5A605C]">
                  <Clock className="w-5 h-5 text-[#ff6e00] flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-[#2D332F]">Flexible check-in / check-out</span>
                    <span className="text-xs">Contact host in advance to arrange arrival details.</span>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  {rules.map((rule, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-[#5A605C]">
                      {rule.allowed ? (
                        <Check className="w-5 h-5 text-[#007979] flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-[#ff6e00] flex-shrink-0" />
                      )}
                      <span>{rule.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E3E0D8] text-xs text-[#5A605C] italic">
              For special circumstances contact the owner regarding cancellations.
            </div>
          </div>

          {/* Right Column: Damage & Important Info (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Damage and incidentals */}
            <div className="p-8 bg-[#E3E0D8]/20 border border-[#E3E0D8] rounded-3xl">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-[#2D332F] pb-4 border-b border-[#E3E0D8] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#ff6e00]" /> Damage and incidentals
              </h3>
              <p className="font-sans text-sm text-[#5A605C] leading-relaxed mt-4">
                You will be responsible for any damage to the rental property caused by you or your party during your stay.
              </p>
            </div>

            {/* Important information */}
            <div className="p-8 bg-[#E3E0D8]/20 border border-[#E3E0D8] rounded-3xl flex-grow">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-[#2D332F] pb-4 border-b border-[#E3E0D8] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#007979]" /> Important information
              </h3>
              
              <ul className="space-y-3 mt-4">
                {importantInfos.map((info, idx) => (
                  <li key={idx} className="flex gap-3 text-xs text-[#5A605C] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6e00] mt-1.5 flex-shrink-0"></span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
