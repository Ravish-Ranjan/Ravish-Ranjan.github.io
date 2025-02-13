import { Large } from "./ui/Typography";

const skills = [
	"ReactJS",
	"TypeScript",
	"NodeJS",
	"MangoDB",
	"Python",
	"C++",
	"MySQL",
	"TailwindCSS",
	"ExpressJS",
	"Git",
	"SCSS",
	"RestAPI",
	"MaterialUI",
	"Shadcn",
	"BlueprintJS",
];

function Marq() {
	return (
		<div className="flex justify-center w-screen gap-2 p-1 overflow-x-hidden background-custom overlay-shadow">
			{skills.map((val, i) => (
				<Large
					key={i}
					className="p-1 px-2 font-light rounded oswald-font bg-zinc-300 dark:bg-zinc-900 "
				>
					{val}
				</Large>
			))}
		</div>
	);
}

function About() {
	return (
		<div
			className="flex flex-col items-center justify-between w-screen gap-4 p-2"
			style={{ minHeight: "80dvh" }}
			id="about"
		>
			<Marq />
			<div className="container flex items-center justify-center w-full h-full gap-2 p-4 background-custom-inverted hero">
				<p className="w-full text-2xl font-light text-center md:w-3/5 text-balance oswald-font marq-para">
					"A highly motivated computer science student with experience
					in many programming languages and web development. Eager to
					apply my skills and knowledge to contribute to the success
					of a well-regarded Organization.
				</p>
				<img
					src="media/prof.jpg"
					className="rounded-lg h-96 lifted-bg"
					alt="profile picture"
				/>
			</div>
			<Marq />
		</div>
	);
}

export default About;
