import { cva } from '../../../styled-system/css'

export const badge = cva({
  base: {
    color: 'white',
    padding: 'sm',
    margin: 'sm',
    fontSize: 'sm',
  },
  variants: {
    color: {
      primary: { backgroundColor: 'primary', border: 'primary' },
      secondary: { backgroundColor: 'secondary', border: 'secondary' },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})
