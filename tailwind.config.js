module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'scrollbar-thumb': '#374151',  // dark gray
        'scrollbar-track': '#000000',  // black
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
