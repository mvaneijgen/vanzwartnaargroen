<template>
  <div class="component-Progress">
    <div class="alloy-progress alloy-energy">
      <label :for="this.$store.state.energyMax.name">{{ this.$store.state.energyMax.name }}</label>
      <h3>{{ this.$store.state.energyCurrent }}
        <span v-html="this.$store.state.energyMax.suffix"></span>
      </h3>
      <progress id="file" name="file" :max="this.$store.state.energyMax.amount" :value="this.$store.state.energyCurrent">
        {{ this.$store.state.energyCurrent }} current / {{ this.$store.state.energyMax.amount }} max
      </progress>
    </div>

    <div class="alloy-progress alloy-co2">
      <label :for="this.$store.state.co2Max.name">{{ this.$store.state.co2Max.name }}</label>
      <h3>{{ this.$store.state.co2Current }}
        <span v-html="this.$store.state.co2Max.suffix"></span>
      </h3>
      <progress id="file" name="file" :max="this.$store.state.co2Max.amount" :value="this.$store.state.co2Current">
        {{ this.$store.state.co2Current }} current / {{ this.$store.state.co2Max.amount }} max
      </progress>
    </div>
  </div>
</template>

<script>
export default {
  // props: [],
  name: 'Progress',
  data() {
    return {
      title: 'Progress'
    }
  }, // End data
  // computed: {},
  // methods: {},
  // watch: {},

  // // Live cicle hook. Check for more https://vuejs.org/v2/api/
  // created: {}, // Each time the app is created (once?)
  // mounted: {}, // Be sure all elements are drawn
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
// h1 {
//   color: #0ba;
// }
</style>
