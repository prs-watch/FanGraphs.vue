<script setup lang="ts">
import { PropType } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { SizeType } from '../../../panda.config.type'
import { callout } from './callout.style'

defineProps({
  size: String as PropType<SizeType>,
})
</script>

<template>
  <div :id="'callout:' + uuidv4()" :class="callout({ size: size })">
    <slot />
  </div>
</template>
