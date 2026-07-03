import React from 'react';

export default function PageBanner({ title, bgImage, heightClass = 'h-[30vh] sm:h-[70vh]' }) {
  return (
    <div className={`relative w-full ${heightClass} flex items-center justify-center overflow-hidden bg-[#112828]`}>
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
      )}

      {/* Single Heading */}
      <div className="relative z-20 text-center px-6">
        <h2 className="font-serif italic text-4xl sm:text-6xl lg:text-7xl font-medium tracking-wide text-white drop-shadow-md">
          {title}
        </h2>
      </div>
    </div>
  );
}
