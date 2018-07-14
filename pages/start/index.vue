<template>
  <section class="alloy-page">
    <div class="inner">
      <Progress/>
      <PowerCategory />
      <transition name="ui-slide">
        <RenewableEnergy v-if="renewableEnergyShow" />
      </transition>
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
    renewableEnergyShow: false,
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
        this.renewableEnergyShow = true;
      }
    },
}
};
</script>

<style lang="scss" scoped>
.alloy-page {
  overflow: hidden;
}
.ui-slide-enter-active,
.ui-slide-leave-active {
  transition: transform, opacity;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.87, -0.41, 0.19, 1.44);
}
.ui-slide-enter,
.ui-slide-leave-to {
  opacity: 1;
  transform: translateY(300px);
}
.ui-slide-enter-to,
.ui-slide-leave {
  transform: translateY(0);
}
</style>