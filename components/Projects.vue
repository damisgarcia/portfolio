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
        <b-button type="is-dark" @click="setTag(__tag)">{{ __tag }}</b-button>
      </div>
    </div>
    <div class="columns is-multiline">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="column is-one-quarter"
      >
        <card-project :project="project" :index="index" />
      </div>
    </div>
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
      tag: null
    }
  },
  computed: {
    projects() {
      let projects = this.$t('projects')

      if (this.tag && this.tag !== this.$t('all')) {
        projects = filter(projects, (project) => {
          return values(project.tags).includes(this.tag)
        })
      }
      return projects
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
    margin: 16px 0px;
  }
  &__nav-item {
    display: inline-block;
    margin: 6px 8px;
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
