import { cva } from '../../../styled-system/css'

export const callout = cva({
  base: {
    backgroundColor: 'lightblue',
    fontSize: 'sm',
  },
  variants: {
    size: {
      xs: { width: '1/5', margin: 'xs', padding: 'xs' },
      sm: { width: '2/5', margin: 'sm', padding: 'sm' },
      md: { width: '3/5', margin: 'md', padding: 'md' },
      lg: { width: '4/5', margin: 'lg', padding: 'lg' },
      xl: { width: '5/5', margin: 'xl', padding: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
