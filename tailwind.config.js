/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#ffffff',
			stoke: '#E2E8F0',
			gray: '#64748B',
			disabled: '#EFF4FB',
		},
		extend: {
			fontFamily: {
				custom: ['Satoshi', 'sans'],
			},
		},
	},
	plugins: [],
};
