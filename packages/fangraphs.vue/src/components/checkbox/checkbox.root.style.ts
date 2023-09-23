import { cva } from '../../../styled-system/css'

export const root = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  variants: {
    size: {
      xs: { margin: 'xs' },
      sm: { margin: 'sm' },
      md: { margin: 'md' },
      lg: { margin: 'lg' },
      xl: { margin: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
