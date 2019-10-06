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
        "title": "Project 1",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/1",
        "tags": ["Aplicativos"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
        ]
      },
      {
        "title": "Project 2",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/2",
        "tags": ["Sites", "Aplicativos"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
        ]
      },
      {
        "title": "Project 3",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/3",
        "tags": ["Sites"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
        ]
      },
      {
        "title": "Project 4",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/4",
        "tags": ["Aplicativos"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
        ]
      },
      {
        "title": "Project 5",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/5",
        "tags": ["Javascript"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
        ]
      }
    ]
  },
  "en": {
    "all": "All",
    "tags": [
      "All",
      "Apps",
      "Websites",
      "Javascript"
    ],
    "projects": [
      {
        "title": "Project 1",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/1",
        "tags": ["Apps"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
        ]
      },
      {
        "title": "Project 2",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/2",
        "tags": ["Websites", "Apps"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
        ]
      },
      {
        "title": "Project 3",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/3",
        "tags": ["Websites"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
        ]
      },
      {
        "title": "Project 4",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/4",
        "tags": ["Apps"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
        ]
      },
      {
        "title": "Project 5",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "picture": "http://lorempixel.com/640/360/technics/5",
        "tags": ["Javascript"],
        "previews": [
          "http://lorempixel.com/640/360/technics/1",
          "http://lorempixel.com/640/360/technics/2",
          "http://lorempixel.com/640/360/technics/3"
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
                <img :src="pic" :alt="`Preview ${index}`" />
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
            {{ currentProject.description }}
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
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
    .VueCarousel-pagination--bottom-overlay {
      margin: 15px auto !important;
      .VueCarousel-dot-container {
        margin-top: 0px !important;
      }
      .VueCarousel-dot {
        margin-top: 0px !important;
      }
    }
  }
}
</style>
