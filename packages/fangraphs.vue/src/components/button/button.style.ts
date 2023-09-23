import { cva } from '../../../styled-system/css'

export const button = cva({
  base: {
    margin: 'auto',
    color: 'white',
    _hover: {
      opacity: 'basic',
    },
  },
  variants: {
    size: {
      xs: { padding: 'xs', margin: 'xs', fontSize: 'xs' },
      sm: { padding: 'sm', margin: 'sm', fontSize: 'sm' },
      md: { padding: 'md', margin: 'md', fontSize: 'md' },
      lg: { padding: 'lg', margin: 'lg', fontSize: 'lg' },
      xl: { padding: 'xl', margin: 'xl', fontSize: 'xl' },
    },
    color: {
      primary: { backgroundColor: 'primary' },
      secondary: { backgroundColor: 'secondary' },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})
