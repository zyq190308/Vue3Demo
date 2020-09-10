<template>{{plusOne}}</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: val => {
        count.value = val - 1;
      }
    });

    plusOne.value = 1;
    console.log(count.value); // 0

    return {
      plusOne
    };
  }
};
</script>