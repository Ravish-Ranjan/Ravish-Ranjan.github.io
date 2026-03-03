type ProjectType = {
	title: string;
	link: string;
	image: string;
	description: string;
};

type CurrentProject = {
	id: string;
	title: string;
	description: string;
	status: string;
	technologies: string[];
	progress: number;
	githubUrl?: string;
	liveUrl?: string;
	startDate: string;
	estimatedCompletion?: string;
};

type SocialLinkType = {
    href: string;
    platform:
        | "github"
        | "linkedin"
        | "x"
        | "email"
        | "website"
        | "instagram"
        | "codepen"
        | string;
    label?: string;
};