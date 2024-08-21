import { Routes, Route } from "react-router-dom";

import { Contact } from "./pages/Contact";
import { AboutMe } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";

export function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={<AboutMe />}
			/>
			<Route
				path="/resume"
				element={<Resume />}
			/>
			<Route
				path="/projects"
				element={<Projects />}
			/>
			<Route
				path="/contact"
				element={<Contact />}
			/>
		</Routes>
	);
}
