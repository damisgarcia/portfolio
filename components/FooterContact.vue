<template>
  <footer class="footer">
    <div class="container is-flex">
      <a
        v-for="media in social"
        :key="media.icon"
        :href="media.href"
        target="_blank"
        class="footer__button--social"
      >
        <b-icon :icon="media.icon" size="is-large" />
      </a>
    </div>
    <div class="content has-text-centered">
      <p><strong>Damis Garcia</strong> ©{{ getCurrentYear }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          icon: 'github-box',
          href: 'https://github.com/damisgarcia'
        },
        {
          icon: 'linkedin-box',
          href: 'https://www.linkedin.com/in/damis-garcia-do-vale-15124562/'
        }
      ]
    }
  },
  computed: {
    getCurrentYear() {
      const date = new Date()
      return date.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $grey-dark;
  color: $white;
  p,
  strong {
    color: $white;
  }
  &__button {
    &--social {
      margin: 0px 8px;
      color: $white;
      &:hover,
      &:active,
      &:visited {
        color: transparentize($white, 0.5);
      }
    }
  }
  .container {
    justify-content: center;
    margin: 24px auto;
  }
}
</style>
