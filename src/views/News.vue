<template>
  <div >
    <h2>News</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <input type="text" v-model="filter" placeholder="Filter..."/>
    <Loader v-if="loading"/>
    <div
        class="row"
        v-else-if="filteredNews.length"
    >
      <div>
        <NewsList
            v-bind:news="filteredNews"
            @newsSelected="setSelectedNews"
        />
      </div>
      <div>
        <NewsDetail
            v-bind:news="selectedNews"
        />
      </div>
    </div>
    <p v-else>No news!</p>

  </div>
</template>

<script>
import NewsList from "../components/NewsList";
import Loader from "../components/Loader";
import {getNews} from "../services/http.service";
import NewsDetail from "@/components/NewsDetail";

export default {
  name: 'News',
  data() {
    return {
      news: [],
      selectedNews: null,
      loading: true,
      filter: ''
    }
  },
  async mounted() {
    this.news = await getNews();
    this.loading = false;
  },

  computed: {
    filteredNews() {
      const regex = this.filter.trim().toLowerCase();
      if (regex) {
        return this.news.filter(n => n.title.toLowerCase().includes(regex));
      }
      return this.news;
    },
  },

  methods: {
    setSelectedNews(index) {
      this.selectedNews = this.filteredNews[index];
    }
  },

  components: {
    NewsDetail,
    NewsList,
    Loader
  }
}
</script>

<style scoped>

.row {
  display: grid;
  column-gap: 20px;
  grid-template-columns: auto auto;
  margin: 1rem;
}

input {
  width: 90%;
  min-width: 300px;
  border: none;
  border-bottom: 1px solid aqua;
  margin: 1rem;
  font-size: 1.2rem;
  color: cadetblue;
}

</style>


