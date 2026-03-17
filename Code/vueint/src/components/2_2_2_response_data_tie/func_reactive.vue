<template>{{ object.msg }}</template>
<script setup>
import {reactive} from 'vue'
const object = reactive({msg: '不畏浮云遮望眼，自缘身在最高层'})
setTimeout(() => {
    object.msg = '欲穷千里目，更上一层楼'
}, 2000)
</script>