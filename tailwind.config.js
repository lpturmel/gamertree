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
				primary: "#6202EE",
				"primary-hover": "#5601E8",
				"primary-active": "#3600B3",
				"text-hover": "#797979",
				secondary: "#202020",
				background: "#121212",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
