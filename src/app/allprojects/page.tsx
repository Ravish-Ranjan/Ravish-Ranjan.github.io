import SepHeading from "@/components/SeprateHeading";
import projects from "@/assets/projects.json";
import SinProject from "@/components/SingleProject";


function page() {
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

export default page;
