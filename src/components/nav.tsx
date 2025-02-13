import ModeToggle from "./ui/mode-toggle";
import logo from "@/assets/logo.svg";
import { H4 } from "./ui/Typography";

function Nav() {
	return (
		<div className="flex items-center justify-end w-full h-12 gap-4 px-4">
			<div className="flex items-center justify-center h-full gap-2 mr-auto">
				<img src={logo} alt="logo" className="h-4/5 aspect-square" />
				<H4 className="oswald-font">Portfolio</H4>
			</div>
			<div className="flex gap-2 oswald-font text-sky-900 nav-links dark:text-sky-300">
				<a className="hover:underline underline-2" href="#about">
					About
				</a>
				<a className="hover:underline underline-2" href="#projects">
					Work
				</a>
				<a className="hover:underline underline-2" href="#contact">
					Contact
				</a>
			</div>
			<ModeToggle />
		</div>
	);
}

export default Nav;
