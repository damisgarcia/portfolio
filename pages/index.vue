<template>
  <div>
    <navbar />
    <section :id="getLinkId('homepage')">
      <hero />
    </section>
    <section :id="getLinkId('about')" class="section">
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
                Voluptate ut dolore sint anim mollit sit qui velit sit irure
                dolore cupidatat ullamco nostrud. Id velit in non est nulla et
                consequat.
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
    <section :id="getLinkId('portfolio')" class="hero section is-light">
      <div class="section-body">
        <div class="container">
          <div class="title section__heading">{{ $t('portfolio') }}</div>
          <projects />
        </div>
      </div>
    </section>
    <section
      :id="getLinkId('contact')"
      class="hero section is-primary is-primary-medium"
    >
      <div class="section-body">
        <div class="container">
          <div class="title section__heading">{{ $t('contact') }}</div>
          <p>
            Voluptate ut dolore sint anim mollit sit qui velit sit irure dolore
            cupidatat ullamco nostrud. Id velit in non est nulla et consequat.
            Occaecat ullamco aliqua reprehenderit mollit tempor esse irure
            incididunt id consequat duis. Nisi elit consectetur magna qui anim
            nulla do ullamco eu proident aliqua nostrud duis. Tempor sit eiusmod
            anim enim enim.
          </p>

          <p>
            Non mollit culpa ex deserunt amet mollit eu minim sit. Officia
            aliqua consectetur aliquip nisi magna qui. Elit voluptate laborum
            cupidatat dolore eiusmod pariatur reprehenderit ullamco minim eu
            reprehenderit aute magna ea. Nisi consequat reprehenderit velit
            cillum ea excepteur aute est. Eiusmod id anim est quis incididunt
            tempor exercitation laborum eiusmod qui voluptate. Magna ipsum
            cillum duis nostrud exercitation non magna cillum nostrud veniam
            esse quis velit. Aliquip pariatur tempor dolore eu ex aute consequat
            sit commodo veniam consectetur pariatur cupidatat duis.
          </p>

          <p>
            Officia sit id eiusmod occaecat pariatur est laborum adipisicing
            voluptate commodo magna reprehenderit. Nostrud ut velit ex aliquip
            ad proident ipsum. Nulla cupidatat voluptate ad et elit.
            Reprehenderit tempor ut enim enim minim do nostrud ut incididunt
            adipisicing enim labore. Incididunt duis eu fugiat et dolore ex.
            Fugiat labore Lorem labore cillum duis aliquip officia deserunt est
            in non cupidatat. Deserunt eu laboris officia excepteur velit eu
            elit quis proident voluptate qui amet ipsum.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import Navbar from '~/components/Navbar'
import Skills from '~/components/Skills'
import Projects from '~/components/Projects'
export default {
  name: 'HomePage',
  components: { Skills, Navbar, Hero, Projects },
  data() {
    return {
      profilePicture:
        'data:image/jpeg;base64,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'
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
  justify-content: center !important;
  padding: 1rem 3.5rem;
  p {
    margin: $block-spacing 0px;
  }
  &__heading {
    margin-bottom: 3.5rem !important;
  }
}
.is-profile-picture {
  max-width: 256px;
  margin: auto !important;
}
.profile-description {
  text-align: center;
}
</style>
