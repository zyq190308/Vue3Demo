<template>
  <p>书本数量：{{ bookNum }}</p>
  <p>书本名：{{ book.title }}</p>
  <p>出版社：{{ book.press }}</p>
  <button @click="handleClick">click</button>
</template>

<script>
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from "vue";

export default {
  setup() {
    const bookNum = ref(0);
    const book = reactive({
      title: "vue入门教程",
      press: "人民出版社"
    });

    const handleClick = () => {
      bookNum.value++;
    };

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      bookNum,
      book,
      handleClick
    };
  }
};
</script>