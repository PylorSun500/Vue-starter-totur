<template>
<div>msg = {{ msg }}</div>
<div>obj.msg = {{ obj.msg }}</div>
</template>

<script setup>
import {reactive, toRef} from 'vue'
const obj = reactive({msg: '黑发不知勤学早，白首方悔读书迟'})
const msg = toRef(obj, 'msg')
setTimeout(() => {
    msg.value = '少壮不努力，老大徒伤悲'
}, 2000)
</script>