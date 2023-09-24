<script setup lang="ts">
import { PropType } from 'vue'
import { SizeType, ColorType } from '../../../panda.config.type'
import { body } from './card.body.style'
import { header } from './card.header.style'
import { card } from './card.style'

defineProps({
  size: String as PropType<SizeType>,
  title: String,
  color: String as PropType<ColorType>,
})
</script>

<template>
  <div :class="card({ size: size })">
    <h2 :class="header({ color: color, size: size })">{{ title }}</h2>
    <div :class="body({ color: color, size: size })">
      <slot />
    </div>
  </div>
</template>
