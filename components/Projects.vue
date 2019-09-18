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
        "tags": ["Aplicativos"]
      },
      {
        "title": "Project 2",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "tags": ["Sites", "Aplicativos"]
      },
      {
        "title": "Project 3",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "tags": ["Sites"]
      },
      {
        "title": "Project 4",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "tags": ["Aplicativos"]
      },
      {
        "title": "Project 5",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "tags": ["Javascript"]
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
        "tags": ["Apps"]
      },
      {
        "title": "Project 2",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "tags": ["Websites", "Apps"]
      },
      {
        "title": "Project 3",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "tags": ["Websites"]
      },
      {
        "title": "Project 4",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "tags": ["Apps"]
      },
      {
        "title": "Project 5",
        "description": "Id ut in labore laborum eiusmod magna id veniam.",
        "tags": ["Javascript"]
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
      >
        <card-project :project="project" :position="`${project.id}`" />
      </div>
    </transition-group>
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
      tag: this.$t('all')
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
  methods: {
    setTag(tag) {
      this.tag = tag
    }
  }
}
</script>

<style lang="scss" scoped>
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
}
ul,
ul li {
  display: inline;
}

ul li {
  margin: 4px;
}

.button {
  text-transform: uppercase;
  border-radius: 0px;
}
</style>
