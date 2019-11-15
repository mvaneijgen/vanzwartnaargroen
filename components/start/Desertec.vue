<template>
  <transition name="slide-from-right">
    <div class="component-Desertec" v-if="this.$store.state.start.desertecShow">
      <input type="checkbox" id="checkbox-desertec" v-model="desertecOn">
      <label for="checkbox-desertec">Desertec</label>
      <div class="content">
        <span class="label">Desertec</span>
        <nuxt-link to="/desertec">Wat is Desertec?</nuxt-link>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // props: [],
  name: "Desertec",
  data() {
    return {
      title: "Desertec",
      initWind: 0,
      initSolar: 0,
      desertecNotification: false,
    };
  }, // End data
  computed: {
    ...mapGetters({
      // 🚗 CO₂ production
      windProductionCurrent: "start/windProductionCurrent",
      solarProductionCurrent: "start/solarProductionCurrent",
    }),
    desertecOn: {
      get() {
        return this.$store.state.start.desertecOn;
      },
      set(value) {
        this.$store.commit("start/desertecUpdate", value);
      },
    },
  },
  methods: {
    desertecAvalible: function() {
      if (!this.desertecNotification) {
        this.desertecNotification = true;

        const notification = {
          title: "Nieuwe optie Desertec!",
          content:
            "Wij hebben je een nieuwe optie gegeven, Desertec. Misschien kun je hier iets me?",
          image: "",
          type: "alert",
          timer: 6000,
          date: new Date(),
        };
        this.$store.commit("notifications/addNotification", notification);
      }
    },
  },
  watch: {
    windProductionCurrent: function() {
      if (this.windProductionCurrent >= this.initWind * 1.15) {
        this.$store.commit("start/updateDesertecShow");
        this.desertecAvalible();
      }
    },
    solarProductionCurrent: function() {
      if (this.solarProductionCurrent >= this.initSolar * 1.15) {
        this.$store.commit("start/updateDesertecShow");
        this.desertecAvalible();
      }
    },
  },
  created() {
    // this.initWind = this.$store.getters.windProductionCurrent;
    // this.initSolar = this.$store.getters.solarProductionCurrent;
    this.initWind = this.$store.getters["start/windProductionCurrent"];
    this.initSolar = this.$store.getters["start/solarProductionCurrent"];
  },
};
</script>

<style lang="scss"  scoped>
@import "~/assets/css/common/_variables.scss";

.component-Desertec {
  position: absolute;
  transform: scale(0.7);
  @include media-breakpoint-up(lg) {
    transform: scale(1);
  }
  top: 15vh;
  left: -20px;

  @include media-breakpoint-up(lg) {
    top: 45vh;
    left: -15%;
  }
  z-index: 100;
}
.content {
  // position: absolute;
  // right: 125px;
  // top: 34px;
  transform: translateX(55px);
  @include media-breakpoint-up(lg) {
    transform: translateX(75px);
  }
  text-align: right;
  // background-color: rgba($brand-light, 0.6);
  background-color: $brand-one;
  color: $brand-dark;
  padding: 10px;
  padding-left: 25px;
  font-size: 1rem;
  line-height: 1.4em;
  font-weight: 700;

  a {
    display: block;
    font-size: 0.8rem;
    color: $brand-dark;
    font-weight: 400;
    text-decoration: underline;
  }
}
label {
  font-size: 0;
}

/* Base for label styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: -14px;
  @include media-breakpoint-up(lg) {
    left: 0;
  }
  top: 0;
  width: 85px;
  height: 85px;
  border: 0;
  background: $brand-light;
  border: 2px solid $brand-light;
  border-radius: 50%;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "✔";
  position: absolute;
  top: 5px;
  left: 0;
  @include media-breakpoint-up(lg) {
    left: 25px;
  }
  font-size: 80px;
  line-height: 0.8;
  color: $brand-one;
  transition: color;
  transition-duration: 300ms;
  transition-timing-function: ease;

  font-family: Helvetica, Arial, sans-serif;
  z-index: 1000;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  color: $brand-grey;
}
[type="checkbox"]:checked + label:after {
}
/* disabled checkbox */
[type="checkbox"]:disabled:not(:checked) + label:before,
[type="checkbox"]:disabled:checked + label:before {
  box-shadow: none;
  border-color: #bbb;
  background-color: #ddd;
}
[type="checkbox"]:disabled:checked + label:after {
  color: #999;
}
[type="checkbox"]:disabled + label {
  color: #aaa;
}
/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted blue;
}

/* hover style just for information */
label:hover:before {
  border: 2px solid $brand-one !important;
}

.slide-from-right-enter-active,
.slide-from-right-leave-active {
  transition: transform, opacity;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.87, -0.41, 0.19, 1.44);
}
.slide-from-right-enter,
.slide-from-right-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
.slide-from-right-enter-to,
.slide-from-right-leave {
  opacity: 1;
  transform: translateX(0);
}
</style>