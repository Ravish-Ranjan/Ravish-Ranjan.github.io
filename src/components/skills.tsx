import SepHeading from "./SepHeading";
import allSkills from "@/assets/skills.json";
import Button from "./ui/button";
import { useState } from "react";

type SkillCategory = {
	label: string;
	colour: string;
	skills: string[];
};

const SkillsList: SkillCategory[] = allSkills;

const colourMap: Record<string, string> = {
	red: "bg-red-200 text-red-900 dark:bg-red-800 dark:text-white",
	orange: "bg-orange-200 text-orange-900 dark:bg-orange-800 dark:text-white",
	amber: "bg-amber-200 text-amber-900 dark:bg-amber-800 dark:text-white",
	yellow: "bg-yellow-200 text-yellow-900 dark:bg-yellow-800 dark:text-white",
	lime: "bg-lime-200 text-lime-900 dark:bg-lime-800 dark:text-white",
	green: "bg-green-200 text-green-900 dark:bg-green-800 dark:text-white",
	emerald:
		"bg-emerald-200 text-emerald-900 dark:bg-emerald-800 dark:text-white",
	teal: "bg-teal-200 text-teal-900 dark:bg-teal-800 dark:text-white",
	cyan: "bg-cyan-200 text-cyan-900 dark:bg-cyan-800 dark:text-white",
	sky: "bg-sky-200 text-sky-900 dark:bg-sky-800 dark:text-white",
	blue: "bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-white",
	indigo: "bg-indigo-200 text-indigo-900 dark:bg-indigo-800 dark:text-white",
	violet: "bg-violet-200 text-violet-900 dark:bg-violet-800 dark:text-white",
	purple: "bg-purple-200 text-purple-900 dark:bg-purple-800 dark:text-white",
	fuchisia:
		"bg-fuchisia-200 text-fuchisia-900 dark:bg-fuchisia-800 dark:text-white",
	pink: "bg-pink-200 text-pink-900 dark:bg-pink-800 dark:text-white",
	rose: "bg-rose-200 text-rose-900 dark:bg-rose-800 dark:text-white",
	slate: "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white",
	gray: "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white",
	zinc: "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-white",
	neutral:
		"bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-white",
	stone: "bg-stone-200 text-stone-900 dark:bg-stone-800 dark:text-white",
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
				}
			);
		return { label: "", colour: "", skills: [] };
	};

	const selectedTags = handleTagChange();

	return (
		<div
			id="skills"
			className=" flex flex-col justify-start items-center gap-8 min-h-66"
		>
			<SepHeading>Skills</SepHeading>
			<div className="flex flex-wrap justify-center gap-2 max-w-4xl">
				{tags.map((val) => {
					return (
						<Button
							key={val}
							variant={selected == val ? "default" : "outline"}
							onClick={() => setSelected(val)}
							className="cursor-pointer"
						>
							{val}
						</Button>
					);
				})}
			</div>
			<div className="flex flex-wrap gap-2 justify-center oswald-400 max-w-4xl">
				{selected === "All"
					? SkillsList.flatMap((val, i) =>
							val.skills.map((skl, j) => (
								<SkillBubble
									text={skl}
									colour={val.colour}
									key={`${i} ${j}`}
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
		</div>
	);
}

export default Skills;
