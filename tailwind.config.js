import('tailwindcss').Config

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headshot': 'url("/Users/juanlamar/portfolio/public/headshot.jpeg")',
      },
    },
  },
  plugins: [],
}

