<script setup lang="ts">
import { PropType } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { SizeType, ColorType } from '../../../panda.config.type'
import { button } from './button.style.ts'

defineProps({
  label: String,
  size: String as PropType<SizeType>,
  color: String as PropType<ColorType>,
})
</script>

<template>
  <a :id="'button:' + uuidv4()" :class="button({ size: size, color: color })">{{
    label
  }}</a>
</template>
