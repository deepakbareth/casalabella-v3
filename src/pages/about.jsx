import React from 'react';
import PageBanner from '../components/PageBanner';
import AboutHero from '../components/about/AboutHero';
import VillaOverview from '../components/about/VillaOverview';
import BedroomsBathrooms from '../components/about/BedroomsBathrooms';
import AboutLocation from '../components/about/AboutLocation';
import OwnerStory from '../components/about/OwnerStory';
import LocalExperience from '../components/about/LocalExperience';
import HousePolicies from '../components/about/HousePolicies';
import houseImg from '../assets/house.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D332F] antialiased overflow-x-hidden">
      <main>
        <PageBanner title="About" bgImage={houseImg} />
        <AboutHero />
        <VillaOverview />
        <BedroomsBathrooms />
        <AboutLocation />
        <OwnerStory />
        <LocalExperience />

        <HousePolicies />
      </main>
    </div>
  );
}
