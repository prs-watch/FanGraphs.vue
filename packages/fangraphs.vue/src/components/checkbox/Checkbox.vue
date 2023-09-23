<script setup lang="ts">
import * as checkbox from '@zag-js/checkbox'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { v4 as uuidv4 } from 'uuid'
import { PropType, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { css } from '../../../styled-system/css'
import { control } from './checkbox.control.style'
import { icon } from './checkbox.icon.style'
import { text } from './checkbox.label.style'
import { SizeType } from '../../../panda.config.type'

const [state, send] = useMachine(checkbox.machine({ id: uuidv4() }))
const api = computed(() => checkbox.connect(state.value, send, normalizeProps))

defineProps({
  label: String,
  size: String as PropType<SizeType>,
})
</script>

<template>
  <label
    v-bind="api.rootProps"
    :class="
      css({
        display: 'inline-flex',
        alignItems: 'center',
      })
    "
  >
    <div v-bind="api.controlProps" :class="control({ size: size })">
      <Icon
        icon="radix-icons:check"
        v-if="api.isChecked"
        :class="icon({ size: size })"
      />
    </div>
    <input v-bind="api.hiddenInputProps" />
    <span v-bind="api.labelProps" :class="text({ size: size })">
      {{ label }}
    </span>
  </label>
</template>
