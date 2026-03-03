"use client";
import { create } from "zustand";

const MODE_KEY = "web-stat-theme";

type Mode = "light" | "dark" | "system";

interface ModeStore {
	mode: Mode;
	setMode: (mode: Mode) => void;
	initMode: () => void;
	getTheme: () => "light" | "dark";
}

export default create<ModeStore>((set, get) => ({
	mode: "system",
	setMode: (mode) => {
		localStorage.setItem(MODE_KEY, mode);
		set({ mode });
		applyTheme(mode);
	},
	initMode: () => {
		const saved = (localStorage.getItem(MODE_KEY) as Mode) || "system";
		if (saved) {
			set({ mode: saved });
			applyTheme(saved);
		} else {
			const systemPref = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";
			set({ mode: systemPref });
			if (systemPref === "dark")
				document.documentElement.classList.add("dark");
		}
	},
	getTheme: () => {
		if (get().mode === "system")
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		if (get().mode === "light") return "light";
		if (get().mode === "dark") return "dark";
		return "light";
	},
}));

function applyTheme(mode: Mode) {
	if (
		mode === "dark" ||
		(mode === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
}
