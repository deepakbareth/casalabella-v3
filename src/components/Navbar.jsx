import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Settings, User, Bell } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('The Villa');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ['The Villa', 'Highlights', 'Gallery', 'Amenities', 'Location', 'Reviews'];

  // Handle scroll detection for dynamic pill backgrounds
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Header (Always transparent container) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">

          {/* Left: Brand Logo Box */}
          <div className={`pointer-events-auto px-4 py-2 lg:px-5 lg:py-2 lg:pr-8 rounded-xl sm:rounded-2xl flex-shrink-0 flex items-center transition-all duration-500 ${scrolled
            ? 'bg-[#FFF0E4] shadow-md'
            : 'bg-black/40 backdrop-blur-md '
            }`}>
            <a href="#" className={`font-serif italic text-2xl sm:text-3xl  font-bold  whitespace-nowrap normal-case ${scrolled ? 'text-black' : 'text-white'
              }`}>
              Casa <span className="text-[#ff6e00]" >La Bella</span>
            </a>
          </div>

          {/* Center: Main Pill Navigation (Desktop) */}
          <nav className={`hidden lg:flex items-center p-1.5 rounded-full pointer-events-auto transition-all duration-500 ${scrolled
            ? 'bg-[#FFF0E4] shadow-xl'
            : 'bg-black/40 backdrop-blur-md '
            }`}>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveTab(link)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === link
                  ? (scrolled ? 'bg-[#112828] text-[#FFF0E4] shadow-md' : 'bg-white/20 text-white shadow-md')
                  : (scrolled ? 'text-[#112828]/60 hover:text-[#112828] hover:bg-black/5' : 'text-white/100 hover:text-white hover:bg-white/10')
                  }`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Right: Actions / Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 pl-8 pointer-events-auto">
            {/* Setting / Inquire Pill */}
            <button className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${scrolled
              ? 'bg-[#FFF0E4] text-[#112828] hover:bg-white shadow-lg'
              : 'bg-black/40 backdrop-blur-md text-white '
              }`}>
              <Settings className={`w-4 h-4 transition-colors duration-500 ${scrolled ? 'text-[#112828]/70' : 'text-white/70'}`} />
              Inquire
            </button>

            {/* Phone Circle */}
            <button className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-500 ${scrolled
              ? 'bg-[#FFF0E4] text-[#112828] hover:bg-white shadow-lg'
              : 'bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-white/20'
              }`}>
              <Phone className={`w-4 h-4 transition-colors duration-500 ${scrolled ? 'text-[#112828]/70' : 'text-white/70'}`} />
            </button>

            {/* Profile Circle */}
            <button className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-500 ${scrolled
              ? 'bg-[#FFF0E4] text-[#112828] hover:bg-white shadow-lg'
              : 'bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-white/20'
              }`}>
              <User className={`w-4 h-4 transition-colors duration-500 ${scrolled ? 'text-[#112828]/70' : 'text-white/70'}`} />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden pointer-events-auto flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full active:scale-95 transition-all duration-500 ${scrolled
                ? 'bg-[#FFF0E4] text-[#112828] shadow-lg'
                : 'bg-black/40 backdrop-blur-md text-white border border-white/10'
                }`}
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#112828] z-40 transition-all duration-500 flex flex-col justify-center px-6 sm:px-8 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        {/* Adjusted Close Button for Mobile placement */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#FFF0E4] text-[#112828] flex items-center justify-center rounded-full shadow-lg active:scale-95 transition-transform"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <nav className="flex flex-col gap-3 sm:gap-4 max-w-sm mx-auto w-full mt-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActiveTab(link);
                setIsOpen(false);
              }}
              className={`px-5 py-3 sm:px-6 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 text-center ${activeTab === link
                ? 'bg-[#FFF0E4] text-[#112828]'
                : 'text-[#FFF0E4]/60 border border-[#FFF0E4]/20 hover:text-[#FFF0E4]'
                }`}
            >
              {link}
            </button>
          ))}

          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#ff6e00] text-[#FFF0E4] px-4 py-3 sm:px-6 sm:py-4 rounded-full text-sm sm:text-base font-medium active:scale-95 transition-transform">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" /> Inquire
            </button>
            <button className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-[#FFF0E4]/10 text-[#FFF0E4] flex items-center justify-center rounded-full border border-[#FFF0E4]/20 active:scale-95 transition-transform">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}