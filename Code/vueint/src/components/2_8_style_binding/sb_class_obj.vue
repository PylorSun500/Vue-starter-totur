<template>
  <div class="text" v-bind:class="{ box: isBox, border: isBorder }">
    <div v-bind:class="{ inner: isInner }">春夏</div>
    <div v-bind:class="classObject">秋冬</div>
    <div v-bind:class="classMeal">三餐四季～</div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
const isBox = ref(true)
const isBorder = ref(true)
const isInner = ref(true)
const isMeal = ref(true)
const classObject = reactive({ inner: true })
const classMeal = computed(() => ({
  meal: isMeal.value
}))
</script>

<style>
.text {
  text-align: center;
  line-height: 30px;
}
.box {
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0));
}
.border {
  border: 2px dotted black;
}
.inner {
  margin-top: 2px;
  width: 100px;
  height: 30px;
  border: 2px double black;
}
.meal {
  width: 100px;
  height: 30px;
  border: 2px dashed rgb(120, 81, 227);
}
</style>
