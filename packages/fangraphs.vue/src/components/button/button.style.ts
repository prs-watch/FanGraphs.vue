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
      sm: { padding: 'sm', margin: 'sm', fontSize: 'sm' },
      md: { padding: 'md', margin: 'md', fontSize: 'md' },
      lg: { padding: 'lg', margin: 'lg', fontSize: 'lg' },
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
