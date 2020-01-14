<i18n>
{
  "pt-br": {
    "hello": "Olá meu nome é",
    "Iam": "e sou fullstack developer"
  },
  "en": {
    "hello": "Hi my name is",
    "Iam": "Iam the fullstack developer"
  }
}
</i18n>

<template>
  <div data-splitting class="title hero__block--title">
    {{ $t('hello') }}
    <span class="hero__span--person-name">Damis Garcia</span> <br />
    {{ $t('Iam') }}
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
</style>
