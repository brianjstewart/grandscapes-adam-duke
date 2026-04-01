import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8faf6',
          100: '#f0f4ed',
          200: '#dde8d5',
          300: '#c5d9b8',
          400: '#a8c693',
          500: '#8fb371',
          600: '#6f9456',
          700: '#557345',
          800: '#3d5432',
          900: '#2a3a23',
        },
        accent: {
          50: '#f5f7fa',
          100: '#e8eef6',
          200: '#d0dded',
          300: '#a8c5df',
          400: '#7da7d1',
          500: '#5a8bc4',
          600: '#4a73b8',
          700: '#3d5fa0',
          800: '#314c85',
          900: '#283c6d',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['ui-serif', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
