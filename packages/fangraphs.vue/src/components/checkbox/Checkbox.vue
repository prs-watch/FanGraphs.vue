<script setup lang="ts">
import { PropType } from 'vue'
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'
import { css } from '../../../styled-system/css'
import { checkbox } from './checkbox.style'
import { icon } from './checkbox.icon.style'
import { span } from './checkbox.span.style'
import { SizeType } from '../../../panda.config.type'

defineProps({
  size: String as PropType<SizeType>,
  label: String,
})
</script>

<template>
  <div>
    <label
      :class="
        css({
          display: 'flex',
          alignItems: 'center',
        })
      "
    >
      <CheckboxRoot :class="checkbox({ size: size })">
        <CheckboxIndicator
          :class="
            css({
              alignItems: 'center',
              backgroundColor: 'checked',
            })
          "
        >
          <Icon icon="radix-icons:check" :class="icon({ size: size })" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span :class="span({ size: size })">{{ label }}</span>
    </label>
  </div>
</template>
