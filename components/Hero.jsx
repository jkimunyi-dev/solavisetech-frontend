"use client";

import React from "react";
import Image from "next/image";
import LogoSlider from "./LogoSlider";

export default function Hero() {
  return (
    <main className="pt-10 flex justify-center w-full bg-white">
      <div className="w-full max-w-[1440px]">
        <section className="flex flex-col h-[calc(100vh-64px)] md:h-[700px] lg:h-[800px]">
          {/* Main content wrapper - 85% height to push content up */}
          <div className="flex flex-col md:flex-row h-[85%]">
            {/* Text Section */}
            <div className="flex flex-col px-6 pt-8 md:w-1/2 md:justify-center md:px-12 lg:px-16">
              <p className="text-gray-700 text-lg md:text-xl mb-6">
                World class Training
              </p>
              <h1 className="font-phonk-regular text-[32px] md:text-[32px] lg:text-[40px] leading-[1.1] mb-4">
                <span className="block">Build a Successful </span>
                <span className="block">Career In Your </span>
                <span className="block">Chosen Discipline</span>
              </h1>
              <p className="font-phonk-contrast text-gray-700 text-lg md:text-xl mb-6">
                Dream Big Work Hard
                <span className="inline-flex items-center">
                  <span className="mx-1">and Make It</span>
                  <span>Happen</span>
                </span>
              </p>


              <div className="flex gap-4">
                <button
                  className="rounded-lg border-2 border-blue-800 py-3 px-6 font-sans  font-bold uppercase text-blue-900 transition-all hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50"
                  data-ripple-dark="true"
                >
                  Get Started
                </button>

                <button
                  className="rounded-lg bg-yellow-500 py-3 px-6 font-sans  font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50"
                  data-ripple-light="true"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Image Section with adjusted positioning */}
            <div className="relative flex-1 md:w-1/2 flex items-center justify-center mt-8 md:mt-0 mb-4 md:mb-8">
              <img
                src="/hero.png"
                alt="Image"
                className="relative z-10 object-contain w-[330px] h-[370px] md:w-[400px] md:h-[419px] lg:w-[480px] lg:h-[501px]"
              />
              {/* Yellow and Blue Shapes with adjusted positioning */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute right-0 bottom-0 w-1/2 h-1/2 md:h-2/3 bg-yellow-400 rounded-tl-3xl" />
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 md:h-2/3 bg-blue-600 rounded-tr-3xl" />
              </div>
            </div>
          </div>

          {/* Logo Slider - 15% height */}
          <div className="h-[15%] flex items-center px-4 py-4 md:py-8">
            <LogoSlider />
          </div>
        </section>
      </div>
    </main>
  );
}
