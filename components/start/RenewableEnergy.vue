<template>
  <div class="component-RenewableEnergy alloy-ui">
    <RenewableComponent :current-type="this.$store.state.start.windTurbines" />
    <RenewableComponent :current-type="this.$store.state.start.solarPanels" />
  </div>
</template>

<script>
import RenewableComponent from "@/components/start/RenewableComponent.vue";

export default {
  name: "RenewableEnergy",
  components: {
    RenewableComponent,
  },
  mounted() {
    const notification = {
      title: "Wauw, heerlijk schoon!",
      content:
        "Maar niemand heeft meer elektriciteit... Probeer de benodigde energie met groene stroom te vervangen.",
      image: "",
      type: "alert",
      timer: 12000,
      date: new Date(),
    };
    this.$store.commit("notifications/addNotification", notification);
  },
};
</script>
