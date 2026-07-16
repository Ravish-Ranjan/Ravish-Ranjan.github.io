"use client";

import { GoUp } from "@/assets/icones";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Current from "@/components/CurrentProjects";
import CustomSidebar from "@/components/CustomSidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";

export default function Home() {
	const [showScrollTop, setShowScrollTop] = useState(false);
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 400);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<>
			{/* navbar */}
			<div className="w-full overflow-x-hidden min-h-screen grid gap-y-4">
				{/* custom sidebar */}
				<CustomSidebar />
				{/* hero */}
				<Hero />
				{/* currently working on */}
				<Current />
				{/* about */}
				<About />
				{/* skills */}
				<Skills />
				{/* projects */}
				<Projects />
				{/* contact */}
				<Contact />
				{/* footer */}
			</div>
			{showScrollTop && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 p-3 bg-linear-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-lg transition-all hover:scale-110 z-50"
					aria-label="Scroll to top"
				>
					<GoUp className="w-6 h-6" />
				</button>
			)}
		</>
	);
}
