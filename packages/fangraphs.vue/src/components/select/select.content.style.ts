import { cva } from '../../../styled-system/css'

export const content = cva({
  base: {
    width: '100%',
    backgroundColor: 'white',
  },
  variants: {
    size: {
      xs: { width: '8rem' },
      sm: { width: '9rem' },
      md: { width: '10rem' },
      lg: { width: '11rem' },
      xl: { width: '12rem' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
