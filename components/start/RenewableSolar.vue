<template>
  <div class="alloy-range alloy-range-solar">
    <div class="inner" :data-amount="(solarState.amount > initWind + 1500) ? 1000 : 
                                     (solarState.amount > initWind + 150) ? 100 : 
                                     (solarState.amount > initWind + 10) ? 10 : 1">
      <div class="alloy-note">
        <transition mode="out-in">
          <div class="inner" v-if="solarState.amount > initWind + 1500 && solarState.amount < initWind + 15000 || 
                     solarState.amount > initWind + 150 && solarState.amount < initWind + 1000 || 
                     solarState.amount > initWind + 10 && solarState.amount < initWind + 100">
            <strong>Dat schiet niet op!</strong>
            Plaats vanaf nu {{ (solarState.amount > initWind + 1500) ? 1000 : (solarState.amount > initWind + 150) ? 100 : (solarState.amount > initWind + 10) ? 10 : 1 }} zonnepanelen bij
          </div>
        </transition>
      </div>
      <div class="alloy-popup">
        <div class="inner-content">
          <span>Windmolens: </span>
          <strong>{{ solarState.amount }}</strong>
        </div>
      </div>
      <svg class="alloy-slider" xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
        <defs>
          <filter id="goo" color-interpolation-filters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -20" result="cm" />
          </filter>
        </defs>

        <g class="goo" fill="none" fill-rule="evenodd" filter="url(#goo)">

          <circle cx="100" cy="50" r="30" fill="#F8E71C" />
          <circle cx="100" cy="50" r="40" fill="#F8E71C" class="alloy-draggable" />

        </g>
        <g class="icons">
          <polygon class="icon-plus" fill="#000" points="161 53 161 60 155 60 155 53 148 53 148 47 155 47 155 40 161 40 161 47 168 47 168 53" />
          <rect class="icon-minus" width="6" height="20" x="39" y="40" fill="#000" transform="rotate(90 42 50)" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  // props: [], 
  name: 'RenewableWind',
  data() {
    return {
      initWind: 0,
    }
  }, // End data
  computed: {
    solarState: function() {
      return this.$store.state.solarPanels;
    }
  },
  methods: {
    ...mapMutations([
      'incrementSolarPanels',
      'decrementSolarPanels',
    ]),
  },
  created() {
    this.initWind = this.$store.state.solarPanels.amount;
  },
  mounted() {
    const container = document.querySelector(".alloy-range-solar .inner");
    const dragItem = document.querySelector('.alloy-range-solar .alloy-draggable');

    let mouseIsDown = false;
    let hasMoven = false;
    let hasMovenRight = false;
    let hasMovenLeft = false;

    // Run Vue.js functions
    const increment = (amount) => {
      this.incrementSolarPanels(amount);
    }
    const decrement = (amount) => {
      this.decrementSolarPanels(amount);
    }

    // 🏎 Drag start 
    function dragStart(event) {
      const mouseXstart = event.pageX;

      mouseIsDown = true;

      // 👂🏼 Event listeners
      window.addEventListener("mousemove", event => {
        dragMove(event, mouseXstart);
      });
      window.addEventListener("touchmove", event => {
        dragMove(event, mouseXstart);
      });
      window.addEventListener("mouseup", dragEnd);
      window.addEventListener("touchend", dragEnd);
    }

    // 👂🏼 Event listeners
    dragItem.addEventListener("mousedown", dragStart);
    dragItem.addEventListener("touchstart", dragStart);

    // 🕺 Drag move
    function dragMove(event, mouseXstart) {
      const mousePos = mouseXstart - event.pageX;

      if (mouseIsDown && !hasMoven) {
        // ➡️ Gooy effect go to the right
        if (mousePos < -20) {
          hasMoven = true;
          hasMovenRight = true;

          container.classList.remove("minus");
          container.classList.add("plus");

          // ⏱ Run function every .5 second
          window.setInterval(function() {
            const amount = Number(container.dataset.amount);
            increment(amount);
          }, 500);
        }

        // ⬅️ Gooy effect go to the left
        if (mousePos > 20) {
          hasMoven = true;
          hasMovenLeft = true;

          container.classList.remove("plus");
          container.classList.add("minus");

          // ⏱ Run function every .5 second
          window.setInterval(function() {
            const amount = Number(container.dataset.amount);
            decrement(amount);
          }, 500);
        }
      }

      // Reset if someone moves the mouse again
      if (hasMovenLeft && mousePos < -20) {
        hasMoven = false;
        hasMovenLeft = false;
        resetSetTimeOut();
      }

      if (hasMovenRight && mousePos > 20) {
        hasMoven = false;
        hasMovenRight = false;
        resetSetTimeOut();
      }
    }
    // 🏁 Drag end
    function dragEnd() {
      mouseIsDown = false;
      hasMoven = false;
      hasMovenRight = false;
      hasMovenLeft = false;

      container.classList.remove("plus");
      container.classList.remove("minus");  

      resetSetTimeOut();
    }
    // 👂🏼 Event listeners

    // ⏱ Clear all setInterval()'s
    function resetSetTimeOut() {  
      (function(w) {
        w = w || window;
        var i = w.setInterval(function() {}, 100000);
        while (i >= 0) {
          w.clearInterval(i--);
        }
      })(/*window*/);
    }
  },
}
</script>

<style lang="scss"  scoped>
// @import "~/assets/css/common/_variables.scss";
</style>