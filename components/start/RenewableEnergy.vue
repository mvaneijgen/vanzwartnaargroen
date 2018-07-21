<template>

  <div class="component-RenewableEnergy alloy-ui">

    <!-- <RenewableWind />
    <RenewableSolar /> -->
    <RenewableComponent :current-type="this.$store.state.windTurbines" />
    <RenewableComponent :current-type="this.$store.state.solarPanels" />
  </div>

</template>

<script>
import RenewableComponent from '@/components/start/RenewableComponent.vue';

export default {
  name: 'RenewableEnergy',
  data() {
    return {
    }
  }, // End data
  components: {
    RenewableComponent
  },

}
</script>
 
<style lang="scss"  scoped>
</style>
