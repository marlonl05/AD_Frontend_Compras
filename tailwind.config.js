/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/react-tailwindcss-select/dist/index.esm.js',
	],
	theme: {
		extend: {
			colors: {
				dark: {
					100: '#262837',
					200: '#1F1D2B',
				},
				secondary: {
					100: '#EC7C6A',
				},
			},
			animation: {
				fade: 'fadeIn .3s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
			screens: {
				lg2: '1280px',
			},
		},
	},
	plugins: [require('@headlessui/tailwindcss')],
};
