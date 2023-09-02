/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '996px',
      // => @media (min-width: 1024px) { ... }

      xl: '1320px'
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '996px',
        xl: '1320px'
      }
    },
    extend: {
      colors: {
        primary: '#FBFF22',
        secondary: '#C96464'
      },
      fontFamily: {
        yeseva: ["'Yeseva One'", 'cursive'],
        noto: ["'Noto Sans TC'", "'sans-serif'"]
      },
      fontSize: {
        '3xl': '2rem',
        '6xl': '4rem'
      },
      borderWidth: {
        3: '3px'
      }
    }
  },
  plugins: []
}
