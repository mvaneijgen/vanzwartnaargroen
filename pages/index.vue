<template>
  <section class="alloy-page">
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
export default {
  transition: 'page'
};
</script>

<style lang="scss" scoped>
// @import "~/assets/css/common/_variables.scss";
</style>
