/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		
		extend: {
			colors: {
				primary: {
					DEFAULT: '#252422',
					
				},
				secondary: {
					DEFAULT: '#eb5e28',
					
				}
		},
				},
	},
	plugins: [],
}
