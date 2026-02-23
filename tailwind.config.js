/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#223628',
        accent: '#D65A31',
        'accent-dark': '#B94C2B', // Added based on your CSS hover
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Maps 'font-sans' to Poppins
        aristotelica: ['Poppins', 'sans-serif'], // Keeps your class name working
      }
    },
  },
  plugins: [],
}