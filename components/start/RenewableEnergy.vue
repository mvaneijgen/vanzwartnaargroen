<template>

  <div class="component-RenewableEnergy alloy-ui">

    <!-- <RenewableWind />
    <RenewableSolar /> -->
    <RenewableComponent :current-type="this.$store.state.windTurbines" />
    <RenewableComponent :current-type="this.$store.state.solarPanels" />
  </div>

</template>

<script>
import RenewableWind from '@/components/start/RenewableWind.vue';
import RenewableSolar from '@/components/start/RenewableSolar.vue';
import RenewableComponent from '@/components/start/RenewableComponent.vue';

export default {
  // props: [],
  name: 'RenewableEnergy',
  data() {
    return {
    }
  }, // End data
  components: {
    RenewableWind,
    RenewableSolar,
    RenewableComponent
  },

}
</script>
 
<style lang="scss"  scoped>
</style>
