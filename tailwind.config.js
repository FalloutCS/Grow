/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  extend: {
		colors: {
		  // Primary colors - dark blues
		  primary: {
			DEFAULT: '#0C1328',  // Main dark blue
			100: '#2F4A9C',      // Lightest blue from palette
			200: '#273D81',
			300: '#1E2F63',
			400: '#152145',      // Base color from image
			500: '#0C1328',      // Darkest blue
		  },
		  // Secondary colors - whites and grays
		  secondary: {
			DEFAULT: '#FAFAFA',  // Pure white
			100: '#FAFAFA',
			200: '#E6E6E6',
			300: '#D4D4D4',
			400: '#BFBFBF',
			500: '#A6A6A6',
		  },
		  // Accent colors - cyan and green
		  accent: {
			cyan: {
			  DEFAULT: '#04D9FF',
			  light: '#04D9FF',    // Bright cyan
			  dark: '#039BBF',     // Darker cyan variant
			},
			green: {
			  DEFAULT: '#2ECC71',
			  light: '#2ECC71',    // Bright green
			  dark: '#27AE60',     // Darker green variant
			}
		  }
		},
		fontFamily: {
		  'display': ['Orbitron', 'sans-serif'],    // For titles (64px)
		  'header': ['Orbitron', 'sans-serif'],     // For headers (32px)
		  'body': ['Lato', 'sans-serif'],           // For regular text (24px)
		},
		fontSize: {
		  'display': ['64px', { lineHeight: '1.2' }],
		  'header': ['32px', { lineHeight: '1.3' }],
		  'body': ['24px', { lineHeight: '1.5' }],
		},
		borderRadius: {
		  'sm': '4px',
		  'md': '8px',
		  'lg': '12px',
		},
		spacing: {
		  'sm': '8px',
		  'md': '16px',
		  'lg': '24px',
		  'xl': '32px',
		  '2xl': '48px',
		}
	  }
	},
	plugins: [],
  }