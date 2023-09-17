<script setup lang="ts">
import { PropType } from 'vue'

import { card } from './card.style'
import { header } from './card.header.style'
import { body } from './card.body.style'
import { SizeType } from '../../../panda.config.type'

defineProps({
  size: Object as PropType<SizeType>,
  title: String,
  color: Object as PropType<'primary' | 'secondary' | undefined>,
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
