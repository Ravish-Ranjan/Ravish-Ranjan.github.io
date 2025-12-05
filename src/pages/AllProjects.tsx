import projects from "@/assets/projects.json";
import Footer from "@/components/Footer";
import SepHeading from "@/components/SeprateHeading";
import SinProject from "@/components/SingleProject";
import { ShootingStars } from "@/components/ui/shooting-start";
import { StarsBackground } from "@/components/ui/stars-background";

function AllProjects() {
	return (
		<div className="w-full overflow-x-hidden grid gap-y-4">
			<SepHeading>All Projects</SepHeading>
			<div className="flex flex-wrap justify-center items-center gap-4 p-4">
				{projects.map((val) => {
					return <SinProject project={val} key={val.title} />;
				})}
			</div>
			<StarsBackground className="-z-20 bg-zinc-200 dark:bg-zinc-900 h-full" />
			<ShootingStars className="-z-10" />
			<Footer />
		</div>
	);
}

export default AllProjects;
