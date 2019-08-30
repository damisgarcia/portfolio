<template>
  <div data-splitting class="title hero__block--title">
    Hi my name is
    <span class="hero__span--person-name">Garcia</span> <br />
    a fullstack developer
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
