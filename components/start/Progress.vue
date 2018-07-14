<template>
  <div class="component-Progress alloy-ui">
    <div class="logo">
      <img src="~/assets/images/logo.svg">
    </div>
    <div class="alloy-progress alloy-energy">
      <!-- <p>All add up: {{ energyProductionCalcAllCurrent }}</p>
      <p>powerStationEnergyMax: {{ powerStationEnergyMax }}</p>
      <p>powerStationEnergyCurrent: {{ powerStationEnergyCurrent }}</p>
      <p>windProductionCurrent: {{ windProductionCurrent }}</p>
      <p>solarProductionCurrent: {{ solarProductionCurrent }}</p> -->
      <h3>
        <span v-if="!this.$store.state.desertecOn">{{ energyProductionCalcAllCurrent }}</span>
        <span class="text-small" v-else>Ruim voldoende</span>
        <span> kWh</span>
      </h3>
      <div class="alloy-progressbar">
        <label for="Energieopwekking">Energieopwekking</label>

        <progress id="Energieopwekking" name="Energieopwekking" :class="{ desertecOn: this.$store.state.desertecOn }" :max="powerStationEnergyMax" :value="isDesertecEnergy">
          {{ energyProductionCalcAllCurrent }} current / {{ powerStationEnergyMax }} max
        </progress>
      </div>
    </div>

    <div class="alloy-progress alloy-co2">
      <!-- <p>powerStationCo2Max: {{ this.$store.getters.powerStationCo2Max }}</p>
      <p>powerStationCo2Current: {{ this.$store.getters.powerStationCo2Current }}</p> -->
      <h3>{{ powerStationCo2Current }}
        <span>CO
          <sub>2</sub>
        </span>
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
import { mapGetters } from 'vuex';

export default {
  // props: [],
  name: 'Progress',
  data() {
    return {
      title: 'Progress'
    }
  }, // End data
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      // ⚡ Energy production 
      'powerStationEnergyMax',
      // CURRENT
      'powerStationEnergyCurrent',
      'windProductionCurrent',
      'solarProductionCurrent',
      // 🚗 CO₂ production
      'powerStationCo2Max',
      'powerStationCo2Current',
      // ⚡️ Energy combined current 
      'energyProductionCalcAllCurrent'
    ]),
    isDesertecEnergy: function() {
      if(!this.$store.state.desertecOn) {
        return this.energyProductionCalcAllCurrent;
      } else {
        return this.powerStationEnergyMax;
      }
    }
  },
  methods: {},
  // watch: {},

  // // Live cicle hook. Check for more https://vuejs.org/v2/api/
  // created: {}, // Each time the app is created (once?)
  // mounted: {}, // Be sure all elements are drawn
}
</script>

<style lang="scss" scoped>
.logo {
  margin-top: 15px;
  margin-bottom: 0;
}
h3 {
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

  &.desertecOn {
    width: 120%;
  }
}
</style>
