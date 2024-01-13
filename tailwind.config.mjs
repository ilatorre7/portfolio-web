/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lexend-deca': ["Lexend Deca", 'sans-serif'],
				'lexend': ["Lexend", 'sans-serif']
			},
			colors: {
				'main-txt': '#323232',
				'main-green': '#444F00',
				'main-bg': '#EDEDED'
			}
		},
	},
	plugins: [],
}
