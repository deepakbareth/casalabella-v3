import React from 'react';
import { Mail, Phone, Compass, ArrowUp } from 'lucide-react';
import Logo from "../assets/pbw.png";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#112828] border-t border-white/5 text-[#FFF0E4]/60 py-12 lg:py-16 relative overflow-hidden">
      {/* Decorative layout line */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.02] pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.02] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start mb-12">

          {/* Logo & Brand Column */}
          <div className="flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <Compass className="w-5 h-5 text-[#24B1B1] group-hover:rotate-180 transition-transform duration-700" />
              <span className="font-sans text-xl tracking-[0.2em] text-[#FFF0E4] font-bold uppercase">
                Casa La Bella
              </span>
            </a>
            <p className="font-sans text-sm text-[#FFF0E4]/60 font-normal max-w-xs leading-relaxed">
              An architectural clifftop sanctuary perched on the southern peninsula of Isla Mujeres, framing endless Caribbean horizons.
            </p>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FFF0E4]/80 font-bold mb-1">Connect</span>
            <a
              href="mailto:vailcuny@gmail.com?subject=Interested in Booking Casa La Bella"
              className="text-sm font-sans text-[#FFF0E4]/80 hover:text-[#24B1B1] transition-colors flex items-center gap-3 group"
            >
              <Mail className="w-4 h-4 text-[#24B1B1]" />
              <span>vailcuny@gmail.com</span>
            </a>
            <a
              href="tel:+19703908874"
              className="text-sm font-sans text-[#FFF0E4]/80 hover:text-[#24B1B1] transition-colors flex items-center gap-3 group"
            >
              <Phone className="w-4 h-4 text-[#24B1B1]" />
              <span>1-970-390-8874</span>
            </a>
          </div>

          {/* Socials & Top Scroll Column */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FFF0E4]/80 font-bold">Follow the Journey</span>
            <div className="flex items-center gap-4">
              <a
                href="http://instagram.com/casalabellapuntasur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#24B1B1]/50 hover:bg-[#24B1B1]/10 text-[#24B1B1] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <span className="text-xs tracking-widest text-[#FFF0E4]/60 font-semibold">@casalabellapuntasur</span>
            </div>

            {/* Scroll back to top button */}
            <button
              onClick={handleScrollTop}
              className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#FFF0E4]/60 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 text-[#24B1B1] animate-bounce" />
              <span>Back To Top</span>
            </button>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-white/10 my-6" />

        {/* Copyrights */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-[#FFF0E4]/50 font-medium">
          <span className="text-center sm:text-left">&copy; {new Date().getFullYear()} Casa La Bella Mexico. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <span className="text-[#FFF0E4]/50 transition-colors">Powered by</span>
            <a href="https://premiumbusinesswebsites.com/" ><img src={Logo} alt="" className='w-40' /></a>
          </span>
        </div>

      </div>
    </footer>
  );
}