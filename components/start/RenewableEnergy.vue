<template>

  <div class="component-RenewableEnergy alloy-ui">

    <RenewableWind />
    <RenewableSolar />

  </div>

</template>

<script>
import RenewableWind from '@/components/start/RenewableWind.vue';
import RenewableSolar from '@/components/start/RenewableSolar.vue';

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
  },

}
</script>
 
<style lang="scss"  scoped>
</style>
