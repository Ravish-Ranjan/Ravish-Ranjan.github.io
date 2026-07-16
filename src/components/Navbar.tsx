"use client";
import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
	const router = useRouter();
	const pathname = usePathname();
	const handleScrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="flex justify-between w-full items-center gap-4 px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-40 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
			<div className="flex items-center gap-2">
				{pathname !== "/allprojects/" ? (
					<SidebarTrigger
						className="p-2 h-10 w-10 rounded-lg md:hidden"
						variant={"ghost"}
					/>
				) : (
					<div className="w-8"></div>
				)}
			</div>
			<nav
				className={`md:flex gap-1 group oswald items-center ${pathname === "/allprojects/" ? "" : "hidden"}`}
			>
				{pathname === "/allprojects/" ? (
					<Button
						variant={"ghost"}
						onClick={() => router.push("/")}
						className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer font-medium text-center"
					>
						Home Page
					</Button>
				) : (
					<>
						<Button
							variant={"ghost"}
							onClick={() => handleScrollTo("current")}
							className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer font-medium"
						>
							Current Work
						</Button>
						<Button
							variant={"ghost"}
							onClick={() => handleScrollTo("about")}
							className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer font-medium"
						>
							About Me
						</Button>
						<Button
							variant={"ghost"}
							onClick={() => handleScrollTo("skills")}
							className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer font-medium"
						>
							Skills
						</Button>
						<Button
							variant={"ghost"}
							onClick={() => handleScrollTo("projects")}
							className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer font-medium"
						>
							Projects
						</Button>
						<Button
							variant={"ghost"}
							className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer font-medium"
						>
							<Link href={"/allprojects"}>All Projects</Link>
						</Button>
						<Button
							variant={"ghost"}
							onClick={() => handleScrollTo("contact")}
							className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer font-medium"
						>
							Contact
						</Button>
					</>
				)}
			</nav>
			<ThemeToggle />
		</div>
	);
}
export default Navbar;
