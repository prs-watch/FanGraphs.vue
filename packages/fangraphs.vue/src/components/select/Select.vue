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
  <div>
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
                    borderWidth: '0.1rem',
                    borderStyle: 'solid',
                    borderColor: 'lightgray',
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
  </div>
</template>
