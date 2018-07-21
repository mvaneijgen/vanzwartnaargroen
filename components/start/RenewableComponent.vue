<template>
  <div class="alloy-range" :data-current-type="typeState.title">
    <div class="inner" :data-amount="
                              //(typeState.amount > initAmount + 1500) ? 1000 : 
                              (typeState.amount > initAmount + 150) ? 100 : 
                              (typeState.amount > initAmount + 10) ? 10 : 1">
      <transition name="ui-slide" mode="out-in">

        <div class="alloy-note" v-if="
                    // typeState.amount > initAmount + 1500 && typeState.amount < initAmount + 15000 || 
                     typeState.amount > initAmount + 150 && typeState.amount < initAmount + 1000 || 
                     typeState.amount > initAmount + 10 && typeState.amount < initAmount + 100">
          <div class="inner">
            <strong>Dat schiet niet op!</strong>
            Plaats vanaf nu {{ (typeState.amount > initAmount + 150) ? 100 : (typeState.amount > initAmount + 10) ? 10 : 1 }} zonnepanelen bij
          </div>
        </div>
      </transition>

      <div class="alloy-popup">
        <div class="inner-content">
          <span>{{ typeState.title }}: </span>
          <strong>{{ typeState.amount }}</strong>
        </div>
      </div>
      <svg class="alloy-slider" @click.self="dragMePls" xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
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
  props: ['currentType'], 
  name: 'RenewableWind',
  data() {
    return {
      // currentType: type,
      initAmount: 0,
    }
  }, // End data
  computed: {
    typeState: function() {
      return this.currentType;
    }
  },
  methods: {
    ...mapMutations([
      'incrementWindTurbines',
      'decrementWindTurbines',
      'incrementSolarPanels',
      'decrementSolarPanels',
    ]),
    dragMePls: function(event) {
      event.target.classList.add('dragMePls');
      window.setTimeout(function(){
        event.target.classList.remove('dragMePls');
      }, 1100);
    },
  },
  created() {
    this.initAmount = this.currentType.amount;
  },
  mounted() {
    const container = document.querySelector(".alloy-range[data-current-type="+ this.typeState.title + "] .inner");
    const dragItem = document.querySelector(".alloy-range[data-current-type="+ this.typeState.title + "] .alloy-draggable");

    let mouseIsDown = false;
    let hasMoven = false;
    let hasMovenRight = false;
    let hasMovenLeft = false;

    // Run Vue.js functions
    const increment = (amount) => {
      if(this.currentType.title === 'Windmolens') {
        this.incrementWindTurbines(amount);
      } else {
        this.incrementSolarPanels(amount);
      }
    }
    const decrement = (amount) => {
      if(this.currentType.title === 'Windmolens') {
        this.decrementWindTurbines(amount);
      } else {
        this.decrementSolarPanels(amount);
      }
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