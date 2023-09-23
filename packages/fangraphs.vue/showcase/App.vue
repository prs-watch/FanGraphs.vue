<script setup lang="ts">
import * as C from '../src/fangraphs'

// dummy data for Table showcase
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

// dummy data for Select showcase
const items = [...Array(10)].map((_, index) => {
  return { label: 'Item' + index, value: index.toString() }
})
</script>

<template>
  <C.Card title="Button" size="lg">
    <C.Button label="button-sm" size="sm" />
    <C.Button label="button-md" />
    <C.Button label="button-md-secondary" color="secondary" />
    <C.Button label="button-lg" size="lg" />
  </C.Card>
  <C.Card title="Text Field" size="lg">
    <C.TextField value="textfield-sm" size="sm" />
    <C.TextField value="textfield-md" />
    <C.TextField value="textfield-lg" size="lg" />
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
    <C.Checkbox label="Rookie" size="sm" />
    <C.Checkbox label="Rookie" />
    <C.Checkbox label="Rookie" size="lg" />
  </C.Card>
  <C.Card title="Select" size="lg">
    <C.Select :items="items" label="Season" size="sm" />
    <C.Select :items="items" label="Season" default="5" />
    <C.Select :items="items" label="Season" size="lg" />
  </C.Card>
  <C.Card title="Badge" size="lg">
    <C.Badge color="primary" label="Podcast" />
    <C.Badge color="secondary" label="Podcast" />
  </C.Card>
</template>
