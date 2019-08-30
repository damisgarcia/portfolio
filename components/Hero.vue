<template>
  <div class="hero-wrapper is-light">
    <section class="hero container">
      <div class="hero-body">
        <no-ssr>
          <hero-splitting />
        </no-ssr>
        <div class="subtitle">
          Sit nulla mollit velit eu proident.
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
  mounted() {
    window.Splitting()
  }
}
</script>

<style lang="scss">
.hero-wrapper {
  display: flex;
  background-color: transparentize($turquoise, 0.8);
  width: 100vw;
  height: 100vh;
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
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
