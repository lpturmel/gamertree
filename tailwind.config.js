// tailwind.config.js
module.exports = {
	purge: [],
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#845EC2",
				background: "#1A202D",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
