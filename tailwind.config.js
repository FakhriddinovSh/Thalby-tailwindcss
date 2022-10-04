/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '90%': '90%',
        '480' : '480px',
      },
      padding: {
        '70': '70px',
      },
      colors: {
        'header-link': '#1C1B1B',
        'hero-bg' : '#F0EFEB',
        'feedback-bg' : '#CCCCCC',

      },
      fontSize: {
        sm: '0.8rem',
        feedbackTitle: '22px',
        contact: '14px'
      },
      maxWidth: {
        '481': '481px',
        '248': '248px',
        '632' : '632px',
        '151' : '151px',
        '115' : '115px',
        '498' : '498px',
        '705' : '705px',
        '366' : '366px',
      },
      lineHeight: {
        'extra-loose': '2.5',
      }
    },
  },
  plugins: [],
}
