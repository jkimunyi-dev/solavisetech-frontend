"use client";

import React from "react";

export default function LogoSlider() {
  const logos = [
    { id: 1, src: "aws.png", alt: "AWS" },
    { id: 2, src: "cisco.png", alt: "CISCO" },
    { id: 3, src: "huawei.png", alt: "HUAWEI 3" },
    { id: 4, src: "ziontechhub.png", alt: "ZION TECH HUB" },
    { id: 5, src: "alluvium.png", alt: "ALLUVIUM" },
    { id: 6, src: "kesmond.png", alt: "KESMOND" },
    { id: 7, src: "markkings.png", alt: "MARKKINGS" },
    { id: 8, src: "chamco.png", alt: "CHAMCO DIGITAL" },
  ];

  return (
    <div className="w-full h-full overflow-x-auto bg-white">
      <div className="flex gap-8 px-4 justify-start h-full">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex-shrink-0 w-[160px] h-[80px] md:w-[200px] md:h-[100px] flex items-center justify-center bg-white rounded-lg shadow-sm"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full p-4 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}