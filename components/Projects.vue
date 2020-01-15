<i18n>
{
  "pt-br": {
    "all": "Todos",
    "tags": [
      "Todos",
      "Aplicativos",
      "Sites",
      "Javascript"
    ],
    "projects": [
      {
        "title": "Aedes em foco - Agente de Endemias",
        "description": "Aplicativo para auxiliar os agentes de endemias no controle das arboviroses",
        "picture": "ace/01.png",
        "tags": ["Aplicativos"],
        "previews": [
          "ace/01.png",
          "ace/02.png",
          "ace/03.png"
        ]
      },
      {
        "title": "Aedes em foco - Agente de Saúde",
        "description": "Aplicativo para auxiliar os agentes de saúde para mapeamento da população",
        "picture": "acs/01.png",
        "tags": ["Aplicativos"],
        "previews": [
          "acs/01.png",
          "acs/02.png",
          "acs/03.png"
        ]        
      },
      {
        "title": "FB Online",
        "description": "Website e Frontend da aplicação da plataforma de ensino a distância",
        "picture": "fbonline/01.png",
        "tags": ["Javascript", "Sites"],
        "previews": [
          "fbonline/01.png",
          "fbonline/02.png",
          "fbonline/03.png"
        ],
        "link": "https://www.fbonline.com.br/"
      },
      {
        "title": "Aedes em Foco",
        "description": "Website do programa Aedes em foco.",
        "picture": "aedesemfoco/01.png",
        "tags": ["Sites"],
        "previews": [
          "aedesemfoco/01.png"
        ],
        "link": "http://aedesemfoco.lme.ufc.br/"
      },
      {
        "title": "Luz do Saber - Fundamental",
        "description": "Arquito no desenvolvimento frontend do novo software de ensino do programa Luz do Saber versão fundamental",
        "picture": "luzdosaber/01.png",
        "tags": ["Javascript", "Sites"],
        "previews": [
          "luzdosaber/01.png"
        ]
      }
    ]
  }  
}
</i18n>

<template>
  <div class="projects">
    <div class="projects__nav">
      <div
        v-for="(__tag, index) in $t('tags')"
        :key="index"
        class="projects__nav-item"
      >
        <b-button
          :type="__tag === tag ? 'is-info' : 'is-dark'"
          tag="div"
          @click="setTag(__tag)"
          >{{ __tag }}</b-button
        >
      </div>
    </div>
    <transition-group name="project" mode="out-in" class="columns is-multiline">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="column is-one-quarter project"
        :style="{
          '--project-index': index
        }"
        @click="() => openCardModal(project)"
      >
        <card-project :project="project" :position="`${project.id}`" />
      </div>
    </transition-group>
    <b-modal
      :active.sync="isCardModalActive"
      :width="640"
      scroll="keep"
      @close="onCardModalClose"
    >
      <div v-if="currentProject" class="card">
        <div class="card-image">
          <carousel
            :per-page="1"
            :pagination-enabled="true"
            pagination-position="bottom-overlay"
          >
            <slide v-for="(pic, index) in currentProject.previews" :key="index">
              <picture class="image is-4by3">
                <img
                  :src="require(`../assets/images/${pic}`)"
                  :alt="`Preview ${index}`"
                />
              </picture>
            </slide>
          </carousel>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ currentProject.title }}</p>
            </div>
          </div>
          <div class="content">
            {{ currentProject.description }} <br />
            <a
              v-if="currentProject.link"
              :href="currentProject.link"
              target="_blank"
              >Visitar Página</a
            >
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { filter, values } from 'lodash'
import CardProject from './CardProject'

export default {
  components: {
    CardProject
  },
  data() {
    return {
      tag: '',
      currentProject: null,
      isCardModalActive: false
    }
  },
  computed: {
    projects() {
      const projects = values(this.$t('projects'))
      const result = projects.map((project, index) => {
        return { id: index, ...project }
      })

      if (this.tag && this.tag !== this.$t('all')) {
        return filter(result, (project) => {
          return values(project.tags).includes(this.tag)
        })
      }
      return result
    },
    renderPic() {
      return require
    }
  },
  created() {
    this.tag = this.$t('all')
  },
  methods: {
    setTag(tag) {
      this.tag = tag
    },
    openCardModal(project) {
      this.currentProject = project
      this.isCardModalActive = true
    },
    onCardModalClose() {
      this.currentProject = null
    }
  }
}
</script>

<style lang="scss">
.projects {
  .modal {
    .card .card-content {
      .media {
        margin-bottom: 0px !important;
      }
    }
  }
  &__nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 8px 0px 36px;
  }
  &__nav-item {
    display: inline-block;
    margin: 6px 8px;
    .button,
    span {
      &:hover,
      &:focus,
      &:visited,
      &:active {
        outline: none;
      }
    }
  }
  .project {
    &:hover,
    &:active {
      cursor: pointer;
      outline: none;
    }
  }
  .project-enter-active {
    transition: all 0.5s calc(0.2s * var(--project-index)) ease-in-out;
  }
  .project-leave-active {
    position: absolute;
  }
  .project-enter,
  .project-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .project-move {
    transition: transform 0.5s;
  }
  .card-image {
    &__content {
      .subtitle {
        font-size: 1.15rem;
        padding: 24px !important;
      }
    }
    .VueCarousel-pagination--bottom-overlay {
      margin: 15px auto 5px !important;
      .VueCarousel-dot-container {
        margin-top: 0px !important;
      }
      .VueCarousel-dot {
        margin-top: 0px !important;
        &.VueCarousel-dot--active {
          background-color: darken($info, 20) !important;
        }
      }
    }
  }
}
</style>
