/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
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
        hover: {
          primary: 'var(--color-secondary)',
          secondary: 'var(--color-accent)'
        }
      },
      borderColor: {
        default: 'var(--border-primary)',
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
    colors: {
      black: 'var(--color-primary)',
      blue: 'var(--color-secondary)',
      brown: 'var(--color-accent)',
      white: '#ffffff',
      transparent: 'transparent',
      pink: 'var(--color-gradient-from)',
      'blue-green': 'var(--color-gradient-via)',
      green: 'var(--color-gradient-to)',
      gradient: {
        primary: 'var(--gradient-primary)',
        secondary: 'var(--gradient-secondary)',
      },
      chocolate: 'var(--text-accent)'
    },
  },
  plugins: []
};
