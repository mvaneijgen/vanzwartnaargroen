<template>
  <section class="alloy-page">
    <img class="alloy-background-image" src="@/assets/images/idyllic.jpg" alt="">

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
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.alloy-slide-up {
  position: relative;
  background-color: rgba($brand-dark, 0.8);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.alloy-zoom-out {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  .component-Map {
    transform: scale(4);

    transition: transform;
    transition-duration: 300ms;
    transition-timing-function: ease;

    width: 90vmin;
    margin: 0 auto;
  }
}
.page-leave-active {
  transition-duration: $base-duration;

  .alloy-zoom-out {
  }

  .alloy-slide-up {
    transform: translateY(-100vh);
    transition: transform;
    transition-duration: $base-duration;
  }
}
</style>
