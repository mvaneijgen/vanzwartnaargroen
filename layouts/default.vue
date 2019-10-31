<template>
  <div>
    <div class="alloy-body-overlay" :style="{ opacity: backgroundOpacity }"></div>
    <div class="alloy-body-overlay"></div>
    <Navigation />
    <nuxt />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  head() {
    return {
      htmlAttrs: {
        class: "alloy-no-scroll",
      },
    };
  },
  computed: {
    backgroundOpacity() {
      if (process.client) {
        return this.$store.getters.backgroundOpacity;
      } else {
        return 100;
      }
    },
  },
};
</script>