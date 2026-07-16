import { LinkIcon } from "@/assets/icones";
import Button from "@/components/ui/button";
import { Muted, Small } from "@/components/ui/Typography";
import Image from "next/image";
import Link from "next/link";

const getCategoryColor = (cat: string) => {
	switch (cat) {
		case "Package":
			return "bg-red-500/60 text-black dark:text-white border-red-500/30";
		case "Open Source":
			return "bg-purple-500/60 text-black dark:text-white border-purple-500/30";
		case "Tool":
			return "bg-amber-500/60 text-black dark:text-white border-amber-500/30";
		case "API":
			return "bg-blue-500/60 text-black dark:text-white border-blue-500/30";
		case "Web App":
			return "bg-emerald-500/60 text-black dark:text-white border-emerald-500/30";
		default:
			return "bg-zinc-500/20 text-zinc-700 dark:text-zinc-300 border-zinc-500/30";
	}
};

function ProjectCard({ project }: { project: ProjectType }) {
	return (
		<div className="group relative h-80 w-72 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
			{/* Gradient border effect */}
			<div className="absolute inset-0 bg-linear-to-t from-white/50 dark:from-zinc-950 to-transparent rounded-xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

			{/* Background Image */}
			<div className="absolute inset-0 overflow-hidden">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				{/* Overlay gradient */}
				<div className="absolute inset-0 bg-linear-to-t from-zinc-400 via-zinc-950/60 to-transparent dark:from-zinc-900 dark:via-zinc-950/50 transition-opacity duration-300" />
			</div>

			{/* Content wrapper */}
			<div className="relative h-full flex flex-col justify-between p-5 z-20">
				{/* Top Section - Category Badge */}
				<div className="flex justify-between items-start">
					<div
						className={`oswald px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 ${getCategoryColor(
							project.category,
						)}`}
					>
						{project.category}
					</div>
				</div>

				{/* Bottom Section */}
				<div className="space-y-3">
					{/* Title */}
					<div>
						<Small className="text-lg font-bold text-white oswald block truncate">
							{project.title}
						</Small>
					</div>

					{/* Description */}
					<Muted className="text-sm text-zinc-200 line-clamp-2 transition-all duration-300 oswald-400">
						{project.description}
					</Muted>

					{/* CTA Button */}
					<Button
						className="w-full px-4 py-2 rounded-lg font-semibold text-sm bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white transition-all duration-300 transform hover:scale-105 group/btn"
						asChild
					>
						<Link
							href={project.link}
							target="_blank"
							className="flex items-center justify-center gap-2 cursor-pointer"
						>
							<LinkIcon className="w-4 h-4" />
							<span>Explore Project</span>
						</Link>
					</Button>
				</div>
			</div>

			{/* Shine effect on hover */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-linear-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-opacity duration-1000 pointer-events-none z-30" />
		</div>
	);
}

export default ProjectCard;
