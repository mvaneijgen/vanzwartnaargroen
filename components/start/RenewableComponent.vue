<template>
  <div class="alloy-range" :data-current-type="currentType.title">
    <div class="inner">
      <transition name="ui-slide" mode="out-in">

        <div class="alloy-note" v-if="times > 10 && times < 25 || times > 40 && times < 55">

          <div class="inner">
            <strong>Dat schiet niet op!</strong>
            Plaats vanaf nu {{ initAmount }} stuks
          </div>
        </div>
      </transition>

      <div class="alloy-popup">
        <div class="inner-content">
          <span>{{ currentType.title }}: </span>
          <strong>{{ currentType.amount }}</strong>
        </div>
      </div>
      <button @mousedown="decrement" @mouseup="stopInterfalls">-</button>
      <button @mousedown="increment" @mouseup="stopInterfalls">+</button>
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
      if (this.times > 40) {
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
        this.incrementState(payload);
        this.times++;
      };
      keepRunning();
      // ⏱ Run function every .5 second
      this.decrementState(payload);
      this.times--;

      window.setInterval(() => {
        keepRunning();
      }, 500);
    },
    stopInterfalls() {
      // ⏱ Clear all setInterval()'s
      (function(w) {
        w = w || window;
        var i = w.setInterval(function() {}, 100000);
        while (i >= 0) {
          w.clearInterval(i--);
        }
      })(/*window*/);
    },
  },
};
</script>
<style lang="scss" scoped>
// button {
//   border-radius: 50% !important;
// }
</style>