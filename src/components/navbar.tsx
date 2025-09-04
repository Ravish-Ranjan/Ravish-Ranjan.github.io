import ThemeToggle from "./ThemeToggle";
import Button from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

function Navbar() {
	return (
		<div className="flex justify-end-safe p-2 bg-zinc-300 dark:bg-zinc-800 -mt-4">
			<SidebarTrigger
				className="p-2 h-10 w-10 rounded-xl md:hidden mr-auto"
				variant={"outline"}
			/>
			<div className="hidden gap-1 md:flex group oswald ">
				<Button variant={"link"} asChild>
					<a href="#current" className="peer text-teal-800 dark:text-teal-300">Current Work</a>
				</Button>
				<Button variant={"link"} asChild>
					<a href="#about" className="peer text-teal-800 dark:text-teal-300">About Me</a>
				</Button>
				<Button variant={"link"} asChild>
					<a href="#skills" className="peer text-teal-800 dark:text-teal-300">Skills</a>
				</Button>
				<Button variant={"link"} asChild>
					<a href="#projects" className="peer text-teal-800 dark:text-teal-300">Projects</a>
				</Button>
				<Button variant={"link"} asChild>
					<a href="#contact" className="peer text-teal-800 dark:text-teal-300">Contact</a>
				</Button>
			</div>
			<ThemeToggle />
		</div>
	);
}

export default Navbar;
