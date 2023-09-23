import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      // width, height
      sizes: {
        xs: { value: '0.5rem' },
        sm: { value: '0.75rem' },
        md: { value: '1rem' },
        lg: { value: '1.25rem' },
        xl: { value: '1.5rem' },
      },
      // margin, padding
      spacing: {
        xs: { value: '0.2rem' },
        sm: { value: '0.3rem' },
        md: { value: '0.4rem' },
        lg: { value: '0.5rem' },
        xl: { value: '0.6rem' },
      },
      // font-size
      fontSizes: {
        xs: { value: '0.5rem' },
        sm: { value: '0.75rem' },
        md: { value: '1rem' },
        lg: { value: '1.25rem' },
        xl: { value: '1.5rem' },
      },
      // colors
      colors: {
        white: { value: '#ffffff' },
        black: { value: '#000000' },
        green: { value: '#50ae26' },
        brown: { value: '#825a3f' },
        gray: { value: '#808080' },
        lightgray: { value: '#e5e5e5' },
        whitesmoake: { value: '#f5f5f5' },
        lightblue: { value: '#eaf2f8' },
        darkblue: { value: '#1a89c8' },
      },
      borders: {
        black: { value: '0.1rem solid {colors.black}' },
        lightgray: { value: '0.1rem solid {colors.lightgray}' },
        green: { value: '0.1rem solid {colors.green}' },
        brown: { value: '0.1rem solid {colors.brown}' },
      },
      // opacity
      opacity: {
        80: { value: 0.8 },
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: '{colors.green}' },
        secondary: { value: '{colors.brown}' },
        disabled: { value: '{colors.whitesmoak}' },
        focused: { value: '{colors.lightgray}' },
        checked: { value: '{colors.darkblue}' },
      },
      borders: {
        primary: { value: '{borders.green}' },
        secondary: { value: '{borders.brown}' },
      },
      opacity: {
        // @ts-ignore
        basic: { value: '{opacity.80}' },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
