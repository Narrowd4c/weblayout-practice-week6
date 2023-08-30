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

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '996px',
        xl: '1280px',
        '2xl': '1440px'
      }
    },
    extend: {
      color: {},
      fontFamily: {
        yeseva: ["'Yeseva One'", 'cursive'],
        noto: ["'Noto Sans TC'", "'sans-serif'"]
      },
      fontSize: {
        8: '2rem'
      }
    }
  },
  plugins: []
}
