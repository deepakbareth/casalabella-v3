import React, { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import houseImg from '../assets/house.jpg';

// Vite helper to dynamically load all images in the gallery folder
const galleryModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,PNG,JPEG,JPG}', { eager: true });
const allGalleryImages = Object.values(galleryModules).map(mod => mod.default || mod);

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  useEffect(() => {
    setImages(allGalleryImages);
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, images]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, images.length));
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased overflow-x-hidden">
      <main>
        {/* Page Banner */}
        <PageBanner title="Photo Gallery" bgImage={houseImg} heightClass="h-[30vh] sm:h-[45vh]" />

        {/* Gallery Section */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-12 relative">
          {/* Background visual texture */}
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
            <div className="border-r border-[#2D332F] h-full" />
            <div className="border-r border-[#2D332F] h-full" />
            <div className="border-r border-[#2D332F] h-full" />
            <div className="h-full" />
          </div>

          <div className="relative z-10 space-y-12">

            {/* Header copy */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00]">
                Explore the Property
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#2D332F] leading-none">
                Casa La Bella in Pictures
              </h2>
              <p className="font-sans text-base text-[#5A605C] leading-relaxed">
                Take a visual tour around our clifftop paradise. Explore the sweeping oceanfront views, luxury master suites, private infinity pool, and pristine coastal setting.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.slice(0, visibleCount).map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E3E0D8] shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 bg-[#E3E0D8]/30"
                >
                  <img
                    src={imgUrl}
                    alt={`Casa La Bella Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < images.length && (
              <div className="text-center pt-8">
                <button
                  onClick={loadMore}
                  className="px-8 py-3.5 bg-[#2D332F] text-white font-sans text-xs uppercase tracking-widest font-extrabold rounded-full hover:bg-[#ff6e00] transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Load More Photos ({images.length - visibleCount} remaining)
                </button>
              </div>
            )}

          </div>
        </section>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col justify-between p-4 transition-all duration-300 animate-fade-in"
          >
            {/* Lightbox Header / Controls */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-2 z-50">
              <span className="font-sans text-xs font-bold text-white/60 tracking-wider">
                Photo {activeImageIndex + 1} of {images.length}
              </span>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image View */}
            <div className="relative flex items-center justify-center flex-grow max-w-5xl mx-auto w-full px-4">

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Central Image container */}
              <div className="max-h-[75vh] w-full flex items-center justify-center overflow-hidden">
                <img
                  src={images[activeImageIndex]}
                  alt="Casa La Bella Fullscreen View"
                  className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl select-none"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>



          </div>
        )}

      </main>
    </div>
  );
}
