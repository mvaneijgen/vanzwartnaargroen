<template>
  <div class="component-RenewableEnergy alloy-ui">
    <RenewableComponent :current-type="this.$store.state.windTurbines" />
    <RenewableComponent :current-type="this.$store.state.solarPanels" />
  </div>
</template>

<script>
import RenewableComponent from "@/components/start/RenewableComponent.vue";

export default {
  name: "RenewableEnergy",
  components: {
    RenewableComponent,
  },
};
</script>
