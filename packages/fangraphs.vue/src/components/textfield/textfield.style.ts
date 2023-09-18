import { cva } from '../../../styled-system/css'

export const textfield = cva({
  base: {
    borderWidth: '0.1rem',
    borderColor: 'black',
    borderStyle: 'solid',
  },
  variants: {
    size: {
      xs: { padding: 'xs', margin: 'xs', fontSize: 'xs' },
      sm: { padding: 'sm', margin: 'sm', fontSize: 'sm' },
      md: { padding: 'md', margin: 'md', fontSize: 'md' },
      lg: { padding: 'lg', margin: 'lg', fontSize: 'lg' },
      xl: { padding: 'xl', margin: 'xl', fontSize: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
