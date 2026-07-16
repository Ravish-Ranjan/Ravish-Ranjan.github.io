"use client";
import { useEffect, useState } from "react";
import SeparatorHeading from "../../components/SepratorHeading";
import ProjectCard from "../../components/ProjectCard";

function Page() {
	const [projects, setProjects] = useState<null | ProjectType[]>(null);

	useEffect(() => {
		fetch("/config/projects.json")
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);

	if (!projects) return null;
	return (
		<>
			<SeparatorHeading>All Projects</SeparatorHeading>
			<div className="flex flex-wrap justify-center items-center gap-4 p-4">
				{projects.map((val) => {
					return <ProjectCard project={val} key={val.title} />;
				})}
			</div>
		</>
	);
}

export default Page;
