import { cva } from '../../../styled-system/css'

export const icon = cva({
  base: {
    backgroundColor: 'checked',
    color: 'white',
  },
  variants: {
    size: {
      xs: { width: 'xs', height: 'xs' },
      sm: { width: 'sm', height: 'sm' },
      md: { width: 'md', height: 'md' },
      lg: { width: 'lg', height: 'lg' },
      xl: { width: 'xl', height: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
