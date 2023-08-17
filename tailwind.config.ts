import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './design-system/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FFF',
        'off-white': '#f7f8f8',

        primary: '#373F68',
        'primary-lighter': '#3A4374',

        secondary: '#4661E6',
        'secondary-lighter': '#62BCFA',

        tertiary: '#AD1FEA',
        'tertiary-tint': '#C75AF6',

        grey: '#647196',
        'gray-lighter': '#656EA3',

        danger: '#E98888',
        'danger-lighter': '#F49F85',

        'layer-darker': '#7C91F9',
        'layer-dark': '#CFD7FF',
        'layer-base': '#F2F4FF',
        'layer-light': '#F2F4FE',
        'layer-lightest': '#F7F8FD',

        red: '#D73737',
        purple: '#5973fe',
        green: '#3fb68b',
        yellow: '#ffb648',
        teal: '#00ddc6',
        bronze: '#ba6c38',
        silver: '#c1c1c1',
        gold: '#ffb846',
        platinum: '#7af6c2',
        diamond: '#915eff',
      },
      fontFamily: {
        jost: '"Jost",sans-serif',
      },
      fontSize: {
        xs: '1.3rem',
        sm: '1.5rem',
        md: '1.6rem',
        lg: '1.8rem',
        xl: '2.0rem',
        '2xl': '2.4rem',
        '3xl': '2.6rem',
        '4xl': '3.2rem',
        '5xl': '4rem',
        '6xl': ['4.4rem', '1.1'],
        '7xl': ['4.8rem', '1.1'],
        '8xl': ['8rem', '1.1'],
      },
      spacing: {
        0: '0',
        1: '0.4rem',
        2: '0.8rem',
        3: '1.2rem',
        4: '1.6rem',
        5: '2rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        9: '3.6rem',
        10: '4rem',
        11: '4.4rem',
        12: '4.8rem',
        13: '5.2rem',
        14: '5.6rem',
        15: '6rem',
        16: '6.4rem',
        'navigation-height': 'var(--navigation-height)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
};
export default config;
