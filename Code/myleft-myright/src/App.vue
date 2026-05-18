<template>
  <br />
  <div>
    <br />
    <button @click="showComponent = MyLeft">展示 MyLeft 组件</button><br />
    <button @click="showComponent = MyRight">展示 MyRight 组件</button><br />
    <div>
      <br />
      <component :is="showComponent"></component><br />
    </div>
    <br />
  </div>
  <br />
</template>
<br />
<br />
<script setup>

import MyLeft from './MyLeft.vue'
import MyRight from './MyRight.vue'
import { shallowRef } from 'vue'
const showComponent = shallowRef(MyLeft)

</script>