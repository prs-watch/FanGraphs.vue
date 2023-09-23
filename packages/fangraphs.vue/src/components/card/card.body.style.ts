import { cva } from '../../../styled-system/css'

export const body = cva({
  variants: {
    color: {
      primary: { border: 'primary' },
      secondary: { border: 'secondary' },
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
