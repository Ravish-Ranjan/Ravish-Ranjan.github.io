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

function CustomSidebar() {
	const router = useRouter();
	const handleScrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Sidebar>
			<SidebarHeader className="grid place-items-center">
				<Large>Links</Large>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuItem className="grid place-items-center">
							<SidebarMenuButton
								onClick={() => handleScrollTo("current")}
							>
								<Small>Current Work</Small>
							</SidebarMenuButton>
							<SidebarMenuButton
								onClick={() => handleScrollTo("about")}
							>
								<Small>About Me</Small>
							</SidebarMenuButton>
							<SidebarMenuButton
								onClick={() => handleScrollTo("skills")}
							>
								<Small>Skills</Small>
							</SidebarMenuButton>
							<SidebarMenuButton
								onClick={() => handleScrollTo("projects")}
							>
								<Small>Projects</Small>
							</SidebarMenuButton>
							<SidebarMenuButton
								onClick={() => router.push("/allprojects")}
							>
								<Small>All Projects</Small>
							</SidebarMenuButton>
							<SidebarMenuButton
								onClick={() => handleScrollTo("contact")}
							>
								<Small>Contact</Small>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}

export default CustomSidebar;
