<template>
    <button @click.once="show('仅执行一次')">仅执行一次</button>
</template>

<script setup>
let show = message => console.log(message)
</script>