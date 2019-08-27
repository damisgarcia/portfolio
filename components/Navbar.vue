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
      <b-navbar-item href="#" class="navbar__item">
        Sobre
      </b-navbar-item>
      <b-navbar-item href="#" class="navbar__item">
        Portfolio
      </b-navbar-item>
      <b-navbar-item href="#" class="navbar__item">
        Encontre-me
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="scss">
.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
  &__item {
    text-transform: uppercase;
  }
}
</style>
