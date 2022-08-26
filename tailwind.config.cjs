/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: 'var(--text-accent)',
      },
      backgroundColor: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      borderColor: {
        default: 'var(--border-primary)',
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        gradient: {
          primary: 'var(--gradient-primary)',
          secondary: 'var(--gradient-secondary)',
        },

      },
    }
  },
  plugins: []
};
