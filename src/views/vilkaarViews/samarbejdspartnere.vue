<script setup>
import FooterItem from "../../components/FooterItem.vue";
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <div class="ct-section-inner-wrap">
    <div v-if="articleData">
      <span class="new-html-block___3_7NG">
        <h1 class="pad-header--m">{{ articleData.title }}</h1>
        <p v-html="articleData.body"></p>
        <div class="pad-header--m"><RouterLink to="/faq/service" class="buttons___3URuA"
        >Tryk her for at se alle vores servicecentre</RouterLink></div>
        <RouterLink class="buttons___3URuA" to="/quickleasing"
          ><button class="button-primary">
            Find din næste quickleasing bil
          </button></RouterLink
        >
      </span>

    </div>
  </div>
  <FooterItem />
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
      const ARTICLE_URL = import.meta.env.VITE_APP_ARTICLE_URL + "16";
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

<style scoped>
.markdown___35KUH  {
  color: var(--action)!important;
}
.markdown___35KUH a:visited {
  color: var(--action)!important;
}

</style>
