import { GitHub, LinkedIn, Mail } from "@/assets/icones";
import SepHeading from "./SepHeading";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import Button from "./ui/button";

function Contact() {
	return (
		<div id="contact">
			<SepHeading>Contact</SepHeading>
			<section className="py-4">
				<div className="container mx-auto px-4">
					<div className="text-center mb-6 oswald">
						<h2 className="text-3xl font-bold mb-4 text-balance">
							Get In Touch
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
							I'm always open to discussing new opportunities,
							interesting projects, or just having a chat about
							technology.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{/* Contact Information */}
						<div className="space-y-6 ">
							<Card className="oswald">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Mail className="h-5 w-5" />
										Contact Information
									</CardTitle>
									<CardDescription>
										Feel free to reach out through any of
										these channels
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex items-center gap-3">
										<Mail className="h-4 w-4 text-muted-foreground" />
										<span>ravishranjan2003@gmail.com</span>
									</div>
								</CardContent>
							</Card>

							{/* Social Links */}
							<Card className="oswald">
								<CardHeader>
									<CardTitle>Connect With Me</CardTitle>
									<CardDescription>
										Find me on these platforms
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex gap-4">
										<Button
											variant="outline"
											size="icon"
											asChild
										>
											<a
												href="https://github.com/Ravish-Ranjan"
												target="_blank"
											>
												<GitHub className="h-4 w-4" />
												<span className="sr-only">
													GitHub
												</span>
											</a>
										</Button>
										<Button
											variant="outline"
											size="icon"
											asChild
										>
											<a
												href="https://linkedin.com/in/ravish-ranjan-1a0757238"
												target="_blank"
											>
												<LinkedIn className="h-4 w-4" />
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
				</div>
			</section>
		</div>
	);
}

export default Contact;
