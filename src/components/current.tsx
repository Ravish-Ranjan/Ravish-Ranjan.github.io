import CurProj from "./CurProj";
import SepHeading from "./SepHeading";
import curProjects from "@/assets/currproj.json";

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

const CurrentProjects: Project[] = curProjects;

function Current() {
	return (
		<div id="current" className="grid place-items-center">
			<SepHeading>Currently Working On</SepHeading>
			<div className="max-w-4xl flex flex-wrap justify-center gap-2">
				{CurrentProjects.map((val) => {
					return <CurProj project={val} key={val.id} />;
				})}
			</div>
		</div>
	);
}

export default Current;
