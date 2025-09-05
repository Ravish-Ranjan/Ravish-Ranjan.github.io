import { H2 } from "./ui/Typography";

function SepHeading({ children }: { children: string }) {
	return (
		<H2 className="relative w-full grid font-normal text-center oswald-font place-items-center">
			<span className="px-4 text-xl md:text-3xl bg-zinc-200 dark:bg-zinc-900 title-custom oswald">
				{children}
			</span>
			<div className="absolute h-1 w-full bg-sky-900 -z-10 dark:bg-sky-300"></div>
		</H2>
	);
}

export default SepHeading;
