<template>
    <div @click.capture="show('父元素')">
        <button @click="show('子元素')">子元素</button>
    </div>
</template>

<script setup>
let show = message => console.log(message)
</script>