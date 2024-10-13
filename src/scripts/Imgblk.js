import loading from "../media/loading.gif";
import "../styles/Imgblk.css";

export function Img({ href, src, info, desc }) {
	return (
		<a href={href} className="box">
			<img src={loading && src} alt={"mountains"} loading="lazy"></img>
			<div style={{ display: "grid" }}>
				<span className="title oswald-font">{info}</span>
				<span className="description">{desc}</span>
			</div>
		</a>
	);
}
