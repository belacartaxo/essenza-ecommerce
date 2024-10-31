/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brownC': '#522B29',
        'yellowC': '#DCC48E',
        'whiteC': '#EAEFD3',
        'greenDC': '#001214',
        'greenLC': '#4E6151'
      },
      padding: {
        'margin1': '20px 0px', // Define a classe personalizada
      },
      fontSize: {
        'fsize1': '20px', // Defina seu tamanho personalizado
      },
    },
  },
  plugins: [],
}