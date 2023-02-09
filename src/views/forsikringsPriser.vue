<script setup>
import FooterItem from "../components/FooterItem.vue";
</script>
<template>
  <div>
    <div class="pad-section--l center--all owl--l" v-if="articleData">
      <h1>{{ articleData.title }}</h1>
      <div class="directus_table" v-html="articleData.body"></div>

    </div>
  </div>
  <footer-item />
</template>
<script>
export default {
  data() {
    return {
      articleData: null
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const READER_API = import.meta.env.VITE_APP_READER_API
      const ARTICLE_URL = import.meta.env.VITE_APP_ARTICLE_URL + "9"
      const response = await fetch(ARTICLE_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${READER_API}`
        }
      });
      const data = await response.json();
      this.articleData = data.data;
    }
  }
};
</script>
<style>
@media (min-width: 1024px) {
  .privatlivspolitik {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

/* Design a awesome table  */
.directus_table table {
  border-collapse: collapse;
  width: 100%!important;
}

.directus_table th, .directus_table td {
  text-align: center;
  padding: 8px;
}

.directus_table tr:nth-child(even) {
  background-color: #f2f2f2
}

.directus_table tr:nth-last-child(1) {
  font-weight: bold;
}




</style>
  