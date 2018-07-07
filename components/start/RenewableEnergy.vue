<template>

  <div class="component-RenewableEnergy alloy-ui">

    <div class="alloy-windTurbines">
      <div class="alloy-amount">{{ this.$store.state.windTurbines.amount }}</div>
      <div class="alloy-counter">
        <!-- <button class="btn" @click="decrementWindTurbines(100)">-</button>
        <button class="btn" @click="incrementWindTurbines(100)">+</button> -->
        <div class="alloy-input-range">
          <div class="alloy-background">
            <img src="@/assets/images/ui/range-background.svg" alt="">
          </div>
          <div class="alloy-overlay">
            <span><img src="@/assets/images/ui/range-minus.svg" alt=""></span>
            <span><img src="@/assets/images/ui/range-plus.svg" alt=""></span>
          </div>
          <input id="range-windTurbines" type="range" min="0" max="2" value="1" step="1" />
        </div>
      </div>
    </div>

    <div class="alloy-solarPanels">
      <div class="alloy-amount">{{ this.$store.state.solarPanels.amount }}</div>
      <div class="alloy-counter">
        <!-- <button class="btn" @click="decrementSolarPanels(100)">-</button>
        <button class="btn" @click="incrementSolarPanels(100)">+</button> -->
      </div>
      <div class="alloy-input-range">
        <div class="alloy-background">
          <img src="@/assets/images/ui/range-background.svg" alt="">
        </div>
        <div class="alloy-overlay">
          <span><img src="@/assets/images/ui/range-minus.svg" alt=""></span>
          <span><img src="@/assets/images/ui/range-plus.svg" alt=""></span>
        </div>
        <input id="range-solarPanels" type="range" min="0" max="2" value="1" step="1" />
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
  mounted() {
    // 🌬 Wind Turbines logic
    document.querySelector('#range-windTurbines').addEventListener("mousedown", function(){
      console.log(this);
    });
    document.querySelector('#range-windTurbines').addEventListener("mouseup", function(){
      this.value = 1;
    });

    // ☀️ Solar Panels logic
    document.querySelector('#range-solarPanels').addEventListener("mousedown", function(){
      console.log(this);
    });

    document.querySelector('#range-solarPanels').addEventListener("mouseup", function(){
      this.value = 1;
    });
  },
  // watch: {},

  // // Live cicle hook. Check for more https://vuejs.org/v2/api/
  // created: {}, // Each time the app is created (once?)
  // mounted: {}, // Be sure all elements are drawn
}
</script>
 
<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
</style>
