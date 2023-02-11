<script setup>
import FooterItem from "../../components/FooterItem.vue";
</script>

<template>
  <div class="ct-section-inner-wrap">
    <div v-if="articleData">
      <span class="new-html-block___3_7NG">
        <h1 class="pad-header--m">{{ articleData.title }}</h1>
        <p v-html="articleData.body"></p>

        <RouterLink class="buttons___3URuA" to="/quickleasing"
          ><button class="button-primary">
            Find din næste quickleasing bil
          </button></RouterLink
        >
      </span>
    </div>
  </div>
  <footer-item />
</template>
<script>
export default {
  data() {
    return {
      articleData: null,
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const READER_API = import.meta.env.VITE_APP_READER_API;
      const ARTICLE_URL = import.meta.env.VITE_APP_ARTICLE_URL + "14";
      const response = await fetch(ARTICLE_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${READER_API}`,
        },
      });
      const data = await response.json();
      this.articleData = data.data;
    },
  },
};
</script>

<style scoped></style>
