/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FFF3F1',
          teal: {
            DEFAULT: '#4CBEB6',
            dark: '#2A6D69',
            light: '#87D7CC',
            medical: '#4ECDC4',
            education: '#4CB8C4',
            mission: '#4CBEB6',
            community: '#3CBCB5'
          },
          charcoal: '#1A2C34',
          cream: '#FFFAF9',
          gold: {
            DEFAULT: '#F7DC6F',
            dark: '#F4D03F'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif']
      },
      borderRadius: {
        '2xl': '12px'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'glow': '0 2px 6px rgba(76, 190, 182, 0.3)'
      }
    }
  },
  plugins: [],
};