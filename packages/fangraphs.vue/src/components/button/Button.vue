<script setup lang="ts">
import { PropType } from 'vue'
import { type ButtonVariants, button } from './button.style.ts'

defineProps({
  label: String,
  variants: Object as PropType<ButtonVariants>,
})
</script>

<template>
  <a :class="button(variants)">{{ label }}</a>
</template>
