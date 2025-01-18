"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, Users, Book, User, X } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const InstructorSection = () => {
	const [activeCard, setActiveCard] = useState(null);

	const instructors = [
		{
			id: 1,
			name: 'Samba Otavise',
			role: 'Cloud Computing Expert',
			rating: 4.5,
			students: '120+',
			lessons: 15,
			image: '/person.png',
			courseTitle: 'Learn Cloud Computing',
			category: 'CLOUD',
			topics: [
				'AWS EC2 and Virtual Machines',
				'Cloud Storage Solutions',
				'Serverless Architecture',
				'Cloud Security Best Practices',
				'DevOps in the Cloud',
				'Kubernetes and Container Orchestration',
				'Cloud Cost Optimization',
				'Multi-Cloud Strategies',
				'Disaster Recovery and Backup',
				'AI and Machine Learning in the Cloud'
			],
			socials: {
				facebook: '#',
				twitter: '#',
				instagram: '#',
				linkedin: '#'
			}
		},
		{
			id: 2,
			name: 'Samba Otavise',
			role: 'DevOps Specialist',
			rating: 4.8,
			students: '150+',
			lessons: 18,
			image: '/person.png',
			courseTitle: 'DevOps Mastery',
			category: 'DEVOPS',
			topics: [
				'CI/CD Pipeline Implementation',
				'Docker Containerization',
				'Kubernetes Orchestration',
				'Infrastructure as Code',
				'Monitoring and Logging',
				'Automated Testing',
				'Cloud Security',
				'Performance Optimization',
				'Microservices Architecture',
				'Site Reliability Engineering'
			],
			socials: {
				facebook: '#',
				twitter: '#',
				instagram: '#',
				linkedin: '#'
			}
		},
		{
			id: 3,
			name: 'Samba Otavise',
			role: 'Data Science Expert',
			rating: 4.7,
			students: '200+',
			lessons: 20,
			image: '/person.png',
			courseTitle: 'Data Science Fundamentals',
			category: 'DATA',
			topics: [
				'Python for Data Science',
				'Statistical Analysis',
				'Machine Learning Basics',
				'Data Visualization',
				'Deep Learning',
				'Natural Language Processing',
				'Big Data Processing',
				'Neural Networks',
				'Data Ethics',
				'Predictive Modeling'
			],
			socials: {
				facebook: '#',
				twitter: '#',
				instagram: '#',
				linkedin: '#'
			}
		},
		{
			id: 4,
			name: 'Samba Otavise',
			role: 'Cyber Security Analyst',
			rating: 4.6,
			students: '130+',
			lessons: 16,
			image: '/person.png',
			courseTitle: 'Master Cyber Security',
			category: 'SECURITY',
			topics: [
				'Network Security Fundamentals',
				'Ethical Hacking',
				'Cryptography Basics',
				'Incident Response',
				'Penetration Testing',
				'Secure Coding Practices',
				'Cloud Security',
				'Cyber Threat Intelligence',
				'Data Privacy Laws',
				'Risk Assessment and Mitigation'
			],
			socials: {
				facebook: '#',
				twitter: '#',
				instagram: '#',
				linkedin: '#'
			}
		},
		{
			id: 5,
			name: 'Samba Otavise',
			role: 'Android Development Expert',
			rating: 4.9,
			students: '180+',
			lessons: 22,
			image: '/person.png',
			courseTitle: 'Build Android Apps',
			category: 'ANDROID',
			topics: [
				'Kotlin for Android',
				'Jetpack Compose Basics',
				'UI/UX Design for Mobile',
				'Room Database Integration',
				'Firebase for Mobile Apps',
				'Android App Testing',
				'APIs and Networking',
				'Material Design Principles',
				'Publishing to Play Store',
				'Performance Optimization'
			],
			socials: {
				facebook: '#',
				twitter: '#',
				instagram: '#',
				linkedin: '#'
			}
		},
		{
			id: 6,
			name: 'Samba Otavise',
			role: 'Web Development Guru',
			rating: 4.8,
			students: '220+',
			lessons: 25,
			image: '/person.png',
			courseTitle: 'Full-Stack Web Development',
			category: 'WEB',
			topics: [
				'HTML, CSS, and JavaScript',
				'React and Next.js Basics',
				'Django Backend Development',
				'RESTful API Design',
				'Web Security Best Practices',
				'Responsive Design Techniques',
				'Version Control with Git',
				'Database Management (SQL & NoSQL)',
				'Testing and Debugging Web Apps',
				'Performance Optimization for Web'
			],
			socials: {
				facebook: '#',
				twitter: '#',
				instagram: '#',
				linkedin: '#'
			}
		}
	];


	const renderStars = (rating) => {
		return [...Array(5)].map((_, index) => (
			<StarIcon
				key={index}
				className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
			/>
		));
	};

	const handleCardClick = (id) => {
		setActiveCard(activeCard === id ? null : id);
	};

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center mb-12">
					<div>
						<h2 className="text-3xl font-bold mb-2">Learn from the best instructors</h2>
						<p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur.</p>
					</div>
					<a href="#" className="text-purple-600 hover:text-purple-700 flex items-center">
						View All Instructors
						<svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>

				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full"
				>
					<CarouselContent className="-ml-4">
						{instructors.map((instructor) => (
							<CarouselItem key={instructor.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
								<Card
									className="group relative overflow-hidden m-0.5 cursor-pointer"
									onClick={() => handleCardClick(instructor.id)}
								>
									<CardContent className="p-0">
										{/* Main Content */}
										<div className="relative">
											{/* Image Container */}
											<div className="p-2">
												<div className="relative h-80 overflow-hidden rounded-lg">
													<img
														src={instructor.image}
														alt={instructor.name}
														className="w-full h-full object-cover transition-transform duration-300 rounded-lg"
													/>
												</div>
											</div>

											{/* Course Info */}
											<div className="p-6">
												{/* Category and Rating */}
												<div className="flex items-center justify-between mb-3">
													<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
														{instructor.category}
													</span>
													<div className="flex gap-1">
														{renderStars(instructor.rating)}
													</div>
												</div>

												{/* Course Title */}
												<h3 className="text-xl font-bold mb-3">{instructor.courseTitle}</h3>

												{/* Instructor Info */}
												<div className="flex items-center gap-2 mb-3">
													<User className="w-5 h-5 text-gray-500" />
													<span className="text-gray-700">{instructor.name}</span>
												</div>

												{/* Divider */}
												<hr className="my-3" />

												{/* Lessons and Students */}
												<div className="flex items-center justify-between">
													<div className="flex items-center gap-2">
														<Book className="w-5 h-5 text-gray-500" />
														<span className="text-gray-700">{instructor.lessons} Lessons</span>
													</div>
													<div className="text-gray-700">{instructor.students} Students</div>
												</div>
											</div>
										</div>

										{/* Overlay - Shows on hover for desktop and on click for mobile */}
										<div className={`absolute inset-0.5 bg-blue-600 rounded-lg transition-transform duration-300 ease-in-out
											${(activeCard === instructor.id ? 'translate-x-0' : 'translate-x-full')}
											md:translate-x-full md:group-hover:translate-x-0`}
										>
											<div className="p-6 h-full flex flex-col">
												{/* Mobile Close Button */}
												<button
													className="md:hidden absolute top-2 right-2 text-white p-1 rounded-full hover:bg-blue-500"
													onClick={(e) => {
														e.stopPropagation();
														setActiveCard(null);
													}}
												>
													<X className="w-6 h-6" />
												</button>

												{/* Content Container with Fixed Heights */}
												<div className="flex flex-col h-full">
													{/* Fixed Header Section */}
													<div className="mb-4">
														<div className="flex justify-between items-center mb-4">
															<span className="bg-blue-400 font-bold text-white px-3 py-1 rounded-lg text-sm">
																{instructor.category}
															</span>
															<div className="flex gap-1">
																{[...Array(5)].map((_, index) => (
																	<StarIcon key={index} className="w-4 h-4 text-yellow-300 fill-current" />
																))}
															</div>
														</div>

														<p className="text-white mb-2">Empower Growth with {instructor.category} Solutions!</p>
														<h3 className="text-white text-lg font-bold">
															{instructor.courseTitle}
														</h3>
													</div>

													{/* Scrollable Topics List */}
													<div className="flex-1 overflow-y-auto custom-scrollbar">
														<ul className="text-white space-y-2">
															{instructor.topics.map((topic, index) => (
																<li key={index} className="flex items-center gap-2">
																	<div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
																	<span>{topic}</span>
																</li>
															))}
														</ul>
													</div>

													{/* Fixed Footer Section */}
													<div className="pt-4 mt-4 border-t border-white">
														<button className="w-full bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg uppercase">
															Enroll Now
														</button>
													</div>
												</div>
											</div>

											<style jsx>{`
												.custom-scrollbar {
													scrollbar-width: none;
													-ms-overflow-style: none;
												}
												.custom-scrollbar::-webkit-scrollbar {
													display: none;
												}
											`}</style>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
};

export default InstructorSection;