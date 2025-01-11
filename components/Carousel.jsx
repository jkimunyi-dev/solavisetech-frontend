"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			image: "/hero.png",
			title: "Web Development"
		},
		{
			image: "/hero.png",
			title: "Mobile Development"
		},
		{
			image: "/hero.png",
			title: "UI/UX Design"
		}
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative w-full h-full">
			<div className="relative h-full overflow-hidden rounded-lg">
				<div
					className="flex transition-transform duration-500 ease-in-out h-full"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{slides.map((slide, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-full h-full flex flex-col items-center justify-center"
						>
							<img
								src={slide.image}
								alt={slide.title}
								className="object-contain w-[280px] h-[280px] md:w-[320px] md:h-[320px]"
							/>
							<h3 className="mt-4 text-xl font-bold text-gray-800">{slide.title}</h3>
						</div>
					))}
				</div>
			</div>

			<button
				onClick={prevSlide}
				className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
			>
				<ChevronLeft className="w-6 h-6 text-gray-800" />
			</button>

			<button
				onClick={nextSlide}
				className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
			>
				<ChevronRight className="w-6 h-6 text-gray-800" />
			</button>

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
							}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;