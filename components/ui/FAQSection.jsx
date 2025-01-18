"use client"

import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
	const faqs = [
		{
			question: "What courses are available on your platform?",
			answer: "Our platform offers a wide range of courses including Cloud Computing, DevOps, Data Science, Artificial Intelligence, Web Development, Mobile App Development, Cybersecurity, and Digital Marketing. Each course is designed by industry experts and includes hands-on projects and real-world applications."
		},
		{
			question: "How long do I have access to a course after purchasing?",
			answer: "Once you purchase a course, you have lifetime access to all course materials, updates, and resources. You can learn at your own pace and revisit the content whenever you need to refresh your knowledge."
		},
		{
			question: "Are there any prerequisites for taking courses?",
			answer: "Prerequisites vary by course. While some beginner courses have no prerequisites, advanced courses might require basic knowledge of certain technologies or concepts. Each course description clearly outlines any prerequisites needed to ensure you can follow along effectively."
		},
		{
			question: "Do you offer certificates upon course completion?",
			answer: "Yes, we provide certificates of completion for all our courses. These certificates are industry-recognized and can be shared on platforms like LinkedIn or included in your resume. Some courses also offer additional certification preparation for specific technologies."
		},
		{
			question: "What is your refund policy?",
			answer: "We offer a 30-day money-back guarantee for all courses. If you're not satisfied with your learning experience, you can request a full refund within 30 days of purchase, no questions asked."
		},
		{
			question: "Can I access the courses on mobile devices?",
			answer: "Yes, our platform is fully responsive and accessible on all devices including smartphones, tablets, and desktop computers. You can download our mobile app to learn on-the-go and track your progress across devices."
		},
		{
			question: "Do you offer corporate training solutions?",
			answer: "Yes, we provide customized corporate training solutions for teams and organizations. Our enterprise plans include dedicated support, custom learning paths, progress tracking, and detailed analytics to ensure your team's success."
		},
		{
			question: "How can I get help if I'm stuck on a course topic?",
			answer: "We offer multiple support channels including a community forum, direct instructor support, and 24/7 technical assistance. You can post questions, participate in discussions, and get help from both instructors and fellow learners."
		}
	];

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
						<p className="text-gray-600">
							Find answers to common questions about our platform and courses
						</p>
					</div>

					{/* FAQ Accordion */}
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index + 1}`}>
								<AccordionTrigger className="text-left">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-gray-600">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					{/* Contact Section */}
					<div className="mt-12 text-center">
						<p className="text-gray-600">
							Still have questions?{" "}
							<a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">
								Contact our support team
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;