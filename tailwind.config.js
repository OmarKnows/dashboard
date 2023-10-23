/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			stoke: '#E2E8F0',
			gray: '#64748B',
			dark: '#1C2434',
			disabled: '#EFF4FB',
			red: '#ff0000',
		},
		extend: {
			fontFamily: {
				custom: ['Satoshi', 'sans'],
			},
		},
	},
	plugins: [],
};
