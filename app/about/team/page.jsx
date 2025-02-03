"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	FaAws, FaDocker, FaPython, FaShieldAlt, FaLock, FaUserShield, FaReact,
	FaCode, FaDatabase, FaCloud, FaCog, FaNetworkWired, FaBug, FaCheckSquare,
	FaJs, FaPalette, FaTools, FaServer, FaGithub, FaJira, FaBitbucket,
	FaLinux, FaWindows, FaHardHat, FaChartLine, FaRobot, FaBrain, FaDesktop,
	FaMobile, FaGlobe, FaSitemap, FaLaptopCode, FaProjectDiagram, FaBezierCurve,
	FaTerminal, FaInfinity, FaFileCode, FaStream, FaLayerGroup, FaCubes, FaMicrochip,
	FaWifi, FaSlidersH, FaUniversalAccess
} from "react-icons/fa";
import {
	SiKubernetes, SiJenkins, SiTerraform, SiPrometheus,
	SiGrafana, SiElasticsearch, SiRedis, SiMongodb, SiPostgresql
} from "react-icons/si";

import { VscAzureDevops } from "react-icons/vsc";

// Expanded skill icons mapping
const getSkillIcon = (skill) => {
	const icons = {
		// Cloud & Infrastructure
		'AWS': FaAws,
		'Cloud Architecture': FaCloud,
		'Kubernetes': SiKubernetes,
		'Docker': FaDocker,
		'Terraform': SiTerraform,
		'Linux': FaLinux,
		'Windows Server': FaWindows,

		// Development & Programming
		'Python': FaPython,
		'React': FaReact,
		'Next.js': FaJs,
		'TypeScript': FaCode,
		'Node.js': FaJs,
		'GraphQL': FaDatabase,
		'REST APIs': FaCloud,
		'Microservices': FaCubes,

		// DevOps & Tools
		'DevOps': FaCog,
		'CI/CD': FaInfinity,
		'Git': FaGithub,
		'Jenkins': SiJenkins,
		'Azure DevOps': VscAzureDevops,
		'Jira': FaJira,
		'Bitbucket': FaBitbucket,

		// Security
		'Security': FaShieldAlt,
		'Cloud Security': FaLock,
		'Compliance': FaCheckSquare,
		'Risk Management': FaUserShield,
		'Pen Testing': FaBug,
		'ISO 27001': FaShieldAlt,

		// Monitoring & Analytics
		'Prometheus': SiPrometheus,
		'Grafana': SiGrafana,
		'ELK Stack': SiElasticsearch,
		'Data Analytics': FaChartLine,

		// Databases
		'Redis': SiRedis,
		'MongoDB': SiMongodb,
		'PostgreSQL': SiPostgresql,
		'Database Design': FaDatabase,

		// Frontend & Design
		'UI/UX': FaPalette,
		'Responsive Design': FaMobile,
		'Web Accessibility': FaUniversalAccess,
		'Performance Optimization': FaStream,

		// Architecture & Infrastructure
		'System Design': FaProjectDiagram,
		'Network Architecture': FaNetworkWired,
		'Infrastructure as Code': FaFileCode,
		'Service Mesh': FaSitemap,

		// Emerging Technologies
		'AI/ML': FaBrain,
		'IoT': FaWifi,
		'Edge Computing': FaMicrochip,
		'Serverless': FaCloud
	};

	const IconComponent = icons[skill];
	return IconComponent ? <IconComponent className="w-4 h-4 mr-1" /> : <FaCode className="w-4 h-4 mr-1" />;
};

// Component to display person details in dialog
const PersonDetailsDialog = ({ person, isOpen, onClose }) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">{person.name}</DialogTitle>
					<p className="text-gray-600">{person.role}</p>
				</DialogHeader>

				<ScrollArea className="h-full pr-4">
					<Tabs defaultValue="skills" className="w-full">
						<TabsList className="mb-4">
							<TabsTrigger value="skills">Skills</TabsTrigger>
							<TabsTrigger value="achievements">Achievements</TabsTrigger>
							<TabsTrigger value="certifications">Certifications</TabsTrigger>
						</TabsList>

						<TabsContent value="skills">
							<div className="grid grid-cols-2 md:grid-cols-3 gap-2">
								{person.skills.map((skill, index) => (
									<div key={index} className="flex items-center p-2 bg-blue-50 rounded-md">
										{getSkillIcon(skill)}
										<span className="text-sm">{skill}</span>
									</div>
								))}
							</div>
						</TabsContent>

						<TabsContent value="achievements">
							<ul className="space-y-3">
								{person.achievements.map((achievement, index) => (
									<li key={index} className="flex items-start">
										<span className="mr-2 mt-1 text-blue-500">•</span>
										<span className="text-gray-700">{achievement}</span>
									</li>
								))}
							</ul>
						</TabsContent>

						<TabsContent value="certifications">
							<ul className="space-y-3">
								{person.certifications.map((cert, index) => (
									<li key={index} className="flex items-start">
										<span className="mr-2 mt-1 text-blue-500">•</span>
										<a
											href={cert.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 hover:text-blue-800 hover:underline"
										>
											{cert.name}
										</a>
									</li>
								))}
							</ul>
						</TabsContent>
					</Tabs>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
};

