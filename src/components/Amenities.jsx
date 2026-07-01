import React, { useState } from 'react';
import { Waves, Sunrise, Sparkles, Wifi, Compass, UtensilsCrossed, Tv, Wind } from 'lucide-react';
import poolImg from '../assets/pool.jpg';
import bedImg from '../assets/bedsea.jpg';
import landscapeImg from '../assets/poolsea2.jpg';

export default function Amenities() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'comforts',
      badgeText: "AC & Linens",
      heading: "Everyday Luxury",
      desc: "Unparalleled hospitality details to make your stay private, warm, and completely seamless.",
      image: bedImg,
      badgeTitle: "Estate Interior",
      badgeSub1: "Fully Climate Controlled",
      badgeSub2: "Bedding & Linens Inc.",
      items: [
        {
          icon: <UtensilsCrossed className="w-5 h-5 text-[#E57A55]" />,
          title: "Chef's Kitchen & Grill",
          category: "Gastronomy",
          desc: "Fully equipped kitchen with gas stove, oven, dishwasher, coffee maker, and premium outdoor gas grill."
        },
        {
          icon: <Wind className="w-5 h-5 text-[#E57A55]" />,
          title: "Climate Control AC",
          category: "Comfort",
          desc: "Individually controlled modern AC units and ceiling fans inside every bedroom and living space."
        },
        {
          icon: <Sparkles className="w-5 h-5 text-[#E57A55]" />,
          title: "Laundry & Linens",
          category: "Comfort",
          desc: "In-unit washer & dryer, clean bath linens, pool towels, and bedding are fully provided."
        }
      ]
    },
    {
      id: 'outdoors',
      badgeText: "Pool & Outdoors",
      heading: "Clifftop Living",
      desc: "Designed to merge private leisure with the raw beauty of Punta Sur's coastal winds.",
      image: poolImg,
      badgeTitle: "Est. 2024",
      badgeSub1: "Horizon Infinity Pool",
      badgeSub2: "Isla Mujeres, MX",
      items: [
        {
          icon: <Waves className="w-5 h-5 text-[#E57A55]" />,
          title: "Oceanfront Infinity Pool",
          category: "Estate",
          desc: "Overlooking the turquoise ocean water, featuring sun-lounging beds, private patio seating, and direct oceanfront panoramas."
        },
        {
          icon: <Sunrise className="w-5 h-5 text-[#E57A55]" />,
          title: "Rooftop Observation Deck",
          category: "Outdoor",
          desc: "A custom observatory offering 360-degree clifftop views, perfect for watching sunrises and sunset colors."
        },
        {
          icon: <Compass className="w-5 h-5 text-[#E57A55]" />,
          title: "The Punta Sur Cliff Edge",
          category: "Geography",
          desc: "Perched on Punta Sur, the southern peninsula of Isla Mujeres, surrounded by deep blue water on three sides."
        }
      ]
    },
    {
      id: 'utilities',
      badgeText: "Starlink & IPTV",
      heading: "Connected Stay",
      desc: "High-speed communication and comprehensive global media library at your fingertips.",
      image: landscapeImg,
      badgeTitle: "Smart Estate",
      badgeSub1: "Starlink High-Speed Wi-Fi",
      badgeSub2: "1600+ IPTV Channels",
      items: [
        {
          icon: <Wifi className="w-5 h-5 text-[#E57A55]" />,
          title: "Starlink High-Speed Wi-Fi",
          category: "Utility",
          desc: "Ultra-fast Starlink wireless internet accessible throughout the villa, pool terrace, and rooftop deck."
        },
        {
          icon: <Tv className="w-5 h-5 text-[#E57A55]" />,
          title: "Premium 1600+ Channel TV",
          category: "Entertainment",
          desc: "Equipped with HBO, Showtime, global sports networks, and movie channels in the living spaces."
        }
      ]
    }
  ];

  const currentCat = categories[activeCategory];

  return (
    <section id="amenities" className="relative min-h-screen w-full flex flex-col lg:flex-row bg-[#F7F5F0] text-[#2D332F] overflow-hidden py-20 lg:py-24 px-5 border-t border-[#E3E0D8]">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      {/* Left Content Half - Text and Feature Selector */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 lg:py-0 z-10">

        {/* Category Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#E3E0D8] rounded-full w-max mb-8 transition-transform hover:-translate-y-1 duration-300 cursor-default">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E57A55] animate-pulse"></span>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#5A605C]">
            Exceptional Living
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-sans text-5xl sm:text-6xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.85] mb-8">
          Luxury Without <br />
          <span className="text-[#E57A55]">Compromise</span>
        </h2>

        {/* Blury Rounded Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 backdrop-blur-md border cursor-pointer ${activeCategory === idx
                ? 'bg-[#E57A55]/90 text-white border-[#E57A55] shadow-lg shadow-[#E57A55]/20 hover:bg-[#E57A55]'
                : 'bg-[#E3E0D8]/40 hover:bg-[#E3E0D8]/70 text-[#2D332F] border-[#E3E0D8]/60'
                }`}
            >
              {cat.badgeText}
            </button>
          ))}
        </div>

        {/* Active Category Meta */}
        <div className="mb-8">
          <h3 className="font-sans text-xs uppercase tracking-[0.35em] text-[#E57A55] font-extrabold mb-2">
            {currentCat.heading}
          </h3>
          <p className="font-sans text-base sm:text-lg text-[#5A605C] leading-relaxed max-w-xl">
            {currentCat.desc}
          </p>
        </div>

        {/* Features List */}
        <div className="flex flex-col w-full border-t border-[#E3E0D8] pt-2">
          {currentCat.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start text-left py-6 border-b border-[#E3E0D8]/60 transition-all duration-300 group"
            >
              {/* Icon Accent */}
              <div className="p-2.5 rounded-full border border-[#E3E0D8] bg-transparent group-hover:border-[#E57A55]/60 transition-all duration-300 mr-5 mt-0.5 shrink-0">
                {item.icon}
              </div>

              {/* Text Blocks */}
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h4 className="font-sans text-lg font-bold uppercase tracking-tight text-[#2D332F] group-hover:text-[#E57A55] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <span className="text-[9px] uppercase tracking-widest text-[#8A908C] font-extrabold">
                    {item.category}
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-[#5A605C] leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Right Image Half */}
      <div className="w-full lg:w-[45%] h-[60vh] lg:h-screen relative p-4 lg:p-8 flex items-center justify-center">

        {/* Background panel to anchor image on desktop */}
        <div className="hidden lg:block absolute top-0 right-0 w-3/4 h-full bg-[#2D332F]"></div>

        {/* Framed Image Card */}
        <div className="relative w-full h-full lg:h-[90%] rounded-2xl overflow-hidden shadow-2xl z-10 group">
          <img
            src={currentCat.image}
            alt={currentCat.badgeText}
            key={activeCategory}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-out animate-gentle-fade-in"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Floating Glass Coordinates Badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-2">
              {currentCat.badgeTitle}
            </p>
            <p className="font-mono text-white text-sm font-semibold tracking-wide">
              {currentCat.badgeSub1}
            </p>
            <p className="font-mono text-white text-sm font-semibold tracking-wide">
              {currentCat.badgeSub2}
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes gentleFadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-gentle-fade-in {
          animation: gentleFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
