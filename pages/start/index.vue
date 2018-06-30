<template>
  <section class="alloy-page">
    <h1>Start</h1>

    <Progress/>

    <Map/>

    <!-- <button @click="calcTotal">calcTotal</button> -->
    <!-- <pre>{{ this.$store.state.powerStations }}</pre> -->
    <nuxt-link to="/" class="btn">back</nuxt-link>

  </section>
</template>

<script>
import Map from '@/components/Map.vue';
import Progress from '@/components/Progress.vue';

import { mapActions } from 'vuex';

export default {
  components: {
   Map,
   Progress,
},
created(){
  this.$store.dispatch('calcAllTotal');
},
// methods: {
//   ...mapActions([
//     'calcTotal'
//   ])
// }
};
</script>

<style>
</style>