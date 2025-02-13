import projects from "@/assets/projects.json";
import { H2, Muted, Small } from "./ui/Typography";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

interface ProjectProps {
	title: string;
	link: string;
	image: string;
	description: string;
}

function Project({ title, link, image, description }: ProjectProps) {
	return (
		<div
			className="min-w-72 p-1 flex-1 h-32 flex outline-2 outline-gray-500 gap-2 rounded-lg hover:outline-sky-900 hover:outline-4 px-2 hover:dark:outline-sky-300 backdrop-blur-xs"
			style={{ transition: ".25s ease-in-out" }}
		>
			<img
				src={image}
				alt={title}
				className="h-full object-cover aspect-square bg-zinc-300 dark:bg-zinc-800 rounded"
			/>
			<div className="w-full h-full flex flex-col justify-between gap-2">
                <div></div>
				<div>
					<Small className="text-lg oswald-font">{title}</Small>
					<Muted className="text-sm [&:not(:first-child)]:my-0  text-balance overflow-ellipsis line-clamp-2 oswald-font">
						{description}
					</Muted>
				</div>
				<div className="flex cursor-pointer">
					<a href={link} target="_blank" className="cursor-pointer">
						<Button
							variant={"link"}
							className="underline px-2 cursor-pointer"
						>
							Visit
						</Button>
					</a>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								className="cursor-pointer outline-1 hover:outline-zinc-300 p-2 dark:outline-zinc-700"
								variant={"outline"}
							>
								Preview
							</Button>
						</DialogTrigger>
						<DialogContent
							className="w-4xl my-2 flex flex-col object-contain"
							style={{
								aspectRatio: "4/3",
								width: "98vw !important",
							}}
						>
							<Small>{title}</Small>
							<iframe
								src={link}
								title={title}
								className="h-full w-full rounded bg-white"
							/>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<div
			className="w-full flex flex-col items-center p-4 gap-4"
			id="projects"
		>
			<H2 className="oswald-font relative w-full text-center grid place-items-center font-normal">
				<span className="text-3xl dark:bg-zinc-800 px-4 title-custom">
					Projects
				</span>
				<div className="w-full absolute h-1 bg-sky-900 -z-10 dark:bg-sky-300"></div>
			</H2>
			<div className="flex flex-wrap px-8 justify-between items-center gap-2">
				{projects.map((val, i) => (
					<Project {...val} key={i} />
				))}
			</div>
		</div>
	);
}

export default Projects;
