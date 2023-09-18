<script setup lang="ts">
import { PropType } from 'vue'
import { css } from '../../../styled-system/css'

defineProps({
  headers: Object as PropType<String[]>,
  contents: Object as PropType<String[][]>,
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="th in headers"
          :class="
            css({
              backgroundColor: 'gray',
              color: 'white',
              borderWidth: '0.1rem',
              borderColor: 'lightgray',
              borderStyle: 'solid',
              padding: 'xs',
            })
          "
        >
          {{ th }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in contents"
        :class="
          css({
            _hover: {
              backgroundColor: 'focused',
            },
          })
        "
      >
        <td
          v-for="td in row"
          :class="
            css({
              borderWidth: '0.1rem',
              borderColor: 'lightgray',
              borderStyle: 'solid',
            })
          "
        >
          {{ td }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
