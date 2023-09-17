import { cva } from '../../../styled-system/css'

export const callout = cva({
  base: {
    backgroundColor: 'lightblue',
    fontSize: 'sm',
  },
  variants: {
    size: {
      xs: { width: 'xs', margin: 'xs', padding: 'xs' },
      sm: { width: 'sm', margin: 'sm', padding: 'sm' },
      md: { width: 'md', margin: 'md', padding: 'md' },
      lg: { width: 'lg', margin: 'lg', padding: 'lg' },
      xl: { width: 'xl', margin: 'xl', padding: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
