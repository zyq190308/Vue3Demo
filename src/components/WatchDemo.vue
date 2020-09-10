<template>
  count:{{count}}/age:{{state.age}}
  <button @click="handleClick">click</button>
  <button @click="handleClick2">click2</button>
</template>

<script>
import { ref, reactive, watch } from "vue";

export default {
  setup() {
    const count = ref(0);
    const state = reactive({ age: 18 });

    const handleClick = () => {
      count.value++;
    };

    const handleClick2 = () => {
      state.age++;
    };

    watch(count, (count, prevCount) => {
      console.log("1", count, prevCount);
    });

    watch(
      () => state.age,
      (age, prevAge) => {
        console.log("2", age, prevAge);
      }
    );

    return {
      count,
      state,
      handleClick,
      handleClick2
    };
  }
};
</script>