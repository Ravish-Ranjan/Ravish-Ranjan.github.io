import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AllProjects from "@/pages/AllProjects";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
function App() {
	return (
		<HashRouter>
			<SidebarProvider defaultOpen={false} className="flex flex-col">
				{/* navbar */}
				<Navbar />
				<Routes>
					<Route index path="/" element={<HomePage />} />
					<Route path="/allprojects" element={<AllProjects />} />
				</Routes>
			</SidebarProvider>
		</HashRouter>
	);
}

export default App;
