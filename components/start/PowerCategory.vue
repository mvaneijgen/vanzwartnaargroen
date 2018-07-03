<template>
  <div class="component-PowerCategory alloy-ui">
    <div class="innner">
      <button @click="toggleOff" data-toggle="off" data-fuel="Kool">
        coal
      </button>
      <button @click="toggleOff" data-toggle="off" data-fuel="Gas">
        gas
      </button>
      <button @click="toggleOff" data-toggle="off" data-fuel="Nucleair">
        nucliear
      </button>

    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  // props: [],
  name: 'PowerCategory',
  data() {
    return {
      title: 'PowerCategory',
      off: true,
    }
  }, // End data
  methods: {
    // mix the getters into computed with object spread operator
    ...mapMutations([
     'togglePowerStationCat'
    ]),
    toggleOff: function(e) {
      const target = e.target
      // Run Vuex getter
      this.togglePowerStationCat(target.getAttribute('data_fuel'), target.getAttribute('data_toggle'));

      // Change toggle 
    }
   
  },
  // methods: {},
  // watch: {},

  // // Live cicle hook. Check for more https://vuejs.org/v2/api/
  // created: {}, // Each time the app is created (once?)
  // mounted: {}, // Be sure all elements are drawn
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
.alloy-ui {
  bottom: 0;
}
</style>
