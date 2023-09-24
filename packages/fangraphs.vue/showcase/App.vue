<script setup lang="ts">
import { ref } from 'vue'
import * as C from '../src/fangraphs'

// dummy data for Textfield
const tfsm = ref('textfield-sm')
const tfmd = ref('textfield-md')
const tflg = ref('textfield-lg')

// dummy data for Table
const colNum = 10
const rowNum = 10
const headers = [...Array(colNum)].map((_, index) => {
  return 'Header' + index
})
const contents = [...Array(rowNum)].map((_, rowIndex) => {
  return [...Array(colNum)].map((_, colIndex) => {
    return 'TD' + rowIndex + colIndex
  })
})

// dummy data for Checkbox
const isRookie = ref(false)
const isHOF = ref(true)
const isOnActiveRoster = ref(false)

// dummy data for Select
const items = [...Array(10)].map((_, index) => {
  return { label: 'Item' + index, value: index.toString() }
})
const slsm = ref()
const slmd = ref('5')
const sllg = ref()
</script>

<template>
  <C.Card title="Button" size="lg">
    <C.Button
      @click="() => console.log('button-sm')"
      label="button-sm"
      size="sm"
    />
    <C.Button @click="() => console.log('button-md')" label="button-md" />
    <C.Button
      @click="() => console.log('button-md-secondary')"
      label="button-md-secondary"
      color="secondary"
    />
    <C.Button
      @click="() => console.log('button-lg')"
      label="button-lg"
      size="lg"
    />
  </C.Card>
  <C.Card title="Text Field" size="lg">
    <C.TextField v-model="tfsm" size="sm" />
    <C.TextField v-model="tfmd" />
    <C.TextField v-model="tflg" size="lg" />
  </C.Card>
  <C.Card title="Callout" size="lg">
    <C.Callout size="sm">
      <p>
        If you have tools that use the old interface, it can be found at the
        following URL:
        <a href="#"> https://www.fangraphs.com/leaders-legacy.aspx</a>
      </p>
    </C.Callout>
    <C.Callout>
      <p>
        If you have tools that use the old interface, it can be found at the
        following URL:
        <a href="#"> https://www.fangraphs.com/leaders-legacy.aspx</a>
      </p>
    </C.Callout>
    <C.Callout size="lg">
      <p>
        If you have tools that use the old interface, it can be found at the
        following URL:
        <a href="#"> https://www.fangraphs.com/leaders-legacy.aspx</a>
      </p>
    </C.Callout>
  </C.Card>
  <C.Card title="Table" size="lg">
    <C.Table :headers="headers" :contents="contents" />
  </C.Card>
  <C.Card title="Checkbox" size="lg">
    <C.Checkbox v-model="isRookie" label="Rookie" size="sm" />
    <C.Checkbox v-model="isHOF" label="HOF" />
    <C.Checkbox v-model="isOnActiveRoster" label="Active Roster" size="lg" />
  </C.Card>
  <C.Card title="Select" size="lg">
    <C.Select v-model="slsm" :items="items" label="Season" size="sm" />
    <C.Select v-model="slmd" :items="items" label="Season" />
    <C.Select v-model="sllg" :items="items" label="Season" size="lg" />
  </C.Card>
  <C.Card title="Badge" size="lg">
    <C.Badge color="primary" label="Podcast" />
    <C.Badge color="secondary" label="Podcast" />
  </C.Card>
</template>
