import React, { useState } from 'react';
import { Play, X, Eye } from 'lucide-react';

export default function VirtualTour() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="tour" className="relative py-24 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#bae6fd_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Title */}
        <span className="text-xs uppercase tracking-[0.3em] text-sky-blue-600 font-bold mb-3 block">
          Cinematic Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-choco-900 font-light leading-tight tracking-wide mb-6">
          Step Inside <span className="italic text-sky-blue-600">Paradise</span>
        </h2>
        <div className="h-[2px] w-12 bg-sky-blue-400 mx-auto mb-8"></div>
        <p className="font-sans text-sm sm:text-base text-choco-600 font-light max-w-xl mx-auto mb-16 leading-relaxed">
          Embark on a virtual journey through the open-concept living spaces, infinity pool terraces, and oceanside suites of Casa La Bella.
        </p>

        {/* Video Thumbnail Trigger Card */}
        <div className="max-w-4xl mx-auto relative group">
          {/* Card Border frame */}
          <div className="absolute -inset-2.5 border border-sky-blue-200/20 rounded-sm transition-all duration-500 group-hover:border-sky-blue-400/40 pointer-events-none"></div>
          
          <div className="relative overflow-hidden aspect-[16/9] rounded-sm shadow-md cursor-pointer bg-choco-50" onClick={() => setIsPlaying(true)}>
            {/* Thumbnail Image */}
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80" 
              alt="Video Tour Thumbnail" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103 brightness-95 group-hover:brightness-[0.85]"
            />
            
            {/* Play Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 group-hover:bg-black/40 transition-colors">
              <div className="relative flex items-center justify-center">
                {/* Ripple Animations */}
                <div className="absolute w-24 h-24 bg-sky-blue-400/30 rounded-full animate-ping pointer-events-none"></div>
                <div className="absolute w-16 h-16 bg-sky-blue-500/40 rounded-full animate-pulse pointer-events-none"></div>
                
                {/* Real button */}
                <button className="w-16 h-16 bg-gradient-to-r from-sky-blue-500 to-sky-blue-600 group-hover:from-sky-blue-400 group-hover:to-sky-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-sky-blue-500/25 transition-all duration-300 transform group-hover:scale-110">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </button>
              </div>
              <span className="mt-6 text-xs uppercase tracking-[0.25em] text-white font-bold flex items-center gap-2 drop-shadow-sm">
                <Eye className="w-4 h-4 text-sky-blue-200" /> Watch Video Tour (2:15)
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Overlay */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(false)}></div>
          
          <div className="relative w-full max-w-5xl aspect-[16/9] bg-black rounded-sm overflow-hidden shadow-2xl z-10 border border-choco-900/10">
            {/* Close Button */}
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 p-2 bg-choco-50 text-choco-900 hover:text-sky-blue-600 rounded-full border border-choco-200 transition-all hover:rotate-90 z-20"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Video Iframe */}
            <iframe 
              src="https://www.youtube.com/embed/peD5K29ZpXQ?autoplay=1" 
              title="Casa La Bella Video Tour"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
