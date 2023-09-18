import { cva } from '../../../styled-system/css'

export const checkbox = cva({
  base: {
    borderWidth: '0.1rem',
    borderStyle: 'solid',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginRight: 'sm',
  },
  variants: {
    size: {
      xs: { width: '0.5rem', height: '0.5rem' },
      sm: { width: '0.75rem', height: '0.75rem' },
      md: { width: '1rem', height: '1rem' },
      lg: { width: '1.25rem', height: '1.25rem' },
      xl: { width: '1.5rem', height: '1.5rem' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
