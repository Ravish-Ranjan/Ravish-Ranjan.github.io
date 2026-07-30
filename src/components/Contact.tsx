import { GitHub, LinkedIn, Mail } from "@/assets/icones";
import SeparatorHeading from "@/components/SepratorHeading";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Button from "@/components/ui/button";

function Contact() {
	return (
		<section id="contact" className="section-container">
			<SeparatorHeading>Contact</SeparatorHeading>
			<div className="max-w-11/12 container mx-auto">
				{/* heading */}
				<div className="text-center mb-8 oswald">
					<h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">
						Get In Touch
					</h2>
					<p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
						I&apos;m always open to discussing new opportunities,
						interesting projects, or just having a chat about
						technology.
					</p>
				</div>

				{/* Contact Information */}
				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full">
					{/* contact info */}
					<Card className="oswald border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-lg">
								<Mail className="h-5 w-5 text-cyan-500" />
								Contact Information
							</CardTitle>
							<CardDescription>
								Feel free to reach out through any of these
								channels
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center gap-3">
								<Mail className="h-4 w-4 text-cyan-500" />
								<a
									href="mailto:contact@ravishdev.org"
									className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
								>
									contact@ravishdev.org
								</a>
							</div>
						</CardContent>
					</Card>
					{/* Social Links */}
					<Card className="oswald border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
						<CardHeader>
							<CardTitle className="text-lg">
								Connect With Me
							</CardTitle>
							<CardDescription>
								Find me on these platforms
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex gap-4">
								<Button
									variant="outline"
									size="icon"
									className="hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400"
									asChild
								>
									<a
										href="https://github.com/Ravish-Ranjan"
										target="_blank"
										rel="noopener noreferrer"
									>
										<GitHub className="h-5 w-5" />
										<span className="sr-only">GitHub</span>
									</a>
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400"
									asChild
								>
									<a
										href="https://linkedin.com/in/ravish-ranjan-dev"
										target="_blank"
										rel="noopener noreferrer"
									>
										<LinkedIn className="h-5 w-5" />
										<span className="sr-only">
											LinkedIn
										</span>
									</a>
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

export default Contact;
