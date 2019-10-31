<template>
  <div class="component-Navigation">
    <nav>
      <nuxt-link to="/start" v-if="$nuxt.$route.path != '/start'" class="alloy-back">Terug naar tool</nuxt-link>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/start">Start</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

