import type { SVGProps } from "react";

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
			/>
		</svg>
	);
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
			/>
		</svg>
	);
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
			/>
		</svg>
	);
}

export function Sun(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<path
					strokeDasharray="2"
					strokeDashoffset="2"
					d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
				>
					<animate
						fill="freeze"
						attributeName="d"
						begin="0.6s"
						dur="0.2s"
						values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
					/>
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.6s"
						dur="0.2s"
						values="2;0"
					/>
				</path>
				<path
					strokeDasharray="2"
					strokeDashoffset="2"
					d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
				>
					<animate
						fill="freeze"
						attributeName="d"
						begin="0.8s"
						dur="0.2s"
						values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
					/>
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.8s"
						dur="0.2s"
						values="2;0"
					/>
				</path>
				<animateTransform
					attributeName="transform"
					dur="30s"
					repeatCount="indefinite"
					type="rotate"
					values="0 12 12;360 12 12"
				/>
			</g>
			<mask id="lineMdMoonAltToSunnyOutlineLoopTransition0">
				<circle cx="12" cy="12" r="12" fill="#fff" />
				<circle cx="12" cy="12" r="8">
					<animate
						fill="freeze"
						attributeName="r"
						dur="0.4s"
						values="8;4"
					/>
				</circle>
				<circle cx="18" cy="6" r="12" fill="#fff">
					<animate
						fill="freeze"
						attributeName="cx"
						dur="0.4s"
						values="18;22"
					/>
					<animate
						fill="freeze"
						attributeName="cy"
						dur="0.4s"
						values="6;2"
					/>
					<animate
						fill="freeze"
						attributeName="r"
						dur="0.4s"
						values="12;3"
					/>
				</circle>
				<circle cx="18" cy="6" r="10">
					<animate
						fill="freeze"
						attributeName="cx"
						dur="0.4s"
						values="18;22"
					/>
					<animate
						fill="freeze"
						attributeName="cy"
						dur="0.4s"
						values="6;2"
					/>
					<animate
						fill="freeze"
						attributeName="r"
						dur="0.4s"
						values="10;1"
					/>
				</circle>
			</mask>
			<circle
				cx="12"
				cy="12"
				r="10"
				mask="url(#lineMdMoonAltToSunnyOutlineLoopTransition0)"
				fill="currentColor"
			>
				<animate
					fill="freeze"
					attributeName="r"
					dur="0.4s"
					values="10;6"
				/>
			</circle>
		</svg>
	);
}

