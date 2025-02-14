import { H1, Large, P } from "./ui/Typography";
import illustration from "@/assets/illus.svg";

function Hero() {
	return (
		<div
			className="items-center w-full px-10 hero md:px-20"
			style={{ height: "80dvh" }}
		>
			<img
				src={illustration}
				alt="illustration"
				className="w-full h-1/2 md:w-1/2 sm:w-1/2 sm:h-full"
			/>
			<div className="grid w-full gap-4">
				<H1 className="text-transparent oswald-font bg-clip-text bg-gradient-to-r to-purple-700 from-cyan-400 lifted">
					Hi, Ravish here
				</H1>
				<P className="text-balance  [&:not(:first-child)]:my-2 leading-6 oswald-font">
					Seeking challenging and reputed career opportunities in web
					development, specifically in front-end development. where I
					can apply my skills and knowledge to develop and captivating
					user interfaces.
				</P>
				<div className="flex flex-wrap gap-4 text-cyan-800 dark:text-cyan-500 oswald-font">
					<Large>Proficiency</Large>
					<Large>Problem-Solving</Large>
					<Large>Collaboration</Large>
					<Large>Passion</Large>
					<Large>Adaptability</Large>
				</div>
			</div>
		</div>
	);
}

export default Hero;
