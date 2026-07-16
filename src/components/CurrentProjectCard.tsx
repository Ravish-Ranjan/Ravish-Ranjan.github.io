"use client";

import { Calendar, Clock, GitHub, LinkIcon } from "@/assets/icones";
import Button from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { useState } from "react";

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

const getStatusColor = (status: Project["status"]) => {
	switch (status) {
		case "In Progress":
			return "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30";
		case "Planning":
			return "bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30";
		case "Testing":
			return "bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30";
		case "Launching Soon":
			return "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30";
		default:
			return "bg-zinc-500/20 text-zinc-700 dark:text-zinc-300 border border-zinc-500/30";
	}
};

const getProgressColor = (progress: number) => {
	if (progress >= 75) return "bg-linear-to-r from-emerald-500 to-emerald-600";
	if (progress >= 50) return "bg-linear-to-r from-cyan-500 to-cyan-600";
	if (progress >= 25) return "bg-linear-to-r from-amber-500 to-amber-600";
	return "bg-linear-to-r from-red-500 to-red-600";
};

function CurProj({ project }: { project: Project }) {
	return (
		<Card
			key={project.id}
			className="hover:shadow-lg hover:outline-sky-900 hover:outline-2 hover:dark:outline-sky-300 oswald w-11/12 md:w-md transition-all duration-500"
		>
			<CardHeader className="space-y-3 relative z-10">
				<div className="flex items-start justify-between gap-3">
					<div className="flex-1">
						<CardTitle className="text-lg font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
							{project.title}
						</CardTitle>
					</div>
					<Badge
						variant="secondary"
						className={`whitespace-nowrap font-semibold text-xs ${getStatusColor(
							project.status,
						)}`}
					>
						{project.status}
					</Badge>
				</div>
				<CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
					{project.description}
				</CardDescription>
			</CardHeader>

			<CardContent className="flex flex-col gap-4 relative z-10">
				<div className="space-y-2">
					<div className="flex justify-between items-center text-sm font-medium">
						<span className="text-foreground">Progress</span>
						<span className="text-cyan-600 dark:text-cyan-400 font-bold">
							{project.progress}%
						</span>
					</div>
					<div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2.5 overflow-hidden shadow-sm">
						<div
							className={`h-full rounded-full transition-all duration-700 ${getProgressColor(
								project.progress,
							)}`}
							style={{ width: `${project.progress}%` }}
						/>
					</div>
				</div>

				{/* Technologies */}
				<div className="space-y-2">
					<span className="text-xs uppercase tracking-widest font-semibold text-zinc-600 dark:text-zinc-400">
						Tech Stack
					</span>
					<div className="flex flex-wrap gap-1.5">
						{project.technologies.map((tech) => (
							<Badge
								key={tech}
								variant="secondary"
								className="text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-colors font-medium"
							>
								{tech}
							</Badge>
						))}
					</div>
				</div>

				{/* Timeline */}
				<div className="space-y-1.5 text-xs text-muted-foreground border-t border-zinc-200 dark:border-zinc-700 pt-3">
					<div className="flex items-center gap-2">
						<Calendar className="w-3.5 h-3.5 text-white" />
						<span>
							Started:{" "}
							<span className="font-medium text-foreground">
								{new Date(project.startDate).toLocaleDateString(
									"en-US",
									{
										month: "short",
										day: "numeric",
										year: "numeric",
									},
								)}
							</span>
						</span>
					</div>
					{project.estimatedCompletion && (
						<div className="flex items-center gap-2">
							<Clock className="w-3.5 h-3.5 text-white" />
							<span>
								Est.:{" "}
								<span className="font-medium text-foreground">
									{new Date(
										project.estimatedCompletion,
									).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric",
									})}
								</span>
							</span>
						</div>
					)}
				</div>

				{/* Action Buttons */}
				<div className="flex gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-700">
					{project.githubUrl && (
						<Button
							variant="outline"
							size="sm"
							className="flex-1 gap-1.5 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all"
							asChild
						>
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<GitHub className="w-4 h-4" />
								<span>Code</span>
							</a>
						</Button>
					)}
					{project.liveUrl && (
						<Button
							size="sm"
							className="flex-1 gap-1.5 font-medium bg-linear-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white transition-all transform hover:scale-105"
							asChild
						>
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<LinkIcon className="w-4 h-4" />
								<span>Demo</span>
							</a>
						</Button>
					)}
				</div>
			</CardContent>
		</Card>
	);
}

export default CurProj;
