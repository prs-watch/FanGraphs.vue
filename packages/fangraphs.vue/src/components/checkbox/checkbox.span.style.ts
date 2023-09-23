import { cva } from '../../../styled-system/css'

export const span = cva({
  base: {
    userSelect: 'none',
  },
  variants: {
    size: {
      xs: { fontSize: 'xs' },
      sm: { fontSize: 'sm' },
      md: { fontSize: 'md' },
      lg: { fontSize: 'lg' },
      xl: { fontSize: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
