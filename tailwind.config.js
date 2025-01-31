import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/styles/**/*.css',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-layout': `calc(1160px - 1px)`,
        'min-layout': '1160px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'tx-white': 'var(--tx-white)',
        'tx-black': 'var(--tx-black)',
        'tx-gray-10': 'var(--tx-gray-10)',
        'tx-gray-20': 'var(--tx-gray-20)',
        'tx-blue-50': 'var(--tx-blue-50)',
        'tx-yellow-50': 'var(--tx-yellow-50)',
        'tx-red-50': 'var(--tx-red-50)',
        'tx-gray-50': 'var(--tx-gray-50)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          1: 'var(--chart-1)',
          2: 'var(--chart-2)',
          3: 'var(--chart-3)',
          4: 'var(--chart-4)',
          5: 'var(--chart-5)',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addComponents }) => {
      addComponents({
        '.input-text-light > input::placeholder': {
          color: '#000',
        },
        '.input-text-light > input::before': {
          color: '#000',
          opacity: 0.5,
        },
        '.input-text-dark > input::placeholder': {
          color: '#fff',
        },
        '.input-text-dark > input::before': {
          color: '#fff',
          opacity: 0.5,
        },
        '.input-text-light': {
          outline: 'none',
        },
        '.input-text-dark': {
          outline: 'none',
        },
      });
    }),
  ],
};
