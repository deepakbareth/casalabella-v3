import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Layers } from 'lucide-react';

// Vite helper to dynamically load and sort all images in the gallery folder numerically (g1 - g49)
const galleryModules = import.meta.glob('../../assets/gallery/*.{png,jpg,jpeg,PNG,JPEG,JPG}', { eager: true });
const allGalleryImages = Object.keys(galleryModules)
  .map(key => {
    const match = key.match(/g(\d+)\./i);
    const num = match ? parseInt(match[1], 10) : 999;
    return { num, src: galleryModules[key].default || galleryModules[key] };
  })
  .sort((a, b) => a.num - b.num);

// Helper list of actual numerical filename numbers that represent exterior shots
const exteriorIndices = [1, 2, 3, 4, 5, 8, 9, 10, 12, 20, 34, 44, 45, 46, 48, 49];

export default function VillaGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const thumbnailContainerRef = useRef(null);

  // Load all images and categorize them
  useEffect(() => {
    const mapped = allGalleryImages.map((imgObj, index) => {
      const isExterior = exteriorIndices.includes(imgObj.num);
      return {
        id: index,
        src: imgObj.src,
        category: isExterior ? 'exterior' : 'interior',
        alt: `Casa La Bella View ${imgObj.num}`
      };
    });
    setImages(mapped);
  }, []);

  // Handle filtering
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === activeCategory));
    }
    setVisibleCount(12); // Reset count on filter change
  }, [activeCategory, images]);

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredImages]);

  // Center active thumbnail in lightbox strip
  useEffect(() => {
    if (activeImageIndex !== null && thumbnailContainerRef.current) {
      const activeBtn = thumbnailContainerRef.current.children[activeImageIndex];
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeImageIndex]);

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filteredImages.length));
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-12 relative">
      {/* Decorative vertical grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      <div className="relative z-10 space-y-16">

        {/* Head copy */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E3E0D8] rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6e00]">
            <Layers className="w-3.5 h-3.5" />
            Media Gallery
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#2D332F] leading-none">
            Casa La Bella <span className="text-[#ff6e00]">Gallery</span>
          </h2>
          <p className="font-sans text-base text-[#5A605C] leading-relaxed max-w-2xl mx-auto">
            Take a visual tour around our clifftop paradise. Explore the sweeping oceanfront views, luxury master suites, private infinity pool, and pristine coastal setting.
          </p>
        </div>

        {/* Filter Navigation Menu */}
        <div className="flex justify-center">
          <div className="inline-flex items-center p-1.5 bg-white/70 backdrop-blur-md border border-[#E3E0D8] rounded-full shadow-sm">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'exterior', label: 'Exterior & Pools' },
              { id: 'interior', label: 'Interior & Living' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 cursor-pointer ${activeCategory === cat.id
                  ? 'bg-[#2D332F] text-white shadow-md'
                  : 'text-[#5A605C] hover:text-[#2D332F]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredImages.slice(0, visibleCount).map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group p-2 bg-white border border-[#E3E0D8] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 ease-out cursor-pointer transform hover:-translate-y-1 relative"
            >
              {/* Image Container with aspect ratio */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E3E0D8]/20">
                {/* Skeleton Loader */}
                {!loadedImages[img.id] && (
                  <div className="absolute inset-0 bg-[#E3E0D8]/40 animate-pulse flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6e00]/50 animate-ping"></span>
                  </div>
                )}
                <img
                  src={img.src}
                  alt={img.alt}
                  onLoad={() => handleImageLoad(img.id)}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${loadedImages[img.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                  loading="lazy"
                />

                {/* Hover Glass Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <div className="text-center pt-8">
            <button
              onClick={loadMore}
              className="px-10 py-4 bg-[#2D332F] text-white font-sans text-xs uppercase tracking-widest font-extrabold rounded-full hover:bg-[#ff6e00] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              Load More Photos ({filteredImages.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-50 bg-[#1A1D1A]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 transition-all duration-300 animate-fade-in"
        >
          {/* Lightbox Header */}
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-2 z-50">
            <span className="font-sans text-xs font-bold text-white/70 tracking-wider">
              {filteredImages[activeImageIndex].category.toUpperCase()} • PHOTO {activeImageIndex + 1} OF {filteredImages.length}
            </span>
            <button
              onClick={() => setActiveImageIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative flex items-center justify-center flex-grow max-w-6xl mx-auto w-full px-4 sm:px-12 my-4">

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-0 w-12 h-12 rounded-full bg-white/10 hover:bg-[#ff6e00] hover:text-white border border-white/10 flex items-center justify-center text-white transition-all duration-300 z-50 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Central Display Image */}
            <div className="max-h-[60vh] sm:max-h-[65vh] w-full flex items-center justify-center overflow-hidden">
              <img
                key={activeImageIndex}
                src={filteredImages[activeImageIndex].src}
                alt="Casa La Bella Fullscreen View"
                className="max-h-[60vh] sm:max-h-[65vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl select-none animate-gentle-fade-in"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-0 w-12 h-12 rounded-full bg-white/10 hover:bg-[#ff6e00] hover:text-white border border-white/10 flex items-center justify-center text-white transition-all duration-300 z-50 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Thumbnail strip and navigation guide */}
          <div className="w-full max-w-5xl mx-auto py-2 z-50 space-y-4">

            {/* Horizontal thumbnail scroll bar */}
            <div
              ref={thumbnailContainerRef}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-3 overflow-x-auto py-2 px-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent justify-start"
              style={{ scrollbarWidth: 'thin' }}
            >
              {filteredImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${activeImageIndex === idx
                    ? 'border-[#ff6e00] scale-105 shadow-md'
                    : 'border-transparent opacity-40 hover:opacity-80'
                    }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-white/80 font-sans text-[10px] uppercase tracking-wider font-extrabold">
                Use arrows, click thumbnails, or use left/right keyboard keys to explore
              </span>
            </div>

          </div>

        </div>
      )}
    </section>
  );
}
