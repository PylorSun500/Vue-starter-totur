<template>
    <child :init="12" />
    <child :init="age" />
</template>

<script setup>
import child from './child.vue'
import { ref } from 'vue'
const age = ref(12)
</script>