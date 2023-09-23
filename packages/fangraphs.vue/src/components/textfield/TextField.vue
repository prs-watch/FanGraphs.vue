<script setup lang="ts">
import { PropType } from 'vue'
import { textfield } from './textfield.style.ts'
import { SizeType } from '../../../panda.config.type'

defineProps({
  size: String as PropType<SizeType>,
})
</script>

<template>
  <input type="text" :class="textfield({ size: size })" />
</template>
