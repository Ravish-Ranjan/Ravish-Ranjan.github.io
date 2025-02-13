import ModeToggle from "./ui/mode-toggle";
import logo from "@/assets/logo.svg";
import { H4 } from "./ui/Typography";

function Nav() {
	return (
		<div className="w-full h-12 flex justify-end items-center px-4 gap-4">
			<div className="mr-auto flex justify-center items-center h-full gap-2">
				<img
					src={logo}
					alt="logo"
					className="h-4/5 aspect-square"
				/>
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
