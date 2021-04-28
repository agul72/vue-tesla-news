<template>
  <div>
    <h1>Details</h1>
    <div
        class="details"
        v-if="news"
    >
      <h4>Title: {{ news.title }}</h4>
      <div>Source: {{ news.source.name }}</div>
      <div>Author: {{ news.author }}</div>
      <div>Description: {{ news.description }}</div>
      <div>
        <a v-bind:href=news.url target="_blank">Go to source</a>
      </div>
      <img v-bind:src=news.urlToImage alt="Empty">
      <div>Date: {{ news.publishedAt }}</div>
      <div>Content: {{ news.content }}</div>
    </div>
    <div v-else>
      <p>Please click any item</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
  props: {
    news: {
      type: Object,
      require: true
    }
  },
}
</script>

<style scoped>
img {
  max-width: 300px;
  max-height: 200px;
}

h1 {
  margin-top: 0;
}

.details {
  text-align: left;
}

.details > * {
  margin-bottom: .5rem;
}

</style>
