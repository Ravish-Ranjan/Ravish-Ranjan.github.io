const config = {
	appName: "Ravish Ranjan's portfolio",
	appDescription: "Ravish Ranjan's website/portfolio",
	appDeveloper: "Ravish Ranjan",
	appVersion: "1.0.0",
	backgroundColour: "#ffffff",
	themeColour: "#232323",
	display: "fullscreen",
	orientation: "portrait",
	startUrl: "/",
	icons: [
		{
			src: "logo.png", // Your original icon
			sizes: [16, 32, 96, 128, 192, 256, 384, 512],
		},
	],
	splashScreens: [
		{
			src: "logo.png", // Your original splash screen
			sizes: [
				{ width: 320, height: 480 },
				{ width: 375, height: 667 },
				// ... other sizes
			],
		},
	],
};

module.exports = config;
