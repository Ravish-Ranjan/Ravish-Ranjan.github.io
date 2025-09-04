import clsx from "clsx";
import useModeStore from "@/store/useModeStore";
import Button from "./ui/button";
import { Sun, Moon, System } from "@/assets/icones";

interface ThemeToggleProps {
	classname?: string;
}

function ThemeToggle({ classname }: ThemeToggleProps) {
	const { setMode, mode } = useModeStore();

	function handleThemeChange(): void {
		// e.stopPropagation();
		if (mode === "light") setMode("dark");
		else if (mode === "dark") setMode("system");
		else if (mode === "system") setMode("light");
	}
	return (
		<Button
			onClick={handleThemeChange}
			title="toggle colour theme"
			variant={"outline"}
			className={clsx(classname, "cursor-pointer")}
		>
			{mode === "system" && <System strokeWidth={2.5} />}
			{mode === "light" && <Sun strokeWidth={2.5} />}
			{mode === "dark" && <Moon strokeWidth={2.5} />}
		</Button>
	);
}

export default ThemeToggle;
