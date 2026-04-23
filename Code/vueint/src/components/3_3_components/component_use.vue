<template>
    <h5>父组件</h5>
    <div class="box">
        <Global_components />
        <local_component />
    </div>
</template>
<style scoped>
.box{
    display: flex;
}

h5 {
    border: 1px dotted black;
}
</style>
<script setup>
import Global_components from './global_components.vue';
import local_component from './local_component.vue';
</script>