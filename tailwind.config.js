/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#B88E2F',
        secnodary: '#333333',
        tertiary: '#FFF3E3',
        dark: '#333333',
        grey: '#666666',
        lightGrey:"#9F9F9F"
      },
      fontSize: {
        sm: ['18px'],
        base: ['22px'],
        lg: ['30px'],
        xl: ['38px'],
        xxl: ['46px'],
      },
    },
  },
  plugins: [],
};
