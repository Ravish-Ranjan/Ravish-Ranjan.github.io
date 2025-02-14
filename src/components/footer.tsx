import { Github, Linkedin, Mail } from "lucide-react";
import { Lead, Muted } from "./ui/Typography";

function Footer() {
	return (
		<div className="grid w-full grid-cols-1 gap-4 p-4 px-4 bg-zinc-300 dark:bg-zinc-900 md:grid-cols-2 sm:grid-cols-3 oswald-font min-h-60 ">
			<div className="flex flex-col col-span-2 gap-2 p-2 md:col-span-1">
				<Lead className="font-medium underline oswald-font underline-offset-6 text-zinc-900 dark:text-white">
					From: Ravish Ranjan
				</Lead>
				<Muted className="text-balance oswald-font">
					Looking forward for your response. Concider me for the post
					for Full-Stack Developer.
				</Muted>
			</div>
			<div className="flex flex-col gap-2 p-2" id="contact">
				<Lead className="underline text-zinc-900 dark:text-white underline-offset-6">
					Contact
				</Lead>
				<div className="space-y-2 text-sm">
					<a
						href="mailto:ravishranjan2003@gmail.com"
						className="flex items-center gap-2"
					>
						<Mail
							strokeWidth={1.5}
							className="w-10 h-10 p-1 rounded aspect-square"
						/>
						<span>E-mail</span>
					</a>
					<a
						href="https://www.linkedin.com/in/ravish-ranjan-1a0757238/"
						className="flex items-center gap-2 "
					>
						<Linkedin
							strokeWidth={1.5}
							className="w-10 h-10 p-1 rounded aspect-square"
						/>
						<span>LinkedIn</span>
					</a>
					<a
						href="https://github.com/Ravish-Ranjan"
						target="_blank"
						title="github page"
						className="flex items-center gap-2"
					>
						<Github
							strokeWidth={1.5}
							className="w-10 h-10 p-1 rounded aspect-square"
						/>
						<span>Github</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
