<template>
    <child :init="['唱歌', '跳舞', '滑冰']" />
    <child :init="hobby" />
</template>
<script setup>
import child from './child.vue'
import { ref } from 'vue'
const hobby = ref(['唱歌', '跳舞', '滑冰'])
</script>