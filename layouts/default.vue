<template>
  <div>
    <div class="alloy-body-overlay" :style="{ opacity: backgroundOpacity }"></div>
    <Navigation />
    <NotificationsContainer />
    <nuxt />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import NotificationsContainer from "@/components/elements/NotificationsContainer.vue";

export default {
  components: {
    Navigation,
    NotificationsContainer,
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