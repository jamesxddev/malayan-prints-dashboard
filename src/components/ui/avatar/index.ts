import { cva, type VariantProps } from 'class-variance-authority'

export { default as Avatar } from './Avatar.vue'
export { default as AvatarFallback } from './AvatarFallback.vue'
export { default as AvatarImage } from './AvatarImage.vue'

export const avatarVariant = cva(
  'tw-inline-flex tw-items-center tw-justify-center tw-font-normal tw-text-zinc-950 tw-select-none tw-shrink-0 tw-bg-zinc-100 tw-overflow-hidden dark:tw-text-zinc-50 dark:tw-bg-zinc-800',
  {
    variants: {
      size: {
        sm: 'tw-h-10 tw-w-10 tw-text-xs',
        base: 'tw-h-16 tw-w-16 tw-text-2xl',
        lg: 'tw-h-32 tw-w-32 tw-text-5xl',
      },
      shape: {
        circle: 'tw-rounded-full',
        square: 'tw-rounded-md',
      },
    },
  },
)

export type AvatarVariants = VariantProps<typeof avatarVariant>
