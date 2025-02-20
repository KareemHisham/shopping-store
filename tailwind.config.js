/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem'
		},
		extend: {
			colors: {
				primary: '#B88E2F',
				dark: '#333333',
				tertiary: '#FAF3EA',
				grey: '#666666',
				lightGrey: '#9F9F9F',
				darkGrey: '#898989',
				lightPink: "#F9F1E7"
			},
			fontSize: {
				xs: ['14px'],
				base: ['22px'],
				lg: ['30px'],
				xl: ['38px'],
				xxl: ['46px'],
			},
			backgroundImage: {
				'mini-hero': "url('./public/assets/collection/bg_miniHero.png')",
			},
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1024',
				'2xl': '1300px',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
};