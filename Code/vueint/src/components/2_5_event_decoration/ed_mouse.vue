<template>
  <button v-on:click.right="show('捕获到')">按钮</button>
</template>

<script setup>
let show = message => console.log(message)
</script>