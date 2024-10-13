import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { Home } from "./scripts/Home.js";
import { Nav } from "./scripts/Nav.js";
import { About } from "./scripts/About.js";
import { Prog } from "./scripts/Prog.js";
import { Work } from "./scripts/Work.js";
import { Footer } from "./scripts/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Prog />
		<Nav />
		<Home />
		<About />
		<Work />
		<Footer />
	</React.StrictMode>
);
