<template>
  <div class="languanges is-flex">
    <div class="container-fluid">
      <div
        class="columns languanges__block--carousel"
        :style="{
          '--active-lang-index': activeLangIndex
        }"
      >
        <div
          v-for="(lang, index) in languanges"
          :key="lang.slug"
          class="column languanges__block--carousel__item"
          :class="{ active: index === activeLangIndex }"
        >
          <div class="title">
            <b-icon :icon="lang.icon" />
            {{ lang.items.join(' - ') }}
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
          items: ['Nodejs', 'Express', 'Ruby on Rails', 'PostgreSQL', 'MySQL']
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
      }, 5000)
    }
  }
}
</script>

<style lang="scss">
.languanges {
  position: relative;
  background-color: $white-ter;
  min-height: $languagues-height;
  align-items: center;
  overflow: hidden;
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
      color: $dark;
      padding: 86px 0px 64px;
      margin: auto;
      flex-wrap: nowrap;
      overflow: visible;
      transform: translateX(calc(-100% * var(--active-lang-index)));
      transition: transform 800ms cubic-bezier(0.08, 0.82, 0.17, 1);
      &__item {
        flex: none !important;
        width: 100%;
        opacity: 0;
        transition: opacity 1s linear;
        transition-delay: 400ms;
        text-align: center;
        &.active {
          opacity: 1;
        }
        .column {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .title {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon {
          margin-right: 2rem;
          i::before {
            font-size: 64px;
          }
        }
      }
    }
  }
}
@media (max-width: $tablet) {
  .languanges {
    height: $languagues-height-mobile;
    min-height: $languagues-height-mobile;
    &__nav {
      .columns {
        display: flex;
        flex-direction: row !important;
      }
    }
    &__block {
      width: 100%;
      &--carousel {
        display: flex;
        flex-direction: row !important;
        width: 100%;
        padding: 4px 0px;
        &__item {
          display: flex !important;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          flex: none !important;
          .icon {
            display: none;
          }
          .title {
            max-width: 70%;
            font-size: 21px;
          }
        }
      }
    }
  }
}
</style>
