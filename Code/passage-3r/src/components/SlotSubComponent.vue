<template>
  <div class="slot-sub">
    <!-- 默认插槽，父组件填充的内容会出现在这里 -->
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slot-sub {
  border: 1px dashed #888;
  padding: 10px;
  margin-top: 10px;
}
</style>