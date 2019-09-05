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
        "tags": ["Sites"]
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
        "tags": ["Websites"]
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
  <div>
    <ul>
      <li v-for="(__tag, index) in $t('tags')" :key="index">
        <button @click="setTag(tag)">{{ __tag }}</button>
      </li>
    </ul>
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <h2 class="title">{{ project.title }}</h2>
        <p class="subtitle">{{ project.description }}</p>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { filter, values } from 'lodash'
export default {
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
ul,
ul li {
  display: inline;
}

ul li {
  margin: 0px 4px;
}
</style>
