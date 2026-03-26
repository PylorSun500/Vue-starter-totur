<!-- v-for 命令之三：根据对象渲染列表-->
<template>
    <div v-for="(value, name) in user" :key="name">
        属性名是：{{ name }} ；属性值是：{{ value }}
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const user = reactive({id: 11, name: "小明", gender: "男"})
</script>