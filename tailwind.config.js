module.exports = {
  content: [
    // Use *.tsx if using TypeScript
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    fontFamily: {
      'krona-one': ['"Krona One"', 'sans-serif'],
      'tutorial': ['-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto','Oxygen','Ubuntu','Cantarell',
        '"Fira Sans"','"Droid Sans"','"Helvetica Neue"','sans-serif']
    },
    extend: {
      colors: {
        '0070f3': '#0070f3',
      },
    }
  },
  plugins: [],
}
