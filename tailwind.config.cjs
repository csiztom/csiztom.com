/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,css}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#58bc31',
					secondary: '#f298a3',
					accent: '#fcac8a',
					neutral: '#2a1b31',
					'base-100': '#e6e6e6',
					info: '#63abf2',
					success: '#2de1c9',
					warning: '#f6d946',
					error: '#f13813',
				},
			},
			'winter',
		],
	},
}
