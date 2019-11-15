<template>
  <div>
    <div class="alloy-body-overlay" :style="{ opacity: backgroundOpacity }"></div>
    <!-- <Navigation /> -->
    <SlideNav />
    <NotificationsContainer />
    <nuxt />
  </div>
</template>
<script>
import SlideNav from "@/components/SlideNav.vue";
import NotificationsContainer from "@/components/elements/NotificationsContainer.vue";

export default {
  components: {
    SlideNav,
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
        return this.$store.getters["start/backgroundOpacity"];
      } else {
        return 100;
      }
    },
  },
  mounted() {
    const notification = {
      title: "Wij gebruiken cookies!",
      content:
        "Alleen om de werking van deze website te verbeteren. Deze data wordt niet gedeeld met derden en binnen 2 jaar verwijderd.",
      image: "",
      type: "",
      timer: 6000,
      date: new Date(),
    };
    this.$store.commit("notifications/addNotification", notification);
  },
};
</script>