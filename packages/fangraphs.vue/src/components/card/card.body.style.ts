import { cva } from '../../../styled-system/css'

export const body = cva({
  base: {
    borderWidth: '0.1rem',
    borderStyle: 'solid',
  },
  variants: {
    color: {
      primary: { borderColor: 'primary' },
      secondary: { borderColor: 'secondary' },
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
