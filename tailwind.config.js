/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mulberry: {
          50: '#faf5f9',
          100: '#f5eaf3',
          200: '#ebd6e7',
          300: '#dbb6d1',
          400: '#c68db5',
          500: '#b06c9b',
          600: '#9a517f',
          700: '#7e4067',
          800: '#693756',
          900: '#5a3049',
          950: '#3a1a2e',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            a: {
              color: theme('colors.mulberry.600'),
              '&:hover': {
                color: theme('colors.mulberry.700'),
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
              backgroundColor: '#f3f4f6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
              overflowX: 'auto',
            },
          },
        },
        mulberry: {
          css: {
            '--tw-prose-links': theme('colors.mulberry.600'),
            '--tw-prose-invert-links': theme('colors.mulberry.400'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 