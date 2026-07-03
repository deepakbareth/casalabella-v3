import React from 'react';
import PageBanner from '../components/PageBanner';
import AboutHero from '../components/about/AboutHero';
import VillaOverview from '../components/about/VillaOverview';
import BedroomsBathrooms from '../components/about/BedroomsBathrooms';
import OwnerStory from '../components/about/OwnerStory';
import LocalExperience from '../components/about/LocalExperience';
import houseImg from '../assets/house.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased overflow-x-hidden">
      <main>
        <PageBanner title="About the Villa" bgImage={houseImg} />
        <AboutHero />
        <VillaOverview />
        <BedroomsBathrooms />
        <OwnerStory />
        <LocalExperience />
      </main>
    </div>
  );
}
