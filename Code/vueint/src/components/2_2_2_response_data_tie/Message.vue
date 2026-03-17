<template>{{ message }}</template>
<script setup>
import {ref} from 'vue'
const msg = ref('会当凌绝顶，一览众山小')
let message = "不积跬步，无以至千里"
setTimeout(() => {
    console.log('更新前的msg：' + message)
    message = "长风破浪会有时，直挂云帆济沧海"
    console.log('更新后的msg：' + message)
}, 2000)
</script>