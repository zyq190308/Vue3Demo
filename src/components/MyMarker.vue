<template>
  <div>
    {{location}}
    {{geolocation}}
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const location = inject("location");
    const geolocation = inject("geolocation");

    return {
      location,
      geolocation
    };
  }
};
</script>