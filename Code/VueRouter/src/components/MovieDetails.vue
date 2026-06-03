<template>
    <p>电影 {{ id }} 页面</p>
    <button @click="goBack">后退</button>
</template>
<script setup>
    import { useRouter } from 'vue-router';
    const props = defineProps({
        id: String
    })
    const router = useRouter()
    const goBack = () => {
        router.go(-1)
    }
</script>