<template>
    <div v-for="item in list">
        水果编号：{{ item.index }} ；水果名称：{{ item.name }} ；详细信息：{{ item.detail }}
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const list = reactive([
    {index: 1, name: '苹果', detail: '123123'},
    {index: 2, name: '柠檬', detail: '456456'}
])
</script>