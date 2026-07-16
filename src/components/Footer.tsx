"use client";
import {
	GitHub,
	LinkedIn,
	Mail,
	Globe,
	LinkIcon,
	Instagram,
	Codepen,
	LeetCode,
} from "@/assets/icones";
import { H2, Muted } from "@/components/ui/Typography";
import { useEffect, useState } from "react";

interface FooterProps {
	name?: string;
	tagline?: string;
	contactHref?: string;
	showContact?: boolean;
}

function Footer({
	contactHref = "/contact",
	showContact = false,
}: FooterProps) {
	const year = new Date().getFullYear();
	const [links, setLinks] = useState<null | SocialLinkType[]>(null);

	useEffect(() => {
		fetch("/config/social.json")
			.then((res) => res.json())
			.then((data) => setLinks(data));
	}, []);
	if (!links) return null;

	return (
		<footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
			<div className="mx-auto max-w-6xl px-6 py-12">
				<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
					<div className="space-y-2 oswald">
						<H2 className="text-2xl font-bold">Ravish Ranjan</H2>
						<Muted className="text-sm text-muted-foreground text-pretty">
							Full-Stack Web Developer crafting beautiful,
							performant applications
						</Muted>
					</div>

					<nav
						aria-label="Social links"
						className="flex items-center gap-6"
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
										className="text-zinc-600 dark:text-zinc-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
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

				<div className="mt-8 border-t border-zinc-200 dark:border-zinc-800 pt-6">
					<div className="flex flex-col gap-2 text-xs text-zinc-600 dark:text-zinc-400 md:flex-row md:items-center md:justify-between oswald">
						<span>
							© {year} Ravish Ranjan. All rights reserved.
						</span>
						{showContact ? (
							<a
								href={contactHref}
								className="inline-flex items-center gap-1 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 font-medium"
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
	platform: SocialLinkType["platform"];
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
	if (p === "codepen")
		return <Codepen className={className} aria-hidden="true" />;
	if (p === "website")
		return <Globe className={className} aria-hidden="true" />;
	if (p === "leetcode")
		return <LeetCode className={className} aria-hidden="true" />;
	return <LinkIcon className={className} aria-hidden="true" />;
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
		leetcode: "LeetCode",
	};
	return map[p.toLowerCase()] || "Link";
}

export default Footer;
