<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in goodsList" :key="item.id">
        <slot name="body" :row="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  goodsList: {
    type: Array,
    required: true,
    default: []
  }
})
</script>
