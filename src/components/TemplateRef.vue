<template>
  <div ref="root">hello world</div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const root = ref(null);

    onMounted(() => {
      console.log("ref", root.value);
    });

    return { root };
  }
};
</script>