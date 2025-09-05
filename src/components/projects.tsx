import SepHeading from "./SepHeading";
import projects from "@/assets/projects.json";
import SinProject from "./singleProject";

function Projects() {
	return (
		<div id="projects" className="grid place-items-center min-h-96">
			<SepHeading>Projects</SepHeading>
			<div className="flex flex-wrap items-center justify-center gap-3 px-4 ">
				{projects.map((val) => {
					return <SinProject project={val} key={val.title} />;
				})}
			</div>
		</div>
	);
}

export default Projects;
