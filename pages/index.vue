<template>
  <div>
    <section id="about" class="section">
      <div class="section-body">
        <div class="container">
          <div class="title section__heading">Sobre</div>
          <div class="columns">
            <div class="column is-3">
              <figure class="media-center">
                <p class="image is-profile-picture">
                  <img :src="require('~/static/images/profile.jpg')" />
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
    <section id="portfolio" class="hero section is-light">
      <div class="section-body">
        <div class="container">
          <div class="title section__heading">Portfolio</div>
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
    <section id="findme" class="hero section is-primary is-primary-medium">
      <div class="section-body">
        <div class="container">
          <div class="title section__heading">Encontre-me</div>
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
import Skills from '~/components/Skills'
export default {
  name: 'HomePage',
  components: { Skills }
}
</script>
<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 110vh;
  min-height: 480px;
  justify-content: center !important;
  padding: 1rem 1.5rem;
  margin-top: 24px;
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
