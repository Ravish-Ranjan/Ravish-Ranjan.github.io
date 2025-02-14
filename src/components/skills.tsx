import { useState } from "react";
import {
	Code,
	Database,
	Layout,
	Globe,
	Terminal,
	Server,
	Library,
} from "lucide-react";
import { H2 } from "./ui/Typography";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const colors = {
	Frontend: "bg-indigo-100 dark:bg-indigo-800 text-indigo-800 hover:bg-indigo-200",
	"UI-libraries":
		"bg-sky-100 dark:bg-sky-800 text-sky-800 hover:bg-sky-200",
	Backend: "bg-teal-100 dark:bg-teal-800 text-teal-800 hover:bg-teal-200",
	Database:
		"bg-green-100 dark:bg-green-800 text-green-800 hover:bg-green-200",
	Languages: "bg-yellow-100 dark:bg-yellow-800 text-yellow-800 hover:bg-yellow-200",
	Others: "bg-orange-100 dark:bg-orange-800 text-orange-800 hover:bg-orange-200",
	Tools: "bg-violet-100 dark:bg-violet-800 text-violet-800 hover:bg-violet-200",
};

const Skills = () => {
	const categories = [
		{
			name: "Frontend",
			icon: Layout,
			skills: [
				"React",
				"Tailwind CSS",
				"Bootstarp CSS",
				"SCSS",
				"jQuery",
				"JavaScript",
				"TypeScript",
				"HTML/CSS",
				"Zustand",
				"Vue.js",
			],
		},
		{
			name: "UI-libraries",
			icon: Library,
			skills: [
				"Material UI",
				"Shadcn UI",
				"BlueprintJS UI",
				"Aceternity UI",
			],
		},
		{
			name: "Backend",
			icon: Server,
			skills: ["Node.js", "Express", "Python", "RESTful APIs", "Flask"],
		},
		{
			name: "Database",
			icon: Database,
			skills: [
				"MongoDB",
				"PostgreSQL",
				"MySQL",
				"Mongoose",
				"MongoDb Atlas",
			],
		},
		{
			name: "Languages",
			icon: Code,
			skills: [
				"JavaScript",
				"TypeScript",
				"Python",
				"Java",
				"SQL",
				"PHP",
				"C",
				"C++",
				"Rust",
				"R",
				"HTML/CSS",
			],
		},
		{
			name: "Others",
			icon: Globe,
			skills: ["Git", "Linux", "Postman"],
		},
		{
			name: "Tools",
			icon: Terminal,
			skills: ["VS Code", "GitHub Actions", "NPM"],
		},
	];

	const [activeCategory, setActiveCategory] = useState("All");

	// Create a flat array of skills with their category
	const allSkills = categories.flatMap((category) =>
		category.skills.map((skill) => ({
			name: skill,
			category: category.name as keyof typeof colors,
		}))
	);

	const displayedSkills: { name: string; category: keyof typeof colors }[] =
		activeCategory === "All"
			? allSkills
			: allSkills.filter((skill) => skill.category === activeCategory);

	return (
		<section id="skills" className="w-full">
			<div className="w-full px-4 mx-auto">
				<H2 className="relative grid w-full font-normal text-center oswald-font place-items-center">
					<span className="px-4 text-3xl dark:bg-zinc-800 title-custom">
						Skills
					</span>
					<div className="absolute w-full h-1 bg-sky-900 -z-10 dark:bg-sky-300"></div>
				</H2>
				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-2 mb-4">
					<Button
						variant={
							activeCategory === "All" ? "default" : "outline"
						}
						onClick={() => setActiveCategory("All")}
					>
						<Globe />
						All
					</Button>
					{categories.map((category) => (
						<Button
							key={category.name}
							variant={
								activeCategory === category.name
									? "default"
									: "outline"
							}
							onClick={() => setActiveCategory(category.name)}
						>
							<category.icon />
							{category.name}
						</Button>
					))}
				</div>
				{/* Skills Bubbles */}
				<div className="flex flex-wrap justify-center gap-2">
					{displayedSkills.map(
						(
							val: {
								name: string;
								category: keyof typeof colors;
							},
							i
						) => (
							<span
								key={i}
								className={cn(
									colors[val.category],
									"p-1 px-3 rounded-full oswald-font dark:text-white saturate-90"
								)}
							>
								{val.name}
							</span>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Skills;
