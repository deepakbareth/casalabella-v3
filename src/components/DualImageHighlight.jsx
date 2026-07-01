import React from 'react';
import bedsea from "../assets/bedsea.jpg";
import poolsea2 from "../assets/poolsea2.jpg";

export default function DualImageHighlight() {
    return (
        <section className="py-4 lg:py-10 bg-choco-50 text-choco-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">

                {/* Header Section */}
                <div className="mb-24 lg:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-choco-600 font-medium mb-8 block">
                            Outdoor Living
                        </span>
                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-choco-900 font-light leading-tight tracking-wide">
                            Soak in the <br className="hidden lg:block" />
                            <span className="italic text-choco-700">Caribbean sun.</span>
                        </h2>
                    </div>
                    <p className="font-serif text-xl text-choco-700 font-bold leading-relaxed max-w-md">
                        Whether you are reading in the shaded cabana or floating in the infinity pool, every outdoor space is designed to maximize your connection with the sea.
                    </p>
                </div>

                {/* Staggered Dual Image Layout */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 w-full">

                    {/* Image 01: Tall / Portrait */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        <div className="relative group aspect-[4/5] w-full overflow-hidden bg-choco-100">
                            <img
                                src={bedsea}
                                alt="Shaded Oceanfront Cabana at Casa La Bella"
                                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                            />
                        </div>
                        {/* Minimalist Caption */}
                        <div className="mt-6 flex items-center justify-between text-[10px] text-choco-600 uppercase tracking-[0.3em] font-medium">
                            <span>01</span>
                            <div className="h-[1px] flex-grow bg-choco-200/60 mx-6"></div>
                            <span>Oceanfront Cabana</span>
                        </div>
                    </div>

                    {/* Image 02: Offset Landscape/Square */}
                    <div className="w-full md:w-1/2 flex flex-col md:mt-40">
                        <div className="relative group aspect-[4/4] md:aspect-[4/5] w-full overflow-hidden bg-choco-100">
                            <img
                                src={poolsea2}
                                alt="Infinity Pool overlooking the ocean"
                                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                            />
                        </div>
                        {/* Minimalist Caption */}
                        <div className="mt-6 flex items-center justify-between text-[10px] text-choco-600 uppercase tracking-[0.3em] font-medium">
                            <span>02</span>
                            <div className="h-[1px] flex-grow bg-choco-200/60 mx-6"></div>
                            <span>Infinity Pool</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}