<template>
  <div>
    <!-- <div class="alloy-body-overlay" :style="{ opacity: this.$store.getters.backgroundOpacity }"></div> -->
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
};
</script>