import { cva } from '../../../styled-system/css'

export const value = cva({
  base: {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
  },
  variants: {
    size: {
      xs: {
        fontSize: 'xs',
        width: '6rem',
        height: '1rem',
        padding: 'xs',
        margin: 'xs',
      },
      sm: {
        fontSize: 'sm',
        width: '8rem',
        height: '1.5rem',
        padding: 'sm',
        margin: 'sm',
      },
      md: {
        fontSize: 'md',
        width: '10rem',
        height: '2rem',
        padding: 'md',
        margin: 'md',
      },
      lg: {
        fontSize: 'lg',
        width: '12rem',
        height: '2.5rem',
        padding: 'lg',
        margin: 'lg',
      },
      xl: {
        fontSize: 'xl',
        width: '14rem',
        height: '3rem',
        padding: 'xl',
        margin: 'xl',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
