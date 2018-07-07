<template>
  <section class="alloy-page">
    <div class="alloy-zoom-out">
      <Map/>
    </div>
    <div class="alloy-intro">
      <div class="inner">
        <div class="logo centered">
          <img src="~/assets/images/logo.svg">
        </div>
        <h1>Kun jij de Nederlandse energie schoner maken?</h1>
        <p>De Nederlandse energievoorziening is op dit moment erg afhankelijk van energiecentrales met een grote CO
          <sub>2</sub> uitstoot. Door centrales uit te schakelen op de kaart van Nederland kun je zelf de CO
          <sub>2</sub> uitstoot terugbrengen. Windmolens en zonnepanelen bieden een goed alternatief. Hoeveel hebben we ervan nodig om dezelfde hoeveelheid energie te leveren die nu nog wordt opgewekt door centrales?</p>
        <div class="centered">
          <nuxt-link to="/start" class="btn">Start direct</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Map from '@/components/start/Map.vue';

export default {
  components: {
    Map,
  },
  mounted() {
    if (process.browser) {
    window.addEventListener('wheel', function(e) {

       this.$nuxt.$router.push('/start');
    });
    }
    
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.alloy-intro {
  position: relative;
  background-color: rgba($brand-dark, 0.6);
}
.alloy-page {
  background-color: rgba($brand-dark, 0.6);
}
.alloy-zoom-out {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  .component-Map {
    transform: scale(4);
    transition: transform;
    transition-duration: 300ms;
    transition-timing-function: ease;

    width: 90vmin;
  }
}
.page-leave-active {
  &.alloy-zoom-out {
    .component-Map {
      transform: scale(1);
    }
  }
}
</style>
