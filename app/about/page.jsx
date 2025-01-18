"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function AboutUs() {
	return (
		<div className="min-h-screen pt-20">
			{/* Main content section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid md:grid-cols-2 gap-12 items-start">
					{/* Left Column */}
					<div className="space-y-6">
						<div className="space-y-4">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">
								About Solavise<span className="text-blue-500">Tech</span>
							</h1>
							<h3 className="text-2xl md:text-3xl text-gray-900 font-semibold leading-relaxed">
								Empowering your Learner for Brighter Future & business
							</h3>
						</div>
					</div>

					{/* Right Column */}
					<div className="space-y-8">
						<p className="text-lg text-gray-600 leading-relaxed">
							Education is a vital process that fosters personal growth, societal development, and intellectual advancement. It equips individuals with the knowledge, skills, and critical thinking.
						</p>

						<div className="grid gap-8">
							<Card className="border-none shadow-md bg-white/50 backdrop-blur-sm">
								<CardContent className="pt-6">
									<div className="flex items-center gap-4">
										<div>
											<h2 className="text-5xl font-bold text-blue-900">23+</h2>
											<p className="text-gray-600 font-medium mt-2">Years Of Experience</p>
										</div>
										<div className="ml-auto">
											<GraduationCap size={48} className="text-blue-500 opacity-50" />
										</div>
									</div>
								</CardContent>
							</Card>

							<p className="text-lg text-gray-600 leading-relaxed">
								Education not only empowers people pursue their career goals also encourages responsible.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}