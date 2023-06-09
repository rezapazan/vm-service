/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['HK Grotesk'],
        plex: ['IBM Plex Sans'],
      },
      colors: {
        yellow: {
          primary: '#FAC802',
        },
        blue: {
          text: '#0D2D51',
          primary: '#2C5EFF',
          secondary: '#52C7FC',
          neutral: '#D1EFFE',
        },
        gray: {
          text: '#747577',
          placeholder: '#BBBCBF',
          disabled: '#E3E4E6',
          'primary-border': '#E3E4E6',
          'button-border': '#E8E9EB',
          'sidebar-border': '#E4E5E7',
        },
        red: {
          notification: '#FF0476',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
