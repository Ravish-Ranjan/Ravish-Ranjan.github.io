import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Large, Small } from "@/components/ui/Typography";
import { useRouter } from "next/navigation";

const buttons = [
	{ text: "Current Work", goto: "current" },
	{ text: "About Me", goto: "about" },
	{ text: "Skills", goto: "skills" },
	{ text: "Projects", goto: "projects" },
	{ text: "All Projects", goto: "/allprojects" },
	{ text: "Contact", goto: "contact" },
];

function CustomSidebar() {
	const router = useRouter();
	const handleScrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		router.push(id);
	};

	return (
		<Sidebar>
			<SidebarHeader className="grid place-items-center">
				<Large>Links</Large>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu className="bg-zinc-100 dark:bg-zinc-700 grid gap-1 p-2 oswald rounded">
						{buttons.map((val, i) => {
							return (
								<SidebarMenuItem
									key={`sidebar-button-${i}`}
									className="bg-zinc-300 dark:bg-zinc-800 rounded"
								>
									<SidebarMenuButton
										onClick={() => handleScrollTo(val.goto)}
									>
										<Small>{val.text}</Small>
									</SidebarMenuButton>
								</SidebarMenuItem>
							);
						})}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}

export default CustomSidebar;
