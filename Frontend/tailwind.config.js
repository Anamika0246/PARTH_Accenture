/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9b59b6', // Add your custom purple color
      },
    },
  },
  plugins: [require('daisyui'),],
}

