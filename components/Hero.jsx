"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="pt-16"> {/* Add padding top to account for navbar height */}
      <section className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] bg-white">
        {/* Text Section */}
        <div className="flex flex-col px-6 pt-8 md:w-1/2 md:justify-center md:px-12 lg:px-16">
          <h1 className="font-phonk-regular text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-4">
            <span className="block">Phonk</span>
            <span className="block">Regular</span>
            <span className="block">I love</span>
            <span className="block">Coding</span>
          </h1>
          <p className="font-phonk-contrast text-gray-700 text-lg md:text-xl mb-6">
            Dream Big Work Hard
            <span className="inline-flex items-center">
              <span className="mx-1">and Make It</span>
              <span>Happen</span>
            </span>
          </p>
          <button className="w-32 px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-sm">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 relative flex-1 md:w-1/2">
          <Image
            src="/hero.png"
            alt="Motivational Image"
            className="object-cover w-full h-full"
            width={500} 
            height={500}
            priority
          />
          {/* Yellow and Blue Shapes */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-0 bottom-0 w-1/2 h-2/3 bg-yellow-400 rounded-tl-3xl" />
            <div className="absolute left-0 bottom-0 w-1/2 h-2/3 bg-blue-600 rounded-tr-3xl" />
          </div>
        </div>
      </section>
    </main>
  );
}