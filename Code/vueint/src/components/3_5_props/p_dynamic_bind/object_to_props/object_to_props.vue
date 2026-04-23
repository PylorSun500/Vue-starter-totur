<template>
    <Child :init="{height:'180厘米',weight:'70千克'}" />
    <Child :height="bodyInfo.height" :weight="bodyInfo.weight" />
    <Child v-bind="bodyInfo" />
</template>
<script setup>
import Child from './child.vue'
import { reactive, ref } from 'vue';
const bodyInfo=reactive({height:'180厘米',weight:'70千克'})
</script>