import React from 'react';
import viewImg from '../assets/pool.jpg';

export default function ViewHighlight() {
  return (
    <section className="py-14 bg-[#F8F7F4] relative flex items-center justify-center overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 sm:px-12 w-full">
        <div className="relative flex flex-col lg:flex-row items-center justify-center">

          {/* Main View Image - Cinematic Aspect Ratio */}
          <div className="w-full lg:w-[85%] relative aspect-[4/3] lg:aspect-[21/9] overflow-hidden group">
            <img
              src={viewImg}
              alt="Ocean view from Casa La Bella"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Elegant Floating Text Block */}
          <div className="w-[90%] lg:w-[45%] bg-white p-12 sm:p-16 border border-[#E7E4E0] shadow-2xl shadow-black/5 z-10 
                          -mt-20 lg:-mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 
                          flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-[#947B6A]">

            <span className="text-[#947B6A] text-xs font-medium tracking-[0.2em] uppercase mb-6 block">
              Uninterrupted Vistas
            </span>

            <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] leading-[1.2] mb-8">
              The view from your room... <br />
              <span className="italic font-light text-[#737373]">wake up to paradise.</span>
            </h2>

            {/* Elegant Divider */}
            <div className="w-12 h-[1px] bg-[#C1B5A8] mb-8"></div>

            {/* Modern Animated CTA Button */}
            <a
              href="#inquire"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white bg-[#1A1A1A] overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-[#947B6A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative">Book Now</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}