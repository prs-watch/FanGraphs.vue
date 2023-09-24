<script setup lang="ts">
import { PropType } from 'vue'
import { ColorType } from '../../../panda.config.type'
import { badge } from './badge.style'

defineProps({
  label: String,
  color: String as PropType<ColorType>,
})
</script>

<template>
  <a :class="badge({ color: color })">{{ label }}</a>
</template>
