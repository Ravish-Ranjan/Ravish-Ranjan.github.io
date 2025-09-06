import { P, Small } from "@/components/ui/Typography";
import clsx from "clsx";
import SepHeading from "./SepHeading";

const skills = [
	"ReactJS",
	"TypeScript",
	"NodeJS",
	"MongoDB",
	"Zustand",
	"Native/Expo",
	"MySQL",
	"TailwindCSS",
	"ExpressJS",
	"Git",
	"ElectronJS",
	"RestAPI",
	"MaterialUI",
	"Shadcn",
];

function Marq({ rev = false }: { rev?: boolean }) {
	const skls = rev ? [...skills].reverse() : skills;
	return (
		<div
			className={clsx(
				"flex w-full justify-center gap-2 py-1 flex-wrap overflow-y-hidden h-10",
				"bg-linear-to-r bg-[linear-gradient(to_right,transparent_0%,theme(colors.zinc.400)_20%,theme(colors.zinc.400)_80%,transparent_100%)]",
				"dark:bg-[linear-gradient(to_right,transparent_0%,theme(colors.zinc.700)_10%,theme(colors.zinc.700)_90%,transparent_100%)]"
			)}
		>
			{skls.map((val, i) => (
				<Small
					key={i}
					className="text-md oswald-400 py-1 px-2 rounded bg-zinc-300 dark:bg-zinc-900 "
				>
					{val}
				</Small>
			))}
		</div>
	);
}

function About() {
	return (
		<div
			className="w-full flex flex-col items-center gap-4 "
			style={{ minHeight: "60dvh" }}
			id="about"
		>
			<SepHeading>About Me</SepHeading>
			<Marq />
			<div className="w-11/12 mx-4 md:mx-0 flex-col md:flex-row flex justify-center items-center gap-2 bg-zinc-300 dark:bg-zinc-800 p-4 rounded-2xl shadow-2xl">
				<img
					src="media/prof.webp"
					className="w-3/4 sm:w-1/2 md:w-1/4 img-back shadow-[8px_8px_0px] rounded-2xl shadow-zinc-500 dark:shadow-zinc-700"
					alt="profile picture"
				/>
				<P className="w-2/3 text-lg md:text-2xl col-span-1 oswald-300 text-center text-balance md:col-span-3 first-letter:text-5xl first-letter:text-teal-500">
					"A highly motivated computer science student with experience
					in many programming languages and web development. Eager to
					apply my skills and knowledge to contribute to the success
					of a well-regarded Organization.
				</P>
			</div>
			<Marq rev={true} />
		</div>
	);
}

export default About;
