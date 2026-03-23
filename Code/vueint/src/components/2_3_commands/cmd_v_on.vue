<template>
    <button @click="showInfo">输出信息</button>
</template>
<script setup>
const showInfo = () => {
    console.log('Welcome!')
}
</script>