<template>
  <div class="component-PowerCategory alloy-ui">
    <div class="innner">
      <button @click="toggleOff" data-toggle="off" data-fuel="Kolen">
        <img src="@/assets/images/ui/coal.svg" alt="">
        <span class="alloy-legend">Kolen</span>
      </button>
      <button @click="toggleOff" data-toggle="off" data-fuel="Gas">
        <img src="@/assets/images/ui/gas.svg" alt="">
        <span class="alloy-legend">Gas</span>
      </button>
      <button @click="toggleOff" data-toggle="off" data-fuel="Nucleair">
        <img src="@/assets/images/ui/nuclear.svg" alt="">
        <span class="alloy-legend">Nucliear</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  // props: [],
  name: "PowerCategory",
  data() {
    return {
      title: "PowerCategory",
      off: true,
    };
  }, // End data
  methods: {
    // mix the getters into computed with object spread operator
    ...mapMutations({
      togglePowerStationCat: "start/togglePowerStationCat",
    }),
    toggleOff: function(e) {
      const target = e.target;

      const parameterObj = {
        fuel: target.dataset.fuel,
        toggle: target.dataset.toggle,
      };

      // Run Vuex getter
      this.togglePowerStationCat(parameterObj);

      // Switch toggle true or false
      if (target.dataset.toggle === "off") {
        target.dataset.toggle = "on";
      } else {
        target.dataset.toggle = "off";
      }
    },
  },
  mounted() {
    const notification = {
      title: "Goed bezig, je bent al goed op weg!",
      content:
        "Met deze knoppen kun je in één keer alle kolen, gas of nucleaire centrales uitzetten",
      image: "",
      type: "alert",
      timer: 8000,
      date: new Date(),
    };
    this.$store.commit("notifications/addNotification", notification);
  }, // Be sure all elements are drawn
};
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
  position: relative;

  img {
    pointer-events: none;
    transition: transform;
    transition-duration: 300ms;
    transition-timing-function: ease;
    width: 45px;
    height: auto;
    @include media-breakpoint-up(sm) {
      width: 60px;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
</style>
