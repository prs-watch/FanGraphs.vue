<script setup lang="ts">
import { PropType, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { SizeType } from '../../../panda.config.type'
import { textfield } from './textfield.style.ts'

defineProps({
  modelValue: String,
  size: String as PropType<SizeType>,
})
defineEmits(['update:model-value'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:model-value', $event.target.value)"
    :id="'textfield:' + uuidv4()"
    type="text"
    :class="textfield({ size: size })"
  />
</template>
