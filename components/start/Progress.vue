<template>
  <div class="component-Progress alloy-ui">
    <div class="logo">
      <img src="~/assets/images/logo.svg">
    </div>
    <div class="alloy-progress alloy-energy">
      <h3>
        <span v-if="!this.$store.state.start.desertecOn">{{ animatedNumberPower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")  }}</span>
        <span v-else>Ruim voldoende</span>
        <span> <a href="https://nl.wikipedia.org/wiki/Kilowattuur" target="_blank"> kWh</a></span>
      </h3>
      <div class="alloy-progressbar">
        <label for="Energieopwekking">Energieopwekking</label>

        <progress id="Energieopwekking" name="Energieopwekking" :class="{ desertecOn: this.$store.state.start.desertecOn }" :max="powerStationEnergyMax" :value="isDesertecEnergy">
          {{ energyProductionCalcAllCurrent }} current / {{ powerStationEnergyMax }} max
        </progress>
      </div>
    </div>

    <div class="alloy-progress alloy-co2">
      <h3>{{ powerStationCo2Current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
        <span>CO<sub>2</sub></span>
      </h3>
      <div class="alloy-progressbar">

        <label for="Uitstoot">Uitstoot</label>

        <progress id="Uitstoot" name="Uitstoot" :max="powerStationCo2Max" :value="powerStationCo2Current">
          {{ powerStationCo2Current }} current / {{ powerStationCo2Max }} max
        </progress>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Progress",
  data() {
    return {
      tweenedNumberPower: 0,
      tweenedNumberCo2: 0,
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      // ⚡ Energy production
      powerStationEnergyMax: "start/powerStationEnergyMax",
      // CURRENT
      powerStationEnergyCurrent: "start/powerStationEnergyCurrent",
      windProductionCurrent: "start/windProductionCurrent",
      solarProductionCurrent: "start/solarProductionCurrent",
      // 🚗 CO₂ production
      powerStationCo2Max: "start/powerStationCo2Max",
      powerStationCo2Current: "start/powerStationCo2Current",
      // ⚡️ Energy combined current
      energyProductionCalcAllCurrent: "start/energyProductionCalcAllCurrent",
    }),
    isDesertecEnergy: function() {
      if (!this.$store.state.start.desertecOn) {
        return this.energyProductionCalcAllCurrent;
      } else {
        return this.powerStationEnergyMax;
      }
    },
    // Animate the number 💯 using GSAP
    animatedNumberPower: function() {
      return this.tweenedNumberPower.toFixed(0);
    },
    animatedNumberCo2: function() {
      return this.tweenedNumberCo2.toFixed(0);
    },
  },
  watch: {
    // Animate the number 💯 using GSAP
    energyProductionCalcAllCurrent: function() {
      this.$GSAP.TweenMax.to(this.$data, 1.1, {
        tweenedNumberPower: this.energyProductionCalcAllCurrent,
      });
    },
    powerStationCo2Current: function() {
      this.$GSAP.TweenMax.to(this.$data, 1.1, {
        tweenedNumberCo2: this.powerStationCo2Current,
      });
    },
  },
  created() {
    if (process.client) {
      this.$GSAP.TweenMax.to(this.$data, 5, {
        tweenedNumberPower: this.energyProductionCalcAllCurrent,
      });
      this.$GSAP.TweenMax.to(this.$data, 5, {
        tweenedNumberCo2: this.powerStationCo2Current,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.logo {
  margin-top: 15px;
  margin-bottom: 0;
}
a {
  color: $brand-light;
  text-decoration: underline;
}
h3 {
  margin-bottom: 5px;
  @include media-breakpoint-up(lg) {
    margin-bottom: $base-margin;
  }
  span {
    position: relative;

    sub {
      position: absolute;
      bottom: -5px;
      right: -10px;
    }
  }
}
progress {
  transition: width;
  transition-duration: 300ms;
  transition-timing-function: ease;

  // &.desertecOn {
  //   width: 120%;
  // }
}
</style>
