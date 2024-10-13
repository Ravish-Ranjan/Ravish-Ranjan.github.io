import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import illustration from "../assets/illus.svg"

export function Home() {
	return (
		<div className="home page-block" id="home">
			<div className="homecover">
				<h1 className="title oswald-font">Hi, Ravish here</h1>
				<p className="para">
					Seeking challenging and reputed career opportunities in web
					development, specifically in front-end development. where I
					can apply my skills and knowledge to develop and captivating
					user interfaces.
				</p>
				<p className="bio oswald-font">
					<span>Proficiency</span>
					<span>Problem-Solving</span>
					<span>Collaboration</span>
					<span>Passion</span>
					<span>Adaptability</span>
				</p>
			</div>
			<img src={illustration} alt="Illustration"></img>
		</div>
	);
}
