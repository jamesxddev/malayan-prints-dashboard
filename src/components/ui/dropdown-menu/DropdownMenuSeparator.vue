<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  DropdownMenuSeparator,
  type DropdownMenuSeparatorProps,
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuSeparatorProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DropdownMenuSeparator v-bind="delegatedProps" :class="cn('tw--mx-1 tw-my-1 tw-h-px tw-bg-zinc-100 dark:tw-bg-zinc-800', props.class)" />
</template>
