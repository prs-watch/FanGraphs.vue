import { cva } from '../../../styled-system/css'

export const lab = cva({
  base: {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
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
