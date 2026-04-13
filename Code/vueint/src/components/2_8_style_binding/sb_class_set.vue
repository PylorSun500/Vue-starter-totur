<template>
  <div v-bind:class="[activeClass, borderClass]"></div>
  <div v-bind:class="[isActive ? activeClass : '', borderClass]"></div>
  <div v-bind:class="[{ active: isActive }, borderClass]"></div>
</template>

<script setup>
import { ref } from 'vue'
const isActive = ref(true)
const activeClass = ref('active')
const borderClass = ref('border')
</script>

<style>
.active {
  width: 100px;
  height: 10px;
  margin-bottom: 2px;
  background-color: rgba(59, 192, 241, 0.329);
}
.border {
  border: 2px solid rgb(0, 0, 0);
}
</style>
