<script setup lang="ts">
import { PropType, computed, Teleport } from 'vue'
import { Icon } from '@iconify/vue'
import * as select from '@zag-js/select'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { v4 as uuidv4 } from 'uuid'
import { SizeType } from '../../../panda.config.type'
import { css } from '../../../styled-system/css'
import { lab } from './select.label.style'
import { menu } from './select.menu.style'
import { option } from './select.option.style'
import { root } from './select.root.style'
import { value } from './select.value.style'

const props = defineProps({
  items: Object as PropType<{ label: String; value: String }[]>,
  default: String,
  label: String,
  size: String as PropType<SizeType>,
})
const collection = select.collection({
  items: props.items ? props.items : [],
})
const [state, send] = useMachine(
  select.machine({
    id: uuidv4(),
    collection,
    value: props.default ? [props.default] : [],
  }),
)
const api = computed(() => select.connect(state.value, send, normalizeProps))
</script>

<template>
  <div :class="root({ size: size })">
    <label v-bind="api.labelProps" :class="lab({ size: size })">{{
      label
    }}</label>
    <button
      v-bind="api.triggerProps"
      :class="
        css({
          display: 'inline-flex',
          alignItems: 'center',
          border: 'black',
        })
      "
    >
      <span :class="value({ size: size })">{{ api.valueAsString }}</span>
      <span>
        <Icon
          icon="icon-park-solid:down-one"
          :class="
            css({
              color: 'gray',
            })
          "
        />
      </span>
    </button>
  </div>

  <Teleport to="body">
    <div v-bind="api.positionerProps" :class="menu({ size: size })">
      <ul v-bind="api.contentProps">
        <li
          v-for="(item, index) in items"
          :key="index"
          v-bind="api.getItemProps({ item })"
          :class="
            css({
              border: 'lightgray',
              outline: 'none',
              _hover: {
                backgroundColor: 'lightgray',
              },
            })
          "
        >
          <span :class="option({ size: size })">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </Teleport>
</template>
