<template>
  <div class="navbar-container">
    <b-navbar :fixed-top="true" class="is-transparent">
      <template slot="end">
        <scrollactive
          tag="div"
          :offset="2"
          :modify-url="false"
          :duration="400"
          @itemchanged="onItemChanged"
        >
          <b-navbar-item
            v-for="item in items"
            :key="item.label"
            :href="getLink(item.label)"
            class="navbar__item scrollactive-item is-light"
          >
            {{ item.label }}
          </b-navbar-item>
        </scrollactive>
      </template>
    </b-navbar>
    <link-top :visible="!isHome" />
  </div>
</template>

<script>
import LinkTop from '@/components/LinkTop'
export default {
  components: {
    LinkTop
  },
  data() {
    return {
      section: null,
      items: [
        { label: this.$t('about') },
        { label: this.$t('portfolio') },
        { label: this.$t('contact') }
      ]
    }
  },
  computed: {
    isHome() {
      return this.section === null
    }
  },
  methods: {
    getLink(link) {
      return '#' + this.$t(link).toLowerCase()
    },
    onItemChanged(event, currentItem, lastActiveItem) {
      this.section = currentItem ? currentItem.getAttribute('href') : null
    }
  }
}
</script>

<style lang="scss">
.navbar-container {
  .navbar {
    animation: fadeIn 500ms ease-in both;
    animation-delay: 1.2s;
    &.is-transparent,
    &.is-primary {
      background-color: transparent;
      background-image: none;
    }
    &__item {
      outline: none;
      text-transform: uppercase;
      &:hover,
      &:active,
      &:visited,
      &:link {
        color: $dark;
      }
      &.is-active {
        font-weight: bold;
        color: $dark;
      }
      &.is-dark,
      &.is-active.is-dark {
        color: white;
        background-color: transparent;
      }
    }
    &__block {
      &--float-left {
        display: flex;
      }
    }
    .scrollactive-nav {
      display: flex;
    }
  }
}
@media (max-width: $desktop) {
  .navbar {
    .scrollactive-nav {
      flex-direction: column;
    }
    &__item {
      color: $grey-darker !important;
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
