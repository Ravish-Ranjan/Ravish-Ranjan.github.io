import {
	GitHub,
	LinkedIn,
	Mail,
	Globe,
	Link,
	Instagram,
} from "@/assets/icones";
import defaultLinks from "@/assets/social.json";
import { H2, Muted } from "./ui/Typography";

export type SocialLink = {
	href: string;
	platform:
		| "github"
		| "linkedin"
		| "x"
		| "email"
		| "website"
		| "instagram"
		| string;
	label?: string;
};
interface FooterProps {
	name?: string;
	tagline?: string;
	links?: SocialLink[];
	contactHref?: string;
	showContact?: boolean;
}

function Footer({
	links = defaultLinks,
	contactHref = "/contact",
	showContact = false,
}: FooterProps) {
	const year = new Date().getFullYear();

	return (
		<footer className="w-full border-t border-border bg-zinc-300 dark:bg-zinc-800">
			<div className="mx-auto max-w-6xl px-6 py-10">
				<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<div className="space-y-1 oswald">
						<H2>Ravish Ranjan</H2>
						<Muted className="text-sm text-muted-foreground text-pretty">
							Looking forward for your response. Concider me for
							the post for Full-Stack Developer.
						</Muted>
					</div>

					<nav
						aria-label="Social links"
						className="flex items-center gap-4"
					>
						{links
							.filter((l) => l?.href)
							.map((link, idx) => {
								const label =
									link.label ||
									humanizePlatform(link.platform);
								return (
									<a
										key={`${link.platform}-${idx}`}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										title={label}
										className="text-muted-foreground transition-colors hover:text-blue-600"
									>
										<SocialIcon
											platform={link.platform}
											className="h-5 w-5"
										/>
										<span className="sr-only">{label}</span>
									</a>
								);
							})}
					</nav>
				</div>

				<div className="mt-8 border-t border-border pt-4">
					<div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between oswald">
						<span>
							© {year} Ravish Ranjan. All rights reserved.
						</span>
						{showContact ? (
							<a
								href={contactHref}
								className="inline-flex items-center gap-1 transition-colors hover:text-blue-600"
							>
								<Mail
									className="h-3.5 w-3.5"
									aria-hidden="true"
								/>
								<span>Get in touch</span>
							</a>
						) : null}
					</div>
				</div>
			</div>
		</footer>
	);
}

function SocialIcon({
	platform,
	className,
}: {
	platform: SocialLink["platform"];
	className?: string;
}) {
	const p = platform.toLowerCase();
	if (p === "github")
		return <GitHub className={className} aria-hidden="true" />;
	if (p === "linkedin")
		return <LinkedIn className={className} aria-hidden="true" />;
	if (p === "email") return <Mail className={className} aria-hidden="true" />;
	if (p === "instagram")
		return <Instagram className={className} aria-hidden="true" />;
	if (p === "website")
		return <Globe className={className} aria-hidden="true" />;
	return <Link className={className} aria-hidden="true" />;
}

function humanizePlatform(p: string) {
	const map: Record<string, string> = {
		github: "GitHub",
		linkedin: "LinkedIn",
		twitter: "Twitter",
		x: "Twitter/X",
		email: "Email",
		website: "Website",
		instagram: "Instagram",
	};
	return map[p.toLowerCase()] || "Link";
}

export default Footer;
