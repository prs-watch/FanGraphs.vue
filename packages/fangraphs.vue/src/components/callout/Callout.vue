<script setup lang="ts">
import { PropType } from 'vue'
import { callout } from './callout.style'
import { SizeType } from '../../../panda.config.type'

defineProps({
  size: Object as PropType<SizeType>,
})
</script>

<template>
  <div :class="callout({ size: size })"><slot /></div>
</template>
