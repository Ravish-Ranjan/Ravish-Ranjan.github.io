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
		<div className="w-screen background-custom flex justify-center gap-2 p-1  overflow-x-hidden">
			{skills.map((val, i) => (
				<Large
					key={i}
					className="p-1 oswald-font bg-zinc-300 dark:bg-zinc-900 rounded font-light px-2 "
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
			className="p-2 flex flex-col justify-between items-center gap-4 w-screen"
			style={{ minHeight: "80dvh" }}
			id="about"
		>
			<Marq />
			<div className="flex h-full gap-2 items-center justify-center w-full background-custom-inverted p-4 hero container">
				<p className="w-full md:w-3/5 text-balance oswald-font text-2xl text-center font-normal marq-para">
					"A highly motivated computer science student with experience
					in many programming languages and web development. Eager to
					apply my skills and knowledge to contribute to the success
					of a well-regarded Organization.
				</p>
				<img
					src="media/prof.jpg"
					className="h-96 rounded-lg lifted-bg"
				/>
			</div>
			<Marq />
		</div>
	);
}

export default About;
