<template>
  <section class="alloy-page">
    <div class="inner">
      <Progress/>

      <Map/>

      <!-- <button @click="calcTotal">calcTotal</button> -->
      <!-- <pre>{{ this.$store.state.powerStations }}</pre> -->
    </div>
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

<style lang="scss" scoped>
.alloy-page {
  height: 100vh;
  width: 90vmin;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>