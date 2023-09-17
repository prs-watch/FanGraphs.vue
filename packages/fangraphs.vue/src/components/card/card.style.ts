import { cva } from '../../../styled-system/css'

export const card = cva({
  variants: {
    size: {
      xs: { width: 'xs', margin: 'xs' },
      sm: { width: 'sm', margin: 'sm' },
      md: { width: 'md', margin: 'md' },
      lg: { width: 'lg', margin: 'lg' },
      xl: { width: 'xl', margin: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
