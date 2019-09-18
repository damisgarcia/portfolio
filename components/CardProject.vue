<template>
  <div class="project card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="`http://lorempixel.com/640/360/technics/${position}/`"
          :alt="project.title"
        />
      </figure>
      <div class="card-image__content">
        <h2 class="subtitle">{{ project.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  transition: opacity 0.6s calc(0.4s * var(--project-index)) linear;
  &--invisible {
    opacity: 0;
  }
  &::after {
    position: absolute;
    content: ' ';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparentize($color: $dark, $amount: 0.5);
    z-index: 1;
  }
  .card-image {
    &__content {
      position: absolute;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: $white;
      background-color: transparentize($color: $dark, $amount: 0.5);
      z-index: 3;
      .subtitle {
        color: $white;
        padding: 24px 0px;
        user-select: none;
      }
    }
  }
  &:hover {
    .card-image {
      &__content {
        background-color: transparentize($color: $dark, $amount: 0.9);
      }
    }
  }
}
</style>
