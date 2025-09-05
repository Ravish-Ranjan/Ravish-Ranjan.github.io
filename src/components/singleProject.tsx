import { Link } from "@/assets/icones";
import Button from "./ui/button";
import { Muted, Small } from "./ui/Typography";

interface ProjectProps {
	project: {
		title: string;
		link: string;
		image: string;
		description: string;
	};
}
function SinProject({ project }: ProjectProps) {
	return (
		<div
			className="flex flex-col items-center h-72 gap-2 p-1 rounded-lg w-72 outline-2 outline-gray-500 hover:outline-sky-900 hover:outline-4 hover:dark:outline-sky-300 backdrop-blur-xs"
			style={{ transition: ".25s ease-in-out" }}
		>
			<img
				src={project.image}
				alt={project.title}
				style={{ aspectRatio: "16/9" }}
				className="h-1/2 w-full object-fill rounded-lg img-back bg-zinc-300 dark:bg-zinc-800"
			/>
			<div className="flex flex-col justify-between h-1/2 w-full p-2">
				<div className="grid place-items-center ">
					<Small className="text-lg oswald">{project.title}</Small>
					<Muted className="text-sm text-center text-balance overflow-ellipsis line-clamp-2 oswald">
						{project.description}
					</Muted>
				</div>
				<Button className="px-2 cursor-pointer w-full" variant={"secondary"} asChild>
					<a
						href={project.link}
						target="_blank"
						className="cursor-pointer"
					>
						<Link />
						Visit
					</a>
				</Button>
			</div>
		</div>
	);
}
export default SinProject;
