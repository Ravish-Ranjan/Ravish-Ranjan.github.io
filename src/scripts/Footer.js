export function Footer() {
	return (
		<div className="container-fluid my-5">
			<footer
				className="text-center text-lg-start text-white oswald-font-100"
				style={{ backgroundColor: "hsl(218, 14%, 15%)" }}
			>
				<section
					className="d-flex justify-content-between p-4"
					style={{ backgroundColor: "hsl(200, 26%, 46%)" }}
				></section>
				<section className="">
					<div className="container text-center text-md-start mt-5">
						<div className="row mt-3">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold">
									From Ravish Ranjan
								</h6>
								<hr
									className="mb-4 mt-0 d-inline-block mx-auto"
									style={{
										width: "60px",
										backgroundColor: " #7c4dff",
										height: "2px",
									}}
								/>
								<p>
									Looking forward for your response. Concider
									me for the post for Web Developer.
								</p>
							</div>

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold">
									Tools Used
								</h6>
								<hr
									className="mb-4 mt-0 d-inline-block mx-auto"
									style={{
										width: "60px",
										backgroundColor: " #7c4dff",
										height: " 2px",
									}}
								/>
								<p>React</p>
								<p>Bootstrap</p>
								<p>CSS</p>
								<p>Unsplash API</p>
							</div>

							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold">
									Contact
								</h6>
								<hr
									className="mb-4 mt-0 d-inline-block mx-auto"
									style={{
										width: "60px",
										backgroundColor: "#7c4dff",
										height: "2px",
									}}
								/>
								<p>
									<a
										className="text-white"
										href="https://github.com/Ravish-Ranjan"
									>
										Github
									</a>
								</p>
								<p>
									<a
										className="text-white"
										href="https://www.linkedin.com/in/ravish-ranjan-1a0757238/"
									>
										linkedin
									</a>
								</p>
								<p>
									<a
										className="text-white"
										href="mailto:ravishranjan2003@gmail.com"
									>
										Gmail
									</a>
								</p>
							</div>
						</div>
					</div>
				</section>

				<div className="text-center p-3">By : Ravish Ranjan</div>
			</footer>
		</div>
	);
}
