<template>
  <b-navbar :fixed-top="true" class="is-transparent">
    <!-- <template slot="brand">
      <b-navbar-item href="/">
        <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
      </b-navbar-item>
    </template> -->
    <template slot="end">
      <b-navbar-item :href="getLink('about')" class="navbar__item">
        {{ $t('about') }}
      </b-navbar-item>
      <b-navbar-item :href="getLink('portfolio')" class="navbar__item">
        {{ $t('portfolio') }}
      </b-navbar-item>
      <b-navbar-item :href="getLink('contact')" class="navbar__item">
        {{ $t('contact') }}
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    getLink(link) {
      return '#' + this.$t(link).toLowerCase()
    }
  }
}
</script>

<style lang="scss">
.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
  &__item {
    text-transform: uppercase;
    &:first-child {
      &.active {
        animation: fadeOut 300ms ease-in-out both;
      }
    }
  }
  &__block {
    &--float-left {
      display: flex;
    }
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
