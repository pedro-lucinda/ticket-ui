/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/views/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        purpleGradient:
          'linear-gradient(118.98deg, #1F063E -2.11%, rgba(31, 6, 62, 0.56) 61.87%)',
      },
    },
    colors: {
      purple500: '#9563FF',
      purple600: '#7049C5',
      purple900: '#1F063E',
      gray300: '#EEEEEE',
      white: '#FFFFFF',
    },

    fontFamily: {
      sans: 'Sora, sans-serif',
      body: 'Sora, sans-serif',
      heading: 'Sora, sans-serif',
    },

    fontSize: {
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '2px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '40px',
    },
  },
  plugins: [],
}
