<template>
  <button @click="modalOpen = true">open</button>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal!
        (My parent is "body")
        <button @click="modalOpen = false">Close</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let modalOpen = ref(false);

    return {
      modalOpen
    };
  }
};
</script>