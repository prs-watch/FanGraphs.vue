<script setup lang="ts">
import { PropType, computed } from 'vue'
import { Icon } from '@iconify/vue'
import * as checkbox from '@zag-js/checkbox'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { v4 as uuidv4 } from 'uuid'
import { SizeType } from '../../../panda.config.type'
import { control } from './checkbox.control.style'
import { icon } from './checkbox.icon.style'
import { lab } from './checkbox.label.style'
import { root } from './checkbox.root.style'

const props = defineProps({
  modelValue: Boolean,
  label: String,
  size: String as PropType<SizeType>,
})
const emits = defineEmits(['update:model-value'])

const [state, send] = useMachine(
  checkbox.machine({
    id: uuidv4(),
    checked: props.modelValue,
    onCheckedChange(details) {
      emits('update:model-value', details.checked)
    },
  }),
)
const api = computed(() => checkbox.connect(state.value, send, normalizeProps))
</script>

<template>
  <label v-bind="api.rootProps" :class="root({ size: size })">
    <div v-bind="api.controlProps" :class="control({ size: size })">
      <Icon
        icon="radix-icons:check"
        v-if="api.isChecked"
        :class="icon({ size: size })"
      />
    </div>
    <input v-bind="api.hiddenInputProps" />
    <span v-bind="api.labelProps" :class="lab({ size: size })">
      {{ label }}
    </span>
  </label>
</template>
