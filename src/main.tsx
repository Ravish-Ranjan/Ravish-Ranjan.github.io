import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./font.css"
import App from "./App.tsx";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider storageKey="vite-ui-theme" defaultTheme="system">
			<App />
		</ThemeProvider>
	</StrictMode>
);
