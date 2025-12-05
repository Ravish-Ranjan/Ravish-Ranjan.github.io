import { ShootingStars } from "@/components/ui/shooting-start";
import { StarsBackground } from "@/components/ui/stars-background";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CustomSidebar from "@/components/CustomSidebar";

import Skills from "@/components/Skills";
import Current from "@/components/CurrentProjectCard";
import Projects from "@/components/Projects";

function HomePage() {
	return (
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
			<Footer />
			<StarsBackground className="-z-20 bg-zinc-200 dark:bg-zinc-900 h-full" />
			<ShootingStars className="-z-10 min-h-screen" />
		</div>
	);
}

export default HomePage;
