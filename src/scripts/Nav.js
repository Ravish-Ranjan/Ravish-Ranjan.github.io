import "../styles/Nav.css";
import logo from "../media/logo.svg";

export function Nav() {
	return (
		<div className="navbar oswald-font">
			<div className="brand">
				<img src={logo} alt="Logo"></img>
				<span>Portfolio</span>
			</div>
			<div className="nav-links">
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#work">Work</a>
			</div>
		</div>
	);
}