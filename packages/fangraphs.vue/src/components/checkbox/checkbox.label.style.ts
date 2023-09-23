import { cva } from '../../../styled-system/css'

export const text = cva({
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
