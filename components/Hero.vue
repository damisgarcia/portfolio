<template>
  <div class="hero-wrapper is-light">
    <section class="hero container">
      <div class="hero-body">
        <div data-splitting class="title hero__block--title">
          Hi my name is
          <span class="hero__span--person-name">Garcia</span> <br />
          a fullstack developer
        </div>
        <div class="subtitle">
          Sit nulla mollit velit eu proident.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
  .splitting .char {
    opacity: 0;
    animation: split 200ms cubic-bezier(0.64, 1.11, 0.58, 1.08) forwards;
    animation-delay: calc(30ms * var(--char-index));
  }
}
@keyframes split {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  33% {
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
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
