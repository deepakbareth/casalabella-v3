import React from 'react';
import OutdoorsPool from './OutdoorsPool';
import SuitesComfort from './SuitesComfort';
import KitchenDining from './KitchenDining';
import SystemsSafety from './SystemsSafety';
import LocalActivities from './LocalActivities';

export default function VillaAmenities() {
  return (
    <div className="bg-[#F7F5F0] text-[#2D332F] antialiased ">
      {/* Blueprint background grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      <OutdoorsPool />
      <SuitesComfort />
      <KitchenDining />
      <SystemsSafety />
      <LocalActivities />
    </div>
  );
}
