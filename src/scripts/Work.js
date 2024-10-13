import { Img } from "./Imgblk";
import information from "../assets/projects.json";

export function Work() {
	return (
		<div id="work">
			<span className="block-title oswald-font-300">
				<span>Projects</span>
			</span>
			<div className="gallery">
				{information.map((val, i) => {
					return (
						<Img
							src={process.env.PUBLIC_URL + val.srcpath}
							{...val}
							key={i}
						/>
					);
				})}
			</div>
			<span className="block-title"></span>
		</div>
	);
}
