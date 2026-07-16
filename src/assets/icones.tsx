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

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
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

export function Codepen(props: SVGProps<SVGSVGElement>) {
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
				strokeWidth="1.5"
			>
				<path d="M21 9v6M3 15V9m9 12v-6m0-12v6m0 6L3 9l9-6l9 6z" />
				<path d="m12 21l-9-6l9-6l9 6z" />
			</g>
		</svg>
	);
}

export function GoUp(props: SVGProps<SVGSVGElement>) {
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
				strokeDasharray="10"
				strokeDashoffset="10"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<path d="M12 12l-5 5M12 12l5 5">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.3s"
						values="10;0"
					/>
				</path>
				<path d="M12 6l-5 5M12 6l5 5">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.3s"
						dur="0.3s"
						values="10;0"
					/>
				</path>
			</g>
		</svg>
	);
}

export function LeetCode(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 128 128"
			{...props}
		>
			<path
				fill="#888888"
				d="M76.992.002C75.171-.035 73.362.627 72 1.998l-53.432 53.87c-5.19 5.237-7.904 12.464-7.904 20.454s2.715 15.447 7.904 20.674l23.004 23.26c5.19 5.221 12.363 7.744 20.283 7.744s15.095-2.731 20.295-7.969l13.803-14.064c2.72-2.742 2.625-7.281-.207-10.135s-7.334-2.948-10.049-.207l-14.273 13.904c-2.464 2.491-5.878 3.532-9.649 3.532s-7.18-1.04-9.654-3.532L29.197 86.26c-2.47-2.49-3.71-6.134-3.71-9.937s1.24-7.237 3.71-9.728l22.856-23.362c2.47-2.49 5.953-3.439 9.718-3.439c3.766 0 7.18 1.038 9.649 3.53l14.271 13.9c2.72 2.746 7.223 2.65 10.055-.203c2.832-2.86 2.927-7.398.207-10.14L82.15 32.823c-3.461-3.445-7.845-5.952-12.757-7.093l-.182-.04l13.05-13.35c2.732-2.74 2.636-7.284-.197-10.138a7.36 7.36 0 0 0-5.072-2.2M56.937 69.379c-3.712 0-6.718 3.22-6.718 7.178s3.001 7.18 6.718 7.18h53.678c3.712.005 6.72-3.217 6.72-7.18c0-3.958-3.008-7.178-6.72-7.178z"
			/>
		</svg>
	);
}

export function Server(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			{/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
			<g fill="none">
				<path
					fill="#888888"
					d="M13 21.75a.75.75 0 0 0 0-1.5zm-9.828-1.922l.53-.53zM20.828 4.172l-.53.53zM21.25 13a.75.75 0 0 0 1.5 0zM10 3.75h4v-1.5h-4zM2.75 13v-1h-1.5v1zm0-1v-1h-1.5v1zM13 20.25h-3v1.5h3zM21.25 11v1h1.5v-1zm-20 2c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM10 20.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zm4-16.5c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239c-1.15-.155-2.625-.153-4.489-.153zM22.75 11c0-1.864.002-3.338-.153-4.489c-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01c.138 1.028.14 2.382.14 4.289zM10 2.25c-1.864 0-3.338-.002-4.489.153c-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811c1.028-.138 2.382-.14 4.289-.14zM2.75 11c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11zM2 12.75h20v-1.5H2zM21.25 12v1h1.5v-1z"
				/>
				<path
					stroke="#888888"
					strokeLinecap="round"
					strokeWidth="1.5"
					d="M13.5 7.5H18m-12 10v-2m0-7v-2m3 11v-2m0-7v-2m10.333 10.385a1.9 1.9 0 0 1 1.321-.004m-3.863.972a1.4 1.4 0 0 0-.291-.03c-.828 0-1.5.712-1.5 1.589S15.672 21 16.5 21H20c1.105 0 2-.948 2-2.118c0-.927-.562-1.714-1.346-2.001m-3.863.972a2.2 2.2 0 0 1-.124-.735c0-1.17.895-2.118 2-2.118c1.029 0 1.876.823 1.987 1.88m-3.863.973c.197.041.38.123.542.238"
				/>
			</g>
		</svg>
	);
}

export function Bolt(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			{/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
			<path
				fill="#888888"
				d="m11 14.5l-5.925-.75q-.625-.075-.813-.675t.263-1.025l10.225-9.8q.125-.125.3-.187T15.525 2q.5 0 .763.425t.012.875L13 9.5l5.925.75q.625.075.813.675t-.263 1.025L9.25 21.75q-.125.125-.3.188T8.475 22q-.5 0-.763-.425T7.7 20.7z"
			/>
		</svg>
	);
}

export function Accessibility(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			{/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
			<path
				fill="#888888"
				d="M12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6M9 21V9H4q-.425 0-.712-.288T3 8t.288-.712T4 7h16q.425 0 .713.288T21 8t-.288.713T20 9h-5v12q0 .425-.288.713T14 22t-.712-.288T13 21v-5h-2v5q0 .425-.288.713T10 22t-.712-.288T9 21"
			/>
		</svg>
	);
}

export function Database(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			{/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
			<path
				fill="#888888"
				d="M12 11q3.75 0 6.375-1.175T21 7t-2.625-2.825T12 3T5.625 4.175T3 7t2.625 2.825T12 11m0 2.5q1.025 0 2.563-.213t2.962-.687t2.45-1.237T21 9.5V12q0 1.1-1.025 1.863t-2.45 1.237t-2.962.688T12 16t-2.562-.213t-2.963-.687t-2.45-1.237T3 12V9.5q0 1.1 1.025 1.863t2.45 1.237t2.963.688T12 13.5m0 5q1.025 0 2.563-.213t2.962-.687t2.45-1.237T21 14.5V17q0 1.1-1.025 1.863t-2.45 1.237t-2.962.688T12 21t-2.562-.213t-2.963-.687t-2.45-1.237T3 17v-2.5q0 1.1 1.025 1.863t2.45 1.237t2.963.688T12 18.5"
			/>
		</svg>
	);
}
