import { RecipeVariantProps, cva } from '../../../styled-system/css'

// style system
export const button = cva({})

// type defs
export type ButtonVariants = RecipeVariantProps<typeof button>
