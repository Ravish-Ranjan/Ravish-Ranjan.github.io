import CurProj from "@/components/CurrentProjectCard";
import SeparatorHeading from "@/components/SepratorHeading";
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
		<div id="current" className="section-container">
			<SeparatorHeading>Currently Working On</SeparatorHeading>
			<div className="flex flex-wrap items-stretch justify-center gap-4 w-full">
				{currentProjects.map((val) => {
					return <CurProj project={val} key={val.id} />;
				})}
			</div>
		</div>
	);
}

export default Current;
