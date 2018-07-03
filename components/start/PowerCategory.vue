<template>
  <div class="component-PowerCategory alloy-ui">
    <div class="innner">
      <button @click="toggleOff" data-toggle="off" data-fuel="Kolen">
        <img src="@/assets/images/ui/coal.svg" alt="">
      </button>
      <button @click="toggleOff" data-toggle="off" data-fuel="Gas">
        <img src="@/assets/images/ui/gas.svg" alt="">
      </button>
      <button @click="toggleOff" data-toggle="off" data-fuel="Nucleair">
        <img src="@/assets/images/ui/nuclear.svg" alt="">
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

      const parameterObj = {
        fuel: target.dataset.fuel,
        toggle: target.dataset.toggle
      }

      // Run Vuex getter
      this.togglePowerStationCat(parameterObj);

      // Switch toggle true or false
      if (target.dataset.toggle === 'off') {
        target.dataset.toggle = 'on'
      } else {
        target.dataset.toggle = 'off'
      }
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
@import "~/assets/css/common/_variables.scss";

.alloy-ui {
  bottom: 0;
}
button {
  border-radius: 50%;
  background-color: $brand-dark;
  margin-bottom: $base-margin;

  img {
    pointer-events: none;
  }
}
</style>
