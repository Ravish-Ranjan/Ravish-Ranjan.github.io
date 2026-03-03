import SepHeading from "@/components/SeprateHeading";
import proj from "@/assets/projects.json";
import SinProject from "@/components/SingleProject";
import { Small } from "@/components/ui/Typography";
import Link from "next/link";

function Projects({ all = false }: { all?: boolean }) {
	const projects = all ? proj : proj.slice(0, 6);
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
