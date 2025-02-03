"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, BookOpen, Trophy } from "lucide-react";

const WhyStudyWithUs = () => {
	return (
		<section className="py-16 px-4">
			<div className="max-w-[1440px] mx-auto">
				{/* Heading Section */}
				<div className="text-center mb-16">
					<h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-4">
						Why Study With Us?
					</h2>
					<p className="text-gray-600 text-lg">
						Transform your career with expert-led learning and industry-recognized certifications.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{/* World Class Teachers */}
					<Card className="border-2">
						<CardContent className="pt-6">
							<div className="flex flex-col h-full">
								<div className="flex items-center space-x-4 mb-4">
									<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
										<Users className="w-6 h-6 text-red-500" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">
										World Class Teachers
									</h3>
								</div>
								<div className="border-b border-gray-200 mb-4"></div>
								<p className="text-gray-600 text-left mb-4 flex-grow">
									Learn from industry experts with years of real-world experience in their respective fields. Our instructors are passionate about sharing their knowledge.
								</p>
								<div className="border-b border-gray-200 mb-4"></div>
								<a href="#" className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-center">
									Meet Our Teachers
								</a>
							</div>
						</CardContent>
					</Card>

					{/* Global Community */}
					<Card className="border-2">
						<CardContent className="pt-6">
							<div className="flex flex-col h-full">
								<div className="flex items-center space-x-4 mb-4">
									<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
										<Users className="w-6 h-6 text-blue-500" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">
										Global Community
									</h3>
								</div>
								<div className="border-b border-gray-200 mb-4"></div>
								<p className="text-gray-600 text-left mb-4 flex-grow">
									Join a diverse community of learners from over 150 countries. Collaborate, share insights, and grow together through peer learning and networking.
								</p>
								<div className="border-b border-gray-200 mb-4"></div>
								<a href="#" className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-center">
									Join Community
								</a>
							</div>
						</CardContent>
					</Card>

					{/* Top Notch Courses */}
					<Card className="border-2">
						<CardContent className="pt-6">
							<div className="flex flex-col h-full">
								<div className="flex items-center space-x-4 mb-4">
									<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
										<BookOpen className="w-6 h-6 text-green-500" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">
										Top Notch Courses
									</h3>
								</div>
								<div className="border-b border-gray-200 mb-4"></div>
								<p className="text-gray-600 text-left mb-4 flex-grow">
									Access comprehensive, up-to-date courses designed to industry standards. Get hands-on experience with practical projects and real-world applications.
								</p>
								<div className="border-b border-gray-200 mb-4"></div>
								<a href="#" className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-center">
									Explore Courses
								</a>
							</div>
						</CardContent>
					</Card>

					{/* Career Success */}
					<Card className="border-2">
						<CardContent className="pt-6">
							<div className="flex flex-col h-full">
								<div className="flex items-center space-x-4 mb-4">
									<div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
										<Trophy className="w-6 h-6 text-purple-500" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">
										Career Success
									</h3>
								</div>
								<div className="border-b border-gray-200 mb-4"></div>
								<p className="text-gray-600 text-left mb-4 flex-grow">
									Build a successful career with our career support services, industry partnerships, and job placement assistance. Join thousands of successful graduates.
								</p>
								<div className="border-b border-gray-200 mb-4"></div>
								<a href="#" className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-center">
									View Success Stories
								</a>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default WhyStudyWithUs;