/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
		},
	},
	plugins: [require('@headlessui/tailwindcss')],
};
