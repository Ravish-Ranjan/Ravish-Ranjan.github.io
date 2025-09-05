import { Suspense, useState } from "react";
import SepHeading from "./SepHeading";
import allSkills from "@/assets/skills.json";
import Button from "./ui/button";
import Loading from "./loading";

type SkillCategory = {
	label: string;
	icon: string;
	colour: string;
	skills: string[];
};

const SkillsList: SkillCategory[] = allSkills;

const colourMap: Record<string, string> = {
	red: "bg-red-200 text-red-900 dark:bg-red-700 dark:text-white",
	orange: "bg-orange-200 text-orange-900 dark:bg-orange-700 dark:text-white",
	amber: "bg-amber-200 text-amber-900 dark:bg-amber-700 dark:text-white",
	yellow: "bg-yellow-200 text-yellow-900 dark:bg-yellow-700 dark:text-white",
	lime: "bg-lime-200 text-lime-900 dark:bg-lime-700 dark:text-white",
	green: "bg-green-200 text-green-900 dark:bg-green-700 dark:text-white",
	emerald:
		"bg-emerald-200 text-emerald-900 dark:bg-emerald-700 dark:text-white",
	teal: "bg-teal-200 text-teal-900 dark:bg-teal-700 dark:text-white",
	cyan: "bg-cyan-200 text-cyan-900 dark:bg-cyan-700 dark:text-white",
	sky: "bg-sky-200 text-sky-900 dark:bg-sky-700 dark:text-white",
	blue: "bg-blue-200 text-blue-900 dark:bg-blue-700 dark:text-white",
	indigo: "bg-indigo-200 text-indigo-900 dark:bg-indigo-700 dark:text-white",
	violet: "bg-violet-200 text-violet-900 dark:bg-violet-700 dark:text-white",
	purple: "bg-purple-200 text-purple-900 dark:bg-purple-700 dark:text-white",
	fuchisia:
		"bg-fuchisia-200 text-fuchisia-900 dark:bg-fuchisia-700 dark:text-white",
	pink: "bg-pink-200 text-pink-900 dark:bg-pink-700 dark:text-white",
	rose: "bg-rose-200 text-rose-900 dark:bg-rose-700 dark:text-white",
	slate: "bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-white",
	gray: "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white",
	zinc: "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-white",
	neutral:
		"bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-white",
	stone: "bg-stone-200 text-stone-900 dark:bg-stone-700 dark:text-white",
};

function SkillBubble({ text, colour }: { text: string; colour: string }) {
	return (
		<span className={`text-md ${colourMap[colour]} rounded-2xl px-2 py-1`}>
			{text}
		</span>
	);
}

function Skills() {
	const tags = ["All", ...SkillsList.map((val) => val.label)];
	const [selected, setSelected] = useState<(typeof tags)[number]>("All");

	const handleTagChange = (): SkillCategory => {
		if (selected !== "All")
			return (
				SkillsList.find((val) => val.label === selected) ?? {
					label: "",
					colour: "",
					skills: [],
					icon: "",
				}
			);
		return { label: "", colour: "", skills: [], icon: "" };
	};

	const selectedTags = handleTagChange();

	return (
		<div id="skills" className="grid place-items-center gap-2">
			<SepHeading>Skills</SepHeading>
			<Suspense fallback={<Loading />}>
				<div className="flex justify-center gap-2">
					{tags.map((val) => {
						return (
							<Button
								key={val}
								variant={
									selected == val ? "default" : "outline"
								}
								onClick={() => setSelected(val)}
								className="cursor-pointer"
							>
								{val}
							</Button>
						);
					})}
				</div>
				<div className="max-w-4xl flex flex-wrap gap-2 justify-center oswald-400">
					{selected === "All"
						? SkillsList.flatMap((val) =>
								val.skills.map((skl) => (
									<SkillBubble
										text={skl}
										colour={val.colour}
										key={skl}
									/>
								))
						  )
						: selectedTags.skills.map((val) => {
								return (
									<SkillBubble
										text={val}
										colour={selectedTags.colour}
										key={val}
									/>
								);
						  })}
				</div>
			</Suspense>
		</div>
	);
}

export default Skills;
