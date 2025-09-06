import { ShootingStars } from "./components/ui/shooting-start";
import { SidebarProvider } from "./components/ui/sidebar";
import { StarsBackground } from "./components/ui/stars-background";

import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import CustomSidebar from "./components/CustomSidebar";

import Skills from "./components/skills";
import Current from "./components/current";
import Projects from "./components/projects";

function App() {
	return (
		<SidebarProvider defaultOpen={false}>
			<div className="w-screen overflow-x-hidden min-h-screen grid gap-y-4">
				<CustomSidebar />
				{/* navbar */}
				<Navbar />
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
				<ShootingStars className="-z-10 h-screen" />
			</div>
		</SidebarProvider>
	);
}

export default App;
