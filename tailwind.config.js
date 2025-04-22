/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a1a1a', // color de fondo oscuro
        lightBackground: '#f8f8f8', // color de fondo claro
        primaryText: '#e1e1e1', // texto principal
        secondaryText: '#888888', // texto secundario
        buttonPrimary: '#4F88C1', // color de los botones
        buttonHover: '#3A6B9D', // hover de botones
      },
    },
  },
  plugins: [],
}
