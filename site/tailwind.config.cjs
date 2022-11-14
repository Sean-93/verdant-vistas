/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,css}'],
	theme: {
		screens: {
		  xxxsm: "300px",
		  xxsm: "350px",
		  xsm: "480px",
		  sm: "768px",
		  md: "976px",
		  lg: "1280px",
		  xl: "1800px",
		  xxl: "2200px",
		  xxxl: "3000px"
		},
		extend: {
		  colors: {
		  },
		},
	  },
	plugins: [],
}
