<script setup lang="ts">
import { PropType } from 'vue'
import { SizeType } from '../../../panda.config.type'
import { callout } from './callout.style'

defineProps({
  size: String as PropType<SizeType>,
})
</script>

<template>
  <div :class="callout({ size: size })"><slot /></div>
</template>
