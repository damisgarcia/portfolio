<template>
  <div class="hero">
    <div class="hero__title">Lorem Ipsum</div>
    <div class="hero__title--subtitle">
      Exercitation tempor ut reprehenderit id anim aute pariatur elit nostrud
      deserunt consectetur.
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  background-color: $bg-color;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 48px;
  &__title {
    font-size: 24px;
    &--subtitle {
      font-size: 12px;
    }
  }
}
</style>
