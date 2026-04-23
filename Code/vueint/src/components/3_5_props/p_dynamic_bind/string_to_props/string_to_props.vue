<script setup>
import child from './child.vue'
import { ref } from 'vue'
const username = ref('小圆')
</script>
<template>
    <child :init="username" />
</template>