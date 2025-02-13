import projects from "@/assets/projects.json";
import { H2, Muted, Small } from "./ui/Typography";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface ProjectProps {
	title: string;
	link: string;
	image: string;
	description: string;
}

function Project({ title, link, image, description }: ProjectProps) {
	return (
		<div
			className="flex flex-1 h-32 gap-2 p-1 px-2 rounded-lg min-w-72 outline-2 outline-gray-500 hover:outline-sky-900 hover:outline-4 hover:dark:outline-sky-300 backdrop-blur-xs"
			style={{ transition: ".25s ease-in-out" }}
		>
			<img
				src={image}
				alt={title}
				className="object-cover h-full rounded aspect-square bg-zinc-300 dark:bg-zinc-800"
			/>
			<div className="flex flex-col justify-between w-full h-full gap-2">
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
							className="px-2 underline cursor-pointer"
						>
							Visit
						</Button>
					</a>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								className="p-2 cursor-pointer outline-1 hover:outline-zinc-300 dark:outline-zinc-700"
								variant={"outline"}
							>
								Preview
							</Button>
						</DialogTrigger>
						<DialogContent
							className="flex flex-col object-contain my-2 w-4xl"
							style={{
								aspectRatio: "4/3",
								width: "98vw !important",
							}}
						>
							<DialogTitle>
								<Small>{title}</Small>
							</DialogTitle>
							<iframe
								src={link}
								title={title}
								className="w-full h-full bg-white rounded"
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
			className="flex flex-col items-center w-full gap-4 p-4"
			id="projects"
		>
			<H2 className="relative grid w-full font-normal text-center oswald-font place-items-center">
				<span className="px-4 text-3xl dark:bg-zinc-800 title-custom">
					Projects
				</span>
				<div className="absolute w-full h-1 bg-sky-900 -z-10 dark:bg-sky-300"></div>
			</H2>
			<div className="flex flex-wrap items-center justify-between gap-2 px-8">
				{projects.map((val, i) => (
					<Project {...val} key={i} />
				))}
			</div>
		</div>
	);
}

export default Projects;
