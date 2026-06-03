<template>
    <div class = "home-container">
        <h3>Home 组件</h3>
        <a href="#" @click.prevent="gotoMovie(3)">跳转到 MovieDetails 组件</a>
        <router-link :to="{ name: 'MovieDetails', params: { id: 3 } }">跳转到MovieDetails组件</router-link>
    </div>
</template>
<style scoped>
    .home-container {
    min-height: 150px;
    background-color: #f2f2f2;
    padding: 15px;
    }
</style>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const gotoMovie = movieId => (
    router.push({
        name: 'MovieDetails',
        params: { id: movieId }
    })
)
</script>