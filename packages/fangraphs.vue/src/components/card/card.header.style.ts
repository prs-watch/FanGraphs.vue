import { cva } from '../../../styled-system/css'

export const header = cva({
  base: {
    color: 'white',
    fontWeight: 'bold',
  },
  variants: {
    color: {
      primary: { backgroundColor: 'primary' },
      secondary: { backgroundColor: 'secondary' },
    },
    size: {
      xs: { padding: 'xs' },
      sm: { padding: 'sm' },
      md: { padding: 'md' },
      lg: { padding: 'lg' },
      xl: { padding: 'xl' },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})
