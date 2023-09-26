/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'roboto': ['Roboto'],
      },
      width: {
        '17.5': ['17.5rem'],
      }
    },
    plugins: [],
  }
}