<script setup lang="ts">
import { PropType } from 'vue'
import { SizeType } from '../../../panda.config.type'
import { textfield } from './textfield.style.ts'

defineProps({
  size: String as PropType<SizeType>,
})
</script>

<template>
  <input type="text" :class="textfield({ size: size })" />
</template>
