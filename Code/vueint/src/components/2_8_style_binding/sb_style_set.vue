<template>
    <!-- 使用数组 -->
    <div v-bind:style="[activeClass, borderClass]"></div>
    <!-- 使用三元表达式 -->
    <div v-bind:style="[isActive ? activeClass : '', borderClass]"></div>
    <!-- 数组语法中使用对象语法 -->
    <div v-bind:style="[{ backgroundColor: 'rgb(59, 192, 241)', height: '10px' }, borderClass]"></div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const isActive = ref(true)
const activeClass = reactive({
    height: '10px',
    backgroundColor: 'rgb(59, 192, 241)'
})
const borderClass = reactive({
    border: '2px solid rgb(0, 0, 0)'
})
</script>