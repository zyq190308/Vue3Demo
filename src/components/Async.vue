<template>
  <h1>Ive some async work to do before I can render</h1>
</template>

<script>
export default {
  name: "MyAsyncComponent",
  async setup() {
    const someAsyncWork = () => {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
          console.log("hello world");
        }, 3000);
      });
    };
    await someAsyncWork();
  }
};
</script>