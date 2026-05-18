<template>
  <br />
  MyRight 组件<br />
  <div>
    <br />
    count 值为： {{ count }}<br />
    <button @click="count++">+1</button><br />
  </div>
  <br />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const count = ref(0)
onMounted(() => {
  console.log('MyRight 组件被挂载了')
})
onUnmounted(() => {
  console.log('MyRight 组件被销毁了')
})
</script>