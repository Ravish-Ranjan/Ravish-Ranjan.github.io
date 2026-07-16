import clsx from "clsx";
import Button from "@/components/ui/button";
import Image from "next/image";
import { Accessibility, Bolt, Database, Server } from "@/assets/icones";

function Hero() {
	const handleScrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const skills = [
		{ icon: Server, label: "Full-Stack" },
		{ icon: Bolt, label: "Performance" },
		{ icon: Accessibility, label: "Accessible" },
		{ icon: Database, label: "Database" },
	];

	return (
		<div className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-0">
			<div className="oswald w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
				{/* Left content */}
				<div className="space-y-6 md:space-y-8 transition-all duration-1000">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 dark:border-cyan-400/30 w-fit">
						<span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
						<span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
							Available for Opportunities
						</span>
					</div>

					{/* Main heading with gradient */}
					<div className="space-y-2">
						<p className="text-sm uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-semibold">
							Welcome, I&apos;m
						</p>
						<h1
							className={clsx(
								"text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
								"bg-clip-text text-transparent",
								"bg-linear-to-r from-purple-800 via-cyan-600 to-purple-700",
								"dark:from-purple-500 dark:via-cyan-400 dark:to-purple-500",
								"text-balance",
							)}
						>
							Ravish Ranjan
						</h1>
					</div>

					{/* Subtitle */}
					<div className="space-y-4">
						<p className="text-md md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
							Full-Stack Developer crafting beautiful, performant,
							and accessible web experiences
						</p>
						<p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
							Specialized in modern web technologies with a
							passion for clean code and exceptional user
							interfaces.
						</p>
					</div>

					{/* Skills grid */}
					<div className="grid grid-cols-2 gap-3 pt-4">
						{skills.map((skill, index) => (
							<div
								key={index}
								className={clsx(
									"flex items-center gap-2 px-4 py-3 rounded-lg",
									"bg-zinc-100 dark:bg-zinc-800/50",
									"border border-zinc-200 dark:border-zinc-700",
									"transition-all duration-500 hover:border-cyan-400 dark:hover:border-cyan-400",
								)}
								style={{
									transitionDelay: `${200 + index * 100}ms`,
								}}
							>
								<span className="text-xl">
									<skill.icon className="stroke-foreground" />
								</span>
								<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
									{skill.label}
								</span>
							</div>
						))}
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<Button
							onClick={() => handleScrollTo("contact")}
							className={clsx(
								"px-8 py-6 rounded-lg font-semibold text-base",
								"bg-linear-to-r from-cyan-600 to-cyan-700",
								"hover:from-cyan-700 hover:to-cyan-800",
								"text-white shadow-lg hover:shadow-xl",
								"transition-all duration-300 transform hover:scale-105",
							)}
						>
							Get In Touch
						</Button>
						<Button
							onClick={() => handleScrollTo("projects")}
							variant="outline"
							className={clsx(
								"px-8 py-6 rounded-lg font-semibold text-base",
								"border-2 border-zinc-300 dark:border-zinc-600",
								"hover:bg-zinc-100 dark:hover:bg-zinc-800",
								"transition-all duration-300",
							)}
						>
							View Projects
						</Button>
					</div>
				</div>

				{/* Right side - Image */}
				<div className={clsx("transition-all duration-1000")}>
					<div className="relative">
						<div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-purple-500/20 dark:from-cyan-500/10 dark:to-purple-500/10 blur-2xl rounded-full"></div>
						<div className="relative">
							<Image
								src="/heroillus.svg"
								alt="Ravish Ranjan - Web Developer"
								width={500}
								height={500}
								className="w-full h-auto drop-shadow-2xl"
								priority
							/>
						</div>
					</div>

					{/* Floating stats */}
					<div className="grid grid-cols-2 gap-4 mt-6">
						<div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-center">
							<p className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400">
								50+
							</p>
							<p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
								Projects
							</p>
						</div>
						<div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-center">
							<p className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
								2+ yrs
							</p>
							<p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
								Experience
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
