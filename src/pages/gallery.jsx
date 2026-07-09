import React from 'react';
import PageBanner from '../components/PageBanner';
import VillaGallery from '../components/gallery/VillaGallery';
import houseImg from '../assets/house.jpg';
// import houseImg from '../assets/gallerybanner.jpg';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased overflow-x-hidden">
      <main>
        {/* Page Banner matches the exact size and styling of the About page */}
        <PageBanner title="Gallery" bgImage={houseImg} />
        <VillaGallery />
      </main>
    </div>
  );
}
