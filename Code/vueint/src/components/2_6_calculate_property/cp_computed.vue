<template>
  <p>初始message：{{ message }}</p >
  <p>反转之后的message：{{ reversedMessage }}</p >
  <button @click="updateMessage">更改</button>
</template>

<script setup>
import { ref, computed } from 'vue'

const message = ref('Hello World')
const reversedMessage = computed(() => 
  message.value.split('').reverse().join('')
)

const updateMessage = () => {
  message.value = 'hello'
}
</script>