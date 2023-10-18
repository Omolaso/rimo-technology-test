/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./utils/**/*.{js,ts,jsx,tsx,mdx}",
		"./views/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xsm: "300px",
				sm: "480px",
				md: "768px",
				lg: "1100px",
				xl: "1440px",
			},
			colors: {
				white: "#fff",
				lightGrey: "#8F8F8F",
				deepGrey: "#3A3A3A",
				deeperGrey: "#303030",
				black: "#212121",
				buttonColor: "#1EAEA3",
				normalBlack: "#000",
				signUpFormtext: "#7B61FF"
			},
		},
	},
	plugins: [],
};
