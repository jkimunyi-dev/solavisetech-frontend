"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveLeft, Search } from "lucide-react";

export default function NotFound() {
	const router = useRouter();

	return (
		<div className="h-screen w-full flex flex-col items-center justify-center bg-white">
			{/* Container */}
			<div className="text-center px-4 lg:px-0">
				{/* 404 Text */}
				<h1 className="text-8xl font-bold text-blue-800 mb-4">404</h1>

				{/* Search Icon */}
				<div className="mb-8 flex justify-center">
					<Search className="h-24 w-24 text-gray-400 animate-pulse" />
				</div>

				{/* Message */}
				<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
					Page Not Found
				</h2>
				<p className="text-gray-600 mb-8 max-w-md mx-auto">
					We couldn't find the page you're looking for. The page might have been removed, renamed, or doesn't exist.
				</p>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Button
						variant="outline"
						onClick={() => router.back()}
						className="flex items-center gap-2"
					>
						<MoveLeft size={16} />
						Go Back
					</Button>

					<Button
						onClick={() => router.push('/')}
						className="flex items-center gap-2"
					>
						Return Home
					</Button>
				</div>
			</div>
		</div>
	);
}