<template>
    请输入姓名：<input type="text" v-model="username">
    <div>姓名是：{{ username }}</div>
    <input type="text" v-model="nA_text_self"> + <input type="text" v-model="nB_text_self">
    = {{ nA_text_self + nB_text_self }}<br>
    <input type="text" v-model.number="nA_text_number"> + <input type="text" v-model.number="nB_text_number">
    = {{ nA_text_number + nB_text_number }}
</template>
<script setup>
const nA_text_self = ref(1)
const nB_text_self = ref(2)
const nA_text_number = ref(1)
const nB_text_number = ref(2)
import { ref } from 'vue'
const username = ref('zhangsan')
</script>