/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FFF3F1',
          teal: '#C1E8E0',
          sage: '#AACDBE',
          charcoal: '#333333',
          cream: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif']
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: [],
};