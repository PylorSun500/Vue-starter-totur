<template>
    <div>数字：{{ number }}</div>
    <button @click="addNumber">+1</button>
</template>
<script>
export default {
    data() {
        return {
            number: 1
        }
    },
    methods: {
        addNumber() {
            this.number++
        }
    }
}
</script>