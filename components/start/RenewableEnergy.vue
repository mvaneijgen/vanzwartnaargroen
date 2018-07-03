<template>
  <div class="component-RenewableEnergy alloy-ui">
    <div class="alloy-windTurbines">
      {{ this.$store.state.windTurbines.amount }}
      <div class="alloy-counter">
        <button class="btn" @click="incrementWindTurbines(100)">+</button>
        <button class="btn" @click="decrementWindTurbines(100)">-</button>
      </div>
    </div>
    <div class="alloy-solarPanels">
      {{ this.$store.state.solarPanels.amount }}
      <div class="alloy-counter">
        <button class="btn" @click="incrementSolarPanels(100)">+</button>
        <button class="btn" @click="decrementSolarPanels(100)">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  // props: [],
  name: 'RenewableEnergy',
  data() {
    return {
      title: 'RenewableEnergy'
    }
  }, // End data
  // computed: {},
  methods: {
    ...mapMutations([
      'incrementWindTurbines',
      'decrementWindTurbines',
      'incrementSolarPanels',
      'decrementSolarPanels'
    ])
  },
  // watch: {},

  // // Live cicle hook. Check for more https://vuejs.org/v2/api/
  // created: {}, // Each time the app is created (once?)
  // mounted: {}, // Be sure all elements are drawn
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
.alloy-ui {
  right: 0;
}
</style>
