<template>
  <input type="text" v-on:keyup.enter="submit">
</template>

<script setup>
const submit = () => console.log('捕获到Enter键')
</script>