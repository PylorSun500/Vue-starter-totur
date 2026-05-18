<template>
  <br />
  MyLeft 组件<br />
  <div>
    <br />
    count 值为： {{ count }}<br />
    <button @click="count++">+1</button><br />
  </div>
  <br />
</template>
<br />
<br />
<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
const count = ref(0)
onMounted(() => {
    console.log('MyLeft 组件被挂载了')
    })
    onUnmounted(() => {
        console.log('MyLeft 组件被销毁了')
        })
        
</script>
