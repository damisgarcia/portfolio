<i18n>
{
  "pt-br": {
    "link-top-text": "Voltar ao topo"
  },
  "en": {
    "link-top-text": "Back to top"
  }
}
</i18n>
<template>
  <div class="link-top">
    <a class="button is-light" :href="getLink">{{ $t('link-top-text') }}</a>
  </div>
</template>

<script>
export default {
  computed: {
    getLink() {
      return '#' + this.$t('home').toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.link-top {
  display: inline-block;
  position: fixed;
  bottom: 24px;
  right: 24px;
  a.active {
    animation: fadeOut 300ms ease both;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
