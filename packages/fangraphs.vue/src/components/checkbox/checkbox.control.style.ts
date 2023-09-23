import { cva } from '../../../styled-system/css'

export const control = cva({
  base: {
    border: 'black',
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    size: {
      xs: { width: 'xs', height: 'xs', marginRight: 'xs' },
      sm: { width: 'sm', height: 'sm', marginRight: 'sm' },
      md: { width: 'md', height: 'md', marginRight: 'md' },
      lg: { width: 'lg', height: 'lg', marginRight: 'lg' },
      xl: { width: 'xl', height: 'xl', marginRight: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
