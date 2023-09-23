import { cva } from '../../../styled-system/css'

export const root = cva({
  base: {
    border: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'inline-flex',
  },
  variants: {
    // NOTE: specific definition because of size
    size: {
      xs: { width: '6rem', height: '1.5rem', padding: 'xs', margin: 'xs' },
      sm: { width: '8rem', height: '2rem', padding: 'sm', margin: 'sm' },
      md: { width: '10rem', height: '2.5rem', padding: 'md', margin: 'md' },
      lg: { width: '12rem', height: '3rem', padding: 'lg', margin: 'lg' },
      xl: { width: '14rem', height: '3.5rem', padding: 'xl', margin: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
