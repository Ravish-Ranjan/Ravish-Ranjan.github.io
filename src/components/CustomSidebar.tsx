import Button from "./ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "./ui/sidebar";
import { Large, Small } from "./ui/Typography";

function CustomSidebar() {
	return (
		<Sidebar>
			<SidebarHeader className="grid place-items-center">
				<Large>Links</Large>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild className="">
								<Button variant={"link"} asChild>
									<a href="#current">
										<Small>Current Work</Small>
									</a>
								</Button>
							</SidebarMenuButton>
							<SidebarMenuButton asChild>
								<Button variant={"link"} asChild>
									<a href="#about">
										<Small>About Me</Small>
									</a>
								</Button>
							</SidebarMenuButton>
							<SidebarMenuButton asChild>
								<Button variant={"link"} asChild>
									<a href="#skills">
										<Small>Skills</Small>
									</a>
								</Button>
							</SidebarMenuButton>
							<SidebarMenuButton asChild>
								<Button variant={"link"} asChild>
									<a href="#projects">
										<Small>Projects</Small>
									</a>
								</Button>
							</SidebarMenuButton>
							<SidebarMenuButton asChild>
								<Button variant={"link"} asChild>
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
