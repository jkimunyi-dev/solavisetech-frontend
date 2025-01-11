"use client"

import React from 'react';

const CTA = () => {
	return (
		<section className="w-full bg-gradient-to-r from-blue-500 to-blue-700	 py-20">
			<div className="max-w-[1440px] mx-auto px-6">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					{/* Left Content */}
					<div className="flex-1 text-white max-w-2xl">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Ready to Start Your Learning Journey?
						</h2>
						<p className="text-lg md:text-xl text-blue-100 mb-8">
							Join thousands of students who have already transformed their careers through our comprehensive training programs. Get started today and take the first step towards your dream career.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button
								className="rounded-lg border-4 border-yellow-500 py-3 px-6 font-sans  font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-yellow-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50"
								data-ripple-dark="true"
							>
								Start Learning Now
							</button>
							<button
								className="rounded-lg bg-yellow-500 py-3 px-6 font-sans  font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50"
								data-ripple-light="true"
							>
								Schedule a Demo
							</button>
						</div>
					</div>

					{/* Right Content - Stats */}
					<div className="grid grid-cols-2 gap-8 lg:gap-12">
						<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
							<h3 className="text-4xl font-bold mb-2">100+</h3>
							<p className="text-blue-100">Active Students</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
							<h3 className="text-4xl font-bold mb-2">95%</h3>
							<p className="text-blue-100">Success Rate</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
							<h3 className="text-4xl font-bold mb-2">20+</h3>
							<p className="text-blue-100">Expert Mentors</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
							<h3 className="text-4xl font-bold mb-2">100%</h3>
							<p className="text-blue-100">Job Support</p>
						</div>
					</div>
				</div>


			</div>
		</section>
	);
};

export default CTA;