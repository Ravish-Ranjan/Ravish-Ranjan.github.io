import { Button } from "./button";
import { useTheme } from "./theme-provider";
import { Sun, Moon, Monitor } from "lucide-react";
// import { Small } from "./Typography";

function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const handleChange = () => {
		switch (theme) {
			case "light":
				setTheme("dark");
				break;
			case "dark":
				setTheme("system");
				break;
			case "system":
				setTheme("light");
				break;
			default:
				setTheme("system");
				break;
		}
	};

	return (
		<Button
			onClick={handleChange}
			variant={"outline"}
			className="cursor-pointer"
		>
			{theme === "light" && <Sun />}
			{theme === "dark" && <Moon />}
			{theme === "system" && <Monitor />}
		</Button>
	);
}

export default ModeToggle;
