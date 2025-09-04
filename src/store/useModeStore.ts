import { create } from "zustand";

type Mode = "dark" | "light" | "system";

interface ModeProps {
	mode: Mode;
	setMode: (inputMode: Mode) => void;
	getTheme: () => "dark" | "light";
}

const useModeStore = create<ModeProps>((set) => ({
	mode: (() => {
		const value = localStorage.getItem("portfolio-ui-mode");
		const val =
			value === "dark" || value === "light" || value === "system"
				? value
				: "system";

		// Apply initial theme
		applyTheme(val);

		return val;
	})(),
	setMode: (inputMode: Mode) => {
		localStorage.setItem("portfolio-ui-mode", inputMode);
		set({ mode: inputMode });
		applyTheme(inputMode);
	},
	getTheme: (): "dark" | "light" => {
		const currentMode = useModeStore.getState().mode;
		if (currentMode === "system") {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		}
		return currentMode;
	},
}));

// helper to apply the correct class
function applyTheme(mode: Mode) {
	document.documentElement.classList.remove("dark", "light");

	if (mode === "system") {
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
			.matches
			? "dark"
			: "light";
		document.documentElement.classList.add(systemTheme);
	} else {
		document.documentElement.classList.add(mode);
	}
}

export default useModeStore;
