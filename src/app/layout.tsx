import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/context/ThemeProvider";
import Footer from "@/components/Footer";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-start";

export const metadata: Metadata = {
	title: "Portfolio | Ravish Ranjan",
	description:
		"A personal portfolio page of Ravish Ranjan, a highly skilled web developer.",
	icons: "logo.svg",
	verification: {
		google: "aJyYV8n38v1zvEuR4JA7F2qrIOjvN2fOL_VWrtq3eUg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-zinc-200 dark:bg-zinc-900">
				<ThemeProvider>
					<SidebarProvider
						defaultOpen={false}
						className="flex flex-col"
					>
						<Navbar />
						{children}
						<Footer />
					</SidebarProvider>
					<StarsBackground className="-z-20 bg-zinc-200 dark:bg-zinc-900 h-full" />
					<ShootingStars className="-z-10 min-h-screen" />
				</ThemeProvider>
			</body>
		</html>
	);
}
