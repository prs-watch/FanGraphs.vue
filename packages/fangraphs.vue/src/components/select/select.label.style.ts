import { cva } from '../../../styled-system/css'

export const lab = cva({
  variants: {
    size: {
      xs: { marginRight: 'xs', fontSize: 'xs' },
      sm: { marginRight: 'sm', fontSize: 'sm' },
      md: { marginRight: 'md', fontSize: 'md' },
      lg: { marginRight: 'lg', fontSize: 'lg' },
      xl: { marginRight: 'xl', fontSize: 'xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
