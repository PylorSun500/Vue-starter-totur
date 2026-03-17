<template>{{ msg }}</template>
<script setup>
import {ref} from 'vue'
const msg = ref('会当凌绝顶，一览众山小')
setTimeout(() => {
    msg.value = '契而不舍，金石可镂'
}, 2000)
</script>