export function Moon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeDasharray="4"
				strokeDashoffset="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
					<animate
						id="lineMdMoonRisingAltLoop0"
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.7s;lineMdMoonRisingAltLoop0.begin+6s"
						dur="0.4s"
						values="4;0"
					/>
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="lineMdMoonRisingAltLoop0.begin+2s;lineMdMoonRisingAltLoop0.begin+4s"
						dur="0.4s"
						values="4;0"
					/>
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="lineMdMoonRisingAltLoop0.begin+1.2s;lineMdMoonRisingAltLoop0.begin+3.2s;lineMdMoonRisingAltLoop0.begin+5.2s"
						dur="0.4s"
						values="0;4"
					/>
					<set
						fill="freeze"
						attributeName="d"
						begin="lineMdMoonRisingAltLoop0.begin+1.8s"
						to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
					/>
					<set
						fill="freeze"
						attributeName="d"
						begin="lineMdMoonRisingAltLoop0.begin+3.8s"
						to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
					/>
					<set
						fill="freeze"
						attributeName="d"
						begin="lineMdMoonRisingAltLoop0.begin+5.8s"
						to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
					/>
				</path>
				<path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
					<animate
						id="lineMdMoonRisingAltLoop1"
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="1.1s;lineMdMoonRisingAltLoop1.begin+6s"
						dur="0.4s"
						values="4;0"
					/>
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="lineMdMoonRisingAltLoop1.begin+2s;lineMdMoonRisingAltLoop1.begin+4s"
						dur="0.4s"
						values="4;0"
					/>
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="lineMdMoonRisingAltLoop1.begin+1.2s;lineMdMoonRisingAltLoop1.begin+3.2s;lineMdMoonRisingAltLoop1.begin+5.2s"
						dur="0.4s"
						values="0;4"
					/>
					<set
						fill="freeze"
						attributeName="d"
						begin="lineMdMoonRisingAltLoop1.begin+1.8s"
						to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
					/>
					<set
						fill="freeze"
						attributeName="d"
						begin="lineMdMoonRisingAltLoop1.begin+3.8s"
						to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
					/>
					<set
						fill="freeze"
						attributeName="d"
						begin="lineMdMoonRisingAltLoop1.begin+5.8s"
						to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
					/>
				</path>
				<path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
					<animate
						id="lineMdMoonRisingAltLoop2"
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="2s;lineMdMoonRisingAltLoop2.begin+6s"
						dur="0.4s"
						values="4;0"
					/>
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="lineMdMoonRisingAltLoop2.begin+2s"
						dur="0.4s"
						values="4;0"
					/>
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="lineMdMoonRisingAltLoop2.begin+1.2s;lineMdMoonRisingAltLoop2.begin+3.2s"
						dur="0.4s"
						values="0;4"
					/>
					<set
						fill="freeze"
						attributeName="d"
						begin="lineMdMoonRisingAltLoop2.begin+1.8s"
						to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
					/>
					<set
						fill="freeze"
						attributeName="d"
						begin="lineMdMoonRisingAltLoop2.begin+5.8s"
						to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
					/>
				</path>
			</g>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
				transform="translate(0 22)"
			>
				<animateMotion
					fill="freeze"
					calcMode="linear"
					dur="0.6s"
					path="M0 0v-22"
				/>
			</path>
		</svg>
	);
}

export function System(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h15q.425 0 .713.288T20 5t-.288.713T19 6H4v12h2q.425 0 .713.288T7 19t-.288.713T6 20zm7-2.5q.625 0 1.063-.437T12.5 16t-.437-1.062T11 14.5t-1.062.438T9.5 16t.438 1.063T11 17.5M21 20h-5q-.425 0-.712-.288T15 19v-9q0-.425.288-.712T16 9h5q.425 0 .713.288T22 10v9q0 .425-.288.713T21 20M9 19v-.775q-.475-.425-.737-1T8 16t.263-1.225t.737-1V13q0-.425.288-.712T10 12h2q.425 0 .713.288T13 13v.775q.475.425.738 1T14 16t-.262 1.225t-.738 1V19q0 .425-.288.713T12 20h-2q-.425 0-.712-.288T9 19"
			/>
		</svg>
	);
}

export function PanelLeftIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M12.5 8v8l4-4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5-2h9V5h-9z"
			/>
		</svg>
	);
}

export function GitHub(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
			/>
		</svg>
	);
}

export function LinkedIn(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 512 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32m-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43m264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"
			/>
		</svg>
	);
}

export function Mail(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h4q.425 0 .713.288T17 21t-.288.713T16 22zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15"
			/>
		</svg>
	);
}

export function Globe(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" />
			</g>
		</svg>
	);
}

export function Link(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
				<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
			</g>
		</svg>
	);
}

export function Instagram(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
			/>
		</svg>
	);
}

export function Calendar(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<path d="M16 2v4m5 5.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25M22 22l-1.875-1.875M3 10h18M8 2v4" />
				<circle cx="18" cy="18" r="3" />
			</g>
		</svg>
	);
}

export function Clock(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M12 6v6l4 2" />
			</g>
		</svg>
	);
}

export function Phone(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M22 16.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92"
			/>
		</svg>
	);
}

export function MapPin(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
				<circle cx="12" cy="10" r="3" />
			</g>
		</svg>
	);
}
