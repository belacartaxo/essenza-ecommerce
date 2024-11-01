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
        'padding1': '13px 80px', // Define a classe personalizada
        'padding2': '13px 50px',
        'padding3': '18px 30px'
      },
      fontSize: {
        'fsize1': '20px', // Defina seu tamanho personalizado
      },
    },
  },
  plugins: [],
}