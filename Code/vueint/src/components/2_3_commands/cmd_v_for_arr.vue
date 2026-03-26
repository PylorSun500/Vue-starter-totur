<!-- v-for 命令之一：根据数组渲染列表-->
<template>
    <div v-for="(item, index) in list" :key="index">
        索引是：{{ index }} ；元素内容是：{{ item }}
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const list = reactive(['HTML', 'CSS', 'JavaScript'])
</script>