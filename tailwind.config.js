/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#B88E2F',
        dark: '#333333',
        grey: '#666666',
      },
      fontSize: {
        sm: ['18px', '24px'],
        base: ['22px', '26px'],
        lg: ['30px', '30px'],
        xl: ['38px', '34px'],
        xxl: ['46px', '34px'],
      },
    },
  },
  plugins: [],
};
