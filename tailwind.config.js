/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"open-sans": ["Open Sans", "sans-serif"],
				"cormorant-upright": ["Cormorant Upright", "serif"],
			},
			colors: {
				golden: "#DCCA87",
				black: "#0C0C0C",
				gray: "#545454",
				crimson: "#F5EFDB",
				grey: "#AAAAAA",
				white: "#FFFFFF",
			},
			backgroundImage: {
				"blur-black": 'url("./src/assets/bg.png")',
			},
		},
		screens: {
			xs: "480px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};
