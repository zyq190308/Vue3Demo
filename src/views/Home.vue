<template>
  Home页
  {{count}}
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="go">去about页</button>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    return {
      count: computed(() => store.state.count),
      increment: () => store.dispatch("increment"),
      decrement: () => store.dispatch("decrement"),
      go: () => router.push("/about")
    };
  }
};
</script>