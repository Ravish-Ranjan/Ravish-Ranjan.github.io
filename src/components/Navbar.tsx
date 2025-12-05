import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Navbar.tsx
function Navbar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleScrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="flex justify-end-safe w-full items-center gap-2 p-2 bg-zinc-200 dark:bg-zinc-800">
			{pathname !== "/allprojects" && (
				<SidebarTrigger
					className="p-2 h-10 w-10 rounded-xl md:hidden mr-2"
					variant={"outline"}
				/>
			)}
			<img
				src="./logo.webp"
				alt="Logo"
				onClick={() => navigate("/")}
				className=" cursor-pointer mr-auto h-10 drop-shadow-[0px_0px_3px] drop-shadow-zinc-600 dark:drop-shadow-zinc-200"
			/>
			<div className="gap-1 flex group oswald ">
				{pathname === "/allprojects" ? (
					<Button
						variant={"link"}
						onClick={() => navigate("/")}
						className="text-teal-800 dark:text-teal-300 cursor-pointer"
					>
						Home Page
					</Button>
				) : (
					<>
						<Button
							variant={"link"}
							onClick={() => handleScrollTo("current")}
							className="text-teal-800 dark:text-teal-300 cursor-pointer hidden md:flex"
						>
							Current Work
						</Button>
						<Button
							variant={"link"}
							onClick={() => handleScrollTo("about")}
							className="text-teal-800 dark:text-teal-300 cursor-pointer hidden md:flex"
						>
							About Me
						</Button>
						<Button
							variant={"link"}
							onClick={() => handleScrollTo("skills")}
							className="text-teal-800 dark:text-teal-300 cursor-pointer hidden md:flex"
						>
							Skills
						</Button>
						<Button
							variant={"link"}
							onClick={() => handleScrollTo("projects")}
							className="text-teal-800 dark:text-teal-300 cursor-pointer hidden md:flex"
						>
							Projects
						</Button>
						<Button
							variant={"link"}
							className="text-teal-800 dark:text-teal-300 cursor-pointer hidden md:flex"
						>
							<Link to={"/allprojects"}>All Projects</Link>
						</Button>
						<Button
							variant={"link"}
							onClick={() => handleScrollTo("contact")}
							className="text-teal-800 dark:text-teal-300 cursor-pointer hidden md:flex"
						>
							Contact
						</Button>
					</>
				)}
			</div>
			<ThemeToggle />
		</div>
	);
}
export default Navbar;
