/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        // primary: ["Poppins", "sans-serif"],
        // primary: ['Roboto', ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#222222',
        darkBg: '#1d2330',
        // darkBg: '#121212'
        textGray: '#e6eaf5',
        textDark: '#1d2330',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        blink: {
          '50%': {
            opacity: 0,
          },
        },
        streamleft: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '50%': {
            transform: 'translateX(25%)',
          },
          '100%': {
            transform: 'translateX(50%)',
          },
        },
        streamright: {
          '100%': {
            transform: 'translateX(-50%)',
          },
          '50%': {
            transform: 'translateX(-25%)',
          },
          '0%': {
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        blink: 'blink .7s linear infinite',
        streamleft: 'streamleft  15s linear infinite forwards',
        streamright: 'streamright 15s linear 0s infinite normal none running'
      },
      // gridAutoRows: {

      // },
      // gridAutoColumns: {

      // },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sd: '720px',
      sm: '870px',
      md: '1060px',
      lg: '1200px',
      xl: '1400px',
      xxl: '1700px',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
  
};
