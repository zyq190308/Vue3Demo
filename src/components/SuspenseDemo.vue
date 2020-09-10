<template>
  <Suspense>
    <template #default>
      <MyAsyncComponent/>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import MyAsyncComponent from "./Async";

export default {
  components: {
    MyAsyncComponent
  }
};
</script>
