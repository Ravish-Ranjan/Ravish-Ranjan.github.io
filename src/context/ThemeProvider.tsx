"use client";

import useModeStore from "@/store/useModeStore";
import { ReactNode, useEffect } from "react";

interface ThemeProviderProps {
	children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
	const { initMode } = useModeStore();

	useEffect(() => {
		initMode();
	}, [initMode]);
	return <>{children}</>;
}
