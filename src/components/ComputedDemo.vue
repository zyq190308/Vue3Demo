<template>{{plusOne}}</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const count = ref(0);
    const plusOne = computed(() => count.value + 1);

    return {
      plusOne
    };
  }
};
</script>