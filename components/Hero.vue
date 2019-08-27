<template>
  <div class="hero-wrapper is-light">
    <section class="hero container">
      <div class="hero-body">
        <div class="title hero__block--title">
          Hi my name is
          <span class="hero__span--person-name">Garcia</span> <br />
          i fullstack developer
        </div>
        <div class="subtitle">
          Sit nulla mollit velit eu proident.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
}
</style>
