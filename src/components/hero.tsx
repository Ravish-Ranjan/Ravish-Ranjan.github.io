import { H1, P, Small } from "./ui/Typography";
import illustration from "@/assets/illus.svg";

function Hero() {
	return (
		<div
			className="items-center px-10 w-full hero py-4 md:px-20"
			style={{ height: "90dvh" }}
		>
			<div className="gap-4 grid w-full">
				<H1 className="oswald-font text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-cyan-400 lifted">
					Hi, Ravish here
				</H1>
				<P className="text-balance  [&:not(:first-child)]:my-2  leading-6">
					Seeking challenging and reputed career opportunities in web
					development, specifically in front-end development. where I
					can apply my skills and knowledge to develop and captivating
					user interfaces.
				</P>
				<div className="flex text-cyan-800 gap-4 flex-wrap dark:text-cyan-500 oswald-font">
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
				className="h-full w-full md:w-1/2 sm:w-1/2"
				style={{
					backgroundImage:
						"radial-gradient(#000000b3,transparent 70%)",
				}}
			/>
		</div>
	);
}

export default Hero;
