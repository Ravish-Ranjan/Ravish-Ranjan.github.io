import "../styles/Marqbar.css";

export function Marq({ itemList, direction, speed }) {
	const listrender = itemList.map((val, i) => (
		<span key={i} className="marq-bit">
			{val}
		</span>
	));

	return (
		<div
			className="marq-bar-outer inline-shadow"
			data-anim-direc={direction}
			data-anim-speed={speed}
		>
			<div className="marq-bar oswald-font">{listrender}</div>
		</div>
	);
}
