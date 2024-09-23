/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Incluye el archivo index.html si es necesario
    './src/**/*.{vue,js,ts,jsx,tsx}', // Incluye todos los archivos Vue, JS, TS, JSX, y TSX en la carpeta src
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp0_7: 'fadeInUp 0.7s ease-out forwards',
        fadeInUp1: 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [
  ],
}
