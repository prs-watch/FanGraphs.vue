<script setup lang="ts">
import { PropType } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { ColorType } from '../../../panda.config.type'
import { badge } from './badge.style'

defineProps({
  label: String,
  color: String as PropType<ColorType>,
})
</script>

<template>
  <a :id="'badge:' + uuidv4()" :class="badge({ color: color })">{{ label }}</a>
</template>
