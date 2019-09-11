<template>
  <div class="languanges is-flex">
    <div
      class="columns languanges__block--carousel"
      :style="{
        '--active-lang-index': activeLangIndex
      }"
    >
      <div
        v-for="(lang, index) in languanges"
        :key="lang.slug"
        class="column is-full is-mobile"
        :style="{ '--lang-index': index }"
      >
        <div class="container">
          <div
            class="columns lang__block is-gapless is-multiline"
            :class="{ active: index === activeLangIndex }"
          >
            <div class="column">
              <b-icon :icon="lang.icon" />
              <div class="title">
                {{ lang.items.join(' - ') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="languanges__nav">
      <div class="columns is-centered">
        <div
          v-for="(lang, index) in languanges"
          :key="lang.slug"
          class="languanges__nav-step"
          :class="{ active: index === activeLangIndex }"
          @click="onTapLangStep(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intervalId: null,
      activeLangIndex: 0,
      languanges: [
        {
          slug: 'react',
          icon: 'react',
          items: ['React', 'React Native', 'Redux', 'NextJS']
        },
        {
          slug: 'vue',
          icon: 'vuejs',
          items: ['Vuejs', 'Vuex', 'Nuxt']
        },
        {
          slug: 'backend',
          icon: 'console-network',
          items: ['Nodejs', 'Express', 'Ruby on Rails', 'Postgress', 'MySQL']
        },
        {
          slug: 'cloud-virtualization',
          icon: 'amazon-drive',
          items: ['AWS', 'Google Cloud', 'Docker']
        }
      ]
    }
  },
  created() {
    this.initializeCarousel()
  },
  methods: {
    onTapLangStep(index) {
      this.activeLangIndex = index
      this.initializeCarousel()
    },
    initializeCarousel() {
      if (this.intervalId) clearInterval(this.intervalId)
      this.intervalId = setInterval(() => {
        if (this.activeLangIndex === this.languanges.length - 1) {
          this.activeLangIndex = 0
        } else {
          this.activeLangIndex++
        }
      }, 3500)
    }
  }
}
</script>

<style lang="scss">
.languanges {
  position: relative;
  background-color: $white-ter;
  min-height: 360px;
  align-items: center;
  &__nav {
    position: absolute;
    height: 32px;
    bottom: 0px;
    left: 0;
    right: 0;
    .columns {
      align-items: center;
      height: 100%;
    }
    &-step {
      margin: 0px 4px;
      width: 48px;
      height: 2px;
      padding: 2px 0px;
      border-radius: 0.25rem;
      background-color: $grey-lighter;
      fill: $grey-lighter;
      &.active {
        background-color: $grey-light;
        fill: $grey-light;
      }
      &:hover,
      &:focus,
      &:active {
        cursor: pointer;
        outline: none;
      }
    }
  }
  &__block {
    position: relative;
    height: 100%;
    &--carousel {
      position: absolute;
      left: 0;
      right: 0;
      color: $dark;
      padding: 64px 0px;
      margin: auto;
      flex-wrap: nowrap;
      overflow: visible;
      transform: translateX(calc(-100% * var(--active-lang-index)));
      transition: transform 800ms cubic-bezier(0.08, 0.82, 0.17, 1);
      .lang {
        &__block {
          height: 100%;
          opacity: 0;
          transition: opacity 1s linear;
          transition-delay: 400ms;
          &.active {
            opacity: 1;
          }
          .column {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .icon {
            margin-right: 3rem;
            i::before {
              font-size: 64px;
            }
          }
        }
      }
    }
  }
}
</style>
