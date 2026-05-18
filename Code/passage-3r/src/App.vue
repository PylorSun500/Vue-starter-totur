<template>
  <div id="app">
    <h2>默认插槽示例</h2>
    <DefaultSlotParent />

    <hr style="margin: 40px 0" />

    <h2>具名插槽示例</h2>
    <NamedSlotsParent />
  </div>
</template>

<script setup>
import DefaultSlotParent from './components/DefaultSlotParent.vue'
import NamedSlotsParent from './components/NamedSlotsParent.vue'
</script>