/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#676e80',
        'custom-green': '#CCE16A',
        'Custom-orange': '#F97F29',
      },
    },
  },
  plugins: [],
}

