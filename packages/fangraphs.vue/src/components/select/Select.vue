<script setup lang="ts">
import { PropType } from 'vue'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import { css } from '../../../styled-system/css'
import { root } from './select.root.style'
import { content } from './select.content.style'
import { SizeType } from '../../../panda.config.type'

defineProps({
  items: Object as PropType<string[]>,
  size: String as PropType<SizeType>,
  placeholder: String,
})
</script>

<template>
  <!-- NOTE: it may be bug of Radix-Vue that default-value is not work. -->
  <SelectRoot>
    <SelectTrigger :class="root({ size: size })">
      <SelectValue :placeholder="placeholder" />
      <Icon icon="icon-park-solid:down-one" />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent position="popper" :class="content({ size: size })">
        <SelectViewport>
          <SelectGroup>
            <SelectItem
              v-for="(item, index) in items"
              :key="index"
              :value="item"
              :class="
                css({
                  alignItems: 'center',
                  position: 'relative',
                  border: 'lightgray',
                  outline: 'none',
                  _hover: {
                    backgroundColor: 'lightblue',
                  },
                })
              "
            >
              <SelectItemText>{{ item }}</SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
