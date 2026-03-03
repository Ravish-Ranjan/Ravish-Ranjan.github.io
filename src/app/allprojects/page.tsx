"use client";
import { useEffect, useState } from "react";
import SepHeading from "../../components/SeprateHeading";
import SinProject from "../../components/SingleProject";

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
			<SepHeading>All Projects</SepHeading>
			<div className="flex flex-wrap justify-center items-center gap-4 p-4">
				{projects.map((val) => {
					return <SinProject project={val} key={val.title} />;
				})}
			</div>
		</>
	);
}

export default Page;
