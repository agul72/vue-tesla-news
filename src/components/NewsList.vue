<template>
  <div>
    <ul>
      <NewsItem
          v-for="(newsItem, i) of news"
          v-bind:newsItem="newsItem"
          v-bind:key="i"
          v-bind:index="i"
          @newsSelected="$emit('newsSelected', i)"
      />
    </ul>
  </div>
</template>

<script>
import NewsItem from "./NewsItem";

export default {
  name: "NewsList",
  components: { NewsItem },
  props: ['news'],
  methods: {

  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
