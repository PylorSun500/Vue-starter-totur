<template>
    <div>{{ init }}</div>
</template>
<script setup>
const props = defineProps(['init'])
console.log(props)
</script>