<script setup lang="ts">
import { PropType } from 'vue'
import { badge } from './badge.style'
import { ColorType } from '../../../panda.config.type'

defineProps({
  label: String,
  color: String as PropType<ColorType>,
})
</script>

<template>
  <a :class="badge({ color: color })">{{ label }}</a>
</template>
