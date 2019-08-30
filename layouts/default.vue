<template>
  <div class="main">
    <navbar />
    <nuxt />
    <link-top />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import LinkTop from '@/components/LinkTop'

export default {
  components: {
    Navbar,
    LinkTop
  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/globals/_buefy.scss';
</style>
