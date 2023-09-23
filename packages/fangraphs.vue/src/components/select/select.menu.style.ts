import { cva } from '../../../styled-system/css'

export const menu = cva({
  base: {
    backgroundColor: 'white',
  },
  variants: {
    size: {
      xs: { width: '6rem' },
      sm: { width: '8rem' },
      md: { width: '10rem' },
      lg: { width: '12rem' },
      xl: { width: '14rem' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
