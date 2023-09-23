import { cva } from '../../../styled-system/css'

export const root = cva({
  base: {
    borderWidth: '0.1rem',
    borderStyle: 'solid',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'inline-flex',
  },
  variants: {
    size: {
      xs: { width: '8rem', height: '1.5rem', padding: 'xs', margin: 'xs' },
      sm: { width: '9rem', height: '1.75rem', padding: 'sm', margin: 'sm' },
      md: { width: '10rem', height: '2rem', padding: 'md', margin: 'md' },
      lg: { width: '11rem', height: '2.25rem', padding: 'lg', margin: 'lg' },
      xl: { width: '12rem', height: '2.5rem', padding: 'xl', margin: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
