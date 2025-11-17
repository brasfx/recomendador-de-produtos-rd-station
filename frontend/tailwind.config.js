/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#2563eb',
          600: '#1d4ed8',
        },
        secondary: {
          500: '#fe0000',
          600: '#ef4444',
        },
        disabled: {
          bg: '#d1d5db',
          text: '#9ca3af',
        },
      },
      borderRadius: {
        soft: '12px',
        card: '20px',
      },
      boxShadow: {
        card: '0 4px 18px rgba(0,0,0,0.08)',
        subtle: '0 1px 4px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};
