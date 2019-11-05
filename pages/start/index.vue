<template>
  <section class="alloy-page alloy-page--start">
    <keep-alive>
      <div class="inner">
        <Progress />
        <transition name="ui-slide-from-right">
          <PowerCategory v-if="this.$store.state.toggleAllShow" />
        </transition>
        <transition name="ui-slide">
          <RenewableEnergy v-if="this.$store.state.renewableEnergyShow" />
        </transition>
        <Map />
      </div>
    </keep-alive>
  </section>
</template>

<script>
import Map from "@/components/start/Map.vue";
import Progress from "@/components/start/Progress.vue";
import RenewableEnergy from "@/components/start/RenewableEnergy.vue";
import PowerCategory from "@/components/start/PowerCategory.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    Map,
    Progress,
    RenewableEnergy,
    PowerCategory,
  },
  data() {
    return {
      // renewableEnergyShow: false,
    };
  },
  head() {
    return {
      htmlAttrs: {
        class: "alloy-no-scroll",
      },
    };
  },
  computed: {
    ...mapGetters([
      // 🚗 CO₂ production
      "powerStationCo2Max",
      "powerStationCo2Current",
    ]),
  },
  watch: {
    powerStationCo2Current() {
      if (this.powerStationCo2Current < this.powerStationCo2Max * 0.9) {
        this.$store.state.toggleAllShow = true;
      }
      if (this.powerStationCo2Current < this.powerStationCo2Max * 0.25) {
        this.$store.state.renewableEnergyShow = true;
      }
    },
  },
};
</script>
<style scoped>
.alloy-page {
  overflow: hidden;
}
</style>