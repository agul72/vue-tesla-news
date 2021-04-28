<template>
  <li @click="$emit('newsSelected')">
      {{ newsItem.title }}
  </li>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    newsItem: {
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {

  }
}
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  text-align: left;
}
</style>
