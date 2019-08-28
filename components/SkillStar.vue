<template>
  <div>
    <b-icon :icon="icon(1)" size="is-big"> </b-icon>
    <b-icon :icon="icon(2)" size="is-big"> </b-icon>
    <b-icon :icon="icon(3)" size="is-big"> </b-icon>
    <b-icon :icon="icon(4)" size="is-big"> </b-icon>
    <b-icon :icon="icon(5)" size="is-big"> </b-icon>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number,
      default: 0
    }
  },
  methods: {
    icon(number) {
      return this.stars >= number ? 'star' : 'star-outline'
    }
  }
}
</script>

<style></style>
