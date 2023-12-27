import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				backgroundColor: 'rgb(var(--backgroundColor) / <alpha-value>)',
				primaryColor: 'rgb(var(--primaryColor) / <alpha-value>)',
				textColor: 'rgb(var(--textColor) / <alpha-value>)',
				highlightColor: 'rgb(var(--highlightColor) / <alpha-value>)',
				accentColor: 'rgb(var(--accentColor) / <alpha-value>)',
			},
			keyframes: {
				fadeIn: {
				  '0%': { opacity: 0 },
				  '100%': { opacity: 1 },
				},
				fadeInOut: {
					'0%': { opacity: 0 },
					'50%': { opacity: 1 },
					'100%': { opacity: 0 },
				},
			  },
			animation: {
				  fadeIn: 'fadeIn 1s ease-in-out forwards',
				  fadeInOut: 'fadeInOut 2s forwards',
				  show: 'fadeIn 0s steps(1, end) forwards'
			  }
		},
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
		  matchUtilities(
			{
			  "animation-delay": (value) => {
				return {
				  "animation-delay": value,
				};
			  },
			},
			{
			  values: theme("transitionDelay"),
			}
		  );

		  matchUtilities(
			{
			  "animation-duration": (value) => {
				return {
				  "animation-duration": value,
				};
			  },
			},
			{
			  values: theme("transitionDelay"),
			}
		  );
		}),
	  ],
}
