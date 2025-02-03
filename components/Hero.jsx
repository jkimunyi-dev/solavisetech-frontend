"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react"; // Changed from LightningBoltIcon to Zap
import LogoSlider from "./LogoSlider";

export default function Hero() {
  return (
    <main className="flex justify-center w-full bg-white">
      <div className="w-full max-w-[1440px]">
        <section className="flex flex-col h-screen md:h-[700px] lg:h-[800px]">
          {/* Main content wrapper */}
          <div className="flex flex-col md:flex-row flex-1">
            {/* Text Section */}
            <div className="flex flex-col px-6 pt-8 md:w-1/2 md:justify-center md:px-12 lg:px-16">
              <Card className="w-fit  rounded-full bg-blue-100 border-blue-800/30 mb-4">
                <div className="flex items-center gap-2 py-2 px-4">
                  <div className="w-6 h-6 rounded-full border bg-blue-200 border-blue-800/30 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-blue-800" />
                  </div>
                  <p className="text-blue-800 text-[12px] font-light uppercase tracking-wider">
                    The Leader in Online Learning
                  </p>
                </div>
              </Card>

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
                <Button
                  variant="outline"
                  className="border-2 border-blue-800 font-bold uppercase text-blue-900 hover:opacity-75"
                >
                  Get Started
                </Button>

                <Button
                  className="bg-yellow-500 font-bold uppercase text-white shadow-md shadow-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/40 hover:bg-yellow-500"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex-1 md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
              <img
                src="/hero.png"
                alt="Image"
                className="relative z-10 object-contain w-[330px] h-[370px] md:w-[400px] md:h-[419px] lg:w-[480px] lg:h-[501px]"
              />
              {/* Yellow and Blue Shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute right-0 bottom-0 w-1/2 h-1/2 md:h-2/3 bg-yellow-400 rounded-tl-3xl" />
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 md:h-2/3 bg-blue-600 rounded-tr-3xl" />
              </div>
            </div>
          </div>

          {/* Logo Slider */}
          <div className="h-[120px] md:h-[150px] w-full">
            <LogoSlider />
          </div>
        </section>
      </div>
    </main>
  );
}