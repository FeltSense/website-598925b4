import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF5F7',
          100: '#D7EBF0',
          200: '#AFD7E0',
          300: '#87C3D1',
          400: '#5FAFC1',
          500: '#4A92A6',
          600: '#3C7588',
          700: '#2D5866',
          800: '#1E3B44',
          900: '#0F1D22',
        },
        secondary: {
          50: '#F0F7F4',
          100: '#E1EFE9',
          200: '#C3DFD3',
          300: '#A5CFBD',
          400: '#87BFA7',
          500: '#6AA490',
          600: '#558373',
          700: '#406256',
          800: '#2B4239',
          900: '#15211D',
        },
        accent: {
          50: '#FEF6F0',
          100: '#FDEDE1',
          200: '#FBDBC3',
          300: '#F9C9A5',
          400: '#F7B787',
          500: '#E89B66',
          600: '#BA7C52',
          700: '#8B5D3D',
          800: '#5D3E29',
          900: '#2E1F14',
        },
      },
    },
  },
  plugins: [],
};

export default config;
