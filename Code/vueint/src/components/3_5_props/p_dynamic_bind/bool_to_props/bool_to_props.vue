<template>
    <child init />
    <child :init="false" />
    <child :init="isFlag" />
</template>
<script setup>
import child from './child.vue'
import { ref } from 'vue'
const isFlag = ref(true)
</script>