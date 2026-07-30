"use client";
import SeparatorHeading from "@/components/SepratorHeading";
import ProjectCard from "@/components/ProjectCard";
import { Small } from "@/components/ui/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";

function Projects({ all = false }: { all?: boolean }) {
	const [allProjects, setCurrentProjects] = useState<null | ProjectType[]>(
		null,
	);

	useEffect(() => {
		fetch("/config/projects.json")
			.then((res) => res.json())
			.then((data) => setCurrentProjects(data));
	}, []);
	if (!allProjects) return null;
	const projects = all ? allProjects : allProjects.slice(0, 8);
	return (
		<section id="projects" className="grid place-items-center">
			<SeparatorHeading>Projects</SeparatorHeading>
			<div className="flex flex-wrap items-center justify-center gap-4 w-full">
				{projects.map((val) => {
					return <ProjectCard project={val} key={val.title} />;
				})}
			</div>
			<Small className="mt-4">
				<Link
					href={"/allprojects"}
					className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium transition-colors"
				>
					View More
				</Link>
			</Small>
		</section>
	);
}

export default Projects;
