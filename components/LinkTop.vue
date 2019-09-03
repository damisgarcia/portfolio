<i18n>
{
  "pt-br": {
    "Link top": "Voltar ao topo"
  },
  "en": {
    "Link top": "Back to top"
  }
}
</i18n>
<template>
  <transition name="fade">
    <a
      v-if="visible"
      v-scroll-to="{ el: getLink }"
      :href="getLink"
      class="button is-dark scrollactive-item link-top"
      >{{ $t('Link top') }}</a
    >
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    getLink() {
      return '#' + this.$t('homepage').toLowerCase()
    }
  },
  mounted() {
    this.$scrollTo(this.getLink)
  }
}
</script>

<style lang="scss" scoped>
.link-top {
  display: inline-block;
  position: fixed;
  bottom: 24px;
  right: 24px;
  color: $white;
  z-index: 10;
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 300ms;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
}
</style>
