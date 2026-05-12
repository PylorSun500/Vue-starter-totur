<template>
    <p>父组件当前的值为: {{ number }}</p >
    <CustomSubComponent @updateCount="updateEmitCount" />
</template>

<script setup>
import CustomSubComponent from './CustomSubComponent.vue'
import { ref } from 'vue'
const number = ref(10)
const updateEmitCount = (value) => {
    number.value += value
}
</script>