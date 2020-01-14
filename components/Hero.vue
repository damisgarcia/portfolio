<i18n>
{
  "pt-br": {
    "heroDescription": "Conheça um pouco do meu trabalho"
  },
  "en": {
    "heroDescription": "Know a little of my work"
  }
}
</i18n>

<template>
  <div class="hero-wrapper is-light">
    <section class="hero container">
      <div class="hero-body">
        <no-ssr>
          <hero-splitting />
        </no-ssr>
        <div v-if="ready" class="subtitle">
          {{ $t('heroDescription') }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import noSsr from 'vue-no-ssr'
import heroSplitting from './HeroSplitting'

export default {
  components: {
    noSsr,
    heroSplitting
  },
  data() {
    return {
      ready: false
    }
  },
  mounted() {
    this.ready = true
  }
}
</script>

<style lang="scss">
.hero-wrapper {
  display: flex;
  background-color: transparentize($turquoise, 0.8);
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  padding: 48px;
  .hero-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero {
    &__block {
      &--title {
        font-size: 48px;
        color: $black !important;
      }
    }
    &__span {
      &--person-name {
        color: $red !important;
      }
    }
  }
  .subtitle {
    opacity: 0;
    animation: fadeIn 200ms ease-in forwards;
    animation-delay: 1s;
  }
}
@media (max-width: $tablet) {
  .hero-wrapper {
    padding: 24px;
    .hero {
      .title {
        font-size: 32px;
      }
      .subtitle {
        font-size: 18px;
        margin-top: 0px !important;
      }
    }
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
