<!-- 做一个随时间变化文本的效果 -->
<script setup>
import { reactive } from 'vue';
var words = "你好！"
setTimeout(() => {
    words = "再见！"
}, 2000)
</script>
<template>
    <div>{{ words }}</div>
</template>