import { lazy, Suspense } from "react";

import { ShootingStars } from "./components/ui/shooting-start";
import { SidebarProvider } from "./components/ui/sidebar";
import { StarsBackground } from "./components/ui/stars-background";

import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Loading from "./components/loading";
import Contact from "./components/contact";
import CustomSidebar from "./components/CustomSidebar";

const Skills = lazy(() => import("./components/skills"));
const Current = lazy(() => import("./components/current"));
const Projects = lazy(() => import("./components/projects"));


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
				<Suspense fallback={<Loading />}>
					<Current />
				</Suspense>
				{/* about */}
				<About />
				{/* skills */}
				<Suspense fallback={<Loading />}>
					<Skills />
				</Suspense>
				<Suspense fallback={<Loading />}>
					{/* projects */}
					<Projects />
				</Suspense>
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
