/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-black':
          'linear-gradient(to right bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(https://i.pinimg.com/originals/da/57/94/da579413bf1628ac0488e51dbd8ad5ff.png)',
        'hero-pattern-white':
          'linear-gradient(to right bottom, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(https://i.pinimg.com/originals/da/57/94/da579413bf1628ac0488e51dbd8ad5ff.png )'
      },

      fontSize: {
        h1: '2.5rem', // 40px
        h2: '2rem', // 32px
        h3: '1.75rem', // 28px
        h4: '1.5rem', // 24px
        h5: '1.25rem', // 20px
        body: '1rem', // 16px
        small: '0.875rem', // 14px
        button: '1.125rem', // 18px
        caption: '0.75rem' // 12px
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      }
    }
  },
  plugins: []
}
