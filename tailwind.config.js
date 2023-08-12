/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1439px' },
      // => @media (max-width: 1439px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... } laptop

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... } tablet

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... } mobile
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        'white-off': '#FAFAFA',
        gray: '#F1F1F1',
        black: '#000000',
        'black-light': '#101010',
        orange: '#D87D4A',
        'orange-light': '#FBAF85',
      },
      fontSize: {
        sm: '12px',
        md: '15px',
        lg: '18px',
        xl: '24px',
      },
    },
  },
  plugins: [],
}
