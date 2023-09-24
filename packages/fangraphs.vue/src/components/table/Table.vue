<script setup lang="ts">
import { PropType } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { css } from '../../../styled-system/css'

defineProps({
  headers: Object as PropType<String[]>,
  contents: Object as PropType<String[][]>,
})
</script>

<template>
  <table :id="'table:' + uuidv4()">
    <thead>
      <tr>
        <th
          v-for="th in headers"
          :class="
            css({
              backgroundColor: 'gray',
              color: 'white',
              border: 'lightgray',
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
              border: 'lightgray',
            })
          "
        >
          {{ td }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
