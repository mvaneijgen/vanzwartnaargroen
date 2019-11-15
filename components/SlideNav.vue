<template>
  <div class="component-CallToAction" :data-show-nav="show">
    <div @click="navToggle" id="alloy-nav-toggle">
      <div class="inner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="alloy-slide-nav" @click="closeToggle">
      <div class="inner">
        <nav>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/start" v-if="$nuxt.$route.path != '/'" class="alloy-back">Terug naar tool</nuxt-link>
          <nuxt-link to="/start" v-else>Start</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
        </nav>
        <br>
        <br>
        <div class="share">
          <h4>Share</h4>
          <p>Wie daag jij uit om Nederland groener te maken?</p>
          <ul class="share-buttons">
            <li>
              <a id="facebook" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fvanzwartnaargroen.nl&amp;t=Nederlandse%20Energiemarkt%20Opschonen" title="Share on Facebook" target="_blank"><img src="@/assets/images/share//Facebook.png"></a>
            </li>
            <li>
              <a id="twitter" href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fvanzwartnaargroen.nl&amp;text=Nederlandse%20Energiemarkt%20Opschonen&amp;via=studioalloy" title="Tweet" target="_blank"><img src="@/assets/images/share//Twitter.png"></a>
            </li>
            <li>
              <a id="reddit" href="http://www.reddit.com/submit?source=http%3A%2F%2Fvanzwartnaargroen.nl&amp;text=Nederlandse%20Energiemarkt%20Opschonen&amp;via=studioalloy" title="Tweet" target="_blank"><img src="@/assets/images/share//Reddit.png"></a>
            </li>
            <li>
              <a id="linkedin" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fvanzwartnaargroen.nl&amp;title=Nederlandse%20Energiemarkt%20Opschonen&amp;summary=De%20app%20van%20zwart%20naar%20groen%20is%20een%20tool%20waarmee%20de%20gebruiker%20een%20overzicht%20krijgt%20van%20de%20Nederlandse%20energieproductie.%20Vervolgens%20kunnen%20bezoekers%20met%20de%20app%20energiecentrales%20met%20niet-hernieuwbare%20brandstof%20deactiveren%20en%20de%20resultaten%20aan%20CO2%20uitstoot%20te%20zien.%20Het%20andere%20resultaat%20van%20het%20deactiveren%20is%20natuurlijk%20dat%20de%20hoeveelheid%20opgewekte%20energie%20ook%20daalt.%20Om%20deze%20verminderde%20opwekking%20op%20te%20vangen%20kunnen%20er%20windmolens%2C%20zonnepanelen%20of%20misschien%20wel%20een%20andere%20effectievere%20oplossing%20bijgeplaatst%20worden.%20Ga%20naar%20http%3A%2F%2Fvanzwartnaargroen.nl%20en%20begin%20direct." title="Share on LinkedIn" target="_blank"><img src="@/assets/images/share//LinkedIn.png"></a>
            </li>
            <li>
              <a id="mailto" href="mailto:?subject=Nederlandse%20Energiemarkt%20Opschonen&amp;body=De%20app%20van%20zwart%20naar%20groen%20is%20een%20tool%20waarmee%20de%20gebruiker%20een%20overzicht%20krijgt%20van%20de%20Nederlandse%20energieproductie.%20Vervolgens%20kunnen%20bezoekers%20met%20de%20app%20energiecentrales%20met%20niet-hernieuwbare%20brandstof%20deactiveren%20en%20de%20resultaten%20aan%20CO2%20uitstoot%20te%20zien.%20Het%20andere%20resultaat%20van%20het%20deactiveren%20is%20natuurlijk%20dat%20de%20hoeveelheid%20opgewekte%20energie%20ook%20daalt.%20Om%20deze%20verminderde%20opwekking%20op%20te%20vangen%20kunnen%20er%20windmolens%2C%20zonnepanelen%20of%20misschien%20wel%20een%20andere%20effectievere%20oplossing%20bijgeplaatst%20worden.%20Ga%20naar%20http%3A%2F%2Fvanzwartnaargroen.nl%20en%20begin%20direct." title="Email" target="_blank"><img src="@/assets/images/share//Email.png"></a>
            </li>
          </ul>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div class="about-us">
          <p>
            <em>van Zwart naar Groen</em> is een product van
            <a href="//studioalloy.nl" target="_blank">Studio Alloy</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: "SlideNav",
  data() {
    return {
      title: "SlideNav",
      show: false,
    };
  }, // End data
  methods: {
    navToggle() {
      this.show = !this.show;
    },
    closeToggle() {
      this.show = !this.show;
    },
  },
};
</script>