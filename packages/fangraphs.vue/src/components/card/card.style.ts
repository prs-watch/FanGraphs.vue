import { cva } from '../../../styled-system/css'

export const card = cva({
  variants: {
    size: {
      xs: { width: '1/5', margin: 'xs' },
      sm: { width: '2/5', margin: 'sm' },
      md: { width: '3/5', margin: 'md' },
      lg: { width: '4/5', margin: 'lg' },
      xl: { width: '5/5', margin: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
