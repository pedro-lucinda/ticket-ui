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
          'linear-gradient(181.91deg, #1F063E 8.55%, #1F063E 8.57%, rgba(31, 6, 62, 0) 207.98%)',

        'home-hero': "url('/assets/images/home-header-bg.png')",
      },
    },
    colors: {
      purple100: '#f5f5ff',
      purple500: '#9563FF',
      purple600: '#7049C5',
      purple900: '#1F063E',
      gray300: '#EEEEEE',
      white: '#FFFFFF',
      black: '#000000',
    },

    fontFamily: {
      sans: 'Sora, sans-serif',
      body: 'Sora, sans-serif',
      heading: 'Sora, sans-serif',
    },

    fontSize: {
      '2xs': '10px',
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
