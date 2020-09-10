<template>
  <div></div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const count = ref(0);

    watchEffect(() => {
      console.log("watchEffect", count.value);
    });

    setTimeout(() => {
      count.value++;
    }, 1000);
  }
};
</script>
