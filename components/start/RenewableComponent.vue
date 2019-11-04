<template>
  <div class="alloy-range" :data-current-type="currentType.title">
    <div class="inner">
      <transition name="ui-slide" mode="out-in">

        <div class="alloy-note" v-if="times > 10 && times < 25 || times > 35 && times < 55">

          <div class="inner">
            <strong>Dat schiet niet op!</strong>
            Plaats vanaf nu {{ initAmount }} {{currentType.title}}
          </div>
        </div>
      </transition>

      <div class="alloy-popup">
        <div class="inner-content">
          <span>{{ currentType.title }}: </span>
          <strong>{{ currentType.amount }}</strong>
        </div>
      </div>
      <button @mousedown="decrement">
        <img src="@/assets/images/ui/range-minus.svg" :alt="currentType.title">
      </button>
      <button @mousedown="increment">
        <img src="@/assets/images/ui/range-plus.svg" :alt="currentType.title">
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["currentType"],
  name: "Renewable",
  data() {
    return {
      // currentType: type,
      // initAmount: 1,
      times: 0,
    };
  }, // End data
  computed: {
    initAmount() {
      if (this.times > 35) {
        return 100;
      } else if (this.times > 10) {
        return 10;
      } else {
        return 1;
      }
    },
  },
  methods: {
    ...mapMutations(["incrementState", "decrementState"]),
    increment() {
      const payload = {
        type: this.currentType.type,
        amount: this.initAmount,
        new: new Date(),
      };

      const keepRunning = () => {
        this.incrementState(payload);
        this.times++;
      };
      keepRunning();
      // ⏱ Run function every .5 second
      window.setInterval(() => {
        keepRunning();
      }, 500);
    },
    decrement() {
      const payload = {
        type: this.currentType.type,
        amount: this.initAmount,
      };
      const keepRunning = () => {
        this.decrementState(payload);
        this.times--;
      };
      keepRunning();
      // ⏱ Run function every .5 second
      window.setInterval(() => {
        keepRunning();
      }, 500);
    },
    // stopInterfalls() {
    //   // ⏱ Clear all setInterval()'s
    //   (function(w) {
    //     w = w || window;
    //     var i = w.setInterval(function() {}, 100000);
    //     while (i >= 0) {
    //       w.clearInterval(i--);
    //     }
    //   })(/*window*/);
    // },
  },
  mounted() {
    if (process.client) {
      window.addEventListener("mouseup", e => {
        // ⏱ Clear all setInterval()'s
        (function(w) {
          w = w || window;
          var i = w.setInterval(function() {}, 100000);
          while (i >= 0) {
            w.clearInterval(i--);
          }
        })(/*window*/);
      });
    }
  },
};
</script>
<style lang="scss" scoped>
button {
  padding: 0;
  border-radius: 50% !important;
  width: 60px;
  height: 60px;
  line-height: 1em;
  img {
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
}
</style>