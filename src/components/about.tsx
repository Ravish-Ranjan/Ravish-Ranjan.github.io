import { P, Small } from "@/components/ui/Typography";
import clsx from "clsx";

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
				"flex justify-center gap-2 p-1 overflow-x-hidden max-w-full  w-full bg-linear-to-r",
				"bg-[linear-gradient(to_right,transparent_0%,theme(colors.zinc.400)_20%,theme(colors.zinc.400)_80%,transparent_100%)]",
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
			className="flex flex-col items-center justify-between gap-2 p-2"
			style={{ minHeight: "80dvh" }}
			id="about"
		>
			<Marq />
			<div className="max-w-5xl grid md:grid md:grid-cols-4 gap-4 place-items-center bg-zinc-300 dark:bg-zinc-900 p-4 rounded-2xl shadow-2xl">
				<div className="rounded-lg col-span-1 w-4/7 md:w-auto">
					<img
						src="media/prof.jpg"
						className="h-full w-full img-back shadow-[8px_8px_0px] rounded-2xl shadow-zinc-500 dark:shadow-zinc-700"
						alt="profile picture"
					/>
				</div>
				<P className="text-lg md:text-2xl col-span-1 oswald-300 text-center text-balance md:col-span-3 first-letter:text-5xl first-letter:text-teal-500">
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
