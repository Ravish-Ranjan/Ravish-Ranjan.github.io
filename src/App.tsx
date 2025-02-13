import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Projects from "./components/projects";
import { ShootingStars } from "./components/ui/shooting-start";
import { StarsBackground } from "./components/ui/stars-background";

function App() {
	return (
		<>
			<Nav />
			<Hero />
			<About />
			<Projects />
			<Footer/>
			<ShootingStars className="-z-10" />
			<StarsBackground className="-z-20" />
		</>
	);
}

export default App;
