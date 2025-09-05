import { Calendar, Clock, GitHub, Link } from "@/assets/icones";
import Button from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import Badge from "./ui/badge";

type Project = {
	id: string;
	title: string;
	description: string;
	status: string;
	technologies: string[];
	progress: number;
	githubUrl?: string;
	liveUrl?: string;
	startDate: string;
	estimatedCompletion?: string;
};

const getStatusColor = (status: string) => {
	switch (status) {
		case "In Progress":
			return "bg-cyan-700 dark:bg-cyan-400 text-primary-foreground";
		case "Planning":
			return "bg-violet-400 dark:bg-violet-600 text-muted-foreground";
		case "Testing":
			return "bg-purple-300 dark:bg-purple-700 text-accent-foreground";
		case "Launching Soon":
			return "bg-red-400 text-white";
		default:
			return "bg-secondary text-secondary-foreground";
	}
};

function CurProj({ project }: { project: Project }) {
	return (
		<Card
			key={project.id}
			className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 oswald"
		>
			<CardHeader className="space-y-3">
				<div className="flex items-center justify-between">
					<CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
						{project.title}
					</CardTitle>
					<Badge className={getStatusColor(project.status)}>
						{project.status}
					</Badge>
				</div>
				<CardDescription className="text-sm text-muted-foreground leading-relaxed">
					{project.description}
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-4">
				{/* Progress Bar */}
				<div className="space-y-2">
					<div className="flex justify-between items-center text-md">
						<span className="text-accent-foreground">Progress</span>
						<span className="font-medium text-foreground">
							{project.progress}%
						</span>
					</div>
					<div className="w-full bg-zinc-400 dark:bg-zinc-600 rounded-full h-2">
						<div
							className="bg-zinc-800 dark:bg-zinc-300 h-2 rounded-full transition-all duration-500"
							style={{ width: `${project.progress}%` }}
						/>
					</div>
				</div>

				{/* Technologies */}
				<div className="space-y-2">
					<span className="text-md font-medium text-foreground oswald-400">
						Technologies
					</span>
					<div className="flex flex-wrap gap-1">
						{project.technologies.map((tech) => (
							<Badge
								key={tech}
								variant="secondary"
								className="text-sm oswald-400"
							>
								{tech}
							</Badge>
						))}
					</div>
				</div>

				{/* Timeline */}
				<div className="space-y-2 text-sm text-muted-foreground">
					<div className="flex items-center gap-2">
						<Calendar className="w-4 h-4" />
						<span>
							Started:{" "}
							{new Date(project.startDate).toLocaleDateString()}
						</span>
					</div>
					{project.estimatedCompletion && (
						<div className="flex items-center gap-2">
							<Clock className="w-4 h-4" />
							<span>
								Est. completion:{" "}
								{new Date(
									project.estimatedCompletion
								).toLocaleDateString()}
							</span>
						</div>
					)}
				</div>

				{/* Action Buttons */}
				<div className="flex gap-2 pt-2">
					{project.githubUrl && (
						<Button
							variant="outline"
							size="sm"
							className="flex-1 bg-transparent"
							asChild
						>
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<GitHub className="w-4 h-4 mr-2" />
								Code
							</a>
						</Button>
					)}
					{project.liveUrl && (
						<Button size="sm" className="flex-1" asChild>
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Link className="w-4 h-4 mr-2" />
								Demo
							</a>
						</Button>
					)}
				</div>
			</CardContent>
		</Card>
	);
}

export default CurProj;