// Updated Team Member Card component
function TeamMemberCard({ member }) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const displayedSkills = member.skills.slice(0, 3);
	const remainingSkills = member.skills.length - 3;

	return (
		<>
			<Card className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden relative">
				<div className="relative">
					<img
						src={member.image}
						alt={member.name}
						className="w-full h-56 object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
				</div>

				<div className="p-6">
					<h3 className="text-xl font-bold text-gray-900 mb-2 text-left">
						{member.name}
					</h3>
					<p className="text-gray-600 mb-4 text-left">{member.role}</p>

					<div className="flex flex-wrap gap-2 mb-4">
						{displayedSkills.map((skill, index) => (
							<span
								key={index}
								className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[12px] flex items-center"
							>
								{getSkillIcon(skill)}
								{skill}
							</span>
						))}
						{remainingSkills > 0 && (
							<span
								onClick={() => setIsDialogOpen(true)}
								className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-[12px] cursor-pointer hover:bg-gray-200"
							>
								+{remainingSkills} more
							</span>
						)}
					</div>

					<div className="w-full h-px bg-gray-200 my-4" />

					<div className="mb-12">
						<h4 className="text-sm font-semibold text-gray-900 mb-2 text-left">Key Achievements</h4>
						<ul className="list-disc pl-4">
							{member.achievements.slice(0, 2).map((achievement, index) => (
								<li key={index} className="text-gray-700 mb-2 text-left text-sm">
									{achievement}
								</li>
							))}
						</ul>
					</div>

					<div className="mb-8">
						<h4 className="text-sm font-semibold text-gray-900 mb-2 text-left">Certifications</h4>
						<ul className="list-disc pl-4">
							{member.certifications.slice(0, 2).map((cert, index) => (
								<li key={index} className="text-gray-700 mb-2 text-left text-sm">
									<a
										href={cert.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:text-blue-800 hover:underline"
									>
										{cert.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="absolute bottom-4 right-4">
						<span
							onClick={() => setIsDialogOpen(true)}
							className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-[12px] cursor-pointer hover:bg-blue-200 transition-colors"
						>
							See more...
						</span>
					</div>
				</div>
			</Card>

			<PersonDetailsDialog
				person={member}
				isOpen={isDialogOpen}
				onClose={() => setIsDialogOpen(false)}
			/>
		</>
	);
}

// Sample expanded data for one team member (repeat similar structure for others)
const teamMembers = [
	{
		name: "Samba Otavise",
		role: "AWS Cloud Expert",
		image: "./subscribeimage.png",
		skills: [
			"AWS", "Cloud Architecture", "Kubernetes",
			"Docker", "Terraform", "Python",
			"DevOps", "CI/CD", "Git",
			"Jenkins", "Security", "Cloud Security",
			"Prometheus", "Grafana", "ELK Stack",
			"Linux", "Windows Server", "System Design",
			"Network Architecture", "Infrastructure as Code"
		],
		achievements: [
			"Led successful migration of 200+ applications to AWS cloud",
			"Implemented serverless architecture reducing costs by 60%",
			"Designed and deployed multi-region disaster recovery solution",
			"Orchestrated migration of legacy systems to microservices architecture",
			"Implemented automated CI/CD pipelines reducing deployment time by 75%",
			"Developed cloud cost optimization strategy saving $1M annually",
			"Built scalable infrastructure supporting 10M+ daily active users",
			"Implemented zero-downtime deployment strategy across 100+ services",
			"Designed and implemented multi-cloud backup solution",
			"Achieved 99.99% uptime for critical production systems"
		],
		certifications: [
			{
				name: "AWS Solutions Architect Professional",
				url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/"
			},
			{
				name: "AWS DevOps Professional",
				url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/"
			},
			{
				name: "Certified Kubernetes Administrator",
				url: "https://www.cncf.io/certification/cka/"
			},
			{
				name: "HashiCorp Certified Terraform Associate",
				url: "https://www.hashicorp.com/certification/terraform-associate"
			},
			{
				name: "Linux Professional Institute Certification",
				url: "https://www.lpi.org/"
			}
		]
	},
	{
		name: "Kevin Tuei",
		role: "Cloud Security Specialist",
		image: "./subscribeimage.png",
		skills: [
			"Security", "Cloud Security", "Compliance",
			"Risk Management", "Pen Testing", "ISO 27001",
			"AWS", "Azure", "GCP",
			"SIEM", "Threat Detection", "Incident Response",
			"Zero Trust Architecture", "Identity Management", "Security Automation",
			"Network Security", "Encryption", "Security Frameworks",
			"DevSecOps", "Container Security"
		],
		achievements: [
			"Implemented zero-trust security architecture for Fortune 500 client",
			"Reduced security incidents by 75% through automated threat detection",
			"Led team of 5 security engineers in SOC 2 compliance project",
			"Designed and implemented multi-layer security architecture",
			"Conducted 100+ penetration tests identifying critical vulnerabilities",
			"Developed security automation reducing incident response time by 60%",
			"Implemented cloud security controls across multi-cloud environment",
			"Led security awareness training for 1000+ employees",
			"Established security operations center (SOC) from ground up",
			"Achieved ISO 27001 certification with zero non-conformities"
		],
		certifications: [
			{
				name: "CISSP",
				url: "https://www.isc2.org/Certifications/CISSP"
			},
			{
				name: "AWS Security Specialty",
				url: "https://aws.amazon.com/certification/certified-security-specialty/"
			},
			{
				name: "CompTIA Security+",
				url: "https://www.comptia.org/certifications/security"
			},
			{
				name: "Certified Ethical Hacker",
				url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
			},
			{
				name: "GIAC Security Essentials",
				url: "https://www.giac.org/certification/security-essentials-gsec"
			}
		]
	},
	{
		name: "Winfreya Eric",
		role: "Frontend Developer",
		image: "./subscribeimage.png",
		skills: [
			"React", "Next.js", "TypeScript",
			"UI/UX", "Tailwind CSS", "JavaScript",
			"GraphQL", "Redux", "Jest",
			"Webpack", "Performance Optimization", "Accessibility",
			"Responsive Design", "CSS Animation", "Component Libraries",
			"Web Standards", "Browser APIs", "PWAs",
			"State Management", "Design Systems"
		],
		achievements: [
			"Developed high-performance web apps used by 1M+ users",
			"Reduced page load time by 40% through optimization",
			"Created reusable component library used across 10+ projects",
			"Led frontend architecture for major e-commerce platform",
			"Implemented accessibility standards achieving WCAG 2.1 AA compliance",
			"Built real-time dashboard reducing data latency by 80%",
			"Mentored 15+ junior developers in modern frontend practices",
			"Developed micro-frontend architecture for large-scale application",
			"Implemented automated testing increasing coverage to 95%",
			"Created design system used by 50+ developers"
		],
		certifications: [
			{
				name: "Meta Frontend Developer",
				url: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
			},
			{
				name: "AWS Frontend Specialty",
				url: "https://aws.amazon.com/certification/"
			},
			{
				name: "Google Mobile Web Specialist",
				url: "https://developers.google.com/certification/mobile-web-specialist"
			},
			{
				name: "Advanced JavaScript Certification",
				url: "https://www.udacity.com/course/javascript-developer-nanodegree--nd0044"
			},
			{
				name: "React Native Certification",
				url: "https://www.reactnative.dev/docs/getting-started"
			}
		]
	},
	{
		name: "Jimmy Kimunyi",
		role: "Backend Developer",
		image: "./subscribeimage.png",
		skills: [
			"Node.js", "Python", "Java",
			"Microservices", "REST APIs", "GraphQL",
			"MongoDB", "PostgreSQL", "Redis",
			"Message Queues", "System Design", "API Gateway",
			"Event-Driven Architecture", "Performance Tuning", "Scalability",
			"Database Design", "Cloud Services", "Security",
			"Caching Strategies", "Service Mesh"
		],
		achievements: [
			"Designed microservices architecture handling 50M+ daily requests",
			"Reduced API response time by 70% through optimization",
			"Implemented event-driven architecture for real-time processing",
			"Built scalable payment processing system handling $100M+ annually",
			"Developed distributed caching solution reducing database load by 80%",
			"Led migration from monolith to microservices architecture",
			"Implemented automated scaling handling 10x traffic spikes",
			"Created high-performance data pipeline processing 5TB+ daily",
			"Designed fault-tolerant system achieving 99.99% uptime",
			"Mentored 20+ developers in backend best practices"
		],
		certifications: [
			{
				name: "AWS Developer Associate",
				url: "https://aws.amazon.com/certification/certified-developer-associate/"
			},
			{
				name: "MongoDB Professional Developer",
				url: "https://university.mongodb.com/certification"
			},
			{
				name: "Oracle Certified Professional Java SE Developer",
				url: "https://education.oracle.com/java-se-11-developer/pexam_1Z0-819"
			},
			{
				name: "Google Cloud Professional Developer",
				url: "https://cloud.google.com/certification/cloud-developer"
			},
			{
				name: "Kubernetes Application Developer",
				url: "https://www.cncf.io/certification/ckad/"
			}
		]
	}
];

export default function TeamPage() {
	return (
		<section className="py-12 bg-gray-50 mt-16">
			<div className="container mx-auto px-6">
				<div className="max-w-2xl mx-auto text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h2>
					<p className="text-gray-600">
						Our team of certified professionals brings years of experience in cloud computing,
						security, and software development to help you achieve your goals.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<TeamMemberCard key={index} member={member} />
					))}
				</div>
			</div>
		</section>
	);
}