import { lazy, Suspense } from "react";

import Loading from "./components/loading";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Current from "./components/current";
import About from "./components/about";
import Skills from "./components/skills";
const Projects = lazy(() => import("./components/projects"));
import Footer from "./components/footer";
import Contact from "./components/contact";
import CustomSidebar from "./components/CustomSidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { StarsBackground } from "./components/ui/stars-background";
import { ShootingStars } from "./components/ui/shooting-start";

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
