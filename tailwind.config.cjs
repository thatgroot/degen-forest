/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'tablet': '768px',
      'laptop-sm': '1024px',
      'laptop': '1280px',
      'desktop': '1440px',
      'large': '2560px',
    },
    extend: {
      fontSize: {
        'xxs': '.625rem',
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        'secondary-light': 'var(--text-secondary-light)',
        accent: 'var(--text-accent)',
        success: 'var(--text-success)',
        warning: 'var(--text-warning)',
        danger: 'var(--text-danger)',
        info: 'var(--text-info)',
      },
      backgroundColor: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        accent: 'var(--color-accent)',
        hover: {
          primary: 'var(--color-secondary)',
          secondary: 'var(--color-accent)'
        }
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.5rem',
        '7xl': '4rem',
        '8xl': '4.5rem',
        '9xl': '5rem',
        '10xl': '5.5rem',
      },
      borderColor: {
        default: 'var(--border-primary)',
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
        'secondary-light': 'var(--border-secondary-light)',
        accent: 'var(--border-accent)',
        transparent: 'transparent',
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
      brown: 'var(--color-secondary)',
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
  plugins: [

  ]
};
