"use client"
import SepHeading from "@/components/SeprateHeading";
import SinProject from "@/components/SingleProject";
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
	const projects = all ? allProjects : allProjects.slice(0, 6);
	return (
		<div id="projects" className="grid gap-3 place-items-center min-h-96">
			<SepHeading>Projects</SepHeading>
			<div className="flex flex-wrap items-center justify-center gap-3 px-4 ">
				{projects.map((val) => {
					return <SinProject project={val} key={val.title} />;
				})}
			</div>
			<Small className="mt-6">
				<Link href={"/allprojects"}>View More</Link>
			</Small>
		</div>
	);
}

export default Projects;
