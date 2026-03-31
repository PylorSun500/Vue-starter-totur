<!-- 数字加减控制器 -->
<template>
    <div>
        <button @click="num--" :disabled="num === 0">-</button>
            {{ num }}
        <button @click="num++">+</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)
</script>