/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: [
          '3.75em',
          { lineHeight: '120%', fontWeight: '700', letterSpacing: '0.45px' },
        ],
        h2: ['3em', { lineHeight: '133%', fontWeight: '700' }],
        h3: ['2.5em', { lineHeight: '120%', fontWeight: '500' }],
        subTitle1: ['1.75em', { lineHeight: '142%', fontWeight: '400' }],
        subTitle2: ['1.125em', { lineHeight: '155%', fontWeight: '700' }],
        body1: ['1.125em', { lineHeight: '155%', fontWeight: '500' }],
        body2Semibold: ['1em', { lineHeight: '150%', fontWeight: '600' }],
        body2Regular: ['1em', { lineHeight: '150%', fontWeight: '500' }],
      },
      colors: {
        main: {
          darkGreen: '#034221',
          darkOrange: '#DB5B23',
          darkPurrple: '#1A1423',
          appWhite: '#FFFFFF',
        },
        appGray: '#F5F5F5',
        appDarkGray: '#4F4F4F',
        appText: { label: '#787878' },
      },
    },
  },
  plugins: [],
};
