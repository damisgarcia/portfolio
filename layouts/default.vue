<template>
  <div>
    <navbar />
    <no-ssr placeholder="Carregando....">
      <hero />
    </no-ssr>
    <section class="main-content columns">
      <nuxt />
    </section>
  </div>
</template>

<script>
import noSsr from 'vue-no-ssr'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default {
  components: {
    noSsr,
    Hero,
    Navbar
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
