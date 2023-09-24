<script setup lang="ts">
import { PropType } from 'vue'
import { SizeType, ColorType } from '../../../panda.config.type'
import { button } from './button.style.ts'

defineProps({
  label: String,
  size: String as PropType<SizeType>,
  color: String as PropType<ColorType>,
})
</script>

<template>
  <a :class="button({ size: size, color: color })">{{ label }}</a>
</template>
