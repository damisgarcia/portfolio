<template>
  <footer class="footer">
    <div class="container is-flex">
      <b-button
        v-for="media in social"
        :key="media.icon"
        :href="media.href"
        :icon-right="media.icon"
        target="_blank"
        class="footer__button--social"
        size="is-large"
        tag="a"
      />
    </div>
    <div class="content has-text-centered">
      <p><strong>Damis Garcia</strong> ©2019</p>
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
          href: 'https://github.com'
        },
        {
          icon: 'linkedin-box',
          href: 'https://linkedin.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  &__button {
    &--social {
      margin: 0px 8px;
    }
  }
  .container {
    justify-content: center;
    margin: 24px auto;
  }
}
</style>
