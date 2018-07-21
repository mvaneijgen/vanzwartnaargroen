<template>
  <section class="alloy-page alloy-page--start">
    <keep-alive>
      <div class="inner">
        <Progress/>
        <PowerCategory />
        <transition name="ui-slide">
          <RenewableEnergy v-if="this.$store.state.renewableEnergyShow" />
        </transition>
        <Map />
      </div>
    </keep-alive>
  </section>
</template>

<script>
import Map from '@/components/start/Map.vue';
import Progress from '@/components/start/Progress.vue';
import RenewableEnergy from '@/components/start/RenewableEnergy.vue';
import PowerCategory from '@/components/start/PowerCategory.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
   Map,
   Progress,
   RenewableEnergy,
   PowerCategory
},
data() {
  return {
    // renewableEnergyShow: false,
  }
}, 
computed: {
  ...mapGetters([
    // 🚗 CO₂ production
    'powerStationCo2Max',
    'powerStationCo2Current',
  ]),
},
watch: {
   powerStationCo2Current: function (val) {

      if(this.powerStationCo2Current > this.powerStationCo2Max / 5) {
        this.$store.state.renewableEnergyShow = true;
      }
    },
}
};
</script>

<style lang="scss" scoped>
.alloy-page {
  overflow: hidden;
}
// .alloy-page--start {
//   o
// }
</style>