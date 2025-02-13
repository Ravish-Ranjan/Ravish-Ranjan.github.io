import { H1, P, Small } from "./ui/Typography";
import illustration from "@/assets/illus.svg";

function Hero() {
	return (
		<div
			className="items-center w-full px-10 py-4 hero md:px-20"
			style={{ height: "90dvh" }}
		>
			<div className="grid w-full gap-4">
				<H1 className="text-transparent oswald-font bg-clip-text bg-gradient-to-r to-purple-700 from-cyan-400 lifted">
					Hi, Ravish here
				</H1>
				<P className="text-balance  [&:not(:first-child)]:my-2  leading-6">
					Seeking challenging and reputed career opportunities in web
					development, specifically in front-end development. where I
					can apply my skills and knowledge to develop and captivating
					user interfaces.
				</P>
				<div className="flex flex-wrap gap-4 text-cyan-800 dark:text-cyan-500 oswald-font">
					<Small>Proficiency</Small>
					<Small>Problem-Solving</Small>
					<Small>Collaboration</Small>
					<Small>Passion</Small>
					<Small>Adaptability</Small>
				</div>
			</div>
			<img
				src={illustration}
				alt="illustration"
				className="w-full h-full md:w-1/2 sm:w-1/2"
				style={{
					backgroundImage:
						"radial-gradient(#000000b3,transparent 70%)",
				}}
			/>
		</div>
	);
}

export default Hero;
