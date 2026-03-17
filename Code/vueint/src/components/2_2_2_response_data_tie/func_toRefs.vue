<template>
<div>msg = {{ msg }}</div>
<div>obj.msg = {{ obj.msg }}</div>
</template>

<script setup>
import {reactive, toRefs} from 'vue'
const obj = reactive({msg: '盛年不重来，一日难再晨'})
let {msg} = toRefs(obj)
setTimeout(() => {
    msg.value = '及时当勉励，岁月不饶人'
}, 2000)
</script>