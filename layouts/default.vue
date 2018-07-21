<template>
  <div>
    <div class="alloy-body-overlay" :style="{ opacity: this.$store.getters.backgroundOpacity }"></div>
    <Navigation v-if="$nuxt.$route.path != '/'" />
    <nuxt/>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue';
export default {
components: {
   Navigation,
},
}
</script>

<style lang="scss" scoped>
</style>
