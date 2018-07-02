<template>
  <div class="component-Progress alloy-ui">
    <div class="alloy-progress alloy-energy">
      {{ powerStationEnergyMax}}
      <!-- <p>All add up: {{ energyProductionCalcAllCurrent }}</p>
      <p>powerStationEnergyMax: {{ powerStationEnergyMax }}</p>
      <p>powerStationEnergyCurrent: {{ powerStationEnergyCurrent }}</p>
      <p>windProductionCurrent: {{ windProductionCurrent }}</p>
      <p>solarProductionCurrent: {{ solarProductionCurrent }}</p> -->
      <label for="Energieopwekking">Energieopwekking</label>
      <h3>{{ energyProductionCalcAllCurrent }}
        <span>kWh</span>
      </h3>
      <progress id="Energieopwekking" name="Energieopwekking" :max="powerStationEnergyMax" :value="energyProductionCalcAllCurrent">
        {{ energyProductionCalcAllCurrent }} current / {{ powerStationEnergyMax }} max
      </progress>
    </div>

    <div class="alloy-progress alloy-co2">
      <!-- <p>powerStationCo2Max: {{ this.$store.getters.powerStationCo2Max }}</p>
      <p>powerStationCo2Current: {{ this.$store.getters.powerStationCo2Current }}</p> -->
      <label for="Uitstoot">Uitstoot</label>
      <h3>{{ powerStationCo2Current }}
        <span>CO
          <sub>2</sub>
        </span>
      </h3>
      <progress id="Uitstoot" name="Uitstoot" :max="powerStationCo2Max" :value="powerStationCo2Current">
        {{ powerStationCo2Current }} current / {{ powerStationCo2Max }} max
      </progress>
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
    ]),
    energyProductionCalcAllCurrent: function() {
        // ⚡️ Energy Max
        const arrayEnergyAllMax = [
          this.powerStationEnergyCurrent,
          this.windProductionCurrent,
          this.solarProductionCurrent
        ].reduce((a, b) => a + b, 0);

        return arrayEnergyAllMax;
    }
  },
  // methods: {},
  // watch: {},

  // // Live cicle hook. Check for more https://vuejs.org/v2/api/
  // created: {}, // Each time the app is created (once?)
  // mounted: {}, // Be sure all elements are drawn
}
</script>

<style lang="scss" scoped>
</style>
