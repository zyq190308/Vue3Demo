<template>
  <my-marker></my-marker>
</template>

<script>
import { provide } from "vue";
import MyMarker from "./MyMarker.vue";

export default {
  components: {
    MyMarker
  },

  setup() {
    provide("location", "North Pole");
    provide("geolocation", {
      longitude: 90,
      latitude: 135
    });
    return {};
  }
};
</script>
