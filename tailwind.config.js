/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all your React component paths here
  ],
  theme: {
    extend: {
      colors:{
       'bg-color': '#184E77',
        'primary-color': '#D9ED92',
        'secondary-color': '#1A759F',
        'tertiary-color': '#1E6091',
        'text-color': '#ffffff',
        'btn-text-color': '#1a1a1a',
      }
    },
  },
  plugins: [],
}

