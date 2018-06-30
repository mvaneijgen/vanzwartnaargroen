<template>
  <section class="alloy-page">
    <h1>Start</h1>

    <div class="alloy-progress alloy-energy">
      <label :for="this.$store.state.energyMax.name">{{ this.$store.state.energyMax.name }}</label>
      <h3>{{ this.$store.state.energyMax.amount }}
        <span>{{ this.$store.state.energyMax.suffix }}</span>
      </h3>
      <progress :id="this.$store.state.energyMax.name" :name="this.$store.state.energyMax.name" max="100" value="70">
        {{ this.$store.state.energyCurrent }} current/ {{ this.$store.state.energyMax.amount }} max
      </progress>

    </div>
    <div class="alloy-progress alloy-co2">
      <label :for="this.$store.state.co2Max.name">{{ this.$store.state.co2Max.name }}</label>
      <h3>{{ this.$store.state.c02Max.amount }}
        <span>{{ this.$store.state.c02Max.suffix }}</span>
      </h3>
      <progress :id="this.$store.state.c02Max.name" :name="this.$store.state.c02Max.name" max="100" value="70">
        {{ this.$store.state.energyCurrent }} current / {{ this.$store.state.c02Max.amount }} max
      </progress>
    </div>
    <Map/>

    <nuxt-link to="/" class="btn">back</nuxt-link>

  </section>
</template>

<script>
import Map from '@/components/Map.vue';
import { mapActions } from 'vuex';
export default {
  // data() {
  //   return {
  //     energyMax: this.$store.state.energyMax,
  //     energyCurrent: this.$store.state.energyCurrent,
  //     co2Max: this.$store.state.energyMax,
  //     co2Current: this.$store.state.co2Current,
  //   };
  // },
  components: {
   Map,
  },
  created(){
    this.$store.dispatch('calcAllTotal');
  },
  // methods: {
  //   ...mapActions([
  //     'calcTotal'
  //   ])
  // }
};
</script>

<style>
</style>