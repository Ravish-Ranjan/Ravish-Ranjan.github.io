import Button from "./ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "./ui/sidebar";
import { Large, Small } from "./ui/Typography";

function CustomSidebar() {
	const { setOpen } = useSidebar();
	return (
		<Sidebar>
			<SidebarHeader className="grid place-items-center">
				<Large>Links</Large>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<Button
									variant={"link"}
									asChild
									onClick={() => setOpen(false)}
								>
									<a href="#current">
										<Small>Current Work</Small>
									</a>
								</Button>
							</SidebarMenuButton>
							<SidebarMenuButton asChild>
								<Button
									variant={"link"}
									asChild
									onClick={() => setOpen(false)}
								>
									<a href="#about">
										<Small>About Me</Small>
									</a>
								</Button>
							</SidebarMenuButton>
							<SidebarMenuButton asChild>
								<Button
									variant={"link"}
									asChild
									onClick={() => setOpen(false)}
								>
									<a href="#skills">
										<Small>Skills</Small>
									</a>
								</Button>
							</SidebarMenuButton>
							<SidebarMenuButton asChild>
								<Button
									variant={"link"}
									asChild
									onClick={() => setOpen(false)}
								>
									<a href="#projects">
										<Small>Projects</Small>
									</a>
								</Button>
							</SidebarMenuButton>
							<SidebarMenuButton asChild>
								<Button
									variant={"link"}
									asChild
									onClick={() => setOpen(false)}
								>
									<a href="#contact">
										<Small>Contact</Small>
									</a>
								</Button>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}

export default CustomSidebar;
