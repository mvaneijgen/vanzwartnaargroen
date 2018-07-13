<template>
  <section class="alloy-page">
    <div class="inner">
      <Progress/>
      <RenewableEnergy/>
      <PowerCategory />
      <Map />

      <!-- <button @click="calcTotal">calcTotal</button> -->
      <!-- <pre>{{ this.$store.state.powerStations }}</pre> -->
    </div>
  </section>
</template>

<script>
import Map from '@/components/start/Map.vue';
import Progress from '@/components/start/Progress.vue';
import RenewableEnergy from '@/components/start/RenewableEnergy.vue';
import PowerCategory from '@/components/start/PowerCategory.vue';

export default {
  components: {
   Map,
   Progress,
   RenewableEnergy,
   PowerCategory
},
// created(){
//   this.$store.dispatch('calcAllTotal');
// },
// methods: {
//   ...mapActions([
//     'calcTotal'
//   ])
// }
};
</script>

<style lang="scss" scoped>
</style>