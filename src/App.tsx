import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AllProjects from "@/pages/AllProjects";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { GoUp } from "@/assets/icones";
function App() {
	const [showScrollTop, setShowScrollTop] = useState(false);
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	useEffect(() => {
		const handleScroll = () => {
			// Show button after scrolling past 400px (roughly past the header section)
			setShowScrollTop(window.scrollY > 400);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<HashRouter>
			<SidebarProvider defaultOpen={false} className="flex flex-col">
				{/* navbar */}
				<Navbar />
				<Routes>
					<Route index path="/" element={<HomePage />} />
					<Route path="/allprojects" element={<AllProjects />} />
				</Routes>
				{showScrollTop && (
					<button
						onClick={scrollToTop}
						className="fixed bottom-8 right-8 p-3 bg-purple-800 hover:bg-purple-900 text-white rounded-full shadow-lg transition-all hover:scale-110 z-50"
						aria-label="Scroll to top"
					>
						<GoUp className="w-6 h-6" />
					</button>
				)}
			</SidebarProvider>
		</HashRouter>
	);
}

export default App;
