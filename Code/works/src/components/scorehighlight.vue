<template>
  <div>
    <div 
      v-for="stu in students" 
      :key="stu.id"
      :class="{ highlight: stu.score > 90 }"
    >
      {{ stu.name }}{{ stu.score }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const students = ref([
  { id: 1, name: '张三', score: 85 },
  { id: 2, name: '李四', score: 92 },
  { id: 3, name: '王五', score: 78 }
])
</script>

<style>
.highlight {
  background-color: #ffeb8b;
  font-weight: bold;
}
</style>