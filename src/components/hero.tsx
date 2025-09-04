import clsx from "clsx";
import Button from "./ui/button";
import { H1, P } from "./ui/Typography";
import illus from "@/assets/illus.svg";

function Hero() {
	return (
		<div
			style={{ minHeight: "80vh" }}
			className="p-8 flex flex-col justify-evenly items-center md:flex-row-reverse w-7/8 mx-auto gap-4 -mt-4"
		>
			<img src={illus} alt="image" className="w-full md:w-5/12 drop-shadow-2xl" />
			<div className="w-full md:w-7/12 h-auto grid">
				<H1
					className={clsx(
						"oswald drop-shadow-[3px_3px_0px] drop-shadow-zinc-400 dark:drop-shadow-zinc-700 grid md:flex place-items-center gap-2 w-full"
					)}
				>
					It's Me,{" "}
					<span
						className={clsx(
							"bg-clip-text text-transparent",
							"bg-linear-to-r from-cyan-600 dark:from-cyan-400 to-purple-900 dark:to-purple-700"
						)}
					>
						Ravish Ranjan
					</span>
				</H1>
				<P className="oswald-400 md:text-start text-center">
					Seeking challenging and reputed career opportunities in web
					development, specifically in front-end development. where I
					can apply my skills and knowledge to develop and captivating
					user interfaces.
				</P>
				<div className="gap-2 flex mt-4 justify-center md:justify-start">
					<Button variant={"outline"} asChild>
						<a href="#contact">Hire Me</a>
					</Button>
					<Button variant={"outline"}>Download CV</Button>
					<Button variant={"outline"} asChild>
						<a href="#projects">Projects</a>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
