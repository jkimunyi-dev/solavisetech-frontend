import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: 'Ronald Richards',
			role: 'Cloud Solutions Architect',
			quote: '"The cloud computing courses on this platform transformed my career. The hands-on labs with AWS and Azure were incredibly practical, and the performance optimization techniques I learned are invaluable in my daily work."',
			image: '/ronald.jpg'
		},
		{
			id: 2,
			name: 'Annette Black',
			role: 'Security Engineer',
			quote: '"As a cybersecurity professional, I found the security curriculum here exceptional. The advanced penetration testing modules and real-world security scenarios helped me develop a much stronger security mindset."',
			image: '/annette.jpg'
		},
		{
			id: 3,
			name: 'Courtney Henry',
			role: 'DevOps Engineer',
			quote: '"The DevOps courses here bridge the gap between development and operations perfectly. The CI/CD pipeline tutorials and container orchestration modules gave me exactly what I needed to implement modern DevOps practices."',
			image: '/courtney.jpg'
		},
		{
			id: 4,
			name: 'Jenny Wilson',
			role: 'Full Stack Developer',
			quote: '"The web development track is comprehensive and up-to-date. From modern JavaScript frameworks to backend architectures, every concept is explained clearly with practical examples that I could immediately apply."',
			image: '/jenny.jpg'
		},
		{
			id: 5,
			name: 'Michael Foster',
			role: 'Android Developer',
			quote: '"The Android development courses are outstanding. The Kotlin programming tutorials and material design implementation guides helped me create more polished and performant mobile applications."',
			image: '/michael.jpg'
		},
		{
			id: 6,
			name: 'Sarah Chen',
			role: 'Cloud Security Specialist',
			quote: '"The platform\'s focus on cloud security best practices is impressive. The courses on securing cloud infrastructure and implementing zero-trust architecture have been crucial for my role in maintaining secure cloud environments."',
			image: '/sarah.jpg'
		},
		{
			id: 7,
			name: 'James Rodriguez',
			role: 'Site Reliability Engineer',
			quote: '"The DevOps and cloud integration courses are gold. I particularly appreciated the detailed coverage of monitoring, alerting, and incident response in cloud environments. It\'s made me much more confident in handling production issues."',
			image: '/james.jpg'
		},
		{
			id: 8,
			name: 'Emily Thompson',
			role: 'Web Security Consultant',
			quote: '"The web security modules are exceptional. From XSS prevention to API security, the content covers all crucial aspects of modern web application security. It\'s helped me identify and fix vulnerabilities more effectively."',
			image: '/emily.jpg'
		},
		{
			id: 9,
			name: 'David Kim',
			role: 'Mobile App Architect',
			quote: '"The advanced Android development courses are fantastic. The sections on app architecture patterns and performance optimization techniques have helped me build more scalable and maintainable mobile applications."',
			image: '/david.jpg'
		},
		{
			id: 10,
			name: 'Lisa Patel',
			role: 'Cloud Infrastructure Engineer',
			quote: '"The cloud infrastructure automation courses are incredible. The terraform modules and infrastructure-as-code practices taught here have revolutionized how I approach cloud resource management and deployment."',
			image: '/lisa.jpg'
		}
	];

	return (
		<section className="py-16 bg-blue-200">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight mb-4">What Our Learners Say</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Discover why tech professionals trust our platform for their learning journey.
					</p>
				</div>

				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full max-w-5xl mx-auto"
				>
					<CarouselContent className="-ml-2 md:-ml-4">
						{testimonials.map((testimonial) => (
							<CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
								<Card className="bg-white h-full">
									<CardContent className="p-6">
										<Quote className="w-10 h-10 text-gray-300 mb-4" />

										<p className="text-gray-700 mb-6 leading-relaxed">
											{testimonial.quote}
										</p>

										<div className="flex items-center">
											<Avatar className="h-12 w-12">
												<AvatarImage src={testimonial.image} alt={testimonial.name} />
												<AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
											</Avatar>

											<div className="ml-4">
												<p className="font-semibold text-gray-900">{testimonial.name}</p>
												<p className="text-sm text-gray-600">{testimonial.role}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden md:flex" />
					<CarouselNext className="hidden md:flex" />
				</Carousel>
			</div>
		</section>
	);
};

export default Testimonials;