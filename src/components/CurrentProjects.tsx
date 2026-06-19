import CurProj from "@/components/CurrentProjectCard";
import SepHeading from "@/components/SeprateHeading";
import { useEffect, useState } from "react";

function Current() {
	const [currentProjects, setCurrentProjects] = useState<
		null | CurrentProject[]
	>(null);

	useEffect(() => {
		fetch("/config/currproj.json")
			.then((res) => res.json())
			.then((data) => setCurrentProjects(data));
	}, []);
	if (!currentProjects) return null;
	return (
		<div id="current" className="grid place-items-center">
			<SepHeading>Currently Working On</SepHeading>
			<div className="flex flex-wrap items-stretch justify-center gap-3 px-4">
				{currentProjects.map((val) => {
					return <CurProj project={val} key={val.id} />;
				})}
			</div>
		</div>
	);
}

export default Current;
