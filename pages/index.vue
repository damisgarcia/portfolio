<i18n>
{
  "pt-br": {
    "about": "Arquiteto de Sistemas Web com mais de 4 anos de experiência, apaixonado por Javascript e Mobile"
  }
}
</i18n>
<template>
  <div>
    <navbar />
    <section :id="getLinkId('homepage')">
      <hero />
    </section>
    <section :id="getLinkId('about')" class="section section--about">
      <div class="section-body">
        <div class="container">
          <div class="title section__heading">{{ $t('about') }}</div>
          <div class="columns">
            <div class="column is-3">
              <figure class="media-center">
                <p class="image is-profile-picture">
                  <!-- <img :src="require('~/static/images/profile.jpg')" /> -->
                  <img :src="profilePicture" />
                </p>
              </figure>
              <p class="profile-description">
                {{ $t('about') }}
              </p>
            </div>
            <div class="column is-9">
              <div class="container">
                <skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <languanges />
    <section :id="getLinkId('portfolio')" class="section">
      <div class="section-body">
        <div class="container">
          <div class="title section__heading">{{ $t('portfolio') }}</div>
          <projects />
        </div>
      </div>
    </section>
    <footer-contact :id="getLinkId('contact')" />
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import Navbar from '~/components/Navbar'
import Skills from '~/components/Skills'
import Projects from '~/components/Projects'
import Languanges from '~/components/Languanges'
import FooterContact from '~/components/FooterContact'

export default {
  name: 'HomePage',
  components: { Skills, Navbar, Hero, Languanges, Projects, FooterContact },
  data() {
    return {
      profilePicture: require('~/assets/images/profile.jpeg')
    }
  },
  methods: {
    getLinkId(link) {
      return this.$t(link).toLowerCase()
    }
  }
}
</script>
<style lang="scss">
.section {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  justify-content: flex-start !important;
  padding: 1rem 3.5rem;
  &__heading {
    margin: 3.5rem auto;
    text-align: center;
  }
  &--about {
    min-height: calc(100vh - #{$languagues-height});
  }
  p {
    margin: $block-spacing 0px;
  }
}

.is-profile-picture {
  max-width: 256px;
  margin: auto !important;
}
.profile-description {
  text-align: center;
}

@media (max-width: $tablet) {
  .section {
    padding: 3.5rem 1.75rem;
  }
  .profile-description {
    text-align: left;
  }
}
</style>
