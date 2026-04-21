/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Si vous utilisez la structure /app de Next.js
  ],
  theme: {
    extend: {
      colors: {
        // Ajout de la couleur dorée personnalisée pour le côté premium
        'gold': {
          DEFAULT: '#C5A059',
          light: '#d4b375',
          dark: '#a68546',
        },
        // Noir profond type Mastermind Ultra
        'dark-bg': '#050505',
      },
      backgroundImage: {
        // Permet de créer des dégradés subtils comme sur le site de Franck Nicolas
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

