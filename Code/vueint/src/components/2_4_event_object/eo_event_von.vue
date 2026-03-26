<template>
  <div>count 的值为: {{ count }}</div>
  <button @click="addCount">count+1</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(1)
const addCount = event => {
  count.value++
  if (count.value % 2 === 0) {
    event.target.style.border = '3px dotted'
  } else {
    event.target.style.border = '3px solid'
  }
}
</script>